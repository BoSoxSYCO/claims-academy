---
teaching_notes_for: NA-M12-L02
module: 12
lesson: 02
unit: 9
objective_ids: ["3.1"]
---

# 🔒 Teaching Notes — Lesson 12-02: Monitoring, Logs, SNMP, and Alerts

> Instructor guide. Written so a substitute could teach this cold.

## Learning objective (one line)
Learners describe network monitoring via metrics (SNMP), logs (Syslog severity), and flow data (NetFlow), plus how thresholds trigger alerts.

## Where this sits
- **Before:** 09-05 (SNMP/Syslog first taught) and 12-01 (documentation/baseline). Both hard prerequisites.
- **After:** 12-03 (availability/SLAs), 12-04 (backups/DR/change control), 12-05 (policies).
- Concept + a read-only Windows Event Viewer lab.

## Core facts
- **Monitoring** = continuous, tool-based health watching.
- **SNMP:** manager **polls** (pull) agents; a device sends a **trap** (push) on trouble. **MIB** = item catalog; **OID** = one item's address.
- **Logs → Syslog**, severity **0–7**, **lower = more urgent** (0 Emergency … 7 Debug).
- **Flow data / NetFlow** = who talked to whom, and how much.
- **Threshold** = a limit; crossing it fires an **alert**.

## Common misconceptions (correct both)
1. **"Level 7 is the worst."** No — **0 is worst**; 7 is debug detail. Drill the direction.
2. **"Polling and traps are the same."** No — polling pulls on a schedule; a trap pushes the moment something breaks.

## Prime Directive #7 — accuracy
Windows Event Viewer is genuine; the sample event list is marked **[TO VERIFY ON HARDWARE]** because events vary by machine. Learners record their own. No SNMP/Syslog output is fabricated.

## Pacing (~30 min)
- 5 min — you can't watch it all by hand (WHY).
- 12 min — the three ways to watch (car-dashboard analogy); SNMP poll vs. trap; MIB/OID.
- 5 min — Syslog severity 0–7 (drill the direction).
- 8 min — Event Viewer lab (read real logs).

## How CompTIA tends to test it
- SNMP poll vs. trap; MIB/OID; SNMP versions (v3 = secure) as extension.
- Syslog severity 0–7 direction.
- Thresholds/alerts; flow data vs. packet capture.

## Support / extension
- **Support:** write the 0–7 severity ladder on the board; sort three real Event Viewer entries by urgency.
- **Extension:** SNMP v1/v2c community strings vs. v3 auth/encryption; flow data vs. full packet capture; alert tuning to fight fatigue.

---
_NetworkAcademy+ · Teaching Notes 12-02 · CompTIA Network+ N10-009 · Instructor materials_
