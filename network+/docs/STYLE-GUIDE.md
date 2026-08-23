# Style Guide — NetworkAcademy+

This is the rulebook that makes every lesson feel like it came from the same professional publisher. It covers **writing**, **visuals**, and **accessibility**. It is a hard gate in the production pipeline (Project Plan, Stage 5).

---

## Part 1 — Writing

### Reading level: ~7th grade
- **Short sentences.** Aim for 15–20 words. One idea per sentence.
- **Plain words.** Prefer "use" over "utilize," "start" over "initiate," "send" over "transmit."
- **Define before you use.** The first time a term appears, it is **bold** and defined in the same breath.
- **Active voice.** "The switch learns the address," not "the address is learned by the switch."
- **Second person.** Talk to "you." It's a coach, not a textbook.

> **Quick test:** paste a paragraph into a readability checker. If it scores above grade 8, simplify it.

### WHY before HOW
Every lesson and major section opens with the **real-world problem** before any mechanics:
> ❌ "A VLAN is a logical broadcast domain configured with 802.1Q tagging."
> ✅ "Imagine your whole office shares one big room and everyone hears every conversation. It's noisy and not private. A **VLAN** lets you split that one room into separate rooms — without buying new walls. Here's how it works…"

### Never assume prior knowledge
- No unexplained acronyms. First use: **spell it out (Acronym)**. e.g., "**Dynamic Host Configuration Protocol (DHCP)**."
- No "as you already know." If it matters, teach it or link to the lesson that did.
- Analogies first, then the technical truth.

### The lesson template (every lesson follows this)
1. **Why this matters** — the problem in the real world.
2. **Key words** — plain-language definitions of new terms.
3. **The concept** — explained simply, paired with a diagram.
4. **See it for real** — a real photo or screenshot.
5. **Step by step** — numbered, do-it-yourself instructions.
6. **Check yourself** — 2–3 quick questions.
7. **Remember this** — the 3–5 takeaways that stick.

### Tone
Encouraging, calm, and confident. Celebrate small wins. Normalize confusion ("This trips up almost everyone at first — let's slow down.").

### Formatting standards
- Headings in **sentence case** ("Configuring your first VLAN").
- Use **numbered lists** for steps, **bullets** for options.
- Commands and code in `monospace`. Show expected output.
- **Callout boxes** use a consistent set:
  - 💡 **Tip** — a shortcut or helpful extra.
  - ⚠️ **Watch out** — a common mistake.
  - 🎯 **Exam tip** — how CompTIA tends to test this.
  - 🔧 **Lab link** — connects to the home-lab build.

---

## Part 2 — Visuals

### The three visual types (used deliberately)
| Type | Purpose | Rule |
|------|---------|------|
| **Diagram** (`dgm-`) | Explain a concept or flow | Clean, labeled, minimal text |
| **Real photo** (`img-`) | Show the actual gear/cable/port | Real-world, well-lit, annotated |
| **Screenshot** (`img-`) | Show the exact screen to click | Highlight the click target |

Every lesson concept should pair with **at least one diagram**, and every hands-on lesson with **at least one real photo or screenshot** — this is the "see it" learning channel.

### Diagram standards
- One idea per diagram. If it needs a paragraph to explain, split it.
- Consistent shapes: rectangle = device, cloud = internet/WAN, line = link, dashed line = wireless/logical.
- Consistent color meaning (documented once in `assets/templates/diagram-legend.md`) — and **never rely on color alone** (add labels/shapes too).
- Left-to-right or top-to-bottom flow. Number the steps if there's a sequence.
- Prefer **SVG** so diagrams stay crisp at any size.

### Photo standards
- Show the learner's actual world: RJ45 plugs, the Dell 3424 front panel, cable colors, blinking link lights.
- Annotate with arrows/labels pointing to the exact thing being discussed.
- Where a real photo can't be captured, use a clearly-labeled placeholder:
  `[PHOTO NEEDED: front panel of Dell PowerConnect 3424 showing port 1 link light]`

### Icon set
A single consistent icon set (`assets/icons/`) for switch, router, PC, server, AP, firewall, cloud. Same icons everywhere so the learner builds visual memory.

---

## Part 3 — Accessibility (non-negotiable)

1. **Alt text on every image.** Describe what it shows and why it matters — not just "diagram."
2. **Color is never the only signal.** Pair color with labels, shapes, or text.
3. **High contrast.** Text and key diagram elements meet WCAG AA contrast.
4. **Readable structure.** Real headings (not bold text pretending to be headings) so screen readers can navigate.
5. **Mobile-friendly.** Tables scroll; images scale; nothing forces sideways scrolling on a phone.
6. **Descriptive links.** "See the [subnetting cheat sheet]" — never "click [here]."

---

## Part 4 — Consistency checklist (used in review)

Before a lesson is marked **Published**, the reviewer confirms:

- [ ] Opens with WHY (real-world problem) before HOW.
- [ ] No undefined terms or acronyms.
- [ ] Reading level ≈ grade 7 (checked).
- [ ] Follows the 7-part lesson template.
- [ ] At least one diagram + one real photo/screenshot (or a labeled placeholder).
- [ ] Every image has meaningful alt text.
- [ ] Callout boxes use the standard set.
- [ ] Front-matter complete (ID, objectives, status, prerequisites).
- [ ] Bolded key terms exist in the glossary.
- [ ] Any commands were run and the shown output is real.
- [ ] Links use descriptive text and resolve correctly.

---

## Part 5 — Voice examples (do / don't)

| ❌ Don't write | ✅ Do write |
|---------------|-------------|
| "Utilize the CLI to instantiate a VLAN." | "Use the switch's command line to create a VLAN." |
| "Obviously, ARP resolves L3 to L2." | "**ARP** is how a device finds the hardware address that goes with an IP address. Here's why that's needed…" |
| "Configure the interface accordingly." | "Type this exact command, then press Enter:" |
| "As is well known, DNS is hierarchical." | "**DNS** works like a chain of phone books, each pointing to the next. Let's walk through it." |

---

*This is the last planning document. When these six docs and the roadmap are approved, production of Module 00 begins.*
