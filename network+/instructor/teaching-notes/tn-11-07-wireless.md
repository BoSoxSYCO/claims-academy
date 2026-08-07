---
teaching_notes_for: NA-M11-L07
module: 11
lesson: 07
unit: 8
objective_ids: ["2.4"]
---

# 🔒 Teaching Notes — Lesson 11-07: Wireless Standards, Channels, and Security

> Instructor guide. Written so a substitute could teach this cold.

## Learning objective (one line)
Learners name the 802.11 standards (with Wi-Fi numbers), compare 2.4/5 GHz bands, use non-overlapping channels, and choose WPA2/WPA3 security.

## Where this sits
- **Before:** 04-03 (wireless basics/PAN/Wi-Fi) and 07-04 (access points). Both hard prerequisites.
- **After:** 11-08 (designing a small network end to end — the Module 11 capstone).
- Concept lesson with a read-only laptop lab (`netsh wlan show interfaces`).

## Core facts (memorize)
- **Standards ↔ Wi-Fi numbers:** 802.11n = Wi-Fi 4, ac = Wi-Fi 5, ax = Wi-Fi 6. (a/b/g are the older ones.)
- **Bands:** 2.4 GHz = farther, slower, crowded; 5 GHz = faster, shorter reach. n and ax use both; ac is 5 GHz.
- **Channels:** on 2.4 GHz only **1, 6, 11** don't overlap. 5 GHz has many non-overlapping channels.
- **Security ladder:** WEP (broken) < WPA (weak) < WPA2 (good) < WPA3 (best).

## Common misconceptions (correct all three)
1. **"5 GHz is always better."** No — 2.4 GHz reaches farther and through walls.
2. **"A hidden SSID is secure."** No — it's trivially bypassed; use WPA2/WPA3 + a strong passphrase.
3. **"WEP is fine."** No — it's broken; replace immediately.

## Prime Directive #7 — accuracy
`netsh wlan show interfaces` is a genuine Windows command, but exact fields vary by adapter/driver, so the sample output is marked **[TO VERIFY ON HARDWARE]** and learners record their own. Router config is view-only. No fabricated output.

## Pacing (~30 min)
- 5 min — why wireless needs speed, space, and safety (WHY).
- 12 min — standards table, bands, channels (highway/lane analogy).
- 6 min — the security ladder; WPA3 best, WEP broken.
- 7 min — the `netsh` lab (find band/standard/security).

## How CompTIA tends to test it
- Match 802.11 letters to Wi-Fi numbers and to bands/speeds.
- 2.4 GHz non-overlapping channels 1/6/11.
- WPA3 best, WEP broken; SSID = name (hiding it ≠ security).

## Support / extension
- **Support:** give a printed standards table to fill in; do the `netsh` lab together.
- **Extension:** 6 GHz / Wi-Fi 6E, MU-MIMO, band steering, and enterprise WPA (802.1X) vs. personal (PSK).

---
_NetworkAcademy+ · Teaching Notes 11-07 · CompTIA Network+ N10-009 · Instructor materials_
