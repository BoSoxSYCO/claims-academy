# Cheat Sheet — VLANs & Switching

> A printable quick reference for **Module 11**. Grows as the module's lessons are published.

---

## VLAN basics (Lesson 11-01)

- **VLAN (Virtual LAN)** = a group of switch ports acting as their **own separate network**.
- It splits **one physical switch** into many networks — in **software**, no new hardware.
- Each VLAN is its own **broadcast domain** (broadcasts stay inside it).
- Each VLAN is usually its own **subnet** (e.g., VLAN 10 → `192.168.10.0/24`).

**VLAN numbers:**

| Item | Value |
|------|-------|
| VLAN ID range | **1 – 4094** |
| Default VLAN | **VLAN 1** (every port starts here) |
| Good practice | leave VLAN 1 unused; make named VLANs (10, 20, 30) |

**The three benefits:**

| Benefit | What it means | Example |
|---------|---------------|---------|
| **Security** | segmentation | guests can't reach payroll |
| **Performance** | smaller broadcast domains | fewer broadcasts per device |
| **Flexibility** | group by job | same VLAN no matter the seat |

- ⚠️ **Different VLANs need a router (Layer 3) to talk** — even on the same switch. (Inter-VLAN routing = Lesson 11-06.)

```
   One switch → VLAN 10 (ports 1-3)  +  VLAN 20 (ports 4-6)
   broadcasts stay inside each VLAN · cross-VLAN traffic → router
```

> **Remember:** a VLAN is "a switch inside your switch" — one box, many separate networks.

---

## Configuring a VLAN on the Dell 3424 (Lesson 11-02)

| Job | Command |
|-----|---------|
| Enter config | `enable` → `configure` |
| Create VLAN | `vlan database` → `vlan 10` |
| Name VLAN | `interface vlan 10` → `name Home` |
| Pick a port | `interface ethernet g1` |
| Access mode | `switchport mode access` |
| Assign VLAN | `switchport access vlan 10` |
| Verify | `show vlan` |
| **Save** | `copy running-config startup-config` |

- **Order:** create → assign → verify → **save**. No save = VLANs vanish on reboot.
- ⚠️ Never move the port you manage **through** (use the console cable). Avoid a lockout.
- **running-config** = live/in memory · **startup-config** = saved, loaded at boot.
- **[TO VERIFY ON HARDWARE]** — exact prompts/output vary by firmware; confirm on your unit.

> **Remember:** naming a VLAN isn't enough — you must assign each port, then save.

---
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 11_
