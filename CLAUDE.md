# Prescribing Study — phone app

Offline revision app for the Graduate Certificate in Pharmacist Prescribing
and Advanced Practice (University of Newcastle). Semester 2, 2026:
PHAR6202 Advanced Clinical Decision Making + PHAR6302 Chronic and Complex
Conditions.

Hosted on GitHub Pages. Used on a phone, added to the home screen, often
with no signal.

## The one file

`index.html` is the entire app — HTML, CSS, JS and all content in a single
self-contained file. This is deliberate.

- No build step. No bundler. No npm. No external requests of any kind.
- No CDN links, no web fonts, no analytics. It must work fully offline.
- Vanilla ES5-flavoured JS in one IIFE. No frameworks.
- Styling uses CSS custom properties defined in `:root`. Do not introduce
  Tailwind or any utility-class framework.

If a change would require a build step or a network request, it is the
wrong change.

## Data shape

All content lives in `window.__DATA__` on a single line near the end of the
file. Structure:

```
{
  s1:     { conds: [...], cards: [...], mcq: [...] },   // Semester 1, acute
  s2:     { conds: [...], cards: [...], mcq: [...] },   // Semester 2, chronic
  corpus: [ { c, s, t }, ... ]                          // offline search text
}
```

- `conds`: `{ id, name, tag, body }` — `body` is an HTML string rendered
  directly into the topic pane.
- `cards`: `[condId, questionHTML, answerHTML]`
- `mcq`: `[condId, questionHTML, [options], correctIndex, explanationHTML]`
- `corpus`: `{ c: condId, s: sourceLabel, t: plainText }` — chunks of the
  QLD protocols. Cards, questions and topic bodies are indexed automatically
  at load time, so they do not need corpus entries.

## Progress persistence — handle with care

Progress is stored in `localStorage` under `phar-phone-v1` as
`{ box, mcq, sem }`, keyed by array **index**: `"s2:14"`.

**Reordering or removing entries in `cards` or `mcq` silently corrupts saved
progress**, because index 14 will now be a different card. When changing
content:

- Append new cards and questions to the end of their array.
- Do not reorder existing entries.
- If entries must be removed or reordered, say so explicitly in the commit
  message and warn me, so I can export progress from the Progress tab first.

Never change the `phar-phone-v1` key. Never switch to `sessionStorage`.

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

## Known gaps

- Semester 2 is thin relative to its exam weighting. COPD is the weakest
  (7 cards, 4 questions vs 14/5 for asthma).
- The MCQ pane walks in fixed order and shows previous answers on a second
  pass rather than re-testing. Options are not shuffled.
- Sem 1 topic notes are indexed for search but the Sem 1 source documents
  themselves are not in the corpus.

## Working style

- Brief and direct. Skip the preamble, don't ask clarifying questions you
  can answer by reading the file.
- Make the change, then commit and push unless I say otherwise. GitHub Pages
  redeploys on push; give me a minute before I reload on the phone.
- Keep commit messages short and factual, e.g. "add 18 COPD flashcards".
- After content changes, tell me the new per-condition card and question
  counts so I can see coverage at a glance.
