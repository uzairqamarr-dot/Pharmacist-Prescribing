# Pharmacist Prescribing — study & semester app

Offline revision app for the Graduate Certificate in Pharmacist Prescribing and
Advanced Practice (UoN), Semester 2 2026.

**Live:** https://uzairqamarr-dot.github.io/Pharmacist-Prescribing/

## Publishing

Push to `main`. GitHub Pages redeploys automatically, usually within a minute.

```
git add -A && git commit -m "..." && git push
```

There is no build step and nothing to upload by hand.

## On the phone

Open the live URL in Chrome, then **⋮ → Add to Home screen**. It installs as a
standalone app and works with no signal.

When a new build is pushed, the app shows an **"Update ready"** button at the
bottom instead of reloading mid-question. Tap it to switch to the new version.
The build number is shown top-right on desktop for checking which version a
device is actually on.

## Storage

Progress saves per device — phone and desktop keep separate progress. Use the
export/import boxes in the app to move it across, and export occasionally as a
backup: clearing browser data wipes it, and nothing else holds a copy.

Nothing personal is stored in this repo. Marks and the portfolio log live only
in the browser on each device.

## Files

| File | What it is |
|---|---|
| `index.html` | Shell — header, Study/Semester toggle, loads the two panes |
| `study.html` | Study app — flashcards, MCQ, topics, offline search |
| `sem.html` | Semester dashboard — dates, assessments, grades, WIL log |
| `sw.js` | Service worker — offline cache |
| `manifest.webmanifest` | Home-screen install metadata |

`study.html` and `sem.html` are standalone documents and can be opened directly
in a browser while working on them.

See `CLAUDE.md` for content structure and the rules about editing card arrays.
