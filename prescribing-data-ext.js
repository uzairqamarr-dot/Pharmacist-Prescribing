/* ============================================================================
   Pharmacist Prescribing — CONTENT EXTENSION (colleague resources, Sep 2026)
   APPEND-ONLY. Loaded AFTER prescribing-data.js, BEFORE the app script.
   Pushes new material onto the END of the existing arrays — never reorders,
   inserts or edits existing entries (progress is stored by array index).

   Sources:
     A. PHAR6302 Weeks 1 & 2 MCQ Quiz (colleague-written revision quiz)
     B. PHAR6302 Weeks 3 & 4 Study Notes v3 (colleague)
     C. Case Study: Polypharmacy and Declining Renal Function in an Older
        Adult (Nader Eltom, pharmacist — de-identified)
   ============================================================================ */

/* ---------- A. Weeks 1-2 MCQ quiz: 20 questions verbatim ---------- */
COURSE_MCQ.push(
["htn","A 38-year-old non-Indigenous man with type 2 diabetes and no known cardiovascular disease asks about a heart check. Under the 2023 guideline, which applies?",
 ["He is too young for absolute risk assessment",
  "He should be assessed, because diabetes lowers the starting age to 35",
  "He should be managed as high risk without calculating",
  "He should wait until age 45"],1,
 "Type 2 diabetes lowers the assessment starting age from 45 to 35. First Nations people are assessed from 30, with individual risk-factor screening from 18. Diabetes alone is not an automatic high-risk category, so the calculator is still used — although risk is roughly doubled, and more so with longer duration, poor control or microvascular complications."],
["htn","Which finding means you should not use the AUS CVD Risk Calculator and should manage the patient as high risk immediately?",
 ["eGFR 52 mL/min/1.73m²",
  "Urine ACR 18 mg/mmol in a man",
  "Sustained eGFR 38 mL/min/1.73m²",
  "Total cholesterol 6.2 mmol/L"],2,
 "Automatic (clinically determined) high risk means sustained eGFR &lt;45, urine ACR &gt;25 mg/mmol in men or &gt;35 in women, or confirmed familial hypercholesterolaemia. An eGFR of 52 and a uACR of 18 sit in the \"impaired\" band, where you calculate risk and then strongly consider reclassifying upward. Total cholesterol 6.2 is elevated but below the ≥7.5 threshold that should prompt consideration of FH."],
["htn","Family history of premature cardiovascular disease is defined as coronary heart disease or stroke in a first-degree relative aged under:",
 ["55 for women, 65 for men",
  "65 for women, 55 for men",
  "60 for both",
  "65 for both"],1,
 "First-degree female relative under 65, or first-degree male relative under 55. The asymmetry catches people out — a father with a myocardial infarction at 60 does not meet the definition, but a mother with a stroke at 60 does."],
["htn","A patient's calculated 5-year CVD risk is 4%. Which single factor would most appropriately move them down a category?",
 ["Coronary artery calcium score of 0",
  "South Asian background",
  "eGFR of 55 mL/min/1.73m²",
  "Treated depression"],0,
 "A CAC score of 0 and East Asian background are the two factors that reclassify risk downward. South Asian background, reduced eGFR and severe mental illness all reclassify upward. Downward reclassification is only appropriate when the calculated risk already sits close to a lower threshold, and a CAC of 0 does not reassure if Lp(a) is high."],
["htn","A 55-year-old has a calculated 5-year risk of 7%. Which management approach matches the guideline?",
 ["Lifestyle only; no reassessment needed",
  "Lifestyle, with pharmacotherapy considered depending on context; reassess in 2 years",
  "Immediate BP- and lipid-lowering therapy; no formal reassessment",
  "Lifestyle only; reassess in 5 years"],1,
 "7% falls in the intermediate band (5 to &lt;10%). Lifestyle change is the cornerstone, medicines are considered depending on context, and reassessment is every 2 years (sooner if risk factors change). Low risk is reviewed every 5 years; high risk moves into ongoing clinical management without a formal reassessment interval."],
["bgl","Which combination of AUSDRISK score and 5-year type 2 diabetes risk is correct?",
 ["Score 7 → 1 in 30",
  "Score 10 → 1 in 14",
  "Score 13 → 1 in 14",
  "Score 17 → 1 in 3"],2,
 "The AUSDRISK bands are: ≤5 → 1 in 100; 6–8 → 1 in 50; 9–11 → 1 in 30; 12–15 → 1 in 14; 16–19 → 1 in 7; ≥20 → 1 in 3. The score overestimates risk in people under 25 and underestimates it in Aboriginal and Torres Strait Islander people, who are considered high risk from age 18."],
["lipid","A patient has a coronary artery calcium score of 0 but a markedly elevated Lp(a). The most accurate interpretation is:",
 ["The zero score excludes coronary plaque and is reassuring",
  "Lp(a) can be lowered with intensive lifestyle change, so the score will stay at 0",
  "A zero score excludes only calcified plaque; high Lp(a) still confers high myocardial infarction risk",
  "The calcium score should be repeated in 6 months"],2,
 "A calcium score of zero means no calcium was detected in any plaque present — it does not mean there is no plaque. Soft, non-calcified plaque is vulnerable to rupture, and the Australian Atherosclerosis Society position statement notes that high Lp(a) carries high myocardial infarction risk at any calcium score including zero. Lp(a) is largely inherited and barely responds to lifestyle change."],
["htn","Which statement about the AUS CVD Risk Calculator is <b>incorrect</b>?",
 ["Postcode is used to estimate socioeconomic disadvantage and can be adjusted",
  "It estimates risk over 5 years",
  "It has been validated for people with type 1 diabetes",
  "It has not been validated in people over 79 years"],2,
 "The calculator has not been validated for type 1 diabetes and may give an inaccurate estimate. The other three statements are correct: it is a 5-year estimate, postcode-based socioeconomic status is included and adjustable, and it is not validated above 79 years, where clinical judgement (frailty, comorbidity, life expectancy, preferences) takes over."],
["htn","For Aboriginal and Torres Strait Islander people aged 18–29, the guideline recommends screening for individual risk factors. Which set is correct?",
 ["Blood pressure and cholesterol only",
  "Smoking, blood pressure, blood glucose/HbA1c, eGFR, lipids, uACR and familial hypercholesterolaemia history",
  "Coronary artery calcium score and Lp(a)",
  "Absolute risk calculation using the standard calculator"],1,
 "The full screening set is smoking status, blood pressure, blood glucose or HbA1c, eGFR, serum lipids, urine ACR, and history of familial hypercholesterolaemia — ideally within a holistic health assessment with cultural safety, shared decision-making, informed consent and patient ownership of information. From age 30, CVD risk is assessed at an annual health check, opportunistically, or at least every 2 years."],
["comm","The most effective way to communicate a 15% five-year risk to a patient with limited health literacy is:",
 ["\"Your risk is moderately high\"",
  "\"You have a 15% chance\"",
  "\"Out of 100 people like you, about 15 will have a heart attack or stroke in the next 5 years\"",
  "\"Your risk score is 15 on the calculator\""],2,
 "Natural frequencies are the most effective single format, and pairing them with a percentage or an icon array improves comprehension further. Vague verbal labels like \"moderately high\" mean different things to different people, and a bare number without a time frame is not interpretable."],
["htn","A clinic reading of 164/98 mmHg is classified as:",
 ["High-normal","Grade 1 (mild)","Grade 2 (moderate)","Grade 3 (severe)"],2,
 "Grade 2 is 160–179 systolic or 100–109 diastolic. Grade 1 is 140–159 / 90–99 and Grade 3 is ≥180 / ≥110. Where systolic and diastolic fall in different grades, the higher grade applies — so 182/104 would be Grade 3 on the systolic alone."],
["htn","Which home blood pressure average is diagnostic of hypertension?",
 ["≥130/80","≥135/85","≥140/90","≥120/70"],1,
 "Home and daytime ambulatory thresholds are both ≥135/85. The 24-hour ambulatory average is ≥130/80 and night-time is ≥120/70. Clinic ≥140/90 is the trigger to offer out-of-clinic monitoring, not the out-of-clinic diagnostic threshold."],
["htn","When measuring blood pressure, using a cuff that is too small for the patient's arm will:",
 ["Underestimate blood pressure","Overestimate blood pressure","Have no consistent effect","Only affect the diastolic reading"],1,
 "A cuff that is too small overestimates blood pressure; one that is too large underestimates it. This is one of the commonest sources of measurement error, along with unsupported arms, crossed legs and insufficient rest."],
["htn","An inter-arm systolic difference of 25 mmHg is found at a first visit. This should raise concern about:",
 ["White-coat hypertension","Aortic dissection or subclavian stenosis","Atrial fibrillation","An incorrectly calibrated device"],1,
 "A difference above 20 mmHg is abnormal and can suggest aortic dissection or subclavian stenosis, warranting prompt medical assessment. A smaller difference above 5 mmHg is common and simply means you use the arm with the higher reading for all subsequent measurements."],
["htn","The mitral (apex) auscultation area is located at the:",
 ["2nd intercostal space, right sternal border",
  "2nd intercostal space, left sternal border",
  "4th intercostal space, lower left sternal border",
  "5th intercostal space, midclavicular line"],3,
 "Aortic — 2nd ICS right sternal border; pulmonic — 2nd ICS left sternal border; Erb's point — 3rd ICS left; tricuspid — 4th/5th ICS lower left sternal border; mitral/apex — 5th ICS midclavicular line. Palpating the carotid while listening times S1 (with the upstroke) against S2 (after it)."],
["htn","A patient with newly diagnosed uncomplicated hypertension also has asthma and a history of gout. Which two agents are best avoided?",
 ["ACE inhibitor and dihydropyridine CCB",
  "Beta-blocker and thiazide diuretic",
  "ARB and thiazide diuretic",
  "Dihydropyridine CCB and beta-blocker"],1,
 "Beta-blockers are contraindicated in asthma and are not first-line for uncomplicated hypertension anyway. Thiazides cause dose-dependent hyperuricaemia and can precipitate gout. That still leaves three suitable first-line options: ACE inhibitor, ARB and dihydropyridine calcium channel blocker."],
["htn","A patient develops bilateral ankle oedema 6 weeks after starting amlodipine. The most appropriate action is:",
 ["Add a thiazide diuretic",
  "Add frusemide",
  "Reduce the dose or switch class; consider an ACEi/ARB which can offset the oedema",
  "Continue unchanged, as this resolves spontaneously in all patients"],2,
 "Dihydropyridine oedema comes from precapillary arteriolar dilation, not fluid overload, so a diuretic will not correct it and adds electrolyte and volume risk for no benefit. Dose reduction, switching class, or adding an ACEi/ARB (which dilates the venous side and can offset the effect) are the appropriate responses."],
["htn","Ten days after starting an ACE inhibitor, which result would be expected rather than concerning?",
 ["A creatinine rise of about 20% with normal potassium",
  "A creatinine rise of 45%",
  "Potassium of 6.1 mmol/L",
  "A fall in eGFR from 62 to 38"],0,
 "A modest creatinine rise of up to roughly 30% is expected as the efferent arteriole dilates and is acceptable if potassium stays normal. A larger rise, a marked eGFR fall or hyperkalaemia should prompt review — consider bilateral renal artery stenosis, hypovolaemia, or an NSAID interaction (\"triple whammy\" with a diuretic). Check renal function and electrolytes before starting and again 1–2 weeks after."],
["htn","Under the Queensland Hypertension Clinical Protocol V2, which patient triggers immediate referral?",
 ["A 72-year-old with BP 152/92 on one agent",
  "A patient with eGFR 54 mL/min/1.73m²",
  "A patient with LDL-C 4.2 mmol/L",
  "A patient reviewed 4 weeks after a dose increase"],1,
 "An eGFR below 60 (or uACR ≥3 mg/mmol) is an immediate referral trigger. Others include BP ≥180/110, HbA1c ≥10% or BGL ≥20, total cholesterol ≥7.5 / LDL ≥5.0 / triglycerides ≥6, suspected secondary hypertension, and failure to reach target after 4–6 weeks on two maximum-dose first-line agents. LDL-C 4.2 is below the referral threshold, and age 72 is within the 18–79 eligibility range."],
["htn","A 62-year-old presents with BP 196/120, sudden slurred speech and facial droop. The correct interpretation and action is:",
 ["Hypertensive urgency — oral therapy and GP review in 24–72 hours",
  "Grade 3 hypertension — arrange ambulatory monitoring",
  "Hypertensive emergency — call an ambulance for immediate hospital assessment",
  "White-coat effect — repeat after 5 minutes of rest"],2,
 "Severely elevated blood pressure with acute neurological deficit indicates a hypertensive emergency and acute stroke — this needs immediate hospital assessment and intravenous therapy, not oral medicines or outpatient follow-up. Urgency applies when BP exceeds 180/110 with symptoms such as severe headache but without acute organ dysfunction."]
);

