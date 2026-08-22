# Exam-Depth Supplement — Objective 2.4: Physical installation factors

> **What this is:** a short, exam-depth add-on that goes past the beginner lessons. Read it when you are getting ready for the exam.
> **Objective:** N10-009 **2.4** — Explain important factors of physical installations. **Builds on:** Module 06 (cabling), Module 07 (devices), Module 11 (design).

## Why this matters

Network gear is only as reliable as the room it lives in. Bad power, too much heat, or a messy rack causes outages that look like "network problems" but are really building problems. The exam expects you to know what makes a physical install safe, cool, powered, and tidy.

## Key words

- **Rack** — A metal frame that holds gear in a neat stack.
- **Rack unit (U)** — The height measure for rack gear. **1U ≈ 1.75 inches**. A switch might be 1U; a big server, 4U.
- **Grounding (earthing)** — A safe path for stray electricity to flow into the earth instead of into you or the gear.

## Power

- **UPS (Uninterruptible Power Supply)** — A battery that keeps gear running through a short outage and lets it shut down cleanly. Bridges the gap until power returns or a generator starts.
- **PDU (Power Distribution Unit)** — A smart power strip built for a rack; some let you switch outlets on/off remotely and read power use.
- **Dual power supplies** — Two power feeds into one device, so it survives if one supply or circuit dies.
- **Circuit / load planning** — Don't put more gear on a circuit than it can carry, or a breaker trips.

## Environment

- **Temperature and cooling** — Gear makes heat; heat kills gear. Server rooms use **HVAC** (heating, ventilation, air conditioning) and often a **hot aisle / cold aisle** layout so cool air reaches the fronts and hot air is carried away from the backs.
- **Humidity** — Too dry invites static shock; too damp invites corrosion. Aim for a middle range.
- **Fire suppression** — Special systems that put out fire without soaking the electronics (clean-agent gas, not plain water sprinklers, in equipment rooms).

## The rack itself

- **Cabinet vs. open (two-post/four-post) rack** — A cabinet has doors and sides for security and airflow control; open racks are cheaper and easier to reach.
- **Rail and mounting** — Gear screws to rails at the correct U height; heavy items go low so the rack doesn't tip.
- **Weight and floor load** — A full rack is heavy; the floor must take it.

## Cabling and labeling

- **Cable management** — Arms, trays, and Velcro keep cables neat so airflow is clear and changes are easy. Zip-tied too tight can damage cable.
- **Labeling** — Label both ends of every cable and every port. It turns an hour of tracing into a glance.
- **Distance and speed limits** — Copper Ethernet tops out around **100 meters**; go farther or faster with fiber. Plan runs to fit the media (see Module 06).

> 🎯 **Exam tip:** Sort a scenario into the right bucket — **power** (UPS, PDU, dual supply), **environment** (temperature, humidity, fire suppression), **rack/mounting** (U height, weight), or **cabling** (management, labeling, 100 m limit). "Battery that rides through a short outage" = **UPS**. "Rack power strip you can control remotely" = **PDU**.

## Quick check

1. What does a **UPS** do that a **PDU** does not?
2. Why do equipment rooms use hot aisle / cold aisle layouts?
3. About how tall is **1U**, and where should the heaviest gear go in a rack?

### Quick-check answers

1. A **UPS** has a battery that keeps gear running through a power outage; a **PDU** only distributes and (sometimes) monitors/switches power — no battery backup.
2. To keep cool air reaching equipment fronts and route hot exhaust away from the backs, so gear stays within safe temperature.
3. About **1.75 inches**; put the **heaviest gear low** so the rack stays stable and won't tip.

---
_NetworkAcademy+ · Exam-Depth Supplement · Objective 2.4 (Physical installations) · CompTIA Network+ N10-009_
