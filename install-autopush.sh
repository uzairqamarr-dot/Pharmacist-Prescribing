#!/bin/bash
# Run this ONCE. After that, every change to the app pushes itself.
#
#   cd ~/Pharmacist-Prescribing && bash install-autopush.sh
#
# To switch it off later:  bash install-autopush.sh --off

REPO="$HOME/Pharmacist-Prescribing"
PLIST="$HOME/Library/LaunchAgents/com.uzair.prescribing-autopush.plist"
LABEL="com.uzair.prescribing-autopush"

if [ "$1" = "--off" ]; then
  launchctl bootout "gui/$(id -u)/$LABEL" 2>/dev/null || launchctl unload "$PLIST" 2>/dev/null
  rm -f "$PLIST"
  echo "Auto-push is OFF. Push by hand with:"
  echo "  cd ~/Pharmacist-Prescribing && rm -f .git/index.lock && git add -A && git commit -m msg && git push"
  exit 0
fi

chmod +x "$REPO/autopush.sh"
mkdir -p "$HOME/Library/LaunchAgents"

cat > "$PLIST" <<PLISTEOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>$LABEL</string>
  <key>ProgramArguments</key>
  <array>
    <string>/bin/bash</string>
    <string>$REPO/autopush.sh</string>
  </array>
  <!-- Fires when any of these change. study.html is where the content lives. -->
  <key>WatchPaths</key>
  <array>
    <string>$REPO/study.html</string>
    <string>$REPO/sem.html</string>
    <string>$REPO/index.html</string>
    <string>$REPO/sw.js</string>
  </array>
  <!-- And a safety net every 10 minutes, in case a file event is missed. -->
  <key>StartInterval</key><integer>600</integer>
  <key>RunAtLoad</key><false/>
  <key>StandardErrorPath</key><string>$REPO/.autopush.err</string>
</dict>
</plist>
PLISTEOF

launchctl bootout "gui/$(id -u)/$LABEL" 2>/dev/null
launchctl bootstrap "gui/$(id -u)" "$PLIST" 2>/dev/null || launchctl load "$PLIST"

echo
echo "Auto-push is ON."
echo
echo "  From now on, when the app files change they commit and push themselves"
echo "  about 25 seconds later. You'll get a desktop notification when it lands."
echo
echo "  Watch it work:   tail -f ~/Pharmacist-Prescribing/.autopush.log"
echo "  Turn it off:     bash install-autopush.sh --off"
echo
echo "Testing it now — this should push within a minute..."
touch "$REPO/study.html"
