---
id: NA-M11-L06
module: 11
lesson: 06
title: "Inter-VLAN Routing (Getting VLANs to Talk)"
unit: 8
objective_ids: ["2.1"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E2
prerequisites: ["NA-M11-L01", "NA-M11-L03", "NA-M11-L05"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-06"
---

# [Module 11 · Lesson 06] Inter-VLAN Routing (Getting VLANs to Talk)

> **Unit:** Unit 8 — Network Implementation · **Time:** ~30 min · **Equipment:** E2 (your laptop + the Dell PowerConnect 3424, plus a router or Layer 3 switch)
> **You'll need first:** VLANs (11-01), the trunk you built (11-03), and routing basics (11-05).

You built VLANs to keep groups apart. But sometimes VLAN 10 **does** need to reach VLAN 20 — Sales must reach a shared printer in Engineering. VLANs can't talk on their own. They need a router. This lesson shows how a router lets separate VLANs talk when you want them to. This is **inter-VLAN routing**.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain **why** VLANs need a router to talk.
- [ ] Describe **router-on-a-stick** in plain terms.
- [ ] Describe a **Layer 3 switch** as the other option.
- [ ] Set up basic inter-VLAN routing (with `[TO VERIFY ON HARDWARE]` notes).

---

## 2. Introduction — why this matters

Remember Lesson 11-01: each VLAN is its own network. Each VLAN has its own subnet. And moving between networks is a **router's** job (Lesson 11-05). So VLAN 10 and VLAN 20 can't talk by themselves. That is by design. It keeps them safely apart.

But total separation is not always what you want. Sales may need one shared printer. A manager may need files in another department. You want the VLANs apart **most** of the time, and connected only where you choose. A router gives you that control.

This is called **inter-VLAN routing** — "inter" means "between." It's a router moving traffic **between** VLANs. There are two common ways to do it. This lesson covers both.

🎯 **Exam tip:** VLANs need a Layer 3 device (a router or a Layer 3 switch) to talk. Know the two methods.

🔧 **Lab link:** You'll use the trunk from Lesson 11-03 to carry both VLANs to the router.

---

## 3. Simple explanation

VLANs are separate networks. To join separate networks, you need a **Layer 3** device. There are two common ways.

### Method 1: Router-on-a-stick

**Router-on-a-stick** uses **one** router link to serve **many** VLANs. Here's the trick. You connect the router to the switch with a **trunk** (from Lesson 11-03). The trunk carries every VLAN's traffic on one cable.

On the router, you create a small "sub-interface" for each VLAN. Each sub-interface gets an IP address. That address becomes the **default gateway** for that VLAN. When VLAN 10 wants to reach VLAN 20, it sends the traffic to its gateway (the router), and the router passes it to VLAN 20.

```
   ROUTER-ON-A-STICK

     [Router]
        │  one trunk (802.1Q: VLAN 10 + 20)
        │
     [Switch] ── VLAN 10 PCs
              └─ VLAN 20 PCs

   Router has a gateway address for each VLAN.
   Traffic between VLANs goes up to the router and back.
```

- **Good:** cheap — one router, one link.
- **Bad:** all VLAN-to-VLAN traffic squeezes through one cable, so it can get busy.

### Method 2: Layer 3 switch

A **Layer 3 switch** is a switch that can also route. It does the VLAN switching **and** the routing inside one box. You give each VLAN a gateway address right on the switch (a "VLAN interface"). No separate router is needed.

- **Good:** fast — routing happens inside the switch; no single trunk bottleneck.
- **Bad:** costs more than a plain switch.

### Which to use

- **Small or budget setup:** router-on-a-stick.
- **Busy or bigger network:** a Layer 3 switch.

Both do the same job: give each VLAN a **gateway**, and route traffic between VLANs through it.

> **The big idea:** VLANs are separate networks, so they need a **Layer 3** device to talk — this is **inter-VLAN routing**. **Router-on-a-stick** uses one router on a **trunk**, with a gateway address (sub-interface) for each VLAN — cheap, but one link carries it all. A **Layer 3 switch** routes inside the switch itself — faster, but costs more. Either way, each VLAN gets a **default gateway**, and traffic between VLANs passes through it.

💡 **Tip:** The router (or Layer 3 switch) holds the **default gateway** for every VLAN. That's the address each VLAN's devices point to.

⚠️ **Watch out:** Give each VLAN its **own** subnet and its **own** gateway address. Two VLANs sharing one subnet breaks routing.

---

## 4. Real-world analogy

> **"Inter-VLAN routing is a doorway between two locked rooms — the rooms stay separate, but a guarded door lets you pass when allowed."**

| Locked rooms | VLANs |
|--------------|-------|
| Each room is private | Each VLAN is separate |
| A guarded door joins them | A router joins them |
| The guard checks who passes | The router routes chosen traffic |
| No door = no way between | No router = VLANs can't talk |

The rooms stay separate for safety. The door (router) is the one controlled way through.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Inter-VLAN routing** | | A router moving traffic between VLANs. |
| **Router-on-a-stick** | | One router on a trunk that routes for many VLANs. |
| **Layer 3 switch** | | A switch that can also route between VLANs. |
| **Sub-interface** | | A small virtual interface on a router, one per VLAN. |
| **Default gateway** | | The address a device sends traffic to when leaving its network. |

---

## 6. ASCII diagram

```
   TWO WAYS TO ROUTE BETWEEN VLANs

   ROUTER-ON-A-STICK                 LAYER 3 SWITCH
   [Router]                          [L3 Switch]
      │ one trunk (VLAN 10+20)          routes inside itself
   [Switch]                          VLAN 10 gateway ┐
    ├ VLAN 10                        VLAN 20 gateway ┘ both on the switch
    └ VLAN 20

   Cheap, one busy link.             Fast, costs more.
   Both give each VLAN a gateway and route between them.
```

_Each VLAN gets a gateway; the Layer 3 device routes traffic between VLANs._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-11-06-inter-vlan-routing-01.svg` (created and stored in this module's `assets/`)
> **Shows:** left panel — router-on-a-stick (a router joined to a switch by one trunk carrying VLAN 10 + 20, with a gateway per VLAN); right panel — a Layer 3 switch doing both jobs in one box.
> **Key elements & labels:** router-on-a-stick trunk "802.1Q VLAN 10 + 20", gateway `192.168.10.1` for VLAN 10 and `192.168.20.1` for VLAN 20; Layer 3 switch with the same two gateways inside it.
> **Color meaning:** each method is titled in words; each VLAN keeps its color **and** its number/gateway label; color never stands alone.
> **Flow direction:** two side-by-side panels; VLAN PCs below each switch.
> **Alt text (required):** "Two side-by-side methods for routing between VLANs. Left, router-on-a-stick: a router connects to a switch by a single trunk carrying VLAN 10 and VLAN 20 with 802.1Q tags; the router holds a gateway address 192.168.10.1 for VLAN 10 and 192.168.20.1 for VLAN 20, so traffic between the VLANs goes up to the router and back. Right, a Layer 3 switch does both the switching and the routing inside one box, holding the same two gateway addresses itself, with no separate router. A caption notes router-on-a-stick is cheap but shares one link, while a Layer 3 switch is faster but costs more; either way each VLAN gets its own gateway."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-11-06-router-trunk-01.jpg`
> A router joined to a switch by one uplink cable. Alt text: "A router connected to a switch by a single trunk cable, the setup used for router-on-a-stick inter-VLAN routing."
>
> **Photo 2** — `img-11-06-l3switch-vlanint-01.jpg`
> A Layer 3 switch's VLAN interface config on screen. Alt text: "A Layer 3 switch showing VLAN interface addresses that act as the gateway for each VLAN."

---

## 9. Hands-on lab

**Goal:** give VLAN 10 and VLAN 20 a gateway so they can reach each other, using the trunk from Lesson 11-03.
**Why:** this is the step that finally lets your separated VLANs talk when you choose.

**You will need**
- Your laptop, the Dell PowerConnect 3424 (with VLAN 10 + 20 and the g24 trunk from 11-03), and a router **or** a Layer 3 switch. Estimated time: 18 min.

⚠️ **Before you start (safety):** Keep your management session on the console cable. Give each VLAN a **different** subnet. Double-check addresses before you save.

### 9a. Step-by-step instructions

**If your Dell 3424 supports Layer 3 (VLAN interfaces):**

1. Log in and reach `console#`, then `configure`.
2. Give VLAN 10 a gateway address:
   ```
   interface vlan 10
   ip address 192.168.10.1 255.255.255.0
   exit
   ```
3. Give VLAN 20 a gateway address:
   ```
   interface vlan 20
   ip address 192.168.20.1 255.255.255.0
   exit
   ```
4. Turn on routing if needed:
   ```
   ip routing
   ```
5. Leave config: `end`. Save: `copy running-config startup-config`.
6. On a VLAN 10 PC, set its gateway to `192.168.10.1`. On a VLAN 20 PC, set `192.168.20.1`.
7. From a VLAN 10 PC, `ping` a VLAN 20 PC.

> **[TO VERIFY ON HARDWARE]** Whether your PowerConnect model supports Layer 3 (VLAN IP + `ip routing`), and the exact command wording, varies by model and firmware. If it's Layer 2 only, use a separate router with router-on-a-stick instead. Confirm on your unit — do not assume this is word-for-word.

### 9b. Expected results

After both VLANs have a gateway and routing is on, a VLAN 10 PC can `ping` a VLAN 20 PC. **[TO VERIFY ON HARDWARE]**:

```
   Reply from 192.168.20.50: bytes=32 time<1ms TTL=127
```

- ✅ **You did it if:** a device in VLAN 10 can reach a device in VLAN 20.

### 9c. Verify it worked

1. Confirm each VLAN has its own gateway address.
2. Confirm the ping between VLANs succeeds.

### 9d. Reset / roll back

To undo, remove the VLAN IP addresses and turn routing off:

```
console(config)# interface vlan 10
console(config-if)# no ip address
console(config-if)# exit
console(config)# no ip routing
console(config)# end
console# copy running-config startup-config
```

> 🔧 **Home-lab continuity:** you can leave inter-VLAN routing on if you want VLANs to talk, or roll it back to keep them fully separate. Lesson 11-07 moves on to wireless.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| No gateway on a VLAN | That VLAN can't leave itself | Give each VLAN a gateway address |
| Two VLANs on one subnet | Routing breaks | Each VLAN gets its **own** subnet |
| Forgetting to enable routing | Gateways exist but don't route | Turn on `ip routing` (Layer 3 device) |
| PC gateway not set | PC can't reach other VLANs | Point each PC at its VLAN's gateway |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| VLAN 10 can't reach VLAN 20 | Routing not enabled | Enable `ip routing`; check both gateways |
| One PC works, another doesn't | Wrong gateway on the PC | Set the PC's gateway to its VLAN's address |
| Nothing routes at all | Switch is Layer 2 only | Use a router (router-on-a-stick) instead |
| Ping fails after reboot | Config not saved | `copy running-config startup-config` |

---

## 12. Lesson summary

- VLANs are separate networks, so they need a **Layer 3** device to talk.
- **Router-on-a-stick:** one router on a **trunk**, a gateway per VLAN — cheap, one shared link.
- **Layer 3 switch:** routes inside the switch — faster, costs more.
- Each VLAN needs its **own subnet** and its **own gateway** address.

**One-sentence recap:** Inter-VLAN routing lets separated VLANs talk through a Layer 3 device — either a router-on-a-stick over a trunk or a Layer 3 switch — by giving each VLAN its own subnet and gateway.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-11-06-fill-in-the-blank.md`
2. **Matching** — `wb-11-06-matching.md`
3. **Label the diagram** — `wb-11-06-label-the-diagram.md` (the two methods)
4. **Short answer** — `wb-11-06-short-answer.md`
5. **Hands-on observation** — `wb-11-06-hands-on-observation.md` (route between VLANs)
6. **Vocabulary review** — `wb-11-06-vocabulary-review.md`
7. **Reflection** — `wb-11-06-reflection.md`

**Quick written warm-up (do this now):** What kind of device lets VLANs talk? What does each VLAN need?

Device: ____________  Each VLAN needs: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-11-06-knowledge-check.md`.)

1. Why can't two VLANs talk on their own? *(Objective: why)*
   - A) They use the same cable
   - B) They are separate networks and need a Layer 3 device
   - C) They are turned off
   - D) They share one subnet

