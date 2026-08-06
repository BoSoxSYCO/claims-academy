---
teaching_notes_for: NA-M11-L02
module: 11
lesson: 02
unit: 8
objective_ids: ["2.3"]
---

# 🔒 Teaching Notes — Lesson 11-02: Configuring VLANs on the Dell 3424

> Instructor guide. Written so a substitute could teach this cold.

## Learning objective (one line)
Learners create and name a VLAN, assign an access port, verify with `show vlan`, and save the config on the Dell PowerConnect 3424 — safely.

## Where this sits
- **Before:** 11-01 (VLAN concepts) and 07-06 (logging into the switch CLI). Both are hard prerequisites.
- **After:** 11-03 (trunks/802.1Q — carrying VLANs between switches), 11-06 (inter-VLAN routing).
- This is the module's **first switch-changing** lesson (home-lab stage LAB-E). Safety framing matters most here.

## The command sequence (teach as four groups)
1. **Enter:** `enable` → `configure`
2. **Create:** `vlan database` → `vlan 10` → `interface vlan 10` → `name Home`
3. **Assign:** `interface ethernet g1` → `switchport mode access` → `switchport access vlan 10`
4. **Verify + Save:** `show vlan` → `copy running-config startup-config`

## Prime Directive #7 — accuracy
Exact PowerConnect 3424 prompts and `show vlan` layout vary by firmware version. Every unverified line in the lesson is marked **[TO VERIFY ON HARDWARE]**. Tell learners: record **their own** output, and don't assume the sample is word-for-word. Never present a guessed prompt as real.

## Common misconceptions (correct all)
1. **"Naming the VLAN assigns ports."** No — you must also enter each port and `switchport access vlan 10`.
2. **"Changes save themselves."** No — running-config is memory only; `copy running-config startup-config` makes it stick.
3. **"Access vs. trunk doesn't matter yet."** Set access mode now; trunks come in 11-03.

## Safety (emphasize before anyone types)
The classic beginner disaster is moving the **managed** port into a new VLAN and losing the session. Insist on console (out-of-band) management, or a second path, before touching the port they're connected through.

## Pacing (~30 min)
- 6 min — why the plan must become commands; the modes tour.
- 12 min — the four command groups, one at a time.
- 5 min — verify + save, and why save is non-negotiable.
- 7 min — the hands-on build (LAB-E). Circulate and check `show vlan`.

## How CompTIA tends to test it
- The command order and purpose (create → assign → verify → save).
- running-config vs. startup-config.
- Access port = one VLAN.

## Support / extension
- **Support:** pre-stage the console session; have them type one group at a time and run `show vlan` after each.
- **Extension:** add VLAN 20 ("Lab") on g2 — sets up the 11-03 trunk lab.

---
_NetworkAcademy+ · Teaching Notes 11-02 · CompTIA Network+ N10-009 · Instructor materials_
