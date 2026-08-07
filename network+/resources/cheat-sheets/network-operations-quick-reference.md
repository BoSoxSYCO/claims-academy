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
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 12_
