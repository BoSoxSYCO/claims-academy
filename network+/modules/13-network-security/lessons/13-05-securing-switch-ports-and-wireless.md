---
id: NA-M13-L05
module: 13
lesson: 05
title: "Securing Switch Ports and Wireless"
unit: 10
objective_ids: ["4.3"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E2
prerequisites: ["NA-M13-L04", "NA-M11-L07"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-07"
---

# [Module 13 · Lesson 05] Securing Switch Ports and Wireless

> **Unit:** Unit 10 — Network Security · **Time:** ~30 min · **Equipment:** E2 (your switch + home Wi-Fi)
> **You'll need first:** VLANs and Wi-Fi security (11-07), firewalls (13-04).

We've guarded the edge and split the network. Now we harden the access layer — the switch ports people plug into and the Wi-Fi they join. This is where attackers try to sneak in. And it's all on your real gear: the Dell switch and your home router.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain **port security** and **sticky MAC**.
- [ ] Say why you should disable unused ports.
- [ ] Harden Wi-Fi with **WPA3**, a strong **PSK**, and no **WPS**.
- [ ] Set up a **guest network** and change default names and passwords.

---

## 2. Introduction — why this matters

Every open switch port is a doorway. Anyone who plugs in could reach your network. Every Wi-Fi network is a radio signal that leaks past your walls. Both need locks.

Good news: the fixes are simple, and you can do most of them today. On the switch, you control which devices may use a port. You also shut off ports nobody uses. On Wi-Fi, you pick strong security and a good password.

The exam tests these hardening steps. It asks about port security. It asks which Wi-Fi security to pick. It asks why WPS is risky. This lesson ties each answer to your own gear.

🎯 **Exam tip:** For Wi-Fi, the ranking is clear: WPA3 is best, WPA2 is fine, and WEP is never safe.

🔧 **Lab link:** You'll check your home Wi-Fi's security type on your Windows laptop.

---

## 3. Simple explanation

### Harden the switch ports

- **Port security** limits which devices may use a switch port. It checks the device's **MAC address** (its hardware ID, from Module 07).
- **MAC filtering** is the general idea: allow only known MAC addresses.
- **Sticky MAC** is a handy trick. The port learns the first device's MAC and locks to it. A different device gets blocked.
- If a rule is broken, the port can shut down or send an alert. This stops a stranger who unplugs a PC and plugs in their own laptop.

Two more switch habits:

- Disable unused ports. An unused, live port is an open door. Shut the ports nobody uses.
- Change the native VLAN. Don't leave the **native VLAN** (from Module 11) as the default VLAN 1. Moving it off VLAN 1 blocks a common trick.

> 💡 **Tip:** On the Dell PowerConnect 3424, the exact port-security commands vary by firmware. Treat any command you find as **[TO VERIFY ON HARDWARE]** before running it.

### Harden the wireless

- Use **WPA3** if your router supports it. If not, use **WPA2** (with AES). Never use **WEP** or old WPA — both are broken.
- Set a strong **PSK (Pre-Shared Key)** — that's your Wi-Fi password. Make it long and hard to guess.
- Change the default **SSID** (network name) and the default admin password on the router. Defaults are public knowledge.
- Turn off **WPS (Wi-Fi Protected Setup)**. The push-button/PIN feature is easy to attack.
- Add a **guest network** — a separate Wi-Fi for visitors, kept away from your main devices.

> **The big idea:** Harden the access layer. On the switch: use **port security** (often **sticky MAC**) to allow only known devices, **disable unused ports**, and move the **native VLAN** off VLAN 1. On Wi-Fi: use **WPA3** (or **WPA2**, never **WEP**), a strong **PSK**, a changed **SSID** and admin password, no **WPS**, and a **guest network** for visitors.

⚠️ **Watch out:** WPS makes Wi-Fi easy to join — for you *and* for an attacker. Turn it off.

---

## 4. Real-world analogy

> **"Hardening the access layer is like locking the doors and windows of a house."**

| House | Network |
|-------|---------|
| Only your key opens the front door | Port security (known MAC only) |
| Locking doors you never use | Disabling unused ports |
| A strong deadbolt, not a flimsy latch | WPA3, not WEP |
| A hard-to-guess key, not "1234" | A strong PSK |
| A separate guest room, not your bedroom | Guest network |

Lock what lets people in, and don't leave easy ways around the locks.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Port security** | port se-KYOOR-it-ee | Limiting which devices may use a switch port. |
| **Sticky MAC** | STIK-ee mack | A port that learns and locks to the first device's MAC. |
| **PSK** | P-S-K | Pre-shared key — your Wi-Fi password. |
| **WPS** | W-P-S | Wi-Fi Protected Setup — an easy-join feature you should turn off. |
| **Guest network** | | A separate Wi-Fi for visitors, away from your main devices. |

---

## 6. ASCII diagram

```
   HARDEN THE ACCESS LAYER

   SWITCH PORTS                     WIRELESS
   - port security (known MAC)      - WPA3  (or WPA2, never WEP)
   - sticky MAC (lock first device) - strong PSK (Wi-Fi password)
   - disable unused ports           - change default SSID + admin pw
   - native VLAN off VLAN 1         - turn OFF WPS
                                    - add a guest network
```

_Lock the wired doors (ports) and the wireless doors (Wi-Fi)._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-13-05-hardening-ports-wireless-01.svg` (created and stored in this module's `assets/`)
> **Shows:** two side-by-side panels — "Switch ports" (port security/sticky MAC, disable unused ports, native VLAN off 1) and "Wireless" (WPA3 over WPA2 over WEP, strong PSK, change SSID/admin, disable WPS, guest network).
> **Key elements & labels:** each hardening step as a short bullet; the Wi-Fi panel shows a ranking WPA3 (best) → WPA2 (ok) → WEP (never) using words, not color.
> **Color meaning:** panels titled in words; the Wi-Fi ranking uses "best / ok / never" text labels, not color alone.
> **Flow direction:** two panels left (switch) and right (wireless), under one "Harden the access layer" banner.
> **Alt text (required):** "Two panels under the heading Harden the access layer. Left panel, Switch ports: use port security to allow only known MAC addresses; use sticky MAC so a port locks to the first device; disable unused ports; and move the native VLAN off VLAN 1. Right panel, Wireless: choose Wi-Fi security in this order — WPA3 is best, WPA2 is okay, and WEP should never be used; set a strong PSK, which is the Wi-Fi password; change the default SSID and the router's admin password; turn off WPS; and add a separate guest network for visitors."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-13-05-switch-ports-01.jpg`
> The Dell PowerConnect 3424 front panel. Alt text: "The front panel of the Dell PowerConnect 3424 switch, showing the physical ports that port security and port-disabling protect."
>
> **Photo 2** — `img-13-05-router-wifi-settings-01.jpg`
> A home router's Wi-Fi security page. Alt text: "A home router's wireless settings page showing the security type (WPA2/WPA3) and SSID, where Wi-Fi hardening is done."

---

## 9. Hands-on lab

**Goal:** check your home Wi-Fi's security type, and plan which switch ports to disable.
**Why:** you confirm your Wi-Fi is safe, and you practice the switch-hardening mindset.

**You will need**
- Your Windows laptop on your home Wi-Fi, and paper. Estimated time: 15 min.

⚠️ **Before you start (safety):** the Wi-Fi check only reads settings. The switch part is a paper plan — do not disable ports on a shared switch without permission.

### 9a. Step-by-step instructions

**Part A — check your Wi-Fi security (Windows):**

1. Open the Start menu, type **cmd**, and press **Enter** to open Command Prompt.
2. Type this exact command and press **Enter**:

```
netsh wlan show interfaces
```

3. Find the **Authentication** line in the output. It names your Wi-Fi security.

**Part B — plan your switch ports (paper):**

4. List how many ports your switch has, and which are actually in use.
5. Circle the ports nobody uses — these are the ones to disable.

### 9b. Expected results

- Part A shows an **Authentication** value such as `WPA2-Personal` or `WPA3-Personal`.

```
    Authentication         : WPA2-Personal
```

- Part B: a short list of unused ports to disable.

- ✅ **You did it if:** your Wi-Fi shows WPA2 or WPA3 (not WEP/Open), and you found the unused ports.

> ⚠️ The exact output above is a typical example. Your real value may differ — read your own **Authentication** line. Any switch command to disable a port is **[TO VERIFY ON HARDWARE]**.

### 9c. Verify it worked

1. Read your Authentication line aloud. Is it WPA2 or WPA3? (If it says WEP or Open, plan to fix it.)
2. Point to one unused port on your plan and say why disabling it helps.

### 9d. Reset / roll back

Part A changed nothing (read-only). Part B is paper only. No settings were altered.

> 🔧 **Home-lab continuity:** keep your Wi-Fi result and port plan. They feed the hardening checklist in Lesson 13-07.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Leaving unused ports live | Anyone can plug in | Disable the ports nobody uses |
| Using WEP or old WPA | Easily cracked | Use WPA3, or WPA2 with AES |
| Keeping the default SSID/admin password | Attackers know the defaults | Change both |
| Leaving WPS on | Easy to attack | Turn WPS off |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| A strange device is on the network | No port security | Enable port security / sticky MAC |
| Wi-Fi shows "WEP" or "Open" | Weak wireless security | Switch to WPA3 or WPA2 (AES) |
| Neighbors guess your Wi-Fi | Weak or default PSK | Set a long, unique passphrase |
| Guests reach your private files | No guest network | Add a separate guest Wi-Fi |

---

## 12. Lesson summary

- **Port security** (often **sticky MAC**) allows only known devices on a switch port.
- **Disable unused ports** and move the **native VLAN** off VLAN 1.
- On Wi-Fi, use **WPA3** (or **WPA2**, never **WEP**) and a strong **PSK**.
- Change the default **SSID** and admin password, turn off **WPS**, and add a **guest network**.

**One-sentence recap:** Harden the access layer by locking switch ports to known devices and securing Wi-Fi with WPA3, a strong password, no WPS, and a guest network.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-13-05-fill-in-the-blank.md`
2. **Matching** — `wb-13-05-matching.md`
3. **Label the diagram** — `wb-13-05-label-the-diagram.md` (switch vs. wireless)
4. **Short answer** — `wb-13-05-short-answer.md`
5. **Hands-on observation** — `wb-13-05-hands-on-observation.md` (check your Wi-Fi)
6. **Vocabulary review** — `wb-13-05-vocabulary-review.md`
7. **Reflection** — `wb-13-05-reflection.md`

**Quick written warm-up (do this now):** Which Wi-Fi security is best? Which switch feature locks a port to the first device?

Best Wi-Fi: ____________  Locks a port: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-13-05-knowledge-check.md`.)

1. **Port security** limits a switch port by checking the device's… *(Objective: port)*
   - A) IP address
   - B) MAC address
   - C) cable color
   - D) VLAN name