2. **Inter-VLAN routing** moves traffic… *(Objective: concept)*
   - A) inside one VLAN only
   - B) between VLANs
   - C) between cables
   - D) between ports on a PC

3. **Router-on-a-stick** connects the router to the switch with a… *(Objective: method 1)*
   - A) trunk
   - B) crossover cable
   - C) console cable
   - D) power cable

4. A **Layer 3 switch**… *(Objective: method 2)*
   - A) can only switch
   - B) can switch **and** route
   - C) is a type of router only
   - D) has no VLANs

5. Each VLAN must have its own… *(Objective: subnet/gateway)*
   - A) password
   - B) subnet and gateway address
   - C) cable color
   - D) switch

6. **True or false —** Two VLANs can share the same subnet and still route fine. Explain in one sentence. *(Objective: subnet)*

7. In router-on-a-stick, the router holds each VLAN's… *(Objective: gateway)*
   - A) default gateway address
   - B) MAC address only
   - C) Wi-Fi password
   - D) serial number

8. **Matching —** match each term to its meaning. *(Objective: vocabulary)*
   - ___ Router-on-a-stick &nbsp;&nbsp; ___ Layer 3 switch &nbsp;&nbsp; ___ Sub-interface
   - A) A switch that also routes
   - B) One router on a trunk for many VLANs
   - C) A small virtual interface, one per VLAN