/* ---------- B. Weeks 3-4 study notes: flashcards ---------- */
COURSE_CARDS.push(
["lipid","Statin intensity table — give the daily doses for high, moderate and low intensity.","<b>High</b> (&gt;50% LDL-C reduction): atorvastatin 40–80 mg, rosuvastatin 20–40 mg. <b>Moderate</b> (30–49%): atorvastatin 10–20 mg, pravastatin 40–80 mg, rosuvastatin 5–10 mg, simvastatin 20–80 mg. <b>Low</b> (&lt;30%): pravastatin 10–20 mg, simvastatin 5–10 mg. Simvastatin 80 mg carries more myopathy risk. Dose increases at intervals of at least 4 weeks."],
["lipid","What is the '80% rule' for statins, and what does it mean for escalation?","More than 80% of a statin's LDL-lowering effect is achieved at 50% of its maximum dose. Once there, adding ezetimibe (a further 15–25%) lowers LDL more than doubling the statin — the pharmacological reason escalation turns to combination therapy rather than pushing the dose indefinitely."],
["lipid","Name the three circumstances in which a statin should be stopped, with thresholds.","Aminotransferase persistently &gt;3× ULN · CK &gt;10× ULN · persistent unexplained muscle pain or weakness even with a normal CK. Never stop a statin during symptoms of ACS — cessation is associated with increased cardiac events, especially in the first week."],
["lipid","A patient stops a statin for mild muscle symptoms and CK normalises. When and how can you rechallenge?","After at least 4 weeks, if the episode was mild and CK has normalised — consider a precipitant, a lower dose, or a different statin. If CK stays raised after stopping, look for another cause the statin may have unmasked (asymptomatic hypothyroidism, unaccustomed activity, neuromuscular disease)."],
["lipid","Which fibrate is used with a statin, and which must be avoided?","Fenofibrate is the one used in combination — gemfibrozil is the fibrate to avoid with a statin. Fibrates are for severe hypertriglyceridaemia (TG &gt;10 mmol/L) to prevent pancreatitis; statins are not used for that purpose."],
["lipid","Simvastatin dose caps with interacting drugs?","10 mg with amlodipine, diltiazem or verapamil; 20 mg with amiodarone. Statins are CYP (mainly 3A4) and OATP1B1 substrates — pravastatin and rosuvastatin have fewer CYP interactions when an interacting drug can't be avoided."],
["lipid","A patient on a statin is prescribed sodium fusidate. What do you do?","Stop the statin for the duration of the course and about a week afterwards — rhabdomyolysis fatalities have been reported."],
["lipid","The three protocols have three different 'not at target' referral intervals. Give all three.","Hypertension: 4–6 weeks on two maximum-dose agents. Blood glucose: 3 months on two maximum-dose agents. Lipids: 6 months. Easy to conflate — exactly the detail a written paper targets."],
["lipid","The FH trap: a patient has tendon xanthomata and TC 7.8 mmol/L. Manage or refer?","Refer. Familial hypercholesterolaemia is on the QLD lipid protocol <b>ineligible</b> list, not the treat-and-concurrently-refer list — even though prior ACS or anticoagulants are managed under concurrent referral in the hypertension protocol. Know which list each condition sits on."],
["lipid","Evolocumab vs inclisiran — mechanism, LDL effect and dosing interval?","Both target PCSK9. <b>Evolocumab</b> is a monoclonal antibody binding circulating PCSK9: ↓LDL ~60% alone or with a statin, SC every 2 or 4 weeks. <b>Inclisiran</b> is siRNA silencing hepatic PCSK9 production: ↓LDL ~50%, SC every 6 months after the first two doses, given by a health professional. Same target, different level of intervention — a good exam discriminator."],
["lipid","High-risk patient: baseline LDL-C 3.6, after 6 weeks on atorvastatin 40 mg it is 1.9 mmol/L. At target?","Strictly not at target. High risk requires ≥50% reduction <b>and</b> &lt;1.8 mmol/L — whichever is lower. Reduction = (3.6−1.9)÷3.6 = 47% (short of 50%), and 1.9 is marginally above 1.8. Both limbs must be satisfied. Check adherence, then increase dose or add ezetimibe."],
["bgl","Diagnostic thresholds for diabetes (and the two rules about confirming)?","HbA1c ≥48 mmol/mol (6.5%) · fasting venous glucose ≥7.0 · random venous ≥11.1 · OGTT 2 h ≥11.1 mmol/L. Symptomatic: one positive test confirms. Asymptomatic: repeat on a different day, preferably the same test. Venous laboratory samples only — never diagnose on finger-prick. An HbA1c below 48 does not refute a diagnosis made on venous glucose or OGTT."],
["bgl","When can HbA1c mislead?","<b>Falsely low:</b> haemolytic anaemia, severe kidney impairment, severe liver disease, anaemia of chronic disease, regular phlebotomy, recent transfusion, pregnancy and first 3 months postpartum (don't use it at all in that window). <b>Falsely high:</b> iron deficiency. Haemoglobinopathies can interfere. If HbA1c and glucose disagree, suspect an interfering condition and use venous glucose."],
["bgl","The unit conversion trap: pair 48 and 53 mmol/mol with their percentages.","48 mmol/mol = 6.5% (the diagnostic threshold). 53 mmol/mol = 7.0% (the general treatment target). Don't pair 6% with 48 — they aren't equivalent."],
["bgl","Choosing the second glucose-lowering agent by comorbidity?","Atherosclerotic CVD → SGLT2i or GLP-1RA · heart failure → SGLT2i · CKD → SGLT2i preferably, or GLP-1RA · obesity → GLP-1RA or tirzepatide. Conditional recommendation AGAINST a sulfonylurea as the first add-on to metformin (hypoglycaemia risk)."],
["bgl","What happens to SGLT2 inhibitor effect as eGFR falls?","The glycaemic effect fades below eGFR 45 (the mechanism depends on renal glucose excretion), but the heart failure and CKD benefits persist below eGFR 25. Also expect an early creatinine rise of 3–5 mL/min — haemodynamic, benign, not a reason to stop."],
["bgl","Sick-day rules for non-insulin agents?","<b>Withhold:</b> metformin (dehydration → ↓clearance → lactic acidosis) and SGLT2 inhibitors (illness + dehydration + low carbohydrate → euglycaemic DKA). Restart only when eating and drinking normally and renal function is back to baseline. <b>Continue:</b> DPP-4 inhibitors; sulfonylureas as tolerated but withhold if glucose trending low. GLP-1RA — withhold only if worsening nausea/vomiting."],
["bgl","A patient on an SGLT2 inhibitor is unwell. What single test must be done regardless of the glucose reading, and what are the thresholds?","Blood ketones. A normal glucose does NOT exclude euglycaemic DKA on an SGLT2 inhibitor. Ketones ≥0.6 mmol/L with hyperglycaemia needs urgent advice; &gt;1.5 mmol/L = impending DKA. Go straight to hospital for severe/worsening hyperglycaemia, persistent vomiting &gt;4 h, high fever, abdominal pain, severe headache, drowsiness, marked ketosis or recurrent hypoglycaemia."],
["bgl","The 0.5% rule for add-on glucose-lowering agents?","If an added agent hasn't cut HbA1c by at least 0.5% after 3 months, consider stopping it (never metformin) and trying something else. If targets aren't met on two agents at adequate doses, escalate or refer."],
["bgl","Metformin renal dosing ceilings?","Contraindicated eGFR &lt;30. Dose ceilings: 2 g daily at CrCl 60–90, 1 g at 30–60, 500 mg at 15–30. Otherwise: 500 mg 1–3 times daily up to max 3 g. GI effects, B12 malabsorption (check B12 at least every 12 months), rare lactic acidosis."],
["bgl","GLP-1 regimens for type 2 diabetes — dulaglutide, liraglutide, semaglutide?","<b>Dulaglutide</b> (GFR ≥15): 1.5 mg SC once weekly, no titration. <b>Liraglutide</b> (GFR ≥15): 0.6 mg daily × 1 week → 1.2 mg; max 1.8 mg daily. <b>Semaglutide</b> (GFR ≥30): 0.25 mg weekly × 4 weeks → 0.5 mg; max 1 mg weekly. Once-weekly agents take 6–8 weeks to reach maximum effect. Never withdraw from the pen into a syringe. Diabetes doses are well below weight-management doses."],
["bgl","Two combination rules from the ADS algorithm?","Never combine a DPP-4 inhibitor with a GLP-1RA. GLP-1RA with SGLT2i is not a PBS-approved combination for type 2 diabetes."],
["bgl","Name four components of the diabetes Annual Cycle of Care with frequencies.","Any four of: HbA1c 3-monthly if unstable, 6-monthly if stable · BP every review · feet every 1–12 months by risk · eyes every 2 years · dental every 12 months · uACR, eGFR and lipids every 12 months · weight and waist every 6 months · nutrition/activity/medication review/smoking/psychosocial every 12 months."],
["bgl","Drugs that raise glucose, and the two that mask hypoglycaemia?","Raise glucose: glucocorticoids, antipsychotics, calcineurin inhibitors, somatropin, high-dose thiazides. Mask hypoglycaemia warning signs: beta-blockers; alcohol also lowers glucose and masks warnings."],
["wt","BMI classification and waist circumference risk thresholds?","BMI: 18.5–24.9 healthy · 25.0–29.9 overweight · 30.0–34.9 class I · 35.0–39.9 class II · ≥40 class III. Waist (increased / substantially increased): men ≥94 / ≥102 cm, women ≥80 / ≥88 cm. Lower thresholds for some Asian populations. Waist is the better predictor — it reflects central visceral adiposity BMI can't see."],
["wt","What is the waist-to-height ratio rule, and why is it useful?","Waist-to-height ratio ≥0.5 indicates increased risk — your waist should be less than half your height. It needs no ethnic-specific adjustment, making it the most portable single measure across a diverse patient population."],
["wt","RED, LED and VLED — define each and when to use it.","<b>RED</b> (~2000–4000 kJ/day deficit): modest deficit, balanced nutrition — first-line for many. <b>LED</b> (~4200–5000 kJ/day total): structured plans or partial meal replacement — a step up when RED alone hasn't hit target. <b>VLED</b> (&lt;3300 kJ/day total): formulated meal replacements — when lifestyle has failed, rapid loss is indicated, severe obesity, or pre-bariatric surgery; needs careful monitoring and MDT support."],
["wt","VLED and diabetes — the interaction to know?","Patients on insulin or sulfonylureas risk hypoglycaemia when calorie intake drops sharply; those on SGLT2 inhibitors risk euglycaemic ketoacidosis when carbohydrate intake falls markedly. Doses must be adjusted and glucose monitored closely before starting a VLED — a core pharmacist contribution."],
["wt","Under the Queensland obesity guideline: which of these are do-not-treat/refer, treat-and-refer, or manageable? (a) BMI 33 with hypertension (b) BMI 42 (c) 68-year-old BMI 31 (d) BMI 28 with 4% loss after 12 weeks of lifestyle.","(b) and (d) are do-not-treat/refer: BMI &gt;40, and inadequate response (&lt;5% loss after 12 weeks). (c) is treat-and-refer — age over 65 is on the concurrent-referral list, not an exclusion. (a) can be managed provided the hypertension is not unmanaged and requiring specialist care."],
["wt","Semaglutide (Wegovy) titration for weight management, and the single most important counselling point about stopping?","SC once weekly, escalating every 4 weeks: 0.25 → 0.5 → 1 → 1.7 → maintenance 2.4 mg (7.2 mg an option after &gt;4 weeks at 2.4 mg if baseline BMI &gt;30). Delay the increase if GI effects are significant. Critical point: weight is regained when treatment stops — obesity is chronic and relapsing; this is long-term therapy, not a course."],
["wt","Weight pharmacotherapy stopping rules — orlistat, phentermine, naltrexone/bupropion, liraglutide?","<b>Orlistat</b> 120 mg up to tds with main meals (skip if no fat in meal; reduces vitamins A/D/E/K — supplements 2 h apart). <b>Phentermine</b> 15 mg mane, max 40 mg — short-term only, up to 12 weeks; raises BP and HR. <b>Naltrexone/bupropion</b> — stop if &lt;5% loss at 16 weeks. <b>Liraglutide</b> 3 mg — stop if &lt;5% loss at 12 weeks on maintenance."],
["wt","A concrete number to motivate a patient who feels 5% weight loss sounds trivial?","A 1% body weight reduction lowers systolic BP by about 1 mmHg. Also: weight loss ≥10% may allow reduction or cessation of glucose-lowering medication; even &gt;5% improves control and can produce remission, especially within 6 years of diagnosis."],
["wt","Medicines to ask about by name that induce weight gain?","Insulin, sulfonylureas, antipsychotics, antidepressants, mood stabilisers (lithium, sodium valproate), corticosteroids, some hormonal therapies — plus OTC products, protein powders and supplements."],
["wt","Australian Obesity Management Algorithm targets by BMI band?","BMI 30–40 without complications → target 10–15% loss, supervised lifestyle first. BMI 30–40 with complications OR BMI &gt;40 without complications → 10–15%, intensive intervention (VLED or pharmacotherapy + diet). BMI &gt;40 with complications → &gt;15%, specialist referral. Bariatric surgery (NHMRC): BMI &gt;40; BMI 35–39.9 with complications; BMI 30–34.9 with poorly controlled T2DM and CV risk."]
);

