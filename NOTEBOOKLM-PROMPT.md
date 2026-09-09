# NotebookLM setup — Pharmacist Prescribing, Sem 2 2026

NotebookLM only answers from what you upload. That's the whole reason it's worth
using: it can't invent a threshold, and it footnotes every claim back to a page
you can check.

Gemini's suggested prompt had a good skeleton but four things in it would have
produced fiction. Corrected below — see "What I changed and why" at the end.

---

## Step 1 — Upload these, in this order

One notebook: **PHAR6202 + PHAR6302 — Sem 2 2026**.

**Primary clinical sources (trust these):**

- `cvd-hypertension-protocol.pdf`
- `cvd-dyslipidaemia-protocol.pdf`
- `cvd-bloodglucose-protocol.pdf`
- `asthma-protocol.pdf`
- `copd-protocol.pdf`
- `summary-of-changes-pilot-clinical-protocols.pdf`
- `01_Hypertension-guideline-2016_WEB.pdf` (Heart Foundation)

**Course documents (what you're actually assessed on):**

- `PHAR6202 Sem 2 2026 Course Outline All Campuses-4.pdf`
- `PHAR6302 Sem 2 2026 Course Outline All Campuses-1.pdf`
- `Advanced Clinical Decision Making and Professional Prescribing (1).pdf`
- The four `exported-text (n).docx` Canvas module exports
- `PHAR6202 Tutorial 2_Captions...txt`
- `PHAR6302 Tutorial 1_default_Captions...txt`
- `PHAR6302 Tutorial 2_Captions...txt`

**Secondary — a classmate's notes, not verified:**

- `PHAR6302_Week1-2_MCQ_Quiz.pdf`
- `PHAR6302_Week3-4_Study_Notes - v3.pdf`

**Leave out:** `Case_Study_Polypharmacy_CKD.pdf` — de-identified real patient,
small region, classmate flagged the re-identification risk themselves. Don't put
it in a cloud notebook.

Rename each source in NotebookLM so citations read cleanly:
`QLD PROTOCOL — Hypertension`, `HF 2016 — Hypertension guideline`,
`CLASSMATE NOTES — Wk3-4 (unverified)`, `TUTORIAL — 6302 Tut 1 transcript`.

---

## Step 2 — Paste this first (the standing brief)

> You are helping me study for the Graduate Certificate in Pharmacist Prescribing
> and Advanced Practice, University of Newcastle, Semester 2 2026. I'm a
> registered pharmacist in Dubbo, NSW. I am enrolled in exactly two courses:
> **PHAR6202** (Advanced Clinical Decision Making and Professional Prescribing)
> and **PHAR6302** (Chronic and Complex Conditions). Do not refer to any other
> course code. Do not infer "equivalent" courses.
>
> This is the **Australian** pilot pharmacist prescribing scope, not the UK
> independent prescriber model and not a US curriculum. The conditions in scope
> are only: hypertension, dyslipidaemia, blood glucose / type 2 diabetes,
> asthma, COPD, plus smoking cessation and weight management as adjuncts. There
> is no dermatology, no UTI, no ENT, no acute analgesia in this semester. If I
> ask about one of those, tell me it's out of scope rather than answering.
>
> **Rules for every answer:**
>
> 1. Answer only from the uploaded sources. If something isn't there, say
>    "not in the sources" and stop. Do not fill the gap from general medical
>    knowledge. I would rather have a hole I know about than a plausible
>    sentence I can't check.
> 2. Cite source and page for every clinical number — every threshold, dose,
>    target, interval, referral criterion.
> 3. My sources contain **two frameworks that genuinely disagree** and both are
>    examinable: the Queensland pilot clinical protocols, and the Heart
>    Foundation 2016 guideline. When they differ, show both side by side and
>    name which is which. Never blend them. Never carry a risk-band label from
>    one framework into the other — AusCVDRisk "intermediate" is not Heart
>    Foundation "moderate", and treating them as the same invents a
>    disagreement that isn't there.
> 4. Write thresholds exactly as the source writes them. "≥180 systolic and/or
>    ≥110 diastolic" is not "≥180/110". Watch ≥ versus >.
> 5. Two sources are a classmate's revision notes. Treat them as one student's
>    interpretation. If they contradict a protocol, say so and go with the
>    protocol.
> 6. Tutorial transcripts are a clinician teaching, not policy. Attribute
>    anything from them as "the tutor said", never as a rule.
> 7. I have no eTG, AMH or product information uploaded. So: no renal or hepatic
>    dose adjustments, no full contraindication lists, no interaction tables
>    unless they appear in the protocols themselves. Say "would need AMH/eTG"
>    rather than reciting from memory.
> 8. Australian conventions: mmol/L, paracetamol, oedema, TGA/PBS. TGA **boxed
>    warnings**, not FDA black-box.
> 9. I have ADHD. Teach before testing. One next action, not a menu. Short
>    chunks. No "you should already know", no guilt, no streaks.
>
> **Do only this to start:** read the two course outlines and give me one table
> of every assessment in both courses — name, course, weighting, due date,
> must-pass or must-submit. Nothing else yet.

---

## Step 3 — Verify it before you trust it

Ask this second. It's a trap with a known answer:

> A 62-year-old has BP 148/92 and a calculated 5-year CVD risk of 7%. Compare
> exactly what the Queensland protocol says to do with what the Heart Foundation
> 2016 guideline says to do. Cite the page for each. If they agree, say they
> agree — do not manufacture a disagreement.

**They agree.** AusCVDRisk *intermediate* (5–<10%) maps to Heart Foundation
*low* (<10%); both treat from ≥160/100, so at 148/92 neither starts a drug. If
NotebookLM says the Heart Foundation would treat this patient, it's carrying a
band label across frameworks — distrust its comparisons for the rest of the
session and re-paste rule 3.

---

## Step 4 — The dossier, run in five passes

Gemini asked for all of this in one message. Don't — NotebookLM truncates, and
one giant document is the least usable output for you anyway. Run these as five
separate prompts and save each answer as a Note in the notebook.

### Pass 1 — Blueprint and order of attack

> From the two course outlines only: list every assessment with its weighting,
> due date, format, and whether it is must-pass or must-submit. Then map each
> assessment to the module learning outcomes it assesses. Do not rank them —
> I'll do that.

**You don't need it to rank.** Here's the real order, from the app:

| Date | Item | Weight |
|---|---|---|
| **13 Sep** | Module Quiz 1 closes | 10% |
| 16 Sep | Tutorial 3 | — |
| 19 Sep | September intensive | — |
| **25 Sep** | Chronic Condition Action Plan | 20% · **must pass** |
| **9 Oct** | GenAI documentation task | 20% · must submit |
| 13 Oct | Tutorial 4 | — |
| 18 Oct | Module Quiz 2 closes | 10% |
| **23 Oct** | ISBAR handover | 30% · must submit |
| 27 Oct | Tutorial 5 | — |
| **28 Oct** | Viva voce (closed book) | 30% · **must pass** |
| 31 Oct | November intensive | — |
| 10 Nov | Tutorial 6 | — |
| **13 Nov** | Portfolio + reflections | 30% · must submit |
| **26 Nov** | Multi-station OSCE | 50% · **must pass** |

Three must-pass items. The OSCE is half the mark of its course and it's the one
you can't cram for — it's performance, not recall.

### Pass 2 — Competencies and consultation frameworks

> From the PHAR6202 outline, Canvas modules and tutorial transcripts: what
> consultation and clinical-reasoning frameworks does this course actually
> teach and assess? Name each one, quote how the course defines it, and cite
> where. Cover history taking, red-flag triage, shared decision-making,
> documentation standards, and the legal and professional boundaries of the
> pilot prescribing scope. If the course names a specific model, use its name —
> don't substitute a generic framework you know from elsewhere.

### Pass 3 — Conditions index, one condition at a time

Run this **once per condition**, not all at once. In scope: `hypertension`,
`dyslipidaemia`, `blood glucose / T2DM`, `asthma`, `COPD`, `smoking cessation`,
`weight management`.

> For [condition], from the protocol and the course modules only, give me:
>
> 1. Who is eligible for pharmacist prescribing under the pilot, and who is
>    explicitly excluded.
> 2. Every red flag or criterion that forces referral, quoted as written.
> 3. What I can prescribe, at what dose, with what repeat limits.
> 4. Monitoring: what, when, and what result changes my action.
> 5. Anything the April 2026 protocol update changed for this condition — check
>    the summary-of-changes source specifically.
>
> Cite page numbers throughout. Where the Heart Foundation guideline and the
> Queensland protocol give different numbers, show both.

### Pass 4 — Physical assessment and OSCE skills

The OSCE stations you'll face are eight minutes each and include: newly elevated
BP, poorly controlled asthma, T2DM not at target, breathlessness in a smoker,
explaining a prescribing error, GP handover, refusing a request, thinking aloud
on undifferentiated breathlessness, interpreting a test result, and culturally
safe shared decision-making.

> From the course materials and protocols: list every physical assessment,
> measurement or technique check I'm expected to perform or assess. For each,
> give the exact steps the source specifies — for example blood pressure
> measurement technique, inhaler and spacer technique, spirometry
> interpretation, point-of-care testing, waist circumference. Quote the
> procedure as written. If a technique is assessed but the steps aren't in my
> sources, say so and name what document I'd need.

### Pass 5 — Question bank

> Using only the practice questions in my uploaded sources (the Week 1–2 MCQ
> quiz and any questions embedded in the Canvas modules), build me a set of
> multi-step clinical vignettes in the same style. For each: the vignette, the
> options, the answer, and a rationale that cites the protocol page. Do not
> invent questions from a US or UK curriculum, and do not draw on any exam you
> haven't been given — if you only have twelve questions' worth of material,
> give me twelve.

---

## Step 5 — Your weak points (NotebookLM cannot know these)

Gemini's prompt asked NotebookLM to summarise "topics I have historically
struggled with, based on our previous chats." **It can't do that.** NotebookLM
reads uploaded sources only — it has no access to any chat history, Gemini's or
mine. Asked that question it will either invent a list or return nothing.

So here's the real list, from things that have actually come up. None of this is
a character flaw — most of it is two sources disagreeing, which is exactly what
this material does.

**Answers you gave that the source contradicts:**

- **BP target with comorbidities.** You said `<130/80`. The Heart Foundation
  2016 guideline reports *no demonstrated benefit* over `<140/90`. Worth
  re-reading, because the intuitive answer is the wrong one.
- **BP target with proteinuria.** You said `<125/75`. That figure appears zero
  times in the 2016 guideline.

**Places where two numbers are both right:**

- **4–6 weeks vs 3 months (Figure 6.2).** You *review* at 4–6 weeks; you
  *escalate* at 3 months. Different actions, both correct. The footnote is what
  resolves it.

**Where the classmate's notes contradict the protocol — protocol wins:**

- **GLP-1RA on sick days** — protocol says *withhold*, and flags it as an April
  2026 addition. The notes say continue.
- **HbA1c target** on lifestyle + metformin — `≤6%`, not `≤6.5%`.
- **Remission window** — 1–2 years, not 6.
- **Acceptable ACEi creatinine rise** — 25%, not 30%.

**Two that have been got wrong more than once:**

- **COPD prednisolone IS prescribable** — up to 5 days, no repeats, via the
  action plan. Only *antibiotics* require referral.
- **Threshold wording** — "≥180 systolic and/or ≥110 diastolic" means 168/114
  qualifies. Reading it as "≥180/110" makes you miss it.

Paste any of these into NotebookLM as a question and make it show you the page.
Don't take my word for it either.

---

## What I changed in Gemini's prompt, and why

| Gemini asked for | Problem | Fix |
|---|---|---|
| "PHAR6201, 6202, 6301, 6302 **or equivalents**" | You're in two courses. "Equivalents" invites guessing | Named the two, banned inference |
| Conditions incl. dermatology, UTIs, ENT, analgesia | That's a UK IP curriculum. Not your scope | Replaced with the actual seven |
| "Black-box warnings" | FDA term | TGA boxed warnings |
| Renal/hepatic adjustments, full interaction tables | Needs AMH/eTG — not uploaded | Told it to say "would need AMH/eTG" |
| "Based on past mock exams" | No mock exams uploaded → invention | Scoped to the questions you actually have |
| "Topics I've struggled with in previous chats" | NotebookLM has no chat access | Supplied above from real corrections |
| Everything in one dossier | Truncation, and unusable for you | Five passes, saved as Notes |
| — | No framework-conflict guard | Added as rule 3, plus a verification trap |

---

## Studio panel

- **Audio Overview** — one per condition, for the car. Best feature here.
- **Mind Map** — good for eligibility/referral branching. Screenshot it.
- **Flashcards / Quiz** — skip. Your app has 389 cards and 177 questions already
  index-locked to your progress; a parallel set just splits your attention.

## Where NotebookLM fits alongside the app

**NotebookLM** — interrogating the source documents, understanding something
new, checking what a rubric wants, drafting.
**The app** — spaced repetition, retention, viva and OSCE modes.

NotebookLM won't remember what you've forgotten. Use it to *understand*, then
let the app *keep* it.
