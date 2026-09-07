# Moving to Claude Code — setup and first task

## Why this is a good move

Three real advantages, not just a change of scenery:

1. **It can push.** It runs on your machine as you, so the SSH and sandbox-network
   problems we spent today on simply don't exist.
2. **`CLAUDE.md` is already written for it.** Claude Code reads it automatically at
   the start of every session — every hard-won lesson, the progress-safety rules, the
   clinical-content rule. Nothing to re-explain.
3. **It can run and test the app locally**, so changes get verified against a real
   browser rather than a headless approximation.

**This is not a rebuild.** Same repo, same 310 cards, same saved progress. We're
adding an engine, not starting over.

## Setup

```
npm install -g @anthropic-ai/claude-code
cd ~/Pharmacist-Prescribing
claude
```

It will pick up `CLAUDE.md` on its own. First thing to type: `read CLAUDE.md and
tell me the progress-safety rules` — if it can't state the append-only rule, stop
and check it's reading the file.

---

## What to paste as your first real task

Everything between the markers.

=====  PASTE FROM HERE  =====

Read CLAUDE.md first — it contains rules that override anything you'd otherwise do,
especially about progress safety and clinical content.

## The problem

I have ADHD. The app has good content but it still asks me to decide what to study,
and deciding is the part I can't do. I open it, see fifteen tabs, and close it.

Right now the prioritisation logic is scattered across four functions that each
decide something independently:

- `dueCards()` — which flashcards Leitner says are due
- `renderToday()` — picks a "weakest topic" by MCQ accuracy, needs ≥2 attempts
- `suggestTopic()` — picks a topic from the nearest event's `cov:[]`
- `nextStep()` — picks the next uncompleted PLAN step

They don't talk to each other, so Today can suggest drilling lipids while the thing
that actually matters is a plan step due in three days.

## What I want built

**One scoring function that ranks every possible action, and a Home screen that
shows me the top one.**

### The candidate actions

Every one of these is a thing I could do right now:

- Read a topic brief (`BRIEFS[id]`, has a `mins` estimate)
- Drill due flashcards for a topic
- Answer unanswered MCQs for a topic
- Redo questions I got wrong (`S.right` tracks mastery)
- Run an OSCE station (`S2_OSCE`, has a `time`)
- Answer a viva prompt (`VIVA`, self-rated in `S.viva`)
- Do a PLAN step (`PLAN[].steps`, each has a due date and minutes)

### The score

For each candidate, compute:

- **urgency** — from the nearest EVENTS entry or PLAN step that needs this topic.
  Should climb steeply as the date approaches, not linearly. Something due in 3 days
  must outrank something due in 3 weeks decisively, not slightly.
- **weight** — what the assessment is worth. EVENTS entries carry `w` (e.g. "30% ·
  must pass"). A must-pass item outranks a higher-percentage item that isn't.
- **gap** — how weak I am. Combine flashcard mastery (`S.box[].b >= 4`) and MCQ
  accuracy for that topic. A topic I've never touched is a bigger gap than one I'm
  at 60% on.
- **decay** — how overdue the Leitner cards are.
- **effort** — the minute cost.

Tune it so that **urgency × weight dominates** when something is close, and **gap**
decides between things that are equally urgent. I'd rather revise the right topic
badly than the wrong topic well.

### The Home screen

- **One action, large, with a Start button that begins it immediately.** No
  configuration step, no topic picker, no "choose a mode".
- One line saying *why* it's the top thing — "Module Quiz 1 closes in 3 days, lipids
  is your weakest topic in it at 40%". The reason matters; it's what makes me trust
  it enough to just start.
- Underneath, exactly **three** alternatives framed by time: **"5 minutes"**,
  **"15 minutes"**, **"45 minutes"**. Not a list of topics — a list of time budgets.
  Some days I have five minutes and the app should have an answer for that.
- Nothing else. No stats, no streaks, no charts competing for attention.

### Hard requirements

- **No shame language anywhere.** Never "you haven't studied in 4 days", never a
  broken streak, never red for neglect. Missing days is not a failure state and the
  app must not treat it as one. Check the whole file for existing violations.
- **Every action shows a realistic minute cost** before I commit to it.
- **Never more than three visible choices** on Home.
- **Never suggest testing on material it hasn't offered to teach first.** If a topic
  has an unread brief, reading it outranks drilling it.
- The scoring must be a **pure function I can unit-test** — inputs in, ranked list
  out, no DOM. Write tests for it.

### Do not break

- Progress is keyed by **array index**, namespaced per semester (`"s2:14"`). Cards
  and questions are **append-only**. Never reorder, never delete, never sort.
- `S.box` entries are objects `{b, due, seen}`, never bare numbers.
- Any code that rebuilds `S` from scratch must include every key: `box, mcq, osce,
  osceRuns, exams, days, sem, steps, right, read, viva`.
- No build step, no npm dependency in the app, no CDN, no network calls. It must
  work offline on a phone with no signal.
- Do not touch the clinical content. Do not "improve" any threshold or criterion.

### How I want you to work

Build it in stages and let me test each one before moving on:

1. The scoring function alone, with unit tests, no UI changes.
2. Show me the ranked list as plain output so I can sanity-check the ordering
   against what I know is actually urgent.
3. Then rebuild Home on top of it.
4. Then remove or fold in the four old functions, so there's one source of truth.

Bump the version in both `index.html` and `sw.js`, then commit and push.

Start by reading `renderToday()`, `suggestTopic()`, `nextStep()`, `topicReadiness()`
and `masteryOf()`, and tell me what you think the scoring function should take as
inputs before you write any code.

=====  PASTE TO HERE  =====

---

## Two things worth knowing before you start

**Ask it to show you the ranking before it builds the UI.** The ordering is the whole
product. If the ranked list looks wrong to you when it's plain text, it'll look wrong
in a nice interface too — and it's far cheaper to fix at that point.

**The honest limit.** The app can rank what it can measure: flashcard boxes, MCQ
accuracy, plan steps, dates. It cannot see that you understood something in a
tutorial, or that an OSCE station terrified you. Recognition is what it measures;
performance is what you're marked on. Keep the viva and OSCE modes in the rotation
even when the algorithm doesn't rank them top — that's a known blind spot, and it's
already noted in the app's own honesty panel.
