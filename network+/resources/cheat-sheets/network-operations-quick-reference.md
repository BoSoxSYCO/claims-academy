# Cheat Sheet — Network Operations

> A printable quick reference for **Module 12**. Grows as the module's lessons are published.

---

## Documentation (Lesson 12-01)

Documentation is the network's **written memory** — for fixing, learning, and checking.

| Document | Answers | Shows |
|----------|---------|-------|
| **Physical diagram** | How is it wired? | devices, ports, cables |
| **Logical diagram** | How does traffic flow? | IPs, subnets, VLANs |
| **Rack diagram** | Where does gear sit? | rack layout, top to bottom |
| **IPAM** | Which IPs are used? | IP → device table |
| **Asset inventory** | What do we have? | device list (model/serial/location/owner) |
| **Baseline** | Is this normal? | record of normal traffic/speeds/settings |

- **Physical** = trace a cable · **Logical** = trace a packet. Keep **both**.
- **Label both ends** of every cable and port.
- **IPAM** prevents IP conflicts (two devices, one address).
- **Update on every change** — stale docs mislead (worse than none).
- See your own address for IPAM: `ipconfig` (Windows).

> **Remember:** documentation is a building's blueprints, room signs, and directory — anyone can navigate it.

---

## Monitoring, logs, SNMP & alerts (Lesson 12-02)

**Three ways to watch a network:**

| Way | Tool | Answers |
|-----|------|---------|
| **Metrics** | SNMP | how is it doing? |
| **Logs** | Syslog | what happened? |
| **Flow data** | NetFlow | who talked to whom? |

- **SNMP:** manager **polls** (pull) agents · a device sends a **trap** (push) on trouble.
  - **MIB** = catalog of items · **OID** = one item's address.
- **Syslog severity 0–7** — **lower = more urgent:** 0 Emergency, 3 Error, 4 Warning, 7 Debug.
- **Threshold** crossed → **alert** sent. Tune thresholds to avoid "alert fatigue."
- See real logs: Windows **Event Viewer** (Levels: Information / Warning / Error).

> **Remember:** poll pulls on a schedule; a trap pushes the moment something breaks. Severity 0 is worst.

---

## Availability (Lesson 12-03)

| Availability | Nickname | Down/year |
|--------------|----------|-----------|
| 99% | two nines | ~3.65 days |
| 99.9% | three nines | ~8.8 hours |
| 99.99% | four nines | ~53 min |
| 99.999% | five nines | ~5 min |

- **Availability** = share of time up (**uptime** vs. downtime). More nines = less downtime, **much more cost**.
- **Redundancy** = spare part/path (must be **truly separate**) → **high availability**.
- **Failover** = automatic switch to the backup. **Load balancing** spreads work + adds resilience.
- **SLA** = a written uptime promise (e.g., 99.9%).
- **Metrics:** **MTBF** (between failures, higher better) · **MTTR** (to repair, lower better) · **RPO** (data you can lose) · **RTO** (time to recover).
- Nines math: a year ≈ **8,760 hours**; downtime = 8,760 × (1 − uptime%).

> **Remember:** carry a spare (redundancy), swap to it automatically (failover), and promise a level (SLA).

---

## Backups, DR & change control (Lesson 12-04)

**Backup types:** **full** (all) · **incremental** (since last backup) · **differential** (since last full) · **snapshot** (point-in-time).
**3-2-1 rule:** **3** copies · **2** media · **1** off-site.

| DR site | Ready in | Cost |
|---------|----------|------|
| Cold | days | low |
| Warm | hours | medium |
| Hot | minutes | high |

- **RPO/RTO** pick the DR site (from 12-03).
- **Change control:** plan → approve → schedule → change → **rollback** if it breaks.
- Switch rollback = a saved **startup-config** (`copy running-config startup-config`).
- ⚠️ All copies in one building is **not** 3-2-1 — keep 1 off-site.

> **Remember:** copy your data (backups), plan your comeback (DR), change safely (change control).

---

## Common network policies (Lesson 12-05)

A **policy** is a written rule for doing something safely and fairly.

| Policy / term | Covers |
|---------------|--------|
| **AUP** | what people may / may not do on the network |
| **Password policy** | length, complexity, change rules |
| **BYOD** | personal devices on the network |
| **Remote-access policy** | connecting from outside (often a VPN) |
| **Onboarding** | set up a new person's access |
| **Offboarding** | remove a leaver's access + collect gear |
| **NDA** | promise to keep info private |
| **Data-handling / retention** | store, protect, delete; how long to keep |

**Three agreements (don't mix them up):**

| Agreement | What it is |
|-----------|-----------|
| **SLA** | a service-quality promise (e.g., 99.9% uptime) |
| **MOU** | an informal "we'll work together" |
| **SOW** | a detailed list of the work to be done |

- Mnemonic: **MOU** = handshake · **SOW** = job list · **SLA** = quality promise.
- ⚠️ Never skip **offboarding** — remove access the day someone leaves.

> **Remember:** clear written rules (policies) prevent most problems — like clear house rules in a shared home.

---
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 12_
