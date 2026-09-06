# Rebuilding the app on Kimi

## How to use this

You have two files:

1. **`KIMI-BUILD-PROMPT.md`** (this one) — paste the section between the `=====`
   markers into Kimi as your first message.
2. **`prescribing-data.js`** (2.0 MB) — the entire dataset. **Do not paste this into
   the chat.** Attach it as a file if Kimi accepts uploads; otherwise build the shell
   first and merge the data locally, using the instructions at the bottom of this file.

**Why not paste the data.** It's roughly 500,000 tokens. Even on a long-context model
that's slow, expensive, and — the real risk — an LLM that has your clinical content in
its context window will "helpfully" reformat, summarise or correct it. Every threshold
in there was verified against a primary source. A model rewriting `≥180 systolic and/or
≥110 diastolic` into `≥180/110` has just introduced a clinical error into your revision
material. Keep the data out of reach of the model.

---

=====  PASTE FROM HERE  =====

I want you to build an offline-first study web app. I already have the entire dataset
in a file called `prescribing-data.js` — you are building the application around it, not
generating any content.

## Absolute rules — these override anything else

1. **Never invent, alter, summarise, "correct" or regenerate any clinical content.** All
   clinical material comes from my own university course materials and the Queensland
   pilot prescribing protocols. If something looks wrong to you, leave it and tell me —
   do not fix it. Inventing a dose, a threshold or a referral criterion is a
   patient-safety error.
2. **Progress is stored by array index.** A saved result for card 14 means "whatever card
   sits at index 14". Never reorder, insert into, deduplicate or sort the content arrays.
   New material is appended to the end only.
3. **No build step, no bundler, no npm, no CDN, no web fonts, no analytics, no external
   network requests of any kind.** The finished app must work fully offline on a phone
   with no signal. Plain HTML, CSS and vanilla ES5-flavoured JavaScript.
4. **Single self-contained HTML file** plus a service worker, plus the data file. It must
   run by opening the HTML directly, and be deployable to GitHub Pages by copying files.
5. Australian conventions throughout: mmol/L, mg, "paracetamol", "oedema", "faeces",
   TGA/PBS terminology, DD/MM dates.

## What this is

A revision app for a postgraduate pharmacist-prescribing qualification (University of
Newcastle, Graduate Certificate in Pharmacist Prescribing and Advanced Practice). Two
concurrent courses:

- **PHAR6302** — chronic and complex conditions: hypertension, lipids, blood glucose,
  asthma, COPD, smoking cessation, weight management
- **PHAR6202** — professional practice: ethics, communication, clinical reasoning,
  patient safety

Assessment is by MCQ quizzes, written assignments, a **closed-book oral viva**, and a
**multi-station OSCE**. The app has to prepare for all of them.

I have ADHD and anxiety. That is a design constraint, not a footnote — see the design
principles below.

## The data file

`prescribing-data.js` defines these globals. Load it with a plain `<script src>` before
your app script.

```
CVD_SHARED, CVD_OUT   shared HTML strings interpolated into topic bodies
CRS_LABEL, TOPIC_CRS  which course each topic belongs to
THEMES                question theme classifier
S2_CONDS              11 topics: {id, name, tag, body}  body is raw HTML
S2_CARDS, COURSE_CARDS    concat these two → 252 cards
                          [condId, questionHTML, answerHTML]
S2_MCQ, COURSE_MCQ        concat these two → 128 questions
                          [condId, questionHTML, [options], correctIndex, explanationHTML]
S2_OSCE, S1_OSCE      OSCE stations {id, title, cond, time, brief, marks:[string]}
VIVA                  26 spoken prompts [condId, prompt, modelAnswerHTML]
BRIEFS                per-topic must-know summary
                      {condId: {mins, src, pts:[[heading, html]]}}
PACKS                 per-condition prescribing pack {condId: {out, refer, rx,
                      rxnote, checks, nonrx, self, counsel, safety, review}}
EXAMS                 11 physical examination walkthroughs, 171 steps
VITALS                vital sign reference, adult + paediatric
ANAT                  anatomy identification items
WEEKS                 week-by-week course content
PLAN                  9 assessments broken into dated steps
EVENTS                tutorials, quizzes, intensives, viva, OSCE
SUGS, STOP            search suggestions, stopword list
window.__SEM1__       {conds, cards, mcq, osce} — Semester 1, same shapes
window.__CORPUS__     [{c, s, t}] — 1208 chunks of offline search text
```

Assemble at load:

```js
var DATA = {
  s2: {conds:S2_CONDS, cards:S2_CARDS.concat(COURSE_CARDS),
       mcq:S2_MCQ.concat(COURSE_MCQ), osce:S2_OSCE},
  s1: {conds:window.__SEM1__.conds, cards:window.__SEM1__.cards,
       mcq:window.__SEM1__.mcq, osce:S1_OSCE}
};
```

**Escaping — get this right or the app prints literal tags.** Topic bodies, card
answers, MCQ explanations, BRIEFS and PACKS are **raw HTML, inject unescaped**. PLAN
`why`/`flag`/step text and EVENTS `note` are **plain text, escape them**.

## Design principles — these decide the arguments

- **Teach before testing.** Never present a question on material the app hasn't offered
  to teach first.
- **One next action.** The home screen shows *the single thing to do now*, not a menu of
  options. Choosing between six study modes is itself the obstacle.
- **Prioritise by what is due soonest**, computed from EVENTS and PLAN, not by topic
  order.
- **Small startable chunks.** Every action carries a realistic minute estimate. Nothing
  should look like it needs an hour.
- **No shame.** Never "you haven't studied in 4 days", never streak-breaking, never red
  warnings about neglect. Missing a day is not a failure state.
