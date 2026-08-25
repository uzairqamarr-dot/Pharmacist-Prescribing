#!/bin/bash
# Auto-push for the Prescribing app.
#
# Watches for changes made to this repo and pushes them to GitHub, which
# redeploys Pages, which makes the phone offer "Update ready".
#
# Installed as a launchd agent by install-autopush.sh — you should never need
# to run this by hand.

REPO="$HOME/Pharmacist-Prescribing"
LOG="$REPO/.autopush.log"
cd "$REPO" || exit 0

say(){ echo "$(date '+%Y-%m-%d %H:%M:%S')  $*" >> "$LOG"; }

# Debounce: a batch of edits arrives as many separate file events. Wait for
# things to go quiet so we make one commit, not fifteen.
sleep 25

# Another instance already running? Let it do the work.
# mkdir is atomic and exists everywhere — macOS has no flock.
LOCKDIR="$REPO/.autopush.lockdir"
if ! mkdir "$LOCKDIR" 2>/dev/null; then
  # Stale lock from a crashed run? Anything older than 5 minutes is dead.
  if [ -n "$(find "$LOCKDIR" -maxdepth 0 -mmin +5 2>/dev/null)" ]; then
    rmdir "$LOCKDIR" 2>/dev/null; mkdir "$LOCKDIR" 2>/dev/null || exit 0
  else
    say "another run in progress, skipping"; exit 0
  fi
fi
trap 'rmdir "$LOCKDIR" 2>/dev/null' EXIT

# Stale index.lock files get left behind by sandboxed tooling and block
# everything downstream. Clearing one is safe when no git process is running,
# and we hold our own lock above, so nothing of ours is mid-write.
if [ -f .git/index.lock ] && ! pgrep -x git >/dev/null 2>&1; then
  rm -f .git/index.lock && say "cleared a stale .git/index.lock"
fi
rm -f .git/objects/*/tmp_obj_* 2>/dev/null

# Nothing to do?
if [ -z "$(git status --porcelain)" ]; then
  say "no changes"
  exit 0
fi

# Name the commit after the version, so history stays readable.
#
# Read it from sw.js, not index.html. The VERSION constant is a stable, machine
# readable line; the header markup is presentation and has already changed shape
# once (span -> button), which silently broke this grep and misnamed two commits.
VER=$(sed -n 's/.*VERSION[[:space:]]*=[[:space:]]*"\([^"]*\)".*/\1/p' sw.js 2>/dev/null | head -1)
[ -z "$VER" ] && VER=$(date '+v%Y.%m.%d')
FILES=$(git status --porcelain | awk '{print $2}' | tr '\n' ' ')

git add -A                     >> "$LOG" 2>&1 || { say "git add FAILED";    exit 1; }
git commit -m "update $VER"    >> "$LOG" 2>&1 || { say "git commit FAILED"; exit 1; }
git push                       >> "$LOG" 2>&1 || { say "git push FAILED — check credentials"; exit 1; }

say "pushed $VER  [$FILES]"

# Desktop notification so you know it went out without checking anything.
osascript -e "display notification \"$VER is live — open the app and tap Update ready\" with title \"Prescribing app pushed\"" 2>/dev/null

# Keep the log from growing forever.
tail -n 400 "$LOG" > "$LOG.tmp" 2>/dev/null && mv "$LOG.tmp" "$LOG"
exit 0
