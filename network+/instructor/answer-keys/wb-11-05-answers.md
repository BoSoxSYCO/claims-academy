---
answer_key_for: NA-M11-L05
module: 11
lesson: 05
unit: 8
covers: [quiz-11-05, wb-11-05-fill-in-the-blank, wb-11-05-matching, wb-11-05-label-the-diagram, wb-11-05-short-answer, wb-11-05-hands-on-observation, wb-11-05-vocabulary-review, wb-11-05-reflection]
objective_ids: ["2.2"]
---

# 🔒 Instructor Answer Key — Lesson 11-05: Routing Basics — Static vs. Dynamic

> **Instructor-only.** Do not print with student copies. Answers map to N10-009 objective **2.2**.

---

## Quiz 11-05 — answers & explanations

**1. Routing table tells a router → B) which way to send traffic for each destination network.**
MAC addresses (A) are switching (Layer 2); a password (C) and Wi-Fi channel (D) are unrelated.

**2. A static route is → B) typed in by hand and stays fixed.**
Learned routes (A) are dynamic. It isn't a cable (C) or a VLAN (D).

**3. Dynamic routing means → A) routers learn routes from each other and auto-update.**
B is static; C and D describe no routing.

**4. A routing protocol → B) OSPF.**
HTTP (A) is web, DHCP (C) is addressing, SMTP (D) is email — none are routing protocols.

**5. Advantage of dynamic → B) it reroutes automatically when a link fails.**
It does use some bandwidth (not A), does need setup (not C), and runs on routers (not D).

**6. True or false — static route reroutes on its own. → FALSE.**
Static routes are fixed; if the path breaks, traffic fails until a human fixes it. Accept any answer that says false and notes static is manual.

**7. Small, rarely-changing network → B) static.**
Dynamic (A) is overkill; "no routing" (C) and "switching" (D) don't connect networks.

**8. Matching → Static route = B; Dynamic routing = C; Routing protocol = A.**
Full credit requires all three.

**9. Fill in the blank → BGP (Border Gateway Protocol).**

**10. Scenario (sample full-credit answer):**
Use **static** routing — few networks, rarely changing, so it's simple and predictable with no extra traffic. **Reason:** low effort and full control. **Risk:** if the single link/path fails, the static route won't reroute on its own, so traffic drops until it's fixed. Award credit for choosing static + a valid reason + the no-auto-reroute risk.

**Score band:** 9–10 ✅ · 7–8 🟡 review trade-offs · 5–6 🟠 redo static-vs-dynamic table · <5 🔴 reteach with the GPS analogy.

---

## Worksheet 11.5.A — Fill in the Blank (2 pts each)

1. **routing table** &nbsp; 2. **static** &nbsp; 3. **dynamic** &nbsp; 4. **static** &nbsp; 5. **protocol**
6. **next hop** &nbsp; 7. **default** &nbsp; 8. **automatically** &nbsp; 9. **OSPF** &nbsp; 10. **BGP**

**Challenge (+2):** Too many networks to type by hand, and it reroutes automatically when a path changes.

---

## Worksheet 11.5.B — Matching (2 pts each)

**Part 1:** 1. Routing table → **C** · 2. Static route → **A** · 3. Dynamic routing → **B** · 4. Routing protocol → **E** · 5. Next hop → **D**

**Part 2 (S = static, D = dynamic):** 6. **D** · 7. **S** · 8. **D** · 9. **S** · 10. **D**

---

## Worksheet 11.5.C — Label the Diagram (2 pts each)

1. **Static** &nbsp; 2. **Dynamic** &nbsp; 3. **OSPF (or EIGRP/BGP)** &nbsp; 4. **no** &nbsp; 5. **yes** &nbsp; 6. **static** &nbsp; 7. **dynamic**
8. **Networks and how to reach each (next hop)** &nbsp; 9. **The next router a packet is handed to** &nbsp; 10. **The default route**

---

## Worksheet 11.5.D — Short Answer (4 pts each)

1. A routing table lists destination networks and the way to reach each; the router looks up a packet's destination and forwards it accordingly.
2. A static route is entered by hand and stays fixed — good for a small network or one fixed path that rarely changes.
3. Dynamic routing has routers share routes via a protocol (e.g., **OSPF**, EIGRP, or BGP) and update automatically.
4. **Advantage:** auto-reroutes and scales. **Disadvantage:** more setup and some bandwidth/router effort.
5. Static is **written directions** (fixed, wrong if a road closes); dynamic is a **live GPS** (learns roads, reroutes itself).

---

## Worksheet 11.5.E — Hands-on Observation

- **3.** The learner's actual default gateway (from their `0.0.0.0` line).
- **4.** The **default route**.
- **5.** A real local-network line from their table.
- **6.** Automatically (DHCP typically sets a laptop's default route).
- **7./8.** Their count + reasoning (small setup → static-style/local is fine).

> **Accuracy note (Prime Directive #7):** `route print` is a genuine Windows command; the lesson's sample uses documentation-style addresses and the learner records their **own** table. No fabricated device data.

---

## Worksheet 11.5.F — Vocabulary Review (2 pts each)

**Part 1:** 1. Static route → **C** · 2. Dynamic routing → **A** · 3. Routing protocol → **E** · 4. Routing table → **B** · 5. BGP → **D**

**Part 2 (accept close wording):**
6. A common dynamic routing protocol used inside one organization.
7. It's fixed/manual — nothing tells it a link failed, so it doesn't change.
8. The next router a packet is handed to on the way.
9. Small or fixed networks with few, rarely-changing routes.
10. To send all unknown-destination traffic to the gateway.

---

## Worksheet 11.5.G — Reflection

Not graded for correctness. Full marks for honest, complete answers. Item 3 shows whether they can match method to network size.

---
_NetworkAcademy+ · Answer Key 11-05 · CompTIA Network+ N10-009 · Instructor materials_
