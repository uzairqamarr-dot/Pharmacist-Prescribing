# Push is failing — and it isn't your credentials

## What's actually happening

```
ssh: connect to host github.com port 22: Operation timed out
```

Your SSH key is fine and the repo is fine. **Outbound port 22 is being blocked**,
so git can't reach GitHub at all. Autopush reports this as "check credentials"
because that's the generic message it prints on any push failure — the message is
misleading, the log line above is the truth.

Usually this means one of: a network that blocks SSH (hospital, hotel, café, some
corporate and university wifi), a VPN, or a firewall change. If you were pushing
fine yesterday and haven't touched any settings, suspect the network you're on.

**Nothing is lost.** Three commits are sitting locally, committed and safe. They'll
all go up the moment a push succeeds.

## The fix — one file, keeps your existing key

GitHub also accepts SSH on **port 443**, which almost nothing blocks. Paste this
into Terminal:

```
mkdir -p ~/.ssh && cat >> ~/.ssh/config <<'EOF'

Host github.com
  Hostname ssh.github.com
  Port 443
  User git
EOF
```

Then test it:

```
ssh -T git@github.com
```

You want: `Hi uzairqamarr-dot! You've successfully authenticated...`

Then push the backlog:

```
cd ~/Pharmacist-Prescribing && git push
```

That's it. Autopush will work normally again afterwards — same key, same remote,
just a port that isn't blocked.

## If that still fails

Try a different network first — tether to your phone for one push. If it works on
mobile data, it's definitively the wifi you were on, and the config above is the
permanent fix.

## Why not switch to HTTPS?

You could, but it means creating a personal access token and storing it. The
port-443 change keeps your existing SSH key and takes one command. Do that first.

---

## What's waiting to go up

**v2026.09.07a** — 310 cards, 148 questions (was 252 / 128).

From your colleague's three PDFs:

- **Weight management** went from 4 cards to 19 — the app's weakest topic. BMI and
  waist bands, waist-to-height, the 5As, RED/LED/VLED, the pharmacotherapy table
  with stopping rules, NHMRC bariatric criteria, red flags, screening tools.
- **Lipids** +12 — statin intensity table, the 80% rule, stop thresholds and
  rechallenge, interactions, secondary causes, emerging agents.
- **Diabetes** +14 — diagnostic thresholds, the HbA1c unit trap, when not to trust
  an HbA1c, drug-class table, GLP-1 regimens, sick days, Annual Cycle of Care.
- **Renal reasoning** +7 — the triple whammy explained mechanistically, urea:creatinine,
  the expected SGLT2i eGFR dip, NSAID–methotrexate, clopidogrel–PPI.
- **Hypertension** +9 — BP grades, out-of-clinic thresholds, cuff size, inter-arm
  difference, auscultation areas, dihydropyridine oedema, emergency vs urgency.

**Four cards contradicted the Queensland protocols already in the app** and were
corrected before shipping — see the session notes in CLAUDE.md.
