# Teaching Notes — NA-M04-L05 "Client-Server vs. Peer-to-Peer"

> 🔒 Instructor materials. Pairs with the lesson and `wb-04-05-answers.md`.

## Objective in one line
Learners compare client-server and peer-to-peer, name a strength/weakness of each, and pick the right model for a scenario.

## Where this sits
Fifth lesson of Module 04. Reuses client/server from 01-06 and nodes/links from 04-02. Distinct from topology (04-04): model answers "who serves whom," topology answers "what shape." Feeds performance terms (04-06). Time: ~25 min + ~40 min worksheets/lab.

## The anchor
**Restaurant vs. potluck.** Restaurant = client-server (one kitchen serves all). Potluck = peer-to-peer (everyone brings and shares).

## Common misconceptions (and the fix)
- "P2P has a hidden server." → Fix: true P2P peers share directly, no central server.
- "Client-server is always better." → Fix: for a few devices, P2P is cheaper and simpler.
- "Model = topology." → Fix: a star can be client-server OR P2P; they answer different questions.
- "A peer only asks." → Fix: a peer can be client AND server at once.

## Pacing tips
- The spot-it-in-your-apps lab (4.5.E) is the payoff — have everyone sort five real apps.
- Keep separating "model" from "topology" explicitly; learners blur them.

## How CompTIA tests it
Model comparison and scenario selection; single-point-of-failure language; identifying the model from a description.

## Support ideas
- Re-use restaurant vs. potluck for every example a learner raises.

## Extension ideas
- Hybrid apps (P2P data with a central login/coordination server) for fast learners.

## Materials checklist
- Lesson · `dgm-04-05-client-server-p2p-01.svg` · worksheets `wb-04-05-*` (incl. hands-on observation) · `quiz-04-05-knowledge-check.md`
- Answer key `wb-04-05-answers.md` · glossary updated (client-server, peer-to-peer, peer, web server, single point of failure, scale) · cheat sheet updated
- Photos to capture: a server in a rack (client-server); two laptops sharing a file (P2P); a browser on a website (client).

---
_NetworkAcademy+ · Teaching Notes 04-05 · CompTIA Network+ N10-009_