2. **Sticky MAC** means the port… *(Objective: port)*
   - A) uses glue
   - B) learns and locks to the first device's MAC
   - C) blocks all devices
   - D) speeds up traffic

3. Why disable unused switch ports? *(Objective: port)*
   - A) to save electricity only
   - B) an unused live port is an open door for anyone
   - C) it makes the switch faster
   - D) there is no reason

4. Which Wi-Fi security should you use? *(Objective: wireless)*
   - A) WEP
   - B) Open (no password)
   - C) WPA3 (or WPA2 with AES)
   - D) old WPA

5. **WPS** should be… *(Objective: wireless)*
   - A) turned on for safety
   - B) turned off, because it's easy to attack
   - C) used instead of a password
   - D) set to WEP

6. **True or false —** Leaving the default SSID and admin password is safe because they're random. Explain in one sentence. *(Objective: wireless)*

7. A **PSK** is… *(Objective: wireless)*
   - A) a switch port
   - B) your Wi-Fi password (pre-shared key)
   - C) a cable type
   - D) a VLAN number

8. **Matching —** match each control to what it protects. *(Objective: hardening)*
   - ___ Port security &nbsp;&nbsp; ___ Guest network &nbsp;&nbsp; ___ WPA3
   - A) Keeps visitors off your main devices
   - B) Allows only known devices on a port
   - C) Strong Wi-Fi encryption

