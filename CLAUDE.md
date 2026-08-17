# Prescribing Study — phone app

Offline revision app for the Graduate Certificate in Pharmacist Prescribing
and Advanced Practice (University of Newcastle). Semester 2, 2026:
PHAR6202 Advanced Clinical Decision Making + PHAR6302 Chronic and Complex
Conditions.

Hosted on GitHub Pages at
https://uzairqamarr-dot.github.io/Pharmacist-Prescribing/ — added to the phone
home screen, used often with no signal.

## Layout

Four files at the repo root. No build step, no bundler, no npm.

| File | What it is |
|---|---|
| `index.html` | Shell: header, Study/Semester toggle, two iframes, SW registration |
| `study.html` | The study app — flashcards, MCQ, topics, search |
| `sem.html` | The semester dashboard — dates, assessments, grades, WIL log |
| `sw.js` | Service worker, offline cache |

The shell loads the two panes into iframes via `src`, lazily on first view.
Each pane is a complete standalone HTML document and can be opened directly in
a browser on its own, which is the easiest way to work on one.

- No CDN links, no web fonts, no analytics, no external requests of any kind.
- Vanilla ES5-flavoured JS. No frameworks.
- Styling uses CSS custom properties defined in `:root`. Do not introduce
  Tailwind or any utility-class framework.

If a change would require a build step or a network request, it is the wrong
change.

**History note:** the panes used to be base64 blobs inside a single file,
inlined via `srcdoc`. That was a Netlify Drop workaround and is gone. Do not
reintroduce it — it made every content change a 1.2 MB single-line diff.

## Bump the version on every change

Two places, and they must match:

- `index.html` — the `<span class="ver">` in the header
- `sw.js` — the `VERSION` constant

The version shows top-right on desktop, so the phone can be checked against
the build that was pushed. `sw.js` keys its cache on `VERSION`, so if it is
not bumped, phones keep serving the old cached build and the change appears
not to have deployed.

## Data shape

All content lives in `study.html`. It is assembled near the end of the data
section:

```js
var DATA={
  s2:{conds:S2_CONDS, cards:S2_CARDS.concat(COURSE_CARDS), mcq:S2_MCQ.concat(COURSE_MCQ), osce:S2_OSCE},
  s1:{conds:S1.conds, cards:S1.cards, mcq:S1.mcq, osce:S1_OSCE}
};
```

- Semester 1 arrives as one JSON blob, `window.__SEM1__`, with
  `{conds, cards, mcq, osce}`.
- Semester 2 is built from the literal arrays `S2_CONDS`, `S2_CARDS`,
  `S2_MCQ`, `S2_OSCE`, plus `COURSE_CARDS` / `COURSE_MCQ` which hold the
  lecture-derived hypertension and asthma material.
- `window.__CORPUS__` is the offline search text: `{c, s, t}` — condition id,
  source label, plain text. Cards, questions and topic bodies are indexed
  automatically at load, so they need no corpus entry.

Element shapes:

- `conds`: `{ id, name, tag, body }` — `body` is an HTML string rendered
  directly into the topic pane.
- `cards`: `[condId, questionHTML, answerHTML]`
- `mcq`: `[condId, questionHTML, [options], correctIndex, explanationHTML]`

## Progress persistence — handle with care

Progress lives in `localStorage`, keyed by **origin**, so moving files around
the repo is safe. The keys:

| Key | Owner | Holds |
|---|---|---|
| `phar-hub-v1` | `study.html` | `{box, mcq, osce, exams, days, sem}` |
| `phar-sem2-2026-v2` | `sem.html` | dates, assessments, grades, WIL log (migrates from `-v1`) |
| `phar-merged-view` | `index.html` | last active tab |

Study progress is keyed by array **index**, namespaced per semester:
`"s2:14"`.

**Reordering or removing entries in `cards` or `mcq` silently corrupts saved
progress**, because index 14 will now be a different card. When changing
content:

- Append new cards and questions to the end of their array.
- Do not reorder existing entries.
- If entries must be removed or reordered, say so explicitly in the commit
  message and warn me, so I can export progress from the Progress tab first.

Never rename these keys. Never switch to `sessionStorage`.

## Clinical content

Content comes from my own course materials and the Queensland pilot clinical
protocols. **Do not invent clinical content, doses, thresholds or referral
criteria.** If a fact is not in a source I have provided, ask me for the
source rather than filling the gap from general knowledge.

Australian spelling and conventions throughout: mmol/L, mg, "paracetamol",
"faeces", "oedema", TGA/PBS terminology.

Note the April 2026 protocol changes — some eligibility criteria were
revised (e.g. well-controlled asthma and mild COPD are now eligible). The
changes summary is in the corpus under "Updates Apr 2026". Prefer current
criteria over anything older.

## Coverage as at v2026.08.18g

Semester 1 — 20 conditions, 143 cards, 91 MCQ, 0 OSCE.

Semester 2 — 5 conditions:

| Condition | Cards | MCQ | Corpus chunks |
|---|---|---|---|
| htn | 54 | 27 | 57 |
| asthma | 22 | 10 | 68 |
| lipid | 10 | 5 | 36 |
| bgl | 9 | 5 | 45 |
| copd | 7 | 4 | 55 |

## Known gaps

- COPD is by far the weakest at 7 cards / 4 questions, against 54 / 27 for
  hypertension — despite having 55 corpus chunks of source material sitting
  there unused. This is the obvious next thing to fix.
- Semester 1 has no OSCE entries (`osce: []`), while Semester 2 has 4.
- The MCQ pane walks in fixed order and shows previous answers on a second
  pass rather than re-testing. Options are not shuffled.
- Sem 1 topic notes are indexed for search but the Sem 1 source documents
  themselves are not in the corpus.

## Working style

- Brief and direct. Skip the preamble, don't ask clarifying questions you
  can answer by reading the file.
- Make the change, bump both version strings, then commit and push unless I
  say otherwise. GitHub Pages redeploys on push, usually under a minute; the
  phone then shows an "Update ready" button rather than reloading under me.
- Keep commit messages short and factual, e.g. "add 18 COPD flashcards".
- After content changes, tell me the new per-condition card and question
  counts so I can see coverage at a glance.
