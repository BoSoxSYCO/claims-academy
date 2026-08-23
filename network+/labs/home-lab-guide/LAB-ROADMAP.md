# Home Lab Roadmap — NetworkAcademy+

**A hands-on lab ladder that grows one concept at a time, using only your equipment.**

This is the **roadmap**, not the labs themselves. It shows every lab you will build, in order, so your home network grows slowly and safely — from "just my laptop" to a fully segmented, routed, secured, and documented network you built yourself.

> ⚠️ **We do not configure the switch yet.** These cards describe *what each lab will do*, its diagram, expected lights, troubleshooting, and instructor notes. The actual step-by-step instructions are written later, in order, each against the [master lesson template](../../assets/templates/lesson-template.md).

---

## The four rules of this lab ladder

1. **One new concept per lab.** Every lab adds exactly one idea. Nothing is crammed.
2. **No future knowledge.** A lab only uses ideas already taught by that point in the [Master Curriculum](../../docs/MASTER-CURRICULUM.md). Switch configuration doesn't appear until **Module 11**, because that's when it's taught.
3. **The network grows, never restarts.** Each lab builds on the last. You keep what you built.
4. **Safe and reversible.** Early labs can't lock you out. Every lab has a reset step (written at build time).

---

## Your equipment (the whole lab)

| Gear | Role as the lab grows |
|------|-----------------------|
| **Windows laptop** | Your workstation, terminal, and test device |
| **Home router** | Gateway to the internet; DHCP/DNS source; second "node" for early tests |
| **Dell PowerConnect 3424** | A managed switch — used as a plain switch first, then configured much later |
| **Ethernet cables** | The physical layer you wire and test |

**Equipment tiers** (from the curriculum): **E1** laptop only · **E2** laptop + 1 cable · **E3** + switch · **E4** full lab.

💡 *Optional extra device:* if you have a phone or tablet, some multi-device labs are richer. Every core lab is designed to work with **only the four items above** — the router's LAN port acts as your "second device" when needed.

---

## Safety & ground rules (read once)

- **Power down before you plug or unplug** the switch's power; data cables are hot-swap safe.
- **Don't factory-reset the router** — you share it with your home. We only *view* it until you fully understand it.
- **Label your cables** with tape as you go. Future-you will thank you.
- **Change nothing on the switch** until the labs tell you to (Module 11). Powering it on and reading lights is safe.

---

## LED primer (how to read the lights)

Networking gear talks to you through lights. You'll use this in almost every lab.

| Light | Off means | Solid means | Blinking means |
|-------|-----------|-------------|----------------|
| **Power** | No power | Device is on | (varies) |
| **Port Link/ACT** | No cable / no link | A working link exists | Data is moving (activity) |
| **Port Speed** | — | Indicates negotiated speed | — |
| **System/Status** | Off/fault | Healthy | Booting or self-test |

> `[VERIFY ON HARDWARE]` Exact colors and positions on the **PowerConnect 3424** (per-port Link/ACT, speed indication, the Power and diagnostic LEDs, and the boot self-test sequence) are confirmed against your real unit when we build **Lab 08**. Treat the table above as the general pattern until then.

---

## The lab ladder at a glance

Each row is one lab. "Unlocked after" is the earliest point its single concept has been taught — so nothing is ever out of order.

