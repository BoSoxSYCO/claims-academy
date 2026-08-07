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
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 12_