- **Recognition is not competence.** The app must make me *produce* answers aloud and
  under time, not just recognise them in a list. This is why the viva and OSCE modes
  exist.
- **Honesty over encouragement.** If progress bars measure recognition only, say so.

## Screens to build

**Home** — the single next action, prominent, one tap to start. Below it: the nearest
deadline with days remaining, and readiness for the topics that deadline covers. Nothing
else competing for attention.

**Learn** — a guided session per topic: Read the brief → Recall (flashcards) → Test
(MCQs) → Fix (anything missed repeats until correct). Roughly 15 minutes.

**Plan** — the 9 assessments from PLAN, each broken into dated steps with minute
estimates and tickable completion.

**Course** — week-by-week content from WEEKS.

**Cram sheet** — dense printable revision, including the VITALS reference.

**Exams & Vitals** — the EXAMS walkthroughs. Each step pairs *what you do* with *what you
say out loud*, because OSCEs mark both. Filter by semester.

**Topics** — the 11 topic bodies, plus the per-condition prescribing PACKS.

**Flashcards** — Leitner spaced repetition, 5 boxes, intervals `[0,0,1,3,8,21]` days.

**MCQs** — filter by topic and by theme.

**Exam** — timed mock paper, self-scored.

**Anatomy** — identification drill from ANAT.

**Say it out loud** — the viva trainer. Show a prompt, I answer *aloud*, then reveal a
model answer and self-rate: "not really" / "partly" / "nailed it". Deliberately
uncomfortable. The model answer must stay hidden until I've committed.

**OSCE** — station brief only, wall-clock timer, **mark scheme hidden until I finish**.
Then I tick what I actually said, and it scores me — listing safety-critical misses
(eligibility, alarm features, referral, monitoring, consent) *separately* from the
percentage, because a high score with a missed red flag is still a failed station. Do not
assert a pass mark; my course doesn't publish one.

**Progress** — box distribution, accuracy, per-topic coverage, export/import as JSON.
Include an honesty panel stating plainly that these numbers measure recognition, and
showing how many viva prompts and timed OSCE stations I've actually done.

**Search** — offline, over `__CORPUS__`.

## Technical requirements

- **Persistence:** one localStorage key, `phar-hub-v1`, holding
  `{box, mcq, osce, osceRuns, exams, days, sem, steps, right, read, viva}`.
  Any code that rebuilds this object from scratch **must include every key** — omitting
  one has bricked tabs before.
- **`box` entries are objects** `{b, due, seen}`, never bare numbers. Include a
  repair-on-load that coerces bad shapes.
- **Progress keys are namespaced by semester**: `"s2:14"`, `"s1:14"`.
- **Semester switcher** between Semester 1 and Semester 2. Switching must re-render the
  pane I'm currently looking at — route tab clicks and the semester switch through **one**
  dispatcher function, not two hand-written lists that drift apart.
- **All timers read wall-clock time** (`Date.now()`), never a decrementing counter. A
  locked phone freezes `setInterval` and silently gifts extra minutes on a timed station.
- **Service worker** caching everything, keyed on a VERSION constant. A new build must
  surface as an "Update ready" button rather than reloading under me mid-question.
- **The version string must be visible on mobile**, and tappable to force an update check
  — it's the only way to tell what build the phone is running.
- Mobile-first, one-handed, large tap targets, respects `prefers-color-scheme`.
- Sidebar navigation on desktop; on narrow screens it must collapse to something usable,
  never disappear entirely.

## How to work

Build it in stages and let me test each: shell and navigation → data loading and topics →
flashcards and MCQs → Learn → Plan and Home → viva and OSCE → service worker.

After any content change, tell me the per-topic card and question counts.

Ask me before inventing anything. If the data doesn't contain something you think the app
needs, say so rather than filling the gap.

=====  PASTE TO HERE  =====

---

## Merging the data if Kimi can't take file uploads

Have Kimi build the shell against a small sample dataset in the documented shapes. Then
locally:

1. Save Kimi's output as `study-new.html`.
2. Make sure it loads the data with `<script src="prescribing-data.js"></script>` before
   its own script block, and that it does **not** define any of the globals itself.
3. Put `prescribing-data.js` beside it.
4. Open it in a browser. Check the counts: **11 topics, 252 cards, 128 questions, 10 OSCE
   stations, 26 viva prompts, 11 examinations, 1208 corpus chunks.** If any number is
   short, the merge is wrong — don't proceed.

To inline the data into a single file instead, replace the `<script src>` line with the
file's contents wrapped in `<script>` tags. The result is about 2 MB, which is what the
current app is.

## Check before you trust the rebuild

Whatever it produces, verify these — each one is a bug that actually shipped here and had
to be found the hard way:

- Switch semester while sitting on **each** tab. The content must change without a
  reload. This broke twice.
- Tick some plan steps, reload, confirm they're still ticked and that no step is ticked
  that you didn't tick.
- Run an OSCE station and score 0. It must **not** tell you that you missed no
  safety-critical items.
- Start a timed station, lock the phone for two minutes, come back. The clock must have
  kept running.
- Reveal a viva model answer. It must not have been visible beforehand.
- Check a card answer containing `<b>` renders bold, and that a plan step containing a
  `<` renders as text.
- Reset progress, then open every tab. Nothing should throw.

## What you lose by moving

Worth being clear-eyed about. The current app is at v2026.09.04a, has survived several
adversarial review passes, and auto-deploys on push. A rebuild starts at zero on all
three. The data is portable; the accumulated bug-fixing is not — the list above is what
I'd re-verify, but it won't be exhaustive.

If the goal is a different *interface* rather than a different *codebase*, it's cheaper
to change this one.
