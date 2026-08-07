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

## Access vs. trunk & 802.1Q (Lesson 11-03)

| | **Access port** | **Trunk port** |
|---|-----------------|----------------|
| VLANs carried | **one** | **many** |
| Tagging | none | **802.1Q** tag per frame |
| Faces | a PC / printer | another switch or a router |
| Native VLAN | n/a | one VLAN **untagged** (default 1) |

- **802.1Q** adds a tag (the VLAN ID) to each frame on a trunk. The tag is stripped before it reaches a PC.
- The **native VLAN** rides the trunk **untagged** and must **match** on both ends (a mismatch leaks traffic).

**Dell 3424 basic trunk:**
```
interface ethernet g24
switchport mode trunk
switchport trunk allowed vlan add 10,20
```

- ⚠️ PCs use access ports; switch-to-switch/router links use trunks.
- **[TO VERIFY ON HARDWARE]** — exact trunk wording varies by firmware.

> **Remember:** access = one VLAN untagged; trunk = many VLANs tagged, one native untagged.

---

## Spanning Tree Protocol / STP (Lesson 11-04)

- **Problem:** two paths between switches = a **loop** → a **broadcast storm** crashes the network.
- **Fix:** STP keeps **one** active path and **blocks** the extras (no circle for frames to loop).
- **Root bridge** = the center switch; best paths are measured from it.
- **Port states:** Forwarding (active) · Blocking (standby) · Disabled.
- If the active path fails → STP **unblocks** a backup automatically.
- **Standards:** 802.1D (STP) · 802.1w (Rapid STP, faster).
- View it: `show spanning-tree`  · **[TO VERIFY ON HARDWARE]**
- ⚠️ **Never disable STP** to "speed up" — one loop storms everything.

> **Remember:** a blocked port isn't broken — it's a standby that turns on if the main path fails.

---

## Static vs. dynamic routing (Lesson 11-05)

| | **Static** | **Dynamic** |
|---|-----------|-------------|
| Filled by | you, by hand | routers, automatically |
| Auto-reroute on failure | **no** | **yes** |
| Extra traffic | none | some |
| Setup effort | low | higher |
| Best for | small / fixed | large / changing |

- **Routing table** = networks + the way to reach each (**next hop**).
- **Default route** (`0.0.0.0/0`) = "everything else → the gateway."
- **Routing protocols:** OSPF, EIGRP (inside an org) · **BGP** (the internet).
- ⚠️ A static route does **not** self-heal — traffic fails if its path breaks.
- See your own table: **`route print`** (Windows) — find the `0.0.0.0` default route.

> **Remember:** static = written directions (fixed); dynamic = live GPS (reroutes itself).

---

## Inter-VLAN routing (Lesson 11-06)

VLANs are separate networks → they need a **Layer 3 device** to talk.

| Method | How | Trade-off |
|--------|-----|-----------|
| **Router-on-a-stick** | one router on a **trunk**; a **sub-interface** (gateway) per VLAN | cheap; one shared link |
| **Layer 3 switch** | routes inside the switch (a VLAN interface per VLAN) | fast; costs more |

- Each VLAN needs its **own subnet** and its **own gateway** address.
- Each PC points at its VLAN's **default gateway**.

**Dell 3424 (if Layer 3 capable):**
```
interface vlan 10
ip address 192.168.10.1 255.255.255.0
ip routing
```
- **[TO VERIFY ON HARDWARE]** — Layer 3 support and wording vary by model/firmware; if Layer 2 only, use router-on-a-stick.

> **Remember:** locked rooms (VLANs) + a guarded door (router) = pass only where you choose.

---
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 11_