9. Fill in the blank: You should move the ____________ VLAN off the default VLAN 1. *(Objective: port)*

10. **Scenario —** A visitor plugs a laptop into an empty wall jack in the office and reaches the network. Name two switch-hardening steps that would have stopped this. *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-13-05-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-13-05-hardening.md`. In brief:

- **Objective in one line:** learners harden the access layer — port security/sticky MAC, disabling unused ports, native-VLAN change, and Wi-Fi (WPA3, strong PSK, changed SSID/admin, no WPS, guest network).
- **Common misconceptions:** "unused ports are harmless"; "WPS is just convenient"; "default names are random and safe." Correct each.
- **Pacing:** ~30 min. The house-locks analogy carries it; the real Wi-Fi check on Windows makes it concrete.
- **How CompTIA tests it:** port security/sticky MAC purpose; the WPA3 > WPA2 > WEP ranking; why disable WPS; disabling unused ports; native-VLAN change.
- **Accuracy note (Prime Directive #7):** `netsh wlan show interfaces` is a real Windows command; the shown output is a typical example and marked as varying. All Dell switch port commands are `[TO VERIFY ON HARDWARE]`.
- **Extension idea:** 802.1X port-based authentication (ties to RADIUS, 13-03); DHCP snooping and dynamic ARP inspection; MAC spoofing as a limit of MAC filtering.

---

## 17. Cheat sheet

> **Quick reference — Securing ports & wireless**
>
> **Switch ports:**
> - **Port security / sticky MAC** — allow only known devices; lock to first MAC.
> - **Disable unused ports** — an open port is an open door.
> - Move the **native VLAN** off VLAN 1.
>
> **Wireless:**
> - **WPA3** best · **WPA2** (AES) ok · **WEP** never.
> - Strong **PSK** (Wi-Fi password); change default **SSID** + admin password.
> - Turn **WPS** off; add a **guest network**.
>
> - Check your Wi-Fi type (Windows): `netsh wlan show interfaces` → read **Authentication**.
>
> _(Full version: `resources/cheat-sheets/network-security-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Port security** — Limiting which devices (by MAC address) may use a switch port.
- **MAC filtering** — Allowing only known MAC addresses onto a port or network.
- **Sticky MAC** — A port-security setting where a port learns and locks to the first device's MAC address.
- **PSK (Pre-Shared Key)** — The shared password used to join a Wi-Fi network.
- **WPS (Wi-Fi Protected Setup)** — An easy-join Wi-Fi feature that is insecure and should be turned off.
- **Guest network** — A separate Wi-Fi for visitors, kept away from the main network.

(SSID, WEP, and WPA2/WPA3 were defined in Lesson 11-07; MAC address in Module 03/07; native VLAN in 11-03. All are reused here.)

---

## 19. Homework

- **Practice:** Log in to your home router and confirm it uses WPA2 or WPA3, and that WPS is off. If it's safe to change, improve anything weak.
- **Spaced review:** Say the WPA3 > WPA2 > WEP ranking and three switch-hardening steps from memory.
- **Preview:** Next, **Lesson 13-06 — VPNs and encryption in plain language**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. What is your home Wi-Fi's security type right now? _______________________
3. What was hardest — the switch-port steps, or the Wi-Fi steps?
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain port security and sticky MAC.
- [ ] I can say why to disable unused ports.
- [ ] I can rank WPA3, WPA2, and WEP.
- [ ] I checked my own Wi-Fi's security type.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I'm ready for Lesson 13-06 (VPNs and encryption).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M13-L05** — "Securing Switch Ports and Wireless" · Module 13 · Unit 10_
