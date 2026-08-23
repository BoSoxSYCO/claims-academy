# Teaching Notes — NA-M04-L06 "Bandwidth, Throughput, and Latency in Plain Words"

> 🔒 Instructor materials. Pairs with the lesson and `wb-04-06-answers.md`.

## Objective in one line
Learners separate bandwidth (max capacity), throughput (actual flow), and latency (delay), and read ms vs. Mbps correctly.

## Where this sits
Sixth and final lesson of Module 04. Uses `ping` from 02-05 (time= is latency) and links from 04-02. Closes Unit 2 foundations; the next module goes physical (Module 05). Objectives 1.2 and 5.3. Time: ~25 min + ~40 min worksheets/lab.

## The anchor
**The highway.** Bandwidth = lanes (capacity). Throughput = cars that actually get through (real flow). Latency = one car's trip time (delay).

## Common misconceptions (and the fix)
- "Bandwidth = throughput." → Fix: bandwidth is the max; throughput is the real, usually lower, flow.
- "Latency is a speed." → Fix: latency is a time (ms), a delay — not Mbps.
- "More bandwidth fixes lag." → Fix: high latency stays high no matter how wide the pipe.
- "ms and Mbps are the same." → Fix: ms = time (latency); Mbps = amount/second (bandwidth/throughput).

## Pacing tips
- The ping + speed-test lab (4.6.E) is the payoff — everyone should see real ms and Mbps.
- Keep pointing at units: ms vs. Mbps is the fastest way to keep the three straight.

## How CompTIA tests it
Bandwidth-vs-throughput wording; latency as a time; diagnosing lag (latency) vs. slow transfer (throughput).

## Support ideas
- Return to the highway picture for every question; label the unit first.

## Extension ideas
- Add jitter and packet loss (from 02-05) as call-quality factors for fast learners.

## Materials checklist
- Lesson · `dgm-04-06-highway-speed-01.svg` · worksheets `wb-04-06-*` (incl. hands-on observation) · `quiz-04-06-knowledge-check.md`
- Answer key `wb-04-06-answers.md` · glossary updated (bandwidth, throughput, latency, millisecond, Mbps, jitter) · cheat sheet updated
- Photos to capture: a speed-test screen (Mbps + ping ms); ping output with time= values; a multi-lane highway.

---
_NetworkAcademy+ · Teaching Notes 04-06 · CompTIA Network+ N10-009_