/* ---------- C. Polypharmacy & CKD case study: flashcards ---------- */
COURSE_CARDS.push(
["safe","DC (76, eGFR 46) is on celecoxib most days. Build the case against it — how many arguments?","Five, from five directions: (1) NSAIDs reduce renal methotrexate clearance — marrow suppression, mucositis, hepatotoxicity at MTX 20 mg weekly; (2) triple whammy with extra layers — irbesartan + HCTZ + spironolactone + SGLT2i; (3) documented carotid plaque — NSAID CV risk; (4) possible HFpEF — NSAID fluid retention; (5) bleeding — clopidogrel + celecoxib + venlafaxine with a rising urea. None decisive alone; the convergence is what makes the recommendation solid."],
["safe","Which PPIs are preferred with clopidogrel, and which are avoided?","Clopidogrel is activated by CYP2C19. Avoid omeprazole and esomeprazole; rabeprazole and pantoprazole are preferred. Get into the habit of noticing what the prescriber got right, not only problems."],
["safe","Fluconazole is restarted for a patient on celecoxib. What interaction lands on top of the methotrexate problem?","Fluconazole inhibits CYP2C9 and celecoxib is a CYP2C9 substrate — roughly doubling celecoxib exposure."],
["htn","Urea 14.4, creatinine 103. What does the urea:creatinine ratio tell you, and what is the mechanism?","Ratio ≈140 (urea mmol/L ÷ creatinine converted to mmol/L). Above about 100 suggests a pre-renal picture. When perfusion drops, the proximal tubule reabsorbs more sodium and water and urea follows passively; creatinine is not reabsorbed, so urea climbs faster. One of very few routine results that reports on volume status rather than damage — then read the medicine list. Exclude other causes: high protein intake, corticosteroids, catabolic states, GI blood loss."],
["htn","DC is on four antihypertensives with BP 123/72. Which agent do the biochemistry results point at removing, and why?","Hydrochlorothiazide — four lines converge: (1) contributing to volume depletion (widening urea:creatinine ratio); (2) sodium was 133 in May — thiazide hyponatraemia is commonest in older women; (3) urate 0.43 — thiazides raise it; (4) thiazides lose efficacy as eGFR falls. Switch irbesartan/HCTZ 300/25 to irbesartan 300 alone — keeps the RAS blockade needed for albuminuria while taking a diuretic out of the triple whammy."],
["reas","eGFR vs creatinine clearance for dosing — DC's numbers by each method, and which weight do you trust least?","CKD-EPI eGFR 46 · de-indexed to her BSA ~49 · Cockcroft-Gault actual weight (84 kg) 54 · adjusted (~62 kg) 40 · ideal (~47 kg) 30 mL/min. Thirty to fifty-four from the same patient, same sample. Actual body weight overestimates in obesity (creatinine comes from muscle, not fat) — trust it least. Working range 40–50; in a 76-year-old on this combination, take the lower end. Always state which weight you used."],
["safe","Three dosing thresholds decided by DC's renal function: rosuvastatin, fluconazole, duloxetine?","<b>Rosuvastatin:</b> 40 mg not recommended below CrCl 60 — she is below 60 by every method; max 20 mg. <b>Fluconazole:</b> halve the maintenance dose below CrCl 50. <b>Duloxetine:</b> not recommended below CrCl 30 — on ideal body weight she sits exactly on the line."],
["safe","Which renally-cleared drug gets missed most often in this case, and what is the adjustment?","Venlafaxine. The PI advises reducing the daily dose by around 25% where GFR is 10–70. It doesn't look renally cleared and the adjustment is a percentage, so software rarely flags it. Second consequence: venlafaxine raises BP dose-dependently, so an unadjusted dose may be part of why she needs four antihypertensives. At eGFR &lt;60, work the whole list — the one that was missed is rarely the one you expected."],
["bgl","DC's eGFR fell 54 → 53 → 46 over 3.5 months after starting an SGLT2 inhibitor. Three explanations, and the one test that separates them?","(1) The expected SGLT2i dip — haemodynamic fall of ~3–5 mL/min in the first weeks, then plateaus; benign, not a reason to stop. (2) Volume depletion. (3) Real progression — but diabetic/hypertensive kidney disease rarely moves this fast. A repeat UEC in 2–4 weeks separates all three. And when you dose against a number that is moving, put a review date on it."],
["htn","Kidney Health Australia nephrology referral trigger for a falling eGFR?","A sustained fall of 25% or more, or 15 mL/min, within twelve months. DC lost 8 points (~15%) in 3.5 months — not there yet, but inside the year at this rate. CKD stage 3a with microalbuminuria sits in the high-risk band: review every 3–6 months."],
["lipid","Why can't DC's LDL be calculated, and what do you use instead?","Friedewald is invalid above triglycerides of about 4.5 mmol/L — hers is 6.14, so the TG÷2.2 term overestimates VLDL and drives LDL towards zero (0.49 — not real). Report that and you've told someone with carotid plaque their LDL is excellent. Use non-HDL cholesterol, and ask for a direct LDL or ApoB. Her TC:HDL ratio of 2.9 flatters her the same way — a high HDL hides remnant cholesterol. When two derived measures both reassure wrongly, suspect the derivation."],
["lipid","DC needs her rosuvastatin 40 mg changed for renal function. Why is rosuvastatin 10 + ezetimibe the trap, and what is the better move?","Rosuvastatin 10 + ezetimibe roughly matches rosuvastatin 40 alone — leaving her exactly where she is. Rosuvastatin 20 + ezetimibe 10 is better: ezetimibe adds ~20% while halving the statin costs ~6%, so she ends up ahead. RACING supports moderate-intensity statin + ezetimibe over high-intensity statin alone, with fewer stopping for intolerance. Recheck at 6–8 weeks with direct LDL or ApoB — a substitution you never follow up is just a reduction with extra steps."],
["reas","The swab was collected 4 June; diabetes was diagnosed in June; dapagliflozin came after. What does that do to the reason given for today's SGLT2 switch?","It overturns it. The candidiasis predated the drug, so dapagliflozin cannot have caused it — recurrent thrush is a presenting feature of undiagnosed diabetes. The switch to empagliflozin is unlikely to fix her symptoms (thrush is a class effect anyway), and telling her it will sets her up to stop the drug when it 'fails'. Before you accept that a medicine caused a symptom, check the dates."],
["reas","DC's potassium is normal (4.7 → 4.4 → 4.3) on an ARB + spironolactone + NSAID at eGFR 46. Reassured?","No — it's a trap. A normal potassium says the combination is tolerated at rest; it says nothing about what happens when she gets gastro, because hyperkalaemia here is usually precipitated rather than gradual. The answer is the sick day plan, not more frequent potassium checks. A normal result under stable conditions says nothing about behaviour under stress."],
["safe","Which medicines does DC withhold during an acute dehydrating illness?","Six agents in five products: metformin, empagliflozin, irbesartan, hydrochlorothiazide, spironolactone and celecoxib. In her it is overdue — she already has a pre-renal picture on a normal day. Write it down; don't rely on a verbal instruction given to someone who will be unwell when she needs to remember it."],
["reas","Someone calculated DC an absolute CVD risk of 8%, and she is on clopidogrel. What is the contradiction?","Absolute risk calculators are primary prevention tools — not used in people with known CVD, who are treated as high risk without an estimate. Running the calculator asserts she has none; the clopidogrel asserts she does. The 2021 CTA settles it: 50% stenosis of the right internal carotid from calcified plaque is documented atherosclerosis. The clopidogrel has an indication; the 8% should be set aside. (The two small aneurysms are not atherosclerotic markers — they matter for BP, not lipid targets.)"],
["bgl","Set DC's HbA1c target and retest interval, with the reasoning.","7.0% or under. Age, CKD and polypharmacy argue looser — but she was diagnosed 3 months ago (short duration is where early control pays off) and she is on nothing that can cause hypoglycaemia, which is the usual reason for relaxing a target. Relax only if getting there needs a sulfonylurea or insulin. Retest 3-monthly while above target or after any change, 6-monthly once stable. Caveat: HbA1c underestimates as CKD advances (shortened red cell survival, anaemia) — if it stops matching her glucose readings, use a glucose profile."],
["bgl","DC needs a third glycaemic agent. Which class, and what is the reasoning?","A GLP-1 receptor agonist. The algorithm picks add-ons by comorbidity first, not by HbA1c-lowering power: CKD with albuminuria → SGLT2i (already on); possible HFpEF → SGLT2i (already); established atherosclerosis → GLP-1RA or SGLT2i with proven CV benefit; obesity BMI 35.4 → GLP-1RA (unaddressed). It also helps triglycerides and weight, with no hypo risk and no renal dose limit. A sulfonylurea would be wrong on hypoglycaemia and weight."],
["reas","DC thinks clopidogrel is for her 'stiff heart'. How do you correct her without prompting her to stop it?","What a patient says about why they take a drug is unreliable as attribution but useful as a lead. 'Stiff heart' is how patients describe diastolic dysfunction — HFpEF may be the real reason for her spironolactone, so get the full echo report rather than dismissing her. Correct with something like: 'You're right that there's something going on with your heart — and there's also something in the artery in your neck that this tablet is protecting you from.' Fixes the belief, keeps her on the drug. She also needs stroke symptoms and amaurosis fugax explained — a pharmacist job, not a referral."],
["htn","Amlodipine ankle oedema — why doesn't a diuretic fix it, and what does?","Dihydropyridines dilate the precapillary arteriole while the postcapillary venule stays put, so capillary hydrostatic pressure rises and fluid shifts to the interstitium with total body sodium and water normal. It is not fluid overload — diuresing produces volume depletion and RAAS activation and does nothing for the ankles. What works: reduce or stop the amlodipine, adequate RAS blockade, or lercanidipine (lower oedema rate), plus elevation and compression."],
["safe","Why is the missing FBE the single result most worth chasing in DC's case?","Two reasons. Her urea is climbing disproportionately, and GI blood loss does that too (digested haemoglobin is absorbed as a protein load) — she is on an antiplatelet, an NSAID at increasing frequency and an SNRI. A haemoglobin either settles that or changes the whole case. It is also the monitoring test for the methotrexate complication that matters most (marrow suppression). Notice what was requested and is missing, not only what is present and abnormal."],
["reas","Rank the pain differential for DC's aches, and what discriminates?","(1) Statin-associated muscle symptoms — switched simvastatin 40 → rosuvastatin 40 mid-May, when it started; (2) osteoarthritis at BMI 35.4, age 76; (3) gout/hyperuricaemic arthropathy — urate 0.43 on a thiazide with falling renal function; (4) hypothyroidism — would tie together aches, TG 6.14 and rising HbA1c, and raises statin myopathy risk; never tested; (5) rheumatoid flare — unlikely, on MTX with normal ESR/CRP; (6) B12 — excluded. CK, TSH, vitamin D and repeat urate discriminate; a 2–4 week statin washout settles the leading hypothesis. Statin myalgia leads by elimination — say so, because it tells you how much weight the conclusion will bear."],
["safe","DC's sodium was 133 in May, 138 now. Which medicines put her at risk, and what probably corrected it?","Thiazide, spironolactone and venlafaxine all contribute to hyponatraemia — and it actually happened to her, so it's not theoretical. The likeliest corrector is the SGLT2 inhibitor, which raises serum sodium through osmotic diuresis. If the empagliflozin ever came out while the thiazide and venlafaxine stayed, she would be exposed again."],
["lipid","Isolated GGT rise (48, 49, 48) with normal ALT/AST/ALP/bilirubin — what does it suggest, and which three decisions does it touch here?","Non-specific; the working differential is alcohol, hepatic steatosis (BMI 35.4, diabetes) and medicines. It touches: (1) alcohol as a major modifiable cause of her TG 6.14 — two mildly abnormal results pointing the same way are worth more than either alone; (2) ongoing methotrexate at 76; (3) duloxetine is avoided in heavy alcohol use — ask before proposing the switch, not after."]
);

