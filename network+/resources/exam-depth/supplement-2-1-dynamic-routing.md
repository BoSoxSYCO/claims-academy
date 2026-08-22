# Exam-Depth Supplement — Objective 2.1: Routing technologies

> **What this is:** a short, exam-depth add-on that goes past the beginner lessons. Read it when you are getting ready for the exam.
> **Objective:** N10-009 **2.1** — Explain characteristics of routing technologies. **Builds on:** Module 11, Lesson 05 (routing basics: static vs. dynamic).

## Why this matters

Lesson 11-05 taught that routers can be given routes by hand (static) or learn them automatically (dynamic). The exam names the dynamic **routing protocols** and asks how a router picks the best path. You won't configure them here, but you must know their traits.

## Key words

- **Routing protocol** — The language routers use to share what networks they can reach.
- **Metric** — The "cost" a protocol uses to rank routes (lower is better).
- **Convergence** — How fast all routers agree again after a change.

## Static vs. dynamic (quick recap)

| | Static | Dynamic |
|---|--------|---------|
| Set by | A person, by hand | A protocol, automatically |
| Reacts to failure | No (someone must fix it) | Yes (reroutes on its own) |
| Best for | Small, simple networks | Larger, changing networks |

A **default route** (`0.0.0.0/0`) is a special static route meaning "send anything I don't know here."

## The dynamic routing protocols

| Protocol | Type | Metric (how it ranks paths) | Where used |
|----------|------|-----------------------------|------------|
| **RIP** | Distance-vector | Hop count (max 15) | Small/legacy networks |
| **OSPF** | Link-state | Cost (based on link speed) | Inside one organization |
| **EIGRP** | Advanced distance-vector | Bandwidth + delay | Cisco networks |
| **BGP** | Path-vector | Path/policy (AS path) | Between organizations, the internet |

## Two big splits to remember

- **IGP vs. EGP** — **Interior** Gateway Protocols (RIP, OSPF, EIGRP) run *inside* one organization. **Exterior** Gateway Protocols (**BGP**) run *between* organizations. BGP is what glues the internet together.
- **Distance-vector vs. link-state** — Distance-vector routers share their whole routing table with neighbors ("routing by rumor"). Link-state routers share a map of the links and each compute the best path. Link-state (OSPF) converges faster and scales better.

## How a router chooses when routes overlap

1. **Most specific match wins** — the longest prefix (e.g., `/24` beats `/16`) is used first.
2. **Administrative distance (AD)** — if two *sources* offer a route, the router trusts the lower AD. Rough order: connected (0) < static (1) < EIGRP < OSPF < RIP.
3. **Metric** — among routes from the *same* protocol, the lowest metric wins.

## First-hop redundancy (bonus term)

- **FHRP / VRRP** — Two routers share one virtual gateway IP, so if the active one dies, the standby takes over and hosts keep their default gateway.

> 🎯 **Exam tip:** Know each protocol's one-word identity: **RIP** = hop count, **OSPF** = link-state/cost, **EIGRP** = Cisco, **BGP** = the internet (between AS). And the tie-breakers in order: **longest prefix → lowest AD → lowest metric**.

## Quick check

1. Which routing protocol runs *between* organizations and holds the internet together?
2. Two routes to the same network come from OSPF and from a static route. Which does the router trust, and why?
3. What does OSPF use as its metric?

### Quick-check answers

1. **BGP** (a path-vector, exterior gateway protocol).
2. The **static route** — it has a lower **administrative distance** (1) than OSPF, so the router trusts it more when the prefix length is equal.
3. **Cost**, which is based on link speed (faster links = lower cost).

---
_NetworkAcademy+ · Exam-Depth Supplement · Objective 2.1 (Routing) · CompTIA Network+ N10-009_
