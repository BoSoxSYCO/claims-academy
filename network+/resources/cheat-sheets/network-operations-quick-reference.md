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
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 12_