/* ---------- Search corpus entries for the new material ---------- */
(function(){
  var SRC_A = "Weeks 1-2 MCQ quiz (colleague)";
  var SRC_B = "Weeks 3-4 study notes (colleague)";
  var SRC_C = "Polypharmacy CKD case study (N Eltom)";
  function strip(h){ return String(h).replace(/<[^>]*>/g, " "); }
  var base = 128; /* COURSE_MCQ length before this extension */
  for (var i = base; i < COURSE_MCQ.length; i++)
    window.__CORPUS__.push({c: COURSE_MCQ[i][0], s: SRC_A,
      t: strip(COURSE_MCQ[i][1]) + " " + strip(COURSE_MCQ[i][4])});
  var baseC = 252; /* combined cards length before this extension */
  var all = S2_CARDS.concat(COURSE_CARDS);
  for (var j = baseC; j < all.length; j++)
    window.__CORPUS__.push({c: all[j][0], s: (j - baseC < 34 ? SRC_B : SRC_C),
      t: strip(all[j][1]) + " " + strip(all[j][2])});
})();
/* note: Weeks 3-4 block = 34 cards, case-study block = 24 cards */

/* ============================================================================
   LINKS — categorised resource directory (added 12 Sep 2026)
   Top level, outside the IIFE above, so `LINKS` is a global for index.html.
   Anchors only: nothing here fires a network request until the user taps it,
   so the app still works fully offline.
   Every URL below was either supplied by Uzair from course materials or
   verified before being added. Do not add a URL you have not opened.
   Shape: {id, name, blurb, items:[{n, u, w, t}]}
     t = tier badge: "Governs practice" | "AU guideline" | "Tool" |
                     "Drug reference" | "Background"
   ========================================================================= */
