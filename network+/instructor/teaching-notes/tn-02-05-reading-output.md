# Teaching Notes — NA-M02-L05 "Reading Command Output Without Fear"

> 🔒 Instructor materials. Pairs with the lesson and `wb-02-05-answers.md`.

## Objective in one line
Learners can scan command output for the key line and read the ping summary calmly.

## Where this sits
Fifth and final lesson of Module 02 — the confidence capstone for the command line. Ties together 02-03 (terminal) and 02-04 (commands) by teaching how to *read* what commands return. Time: ~25 min + ~40 min worksheets/lab.

## The anchor
The **receipt / nutrition-label analogy**: scan for one line (Total / key line); everything else is background. The label:value structure is the core idea.

## Common misconceptions (and the fix)
- "I must understand every line." → Fix: know your key line, scan, ignore the rest.
- Missing the ping summary. → Fix: scroll to the bottom "Packets:" line — that's the result.
- Grabbing the wrong section's address. → Fix: look under the connection you're using (Wi-Fi vs. Ethernet).

## Pacing tips
- This is a confidence lesson, not a deep-parse lesson. Celebrate how fast scanning becomes.
- Reinforce that understanding grows over the course; they don't need to know every line today.

## How CompTIA tests it
The exam shows output and asks what it means. Finding the key line *is* the tested skill.

## Support ideas
- Hand out printed ipconfig/ping output; have learners highlight only the key lines.

## Extension ideas
- Read the min/max/average times in a ping summary; discuss "time=2ms" (fast) vs. high times.

## Materials checklist
- Lesson · `dgm-02-05-reading-output-01.svg` · worksheets `wb-02-05-*` · `quiz-02-05-knowledge-check.md`
- Answer key `wb-02-05-answers.md` · glossary updated (label, value, section, key line, packet loss) · cheat sheet updated
- Screenshots to capture: ipconfig with key lines highlighted; ping summary highlighted; a receipt with Total circled.

## Module 02 wrap
With this lesson, all five Module 02 lessons are Published. Learners can navigate Windows, use the terminal, run ipconfig/ping/cd/dir, and read output. Ready for the Unit 1 review and Module 03 (numbers & binary).

---
_NetworkAcademy+ · Teaching Notes 02-05 · CompTIA Network+ N10-009_
