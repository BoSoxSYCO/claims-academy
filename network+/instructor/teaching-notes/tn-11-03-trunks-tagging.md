---
teaching_notes_for: NA-M11-L03
module: 11
lesson: 03
unit: 8
objective_ids: ["2.3"]
---

# 🔒 Teaching Notes — Lesson 11-03: Trunks, Tagging (802.1Q), and Access Ports

> Instructor guide. Written so a substitute could teach this cold.

## Learning objective (one line)
Learners distinguish access from trunk ports, explain 802.1Q tagging and the native VLAN, and configure a basic trunk on the Dell 3424.

## Where this sits
- **Before:** 11-01 (VLAN concept) and 11-02 (create a VLAN, access ports). Both hard prerequisites.
- **After:** 11-04 (Spanning Tree — loop prevention), 11-06 (inter-VLAN routing, which rides this trunk).
- The trunk built here (g24, VLAN 10 + 20) is the uplink used again in 11-06.

## Core facts (IEEE 802.1Q)
- **Access port:** one VLAN, untagged, for end devices.
- **Trunk port:** many VLANs on one link, each frame tagged with 802.1Q; used switch-to-switch and switch-to-router.
- **Native VLAN:** one VLAN per trunk crosses untagged (default VLAN 1); both ends must match.
- Tag is added entering the trunk, stripped leaving onto access — end devices never see it.

## Common misconceptions (correct both)
1. **"PCs connect to trunk ports."** No — PCs can't read tags; they use access ports.
2. **"The native VLAN is tagged."** No — it's the untagged one. A native mismatch leaks traffic between VLANs (security risk + exam favorite).

## Prime Directive #7 — accuracy
PowerConnect 3424 trunk syntax and the verify command vary by firmware (some use "general" mode, different `show` commands). Every unverified command/output line is marked **[TO VERIFY ON HARDWARE]**; learners record their own output. Never present a guessed trunk output as real.

## Pacing (~30 min)
- 6 min — the mailroom-hallway analogy (WHY one cable carries many VLANs).
- 12 min — access vs. trunk, 802.1Q tag, native VLAN.
- 12 min — the trunk lab (g24 → trunk, allow 10 + 20, save).
Learners stall on the native VLAN. Emphasize "one untagged VLAN, must match both ends."

## How CompTIA tends to test it
- Access = 1 untagged VLAN; trunk = many tagged (802.1Q).
- Native VLAN untagged, must match; mismatch = leak.
- Which port type for a PC vs. a switch-uplink.

## Support / extension
- **Support:** color two VLANs on a printed two-switch diagram; mark which ports are access vs. trunk.
- **Extension:** VLAN hopping / double-tagging attacks (bridge to Module 13 security); Q-in-Q.

---
_NetworkAcademy+ · Teaching Notes 11-03 · CompTIA Network+ N10-009 · Instructor materials_
