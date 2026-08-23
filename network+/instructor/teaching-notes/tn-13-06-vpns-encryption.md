# Teaching Notes — NA-M13-L06 "VPNs and Encryption in Plain Language"

> 🔒 Instructor material. **Module:** 13 · **Unit:** 10 · **Objective:** N10-009 4.1 / 4.4 · **Time:** ~30 min

---

## Learning objective (one line)

Learners explain encryption (plaintext/ciphertext/key, symmetric vs. asymmetric), hashing for integrity, and what a VPN tunnel does (site-to-site vs. remote-access).

## Why this lesson matters

Encryption was deliberately deferred from 13-01 — this is its home. It's the tool that protects data **in transit**, closing the loop on the CIA triad: encryption for confidentiality, hashing for integrity. VPNs are the everyday application and a heavily tested remote-access topic (domain 4).

## Common misconceptions (and fixes)

- **"Hashing is encryption."** The key split: encryption is **two-way** (you can unlock it); hashing is **one-way** (fingerprint only). Drill it.
- **"A VPN makes me totally safe."** It hides traffic from snoops but does **not** stop malware or phishing. It's one layer.
- **"https is optional."** Plain http sends data in the clear. The padlock + https means TLS encryption; teach learners to look for it.
- **"Symmetric vs. asymmetric is about strength."** It's about **key handling** — one shared key (fast, but sharing is the hard part) vs. a public/private pair (solves sharing).

## Pacing guidance

- ~30 minutes. Lead with the locked-box (encryption) and armored-tunnel (VPN) analogies (§4).
- The browser-padlock lab (§9) is the highlight — it proves encryption already protects them daily. Keep it read-only.
- Keep symmetric/asymmetric and IPsec/TLS **light** — names and one-line roles, not math.
- Where learners stall: encryption vs. hashing (two-way vs. one-way), and symmetric vs. asymmetric.

## How CompTIA tends to test it

- Encryption → confidentiality; hashing → integrity (map tool to CIA goal).
- Symmetric (one key) vs. asymmetric (key pair).
- VPN purpose and types: site-to-site vs. remote-access; IPsec and TLS as tunnel tech.
- Recognizing https/TLS as encryption in action.

## Accuracy note (Prime Directive #7)

The browser-padlock steps are real, but menu wording varies by browser/version, so exact click paths are `[TO VERIFY ON HARDWARE]`. The lab is read-only — no passwords typed, no output fabricated.

## Extension ideas (fast learners)

- How TLS uses asymmetric keys to exchange a symmetric session key (hybrid).
- Certificates and the certificate-authority (CA) chain of trust.
- Named algorithms: AES (symmetric), RSA (asymmetric), SHA-256 (hashing).

## Support ideas (struggling learners)

- Two flashcards only: "encryption = two-way lock," "hashing = one-way fingerprint."
- Use the locked-box vs. wax-seal images before any key-pair detail.
- Do only the padlock lab first; add symmetric/asymmetric once encryption vs. hashing is solid.

## Where this leads

Next is 13-07 — the hardening checklist that pulls all of Module 13 together and **completes the module.** Mark Module 13 ✅ Complete after 13-07.

---
_NetworkAcademy+ · Teaching Notes · CompTIA Network+ N10-009 · NA-M13-L06 · Module 13_
