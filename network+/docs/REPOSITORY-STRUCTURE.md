# Repository Structure — NetworkAcademy+

This document explains **where every file lives and why**. The structure is designed so a beginner can navigate it easily *and* a production team can build against it predictably.

---

## The full tree

```
network+/
│
├── README.md                     # Front door: what this is, how to start
│
├── docs/                         # THE BLUEPRINT (planning + standards)
│   ├── PROJECT-PLAN.md           #   mission, roles, pipeline, quality bar
│   ├── CURRICULUM-ROADMAP.md     #   all modules & lessons, exam-mapped
│   ├── MILESTONE-SCHEDULE.md     #   timeline, pace tracks, release plan
│   ├── REPOSITORY-STRUCTURE.md   #   this file
│   ├── NAMING-CONVENTIONS.md     #   naming rules for everything
│   └── STYLE-GUIDE.md            #   writing, diagram & accessibility rules
│
├── modules/                      # THE COURSE — 16 self-contained modules
│   ├── 00-orientation/
│   │   ├── README.md             #   module overview + lesson status board
│   │   ├── lessons/              #   00-01-*.md, 00-02-*.md, ...
│   │   ├── labs/                 #   module-specific hands-on exercises
│   │   ├── assessments/          #   quiz + flashcards for this module
│   │   └── assets/               #   diagrams/photos used ONLY in this module
│   ├── 01-computer-foundations/
│   ├── 02-windows-and-command-line/
│   ├── 03-numbers-and-binary/
│   ├── 04-networking-fundamentals/
│   ├── 05-network-models-osi-tcpip/
│   ├── 06-cabling-and-media/
│   ├── 07-devices-and-switching/
│   ├── 08-ip-addressing-and-subnetting/
│   ├── 09-core-network-services/
│   ├── 10-ports-protocols-and-apps/
│   ├── 11-network-implementation/
│   ├── 12-network-operations/
│   ├── 13-network-security/
│   ├── 14-network-troubleshooting/
│   └── 15-capstone-and-exam-readiness/
│       └── (same 5-part layout as every module)
│
├── labs/                         # THE CONNECTED HOME-LAB TRACK
│   └── home-lab-guide/           #   LAB-A … LAB-CAP, the running build
│
├── assessments/                  # CROSS-COURSE assessments
│   ├── practice-exams/           #   full-length N10-009 practice exams
│   └── flashcards/               #   master flashcard decks (by domain)
│
├── resources/                    # LEARNER REFERENCE MATERIAL
│   ├── glossary/                 #   every key term, plain-language
│   ├── cheat-sheets/             #   ports, subnetting, OSI quick-refs
│   └── reference/                #   objective-map.md, standards tables
│
├── assets/                       # SHARED media used across modules
│   ├── diagrams/                 #   reusable diagrams (SVG preferred)
│   ├── photos/                   #   real-world reference photos
│   ├── icons/                    #   consistent icon set
│   └── templates/                #   lesson/lab/quiz starter templates
│
└── instructor/                   # BEHIND-THE-SCENES (not for first read)
    ├── answer-keys/              #   quiz & exam answers with explanations
    └── teaching-notes/           #   pacing tips, common misconceptions
```

---

## Design decisions (the "why")

### 1. Modules are self-contained
Each module folder holds its **own** lessons, labs, quiz, and module-specific images. A beginner can open one folder and everything they need for that unit is right there — no jumping around.

### 2. Shared vs. local assets
- **Module-specific image?** → lives in `modules/NN-.../assets/`.
- **Reused in 2+ modules** (e.g., the OSI model diagram)? → lives in top-level `assets/diagrams/`.

This prevents duplicate files drifting out of sync.

### 3. The home lab is separate *and* connected
Hands-on module practice lives in each module's `labs/`. The **running, cumulative home-network build** lives in `labs/home-lab-guide/` because it spans many modules — you keep returning to it and adding on.

### 4. Reference material is pulled out front
Glossary, cheat sheets, and the objective map live in `resources/` so a learner can reach them **anytime** without digging into a specific module.

### 5. Instructor material is walled off
Answer keys and teaching notes live in `instructor/` so a learner isn't tempted to peek before trying — and so the "student view" stays clean.

---

## Where a NEW lesson goes (worked example)

Adding lesson **08-05, "Subnetting step by step"**:

| File | Path |
|------|------|
| The lesson text | `modules/08-ip-addressing-and-subnetting/lessons/08-05-subnetting-step-by-step.md` |
| A diagram only this lesson uses | `modules/08-ip-addressing-and-subnetting/assets/dgm-08-05-subnet-split-01.svg` |
| The subnetting cheat sheet (reused) | `resources/cheat-sheets/subnetting-quick-reference.md` |
| The module quiz that tests it | `modules/08-ip-addressing-and-subnetting/assessments/quiz-08-knowledge-check.md` |
| Its answer key | `instructor/answer-keys/quiz-08-answers.md` |

---

## Status tracking

Each module's `README.md` carries a **lesson status board** so anyone can see progress at a glance:

```
| Lesson | Title                        | Status     |
|--------|------------------------------|------------|
| 08-01  | What an IP address is        | Published  |
| 08-02  | IPv4 structure & classes     | In Review  |
| 08-03  | Subnet masks explained       | Drafting   |
| 08-04  | CIDR notation                | Planned    |
```

Status values: `Planned → Drafting → In Review → Published` (defined in the [Project Plan](PROJECT-PLAN.md), Section 7).

---
*Next document: [NAMING-CONVENTIONS.md](NAMING-CONVENTIONS.md)*