| Lab | New concept (only one) | Tier | Unlocked after | Milestone stage |
|:---:|------------------------|:----:|----------------|-----------------|
| **01** | A computer can show its own network settings | E1 | Module 02 | — |
| **02** | `ping` tests whether a path works | E1 | Module 02 | — |
| **03** | A wired link is physical — and lights prove it | E2 | Module 04 | — |
| **04** | Data travels in *hops* (`tracert`) | E2 | Module 04 | — |
| **05** | Real actions map to OSI layers | E2 | Module 05 | LAB "Layer detective" |
| **06** | Cables have types, and a bad cable shows it | E2 | Module 06 | — |
| **07** | Build & verify your first laptop↔router link | E2 | Module 06 | **LAB-A** |
| **08** | A managed switch is a device you power on & read | E3 | Module 07 | **LAB-B** (part 1) |
| **09** | A switch forwards traffic with **no** configuration | E3 | Module 07 | — |
| **10** | Link vs. activity vs. speed lights | E3 | Module 07 | — |
| **11** | A managed switch has a management interface (view-only) | E3 | Module 07 | **LAB-B** (part 2) |
| **12** | A switch *learns* MAC addresses | E3 | Module 07 | — |
| **13** | Design an IP address plan (on paper) | E1 | Module 08 | **LAB-C** |
| **14** | Set a static IP and reach a same-subnet device | E4 | Module 08 | — |
| **15** | DHCP hands out addresses automatically | E4 | Module 09 | **LAB-D** (part 1) |
| **16** | DNS turns names into numbers (`nslookup`) | E4 | Module 09 | **LAB-D** (part 2) |
| **17** | Ports show which conversations are open (`netstat`) | E4 | Module 10 | — |
| **18** | VLANs split one switch into separate networks | E4 | Module 11 | **LAB-E** |
| **19** | A trunk carries many VLANs with tags (802.1Q) | E4 | Module 11 | — |
| **20** | Routing lets two VLANs talk; secure the Wi-Fi | E4 | Module 11 | **LAB-F** |
| **21** | Document the network you built | E4 | Module 12 | **LAB-G** (part 1) |
| **22** | Harden it: passwords, port security, Wi-Fi | E4 | Module 13 | **LAB-G** (part 2) |
| **23** | Diagnose planted faults with a method | E4 | Module 14 | **LAB-H** |
| **24** | 🎓 Rebuild the whole network from your docs | E4 | Module 15 | **LAB-CAP** |

---

## How your network grows (the picture)

```
Phase 1 (Labs 01–02)      Phase 2 (Labs 03–07)          Phase 3 (Labs 08–12)
 just the laptop           laptop + router (wired)        insert the switch

  [Laptop]                 [Laptop]──cable──[Router]      [Laptop]─[Switch]─[Router]─((Net))
   (look inward)                       │                            │
                                    ((Internet))                 read lights,
                                                                 view management

Phase 4 (Labs 13–17)                 Phase 5 (Labs 18–20)
 addressing & services               segment & route

  [Laptop]─[Switch]─[Router]─((Net))   [Laptop]═╗
      static IP, DHCP, DNS, ports        VLAN10 ║[Switch]══trunk══[Router] inter-VLAN + Wi-Fi
                                          VLAN20 ║   │
                                                 ╚═[2nd node]

Phase 6 (Labs 21–24)
 operate, secure, troubleshoot, rebuild → a real network you can defend and explain
```

---

# Lab cards

Each card is roadmap-level: the one concept, why it matters, what unlocks it, the diagram, the lights you should expect, troubleshooting, and instructor notes. **No step-by-step yet.**

---

## Lab 01 — Your laptop's network settings
- **One concept:** a computer can show its own network settings.
- **Why:** before you touch a network, you learn to look at your own machine.
- **Tier:** E1 · **Unlocked after:** Module 02 · **Needs first:** none
- **Objective:** view and read your laptop's IP address, MAC address, and gateway.
- **Diagram:**
  ```
  [ Laptop ]  ← you run a command and read what it reports about itself
  ```