9. Fill in the blank: Traffic leaving its VLAN is sent to the VLAN's ____________. *(Objective: gateway)*

10. **Scenario —** Sales (VLAN 10) needs to reach a shared printer in Engineering (VLAN 20), but the two VLANs are fully separate. On a small budget, how would you connect them, and what must each VLAN have? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-11-06-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-11-06-inter-vlan-routing.md`. In brief:

- **Objective in one line:** learners explain why VLANs need Layer 3 to talk and set up inter-VLAN routing by router-on-a-stick or a Layer 3 switch.
- **Common misconceptions:** "VLANs route themselves"; "one subnet is fine for two VLANs." Correct both.
- **Pacing:** ~30 min. This ties together VLANs, the trunk, and routing — recap those first.
- **How CompTIA tests it:** inter-VLAN routing needs Layer 3; router-on-a-stick uses a trunk + sub-interfaces; each VLAN = its own subnet + gateway.
- **Accuracy note (Prime Directive #7):** whether a given PowerConnect 3424 supports Layer 3 varies by model/firmware; every unverified command/output line is marked **[TO VERIFY ON HARDWARE]**, with router-on-a-stick offered when the switch is Layer 2 only.
- **Extension idea:** SVIs (switch virtual interfaces) and how a Layer 3 switch avoids the single-trunk bottleneck.

---

## 17. Cheat sheet

> **Quick reference — Inter-VLAN routing**
>
> - VLANs are separate networks → they need a **Layer 3 device** to talk.
> - **Router-on-a-stick:** one router on a **trunk**, a **sub-interface** (gateway) per VLAN. Cheap; one shared link.
> - **Layer 3 switch:** routes inside the switch (a VLAN interface per VLAN). Faster; costs more.
> - Each VLAN needs its **own subnet** and its **own gateway** address.
> - PCs point at their VLAN's **default gateway**.
>
> **Dell 3424 (if Layer 3 capable):**
> ```
> interface vlan 10
> ip address 192.168.10.1 255.255.255.0
> ip routing
> ```
> - **[TO VERIFY ON HARDWARE]** — Layer 3 support and wording vary by model/firmware.
>
> _(Full version: `resources/cheat-sheets/vlans-and-switching-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Inter-VLAN routing** — Using a Layer 3 device to move traffic between VLANs.
- **Router-on-a-stick** — One router on a trunk that routes for many VLANs, using a sub-interface per VLAN.
- **Layer 3 switch** — A switch that can also route between VLANs, doing both jobs in one box.
- **Sub-interface** — A small virtual interface on a router, one per VLAN, that holds that VLAN's gateway address.

(Default gateway and trunk were defined earlier and are reused here.)

---

## 19. Homework

- **Practice:** Draw router-on-a-stick and a Layer 3 switch; label each VLAN's gateway.
- **Spaced review:** Explain why VLANs need a router, using the locked-rooms analogy.
- **Preview:** Next lesson, **wireless** — standards, channels, and security.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which method fits my home lab — router-on-a-stick or Layer 3 switch? _______________________
3. What still feels fuzzy about gateways? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain why VLANs need Layer 3 to talk.
- [ ] I can describe router-on-a-stick.
- [ ] I can describe a Layer 3 switch.
- [ ] I know each VLAN needs its own subnet and gateway.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know the next lesson covers wireless.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M11-L06** — "Inter-VLAN Routing (Getting VLANs to Talk)" · Module 11 · Unit 8_