var LINKS = [
  {id:"start", name:"Start here — what governs what you may do", blurb:"The pilot protocols are the document that decides whether you may act. Guidelines tell you what is clinically appropriate; the protocol tells you what is within your scope. When they differ, scope wins.", items:[
    {n:"QLD pilot — clinical protocols (all conditions)", u:"https://www.health.qld.gov.au/clinical-practice/guidelines-procedures/community-pharmacy-pilots/resources/clinical/protocols", w:"Eligibility, exclusions, what you may prescribe, referral criteria. Updated 7 April 2026 — check you are reading the current version.", t:"Governs practice"},
    {n:"QLD pilot — chronic conditions handbook", u:"https://www.health.qld.gov.au/__data/assets/pdf_file/0012/1451001/chronic-conditions-pilot-handbook.pdf", w:"How the pilot operates around the protocols: documentation, notification, the service model.", t:"Governs practice"},
    {n:"QLD pilot — all clinical resources", u:"https://www.health.qld.gov.au/clinical-practice/guidelines-procedures/community-pharmacy-pilots/resources/clinical", w:"Forms, consent, referral templates and supporting documents.", t:"Governs practice"},
    {n:"QLD pilot — about", u:"https://www.health.qld.gov.au/clinical-practice/guidelines-procedures/community-pharmacy-pilots/about", w:"Scope of the pilot and which programs exist. Useful orientation for an assignment intro.", t:"Governs practice"}
  ]},
  {id:"cvdrisk", name:"Absolute CVD risk", blurb:"Risk band decides the treatment threshold, so this comes before any drug decision. Remember the two frameworks use different band labels for the same numbers.", items:[
    {n:"AusCVDRisk calculator", u:"https://www.cvdcheck.org.au/calculator", w:"The calculator itself. Use CLINIC readings — home or ambulatory figures underestimate risk.", t:"Tool"},
    {n:"2023 Australian CVD risk guideline", u:"https://www.cvdcheck.org.au/", w:"The guideline behind the calculator. Supersedes the 2012 absolute risk guidelines.", t:"AU guideline"},
    {n:"Heart Foundation — CVD risk guideline hub", u:"https://www.heartfoundation.org.au/for-professionals/guideline-for-managing-cvd", w:"Heart Foundation landing page for the 2023 guideline and calculator.", t:"AU guideline"}
  ]},
  {id:"htn", name:"Hypertension", blurb:"The 2016 Heart Foundation guideline is what the module quizzes are built on. The QLD protocol is what decides whether you may treat.", items:[
    {n:"Heart Foundation — hypertension (professionals)", u:"https://www.heartfoundation.org.au/for-professionals/hypertension", w:"The 2016 guideline for diagnosis and management. Initiation thresholds by risk band, targets, the Figure 6.1 and 6.2 algorithms.", t:"AU guideline"}
  ]},
  {id:"lipid", name:"Lipids and dyslipidaemia", blurb:"Reach for the Heart Foundation toolkit page to CHOOSE an agent; reach for the QLD protocol to check whether you may prescribe it.", items:[
    {n:"Heart Foundation — pharmacological lipid management", u:"https://www.heartfoundation.org.au/heart-health-check-toolkit/pharmacological-lipid", w:"Selecting a lipid-lowering medicine: agent choice, intensity, targets. This is the one for the question about choosing a lipid medicine.", t:"AU guideline"},
    {n:"QLD pilot — dyslipidaemia protocol (PDF)", u:"https://www.health.qld.gov.au/__data/assets/pdf_file/0014/1451102/cvd-dyslipidaemia-protocol.pdf", w:"Eligibility, exclusions, what a pharmacist may prescribe under the Lipid Modification Program, and referral triggers.", t:"Governs practice"}
  ]},
  {id:"bgl", name:"Blood glucose and type 2 diabetes", blurb:"The ADS algorithm is the escalation map. The QLD protocol is the scope boundary. They answer different questions — do not substitute one for the other.", items:[
    {n:"ADS — Australian T2D glycaemic management algorithm (June 2024)", u:"https://www.diabetessociety.com.au/updated-t2d-algorithm-june-2024/", w:"How to ESCALATE treatment: monotherapy to dual to multiple therapies, with the PBS combination rules. This is the one for the escalation question.", t:"AU guideline"},
    {n:"Diabetes Australia — health professional guidelines", u:"https://www.diabetesaustralia.com.au/health-professional-guidelines/", w:"Guideline hub, including the Living Evidence Guidelines in Diabetes that the ADS algorithm is read alongside.", t:"AU guideline"}
  ]},
  {id:"asthma", name:"Asthma", blurb:"", items:[
    {n:"Australian Asthma Handbook", u:"https://www.asthmahandbook.org.au/", w:"Australia's national asthma guidelines. Stepwise management, device technique, action plans.", t:"AU guideline"},
    {n:"Asthma and COPD overlap", u:"https://www.asthmahandbook.org.au/clinical-topics/asthma-and-copd", w:"For the patient who does not sit cleanly in one condition — relevant to the breathless-smoker OSCE station.", t:"AU guideline"}
  ]},
  {id:"copd", name:"COPD", blurb:"", items:[
    {n:"COPD-X Plan", u:"https://copdx.org.au/", w:"Australia and New Zealand COPD guidelines. Updated quarterly, so check the version.", t:"AU guideline"},
    {n:"COPD-X Handbook (Lung Foundation)", u:"https://lungfoundation.com.au/support-resources/resource-hub/copd-x-handbook/", w:"Point-of-care summary of COPD-X, mobile friendly. This is the one to have open during a consultation.", t:"AU guideline"},
    {n:"Lung Foundation — clinical tools and resources", u:"https://lungfoundation.com.au/lung-diseases/copd/health-professionals/clinical-tools-and-resources/", w:"Action plans, device technique checklists, patient-facing material.", t:"AU guideline"}
  ]},
  {id:"cultural", name:"Culturally safe care", blurb:"Directly assessed — there is an OSCE station on culturally safe shared decision-making. Cultural safety is judged by the person receiving care, not by the clinician providing it.", items:[
    {n:"NACCHO and RACGP — National guide to preventive healthcare for Aboriginal and Torres Strait Islander people (4th ed)", u:"https://www.naccho.org.au/", w:"Screening recommendations, preventive healthcare, risk factor management. The 324-page fourth edition is in your uploads.", t:"AU guideline"},
    {n:"Australian Indigenous HealthInfoNet", u:"https://healthinfonet.ecu.edu.au/", w:"Epidemiology, health information, culturally appropriate resources. Good for the statistics an assignment intro needs.", t:"AU guideline"},
    {n:"Diabetes Australia — Aboriginal and Torres Strait Islander resources", u:"https://www.diabetesaustralia.com.au/aboriginal-torres-strait-islander-people/", w:"Culturally tailored patient education material for diabetes.", t:"AU guideline"},
    {n:"Johns Hopkins Center for Indigenous Health — Together on Diabetes", u:"https://cih.jhu.edu/together-overcoming-diabetes-health-through-coaching-and-culture/", w:"Coaching and culture model for diabetes care. Useful framing, but a United States program — do not cite it as Australian practice.", t:"Background"}
  ]},
  {id:"assess", name:"Assessment and measurement", blurb:"Week 3 asks you to measure and interpret, not just to prescribe. These are the references the course names for doing it correctly.", items:[
    {n:"Dept of Health, Disability and Ageing — BMI and waist measurement", u:"https://www.health.gov.au/topics/overweight-and-obesity/bmi-and-waist", w:"How to measure and interpret waist circumference and BMI. The course names this specifically as the standard to measure against.", t:"AU guideline"},
    {n:"Heart Foundation — BMI calculator", u:"https://www.heartfoundation.org.au/BMI-calculator", w:"Quick BMI calculation during a consultation.", t:"Tool"}
  ]},
  {id:"path", name:"Interpreting pathology", blurb:"Reference level, treatment target and exclusion threshold are three different lines. Know which one a question is asking about before you answer it.", items:[
    {n:"Pathology Tests Explained — lipid profile", u:"https://ptex.au/ptests.php?q=Lipid+profile+%28cholesterol+and+triglycerides%29", w:"Australian plain-language explanation of what each lipid test measures and why it is ordered. Good for explaining a result to a patient.", t:"AU guideline"},
    {n:"Victor Chang — high cholesterol", u:"https://www.victorchang.edu.au/heart-disease/high-cholesterol", w:"Lab flagging levels and on-treatment targets in table form. Patient-facing, and its risk-band LABELS do not match the protocol — see the flashcard on this.", t:"Background"},
    {n:"Glucose and HbA1c unit conversion", u:"https://heartcare.sydney/glucose-unit-conversion/", w:"Converting between mmol/mol and %, and mmol/L and mg/dL. Useful when a source quotes HbA1c in the units you do not use.", t:"Tool"},
    {n:"HEART UK — HDL cholesterol", u:"https://www.heartuk.org.uk/educational-content/hdl-cholesterol", w:"Background on HDL biology. A United Kingdom charity — the science transfers, the thresholds and guidelines do not. Do not quote its numbers as Australian practice.", t:"Background"}
  ]},
  {id:"ref", name:"Medicines reference", blurb:"None of these are in your uploaded sources, so anything you take from them has to be cited to them. When a question needs renal dosing, a full contraindication list or an interaction table, this is where it lives.", items:[
    {n:"Australian Medicines Handbook (AMH Online)", u:"https://amhonline.amh.net.au/", w:"Doses, renal and hepatic adjustment, contraindications, interactions, practical prescribing notes. Subscription.", t:"Drug reference"},
    {n:"Therapeutic Guidelines (eTG)", u:"https://www.tg.org.au/", w:"Condition-based treatment guidance. The hypertension protocol explicitly refers you here for secondary causes. Subscription.", t:"Drug reference"},
    {n:"PBS", u:"https://www.pbs.gov.au/", w:"Subsidy status, restrictions, authority requirements, streamlined codes. Decides whether your clinically correct choice is actually affordable.", t:"Drug reference"},
    {n:"TGA", u:"https://www.tga.gov.au/", w:"Product information, approved indications, boxed warnings, safety alerts and shortages.", t:"Drug reference"}
  ]}
];