- **Expected LEDs:** none (laptop only).
- **Troubleshooting:** command not found → check spelling; no address shown → you may be offline (that's okay for now).
- **Instructor notes:** don't explain subnet masks yet (Module 08). Goal is only "these settings exist and you can see them." Reassure learners that the numbers will make sense later.

## Lab 02 — Prove a connection with `ping`
- **One concept:** `ping` tests whether a path to another device works.
- **Why:** it's the #1 first tool for "is it connected?"
- **Tier:** E1 · **Unlocked after:** Module 02 · **Needs first:** Lab 01
- **Objective:** ping the loopback and the default gateway; read replies vs. timeouts.
- **Diagram:**
  ```
  [ Laptop ] --ping--> [ Laptop itself (loopback) ]
  [ Laptop ] --ping--> [ Home Router (gateway) ]
  ```
- **Expected LEDs:** none required (may be wireless).
- **Troubleshooting:** "Request timed out" → not always bad; gateway may block ping. "Destination unreachable" → no path — check Wi-Fi.
- **Instructor notes:** teach *reply vs. timeout* only. Do not explain TTL or ICMP internals yet. Celebrate the first successful reply — it's a real milestone.

## Lab 03 — Your first wired link
- **One concept:** a wired link is physical, and the lights prove it exists.
- **Why:** wireless hides the connection; a cable makes it real and visible.
- **Tier:** E2 · **Unlocked after:** Module 04 · **Needs first:** Lab 02
- **Objective:** connect the laptop to the router with a cable; confirm a link light; ping the gateway over the wire.
- **Diagram:**
  ```
  [ Laptop ] ==== Ethernet ==== [ Home Router ]
             (watch the port lights on both ends)
  ```
- **Expected LEDs:** router LAN port and laptop port **Link** LED turns solid; brief **activity** blinking when you ping. `[VERIFY ON HARDWARE]`
- **Troubleshooting:** no link light → reseat cable, try another port, try another cable. Link but no ping → Wi-Fi still primary; disable Wi-Fi to force the wire.
- **Instructor notes:** first exposure to LEDs. Keep it to "light on = link." Don't discuss speed negotiation yet (Module 06).

## Lab 04 — Data travels in hops
- **One concept:** traffic to the internet passes through multiple *hops*.
- **Why:** shows the network is a chain of devices, not one magic jump.
- **Tier:** E2 · **Unlocked after:** Module 04 · **Needs first:** Lab 03
- **Objective:** run a route trace to a public site and count the hops; identify hop 1 as your gateway.
- **Diagram:**
  ```
  [ Laptop ] → [ Router ] → [ ISP hop ] → [ … ] → (( Website ))
       hop1        hop2         hop3
  ```
- **Expected LEDs:** activity blinks on the wired port during the trace. `[VERIFY ON HARDWARE]`
- **Troubleshooting:** all `* * *` after a hop → some devices hide from traces; that's normal. First hop should be your router's address (from Lab 01).
- **Instructor notes:** connect hop 1 back to the "gateway" they saw in Lab 01. Don't teach routing protocols (Module 11).

## Lab 05 — Layer detective (OSI)
- **One concept:** everyday actions map to specific OSI layers.
- **Why:** turns the abstract 7-layer model into something you can point at.
- **Tier:** E2 · **Unlocked after:** Module 05 · **Needs first:** Lab 04
- **Objective:** match actions (plugging a cable, pinging, loading a page) to OSI layers using clues from Labs 01–04.
- **Diagram:**
  ```
  Cable/light → Layer 1   |   ping/IP → Layer 3   |   web page → Layer 7
  ```
- **Expected LEDs:** reuse observations from earlier labs.
- **Troubleshooting:** learner confuses Layer 2/3 → revisit "MAC vs IP" preview from Module 05.
- **Instructor notes:** this is the curriculum's "Layer detective." Keep it conceptual; no captures/Wireshark (not in scope).

## Lab 06 — Know and test your cables
- **One concept:** cables have types, and a faulty cable reveals itself.
- **Why:** most "network problems" are really cable problems.
- **Tier:** E2 · **Unlocked after:** Module 06 · **Needs first:** Lab 03
- **Objective:** identify your cables (category marking), then compare a good cable vs. a deliberately loose one by watching the link light.
- **Diagram:**
  ```
  [ Laptop ] == good cable ==> Link LED solid
  [ Laptop ] == loose/bad  ==> Link LED off/flickering
  ```
- **Expected LEDs:** good = steady **Link**; bad = no link or flicker. `[VERIFY ON HARDWARE]`
- **Troubleshooting:** flickering link → damaged connector or partial seating; swap to confirm.
- **Instructor notes:** don't crimp cables (out of scope/no tools assumed). Reading the printed category on the jacket is enough.

## Lab 07 — Build & certify your first link *(LAB-A)*
- **One concept:** a link isn't "done" until you've **verified** it.
- **Why:** professionals prove connectivity, not assume it.
- **Tier:** E2 · **Unlocked after:** Module 06 · **Needs first:** Lab 06
- **Objective:** make the laptop↔router wired link, confirm link light + speed, and document a successful ping as your first "certified" connection.
- **Diagram:**
  ```
  [ Laptop ] ==== Ethernet ==== [ Router ]   ✔ link  ✔ ping  ✔ documented
  ```
- **Expected LEDs:** solid **Link**, blinking **activity** on ping, speed light per negotiated rate. `[VERIFY ON HARDWARE]`
- **Troubleshooting:** link but slow/half-duplex signs → try a different cable/port; note it in the lab report.
- **Instructor notes:** first use of the **lab-documentation worksheet**. Emphasize verification + recording. This is milestone **LAB-A**.

## Lab 08 — Meet the Dell PowerConnect 3424 *(LAB-B, part 1)*
- **One concept:** a managed switch is a physical device you power on and read.
- **Why:** you must be comfortable with the hardware before configuring it.
- **Tier:** E3 · **Unlocked after:** Module 07 · **Needs first:** Lab 07
- **Objective:** safely power the switch, identify its ports, console port, and status lights, and observe the boot self-test.
- **Diagram:**
  ```
  ┌──────────── Dell PowerConnect 3424 ────────────┐
  │ [1][2][3] … [24]   [G1][G2]   (console)  PWR ● │
  └────────────────────────────────────────────────┘
  ```
- **Expected LEDs:** **Power** solid after boot; **System/diag** shows a boot sequence then healthy; ports with no cable stay **off**. `[VERIFY ON HARDWARE]`
- **Troubleshooting:** no power light → check power cable/outlet; fans spin but no link anywhere → normal (nothing plugged in yet).
- **Instructor notes:** **DO NOT configure.** View-and-identify only. This is where we finalize the real LED chart for the whole course.

## Lab 09 — The switch forwards without configuration
- **One concept:** a switch moves traffic between ports with **zero** setup.
- **Why:** dispels the myth that a switch must be "programmed" to work.
- **Tier:** E3 · **Unlocked after:** Module 07 · **Needs first:** Lab 08
- **Objective:** place the switch between laptop and router (laptop→switch→router) and confirm internet still works.
- **Diagram:**
  ```
  [ Laptop ] == [ Switch ] == [ Router ] == (( Internet ))
                (no config — it just forwards)
  ```
- **Expected LEDs:** two ports show solid **Link**; **activity** blinks on both as you ping/browse. `[VERIFY ON HARDWARE]`
- **Troubleshooting:** no internet → confirm both link lights; try the router-facing port; verify laptop got an address (Lab 01).
- **Instructor notes:** big "aha" moment. Contrast with a hub only briefly (concept from Module 07).

## Lab 10 — Link vs. activity vs. speed
- **One concept:** the port lights mean three different things.
- **Why:** precise light-reading is the fastest field diagnostic skill.
- **Tier:** E3 · **Unlocked after:** Module 07 · **Needs first:** Lab 09
- **Objective:** watch a port at idle vs. under load and tell link, activity, and speed indicators apart.
- **Diagram:**
  ```
  Idle:   Link ● solid     Activity ○ off
  Busy:   Link ● solid     Activity ◐ blinking fast
  ```
- **Expected LEDs:** activity blink rate rises with traffic (e.g., during a big download/`ping -t`). `[VERIFY ON HARDWARE]`
- **Troubleshooting:** activity always off → cable in but device idle; generate traffic to see it.
- **Instructor notes:** tie back to the LED primer; this becomes reference for all troubleshooting labs.

## Lab 11 — The switch has a management interface *(LAB-B, part 2)*
- **One concept:** a *managed* switch offers a way to log in and manage it.
- **Why:** it's what separates your 3424 from a cheap unmanaged switch.
- **Tier:** E3 · **Unlocked after:** Module 07 · **Needs first:** Lab 08
- **Objective:** reach the switch's management (console/web) and **view** its status — **no changes**.
- **Diagram:**
  ```
  [ Laptop ] --(console or mgmt)--> [ Switch management screen ]  (read-only)
  ```
- **Expected LEDs:** console access uses no network light; web/mgmt over a port shows link. `[VERIFY ON HARDWARE]`
- **Troubleshooting:** can't reach web UI → may need management IP/console (covered when we build it); console needs the right cable/driver.
- **Instructor notes:** **view only.** Real login steps and any config are deferred to Module 11 per the "don't configure yet" rule. Note default-credential risk (fixed in Lab 22), don't change it now.

## Lab 12 — A switch learns MAC addresses
- **One concept:** a switch builds a table of which MAC lives on which port.
- **Why:** it's *how* a switch knows where to send frames.
- **Tier:** E3 · **Unlocked after:** Module 07 · **Needs first:** Lab 11
- **Objective:** view the switch's MAC address table and find your laptop's MAC (from Lab 01) on its port.
- **Diagram:**
  ```
  MAC table:  [ AA:BB:CC:… → Port 3 ]  ← that's your laptop
  ```
- **Expected LEDs:** link/activity on the laptop's port. `[VERIFY ON HARDWARE]`
- **Troubleshooting:** MAC not listed → send traffic (ping) so the switch learns it; confirm correct port.
- **Instructor notes:** connect the on-screen table to the physical port lights. Still read-only.

## Lab 13 — Design your home IP plan *(LAB-C)*
- **One concept:** a network needs a deliberate address plan.
- **Why:** you plan on paper before you build — like an architect.
- **Tier:** E1 · **Unlocked after:** Module 08 · **Needs first:** Module 08 subnetting
- **Objective:** choose a private range, mask, two subnets, gateway, and DHCP range for your future lab.
- **Diagram:**
  ```
  Subnet A (trusted): 192.168.10.0/24   gw .1   DHCP .100–.199
  Subnet B (lab):     192.168.20.0/24   gw .1   DHCP .100–.199
  ```
- **Expected LEDs:** none (paper/plan lab).
- **Troubleshooting:** overlapping ranges → each subnet must be distinct; check with the subnetting worksheet.
- **Instructor notes:** this plan is reused in Labs 14, 18, 20. Keep numbers simple and memorable.

## Lab 14 — Static IP and same-subnet reachability
- **One concept:** you can assign an address by hand and reach a neighbor.
- **Why:** proves addressing is something you control, not magic from the router.
- **Tier:** E4 · **Unlocked after:** Module 08 · **Needs first:** Lab 13
- **Objective:** set a static IP on the laptop from your plan; ping another device in the same subnet.
- **Diagram:**
  ```
  [ Laptop .10 ] == [ Switch ] == [ Router/2nd node .1 ]   ping .1 ✔
  ```
- **Expected LEDs:** link/activity during ping. `[VERIFY ON HARDWARE]`
- **Troubleshooting:** no reply → wrong subnet/mask, or gateway typo; revert to DHCP to recover (reset step).
- **Instructor notes:** always show how to switch back to automatic addressing so no one gets stranded.

## Lab 15 — DHCP hands out addresses *(LAB-D, part 1)*
- **One concept:** DHCP gives devices addresses automatically.
- **Why:** explains where the Lab 01 address really came from.
- **Tier:** E4 · **Unlocked after:** Module 09 · **Needs first:** Lab 14
- **Objective:** release and renew the laptop's address and watch it come from the router's DHCP.
- **Diagram:**
  ```
  [ Laptop ] --"I need an address"--> [ Router DHCP ] --"here: .105"-->
  ```
- **Expected LEDs:** brief activity during release/renew. `[VERIFY ON HARDWARE]`
- **Troubleshooting:** no address after renew → cable/link down; static IP still set (undo Lab 14 first).
- **Instructor notes:** map the exchange to the DORA steps from Module 09. Return laptop to DHCP at the end.

## Lab 16 — Names into numbers with `nslookup` *(LAB-D, part 2)*
- **One concept:** DNS translates a name into an IP address.
- **Why:** explains how "typing a website" actually finds a server.
- **Tier:** E4 · **Unlocked after:** Module 09 · **Needs first:** Lab 15
- **Objective:** look up a domain name and read back the IP address(es) returned.
- **Diagram:**
  ```
  [ Laptop ] --"what's the IP for example.com?"--> [ DNS ] --> 93.184.x.x
  ```
- **Expected LEDs:** brief activity. `[VERIFY ON HARDWARE]`
- **Troubleshooting:** "can't find server" → DNS setting wrong; compare to values from Lab 01.
- **Instructor notes:** connect to Lab 04 (names → the hops you traced). Keep record types out of scope for now.

## Lab 17 — See open conversations with `netstat`
- **One concept:** ports identify the separate conversations a device is having.
- **Why:** makes the abstract "ports" idea concrete and visible.
- **Tier:** E4 · **Unlocked after:** Module 10 · **Needs first:** Lab 16
- **Objective:** list active connections and match a few to port numbers you learned.
- **Diagram:**
  ```
  [ Laptop ] :443 ↔ web server   |   :53 ↔ DNS   |   :xxxx ↔ …
  ```
- **Expected LEDs:** normal activity. `[VERIFY ON HARDWARE]`
- **Troubleshooting:** overwhelming output → filter to a couple of examples; don't try to read every line.
- **Instructor notes:** goal is recognition of a few key ports (Module 10), not mastering netstat flags (that's Module 14).

## Lab 18 — Split the switch with VLANs *(LAB-E)*
- **One concept:** VLANs turn one switch into separate networks.
- **Why:** segmentation is the core of real network design and security.
- **Tier:** E4 · **Unlocked after:** Module 11 · **Needs first:** Lab 13, Lab 12
- **Objective:** create two VLANs, assign ports, and prove devices in different VLANs are isolated.
- **Diagram:**
  ```
  [ node A ]─Port3 (VLAN10) ┐
                            ├─[ Switch ]   VLAN10 ✗ VLAN20 (isolated)
  [ node B ]─Port5 (VLAN20) ┘
  ```
- **Expected LEDs:** link/activity on both ports, but cross-VLAN ping fails by design. `[VERIFY ON HARDWARE]`
- **Troubleshooting:** they *can* still ping → ports not in the intended VLANs; recheck assignments.
- **Instructor notes:** **first real switch configuration in the whole course.** This is why config was deferred to here. Provide a full reset-to-default path.

## Lab 19 — Carry many VLANs on a trunk (802.1Q)
- **One concept:** a trunk link carries multiple VLANs using tags.
- **Why:** it's how VLANs travel between switches/routers.
- **Tier:** E4 · **Unlocked after:** Module 11 · **Needs first:** Lab 18
- **Objective:** configure a tagged trunk port and confirm both VLANs traverse one link.
- **Diagram:**
  ```
  [ Switch ] ==trunk (tags VLAN10+VLAN20)== [ Router/next device ]
  ```
- **Expected LEDs:** solid link on the trunk port; activity for both VLANs. `[VERIFY ON HARDWARE]`
- **Troubleshooting:** one VLAN missing → tagging/allowed-VLAN mismatch on the trunk.
- **Instructor notes:** introduce tagging visually (a labeled envelope). One concept only — routing comes next.

## Lab 20 — Route between VLANs + secure Wi-Fi *(LAB-F)*
- **One concept:** routing lets separate VLANs communicate (controlled).
- **Why:** segmentation is useful only when you also control what *may* cross.
- **Tier:** E4 · **Unlocked after:** Module 11 · **Needs first:** Lab 19
- **Objective:** enable routing so VLAN10 and VLAN20 can talk through the gateway; bring up a secured wireless network.
- **Diagram:**
  ```
  VLAN10 ─┐
          ├─[ Switch ]==trunk==[ Router (routes) ]~~~ secured Wi-Fi
  VLAN20 ─┘        now VLAN10 ↔ VLAN20 via router
  ```
- **Expected LEDs:** trunk + port activity during cross-VLAN ping. `[VERIFY ON HARDWARE]`
- **Troubleshooting:** cross-VLAN ping still fails → gateway/route missing; Wi-Fi open → set WPA2/WPA3.
- **Instructor notes:** two closely-linked ideas (routing + wireless security) — if learners struggle, split into two sessions.

## Lab 21 — Document the network you built *(LAB-G, part 1)*
- **One concept:** a network isn't finished until it's documented.
- **Why:** documentation is a core job skill and a Domain-3 exam topic.
- **Tier:** E4 · **Unlocked after:** Module 12 · **Needs first:** Lab 20
- **Objective:** produce a diagram, an IP/label inventory, and a port map of your lab.
- **Diagram:**
  ```
  [ Your finished topology ] → drawn, labeled, inventoried
  ```
- **Expected LEDs:** n/a (documentation).
- **Troubleshooting:** doc doesn't match reality → walk the cables and fix the doc (or the wiring).
- **Instructor notes:** use the draw-your-diagram + lab-documentation worksheets. Compare to their Project 2 map to show growth.

## Lab 22 — Harden the network *(LAB-G, part 2)*
- **One concept:** default settings are unsafe; you harden them.
- **Why:** security is the difference between a toy and a real network.
- **Tier:** E4 · **Unlocked after:** Module 13 · **Needs first:** Lab 21
- **Objective:** change default switch credentials, apply basic port security, confirm strong Wi-Fi encryption.
- **Diagram:**
  ```
  [ Switch ] default pw ✗ → strong pw ✔ ; unused ports ✗ ; Wi-Fi WPA2/3 ✔
  ```
- **Expected LEDs:** disabled/secured ports may show no link by design. `[VERIFY ON HARDWARE]`
- **Troubleshooting:** locked out after password change → recovery via console (documented at build time). **Record the new password safely.**
- **Instructor notes:** stress writing down credentials; this is the first lab that can lock a learner out, so the reset/recovery path is mandatory.

## Lab 23 — Break it and fix it *(LAB-H)*
- **One concept:** a repeatable method finds any fault.
- **Why:** troubleshooting is the largest exam domain and the top job skill.
- **Tier:** E4 · **Unlocked after:** Module 14 · **Needs first:** Lab 22
- **Objective:** work through planted faults (bad cable, wrong VLAN, wrong IP, wrong gateway) using the 7-step method.
- **Diagram:**
  ```
  Symptom → theory → test (lights/commands) → fix → verify → document
  ```
- **Expected LEDs:** faults show as missing link or no activity — read the lights first. `[VERIFY ON HARDWARE]`
- **Troubleshooting:** *this lab is troubleshooting* — the method is the point.
- **Instructor notes:** have a partner (or the guide) plant faults. Enforce documenting each fix in the troubleshooting log.

## Lab 24 — 🎓 Capstone: rebuild from your docs *(LAB-CAP)*
- **One concept:** you can build the whole network from your own documentation.
- **Why:** final proof you're exam-ready and job-ready.
- **Tier:** E4 · **Unlocked after:** Module 15 · **Needs first:** all prior labs
- **Objective:** from disconnected gear, rebuild cabling, VLANs, trunk, addressing, routing, secured Wi-Fi, and docs — then self-test.
- **Diagram:**
  ```
  empty gear → [ full, segmented, routed, secured, documented network ]
  ```
- **Expected LEDs:** a healthy board of link/activity lights matching your documentation. `[VERIFY ON HARDWARE]`
- **Troubleshooting:** anything broken → use Lab 23's method; that's the test.
- **Instructor notes:** timed, closed-notes-except-your-own-docs. Passing this ≈ ready to book the exam.

---

## Coverage & ordering check

- **One concept per lab:** ✅ every card states a single new idea.
- **No future knowledge:** ✅ each "Unlocked after" is the first module that teaches the concept; **switch configuration begins at Lab 18 (Module 11)**, never before.
- **Grows, never restarts:** ✅ topology diagrams show continuous expansion (laptop → +router → +switch → +addressing → +VLANs/routing → operate/secure/troubleshoot → rebuild).
- **Maps to milestones:** ✅ letter stages **LAB-A…LAB-CAP** from the [Master Curriculum](../../docs/MASTER-CURRICULUM.md) are called out on the relevant labs.

---

*Roadmap only. When production reaches each lab, it's written to the [master lesson template](../../assets/templates/lesson-template.md) with full step-by-step instructions, the finalized `[VERIFY ON HARDWARE]` LED chart, worksheets, and a reset path — following [CLAUDE.md](../../CLAUDE.md).*
