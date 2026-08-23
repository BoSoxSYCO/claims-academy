# Answer Key — NA-M13-L06 "VPNs and Encryption in Plain Language"

> 🔒 **Instructor / self-check only.** Keep separate from student copies.
> **Module:** 13 · **Unit:** 10 · **Objective:** 4.1 / 4.4

---

## Quiz answers (`quiz-13-06-knowledge-check.md`)

1. **B — ciphertext.** Encryption scrambles plaintext into ciphertext. *(A hash is one-way; a cable and a VLAN are unrelated.)*

2. **A — the secret that locks and unlocks data.** The key is the encryption secret. *(B/C/D are other network things.)*

3. **B — one key for both locking and unlocking.** Symmetric = one shared key. *(A public/private pair is asymmetric; the others are wrong.)*

4. **B — a public key and a private key.** Asymmetric uses a key pair. *(One shared key is symmetric; a hash is not encryption.)*

5. **B — a one-way fingerprint that spots changes.** Hashing is one-way and protects integrity. *(It is not two-way, a cable, or a VPN setting.)*

6. **False.** Hashing is **one-way** — you cannot turn a hash back into the original data; you can only compare hashes.

7. **B — a private, encrypted tunnel across the internet.** That is a VPN. *(It is not just a speed boost, a single IP, or a firewall rule.)*

8. **Matching:** **Encryption → B** (protect confidentiality); **Hashing → A** (protect integrity); **VPN → C** (tunnel traffic safely across the internet).

9. **Site.** A **site**-to-site VPN connects two whole networks.

10. **Scenario —** Use a **VPN** (a remote-access/client VPN). It creates an encrypted tunnel over the public Wi-Fi to your company network, so snoops on the shared Wi-Fi can't read your traffic. *(Accept "VPN — encrypts my traffic in a tunnel.")*

---

## Worksheet answers

### Fill in the blank (`wb-13-06-fill-in-the-blank.md`)
1. encryption · 2. plaintext · 3. ciphertext · 4. key · 5. symmetric · 6. asymmetric · 7. hashing · 8. integrity · 9. VPN · 10. tunnel

### Matching (`wb-13-06-matching.md`)
**Part 1:** 1 → C · 2 → A · 3 → B · 4 → D
**Part 2:** 5 → F (symmetric = one shared key) · 6 → E (asymmetric = key pair) · 7 → H (site-to-site = two networks) · 8 → G (remote-access = one person)

### Label the diagram (`wb-13-06-label-the-diagram.md`)
a. plaintext · b. ciphertext · c. key · d. fingerprint · e. integrity · f. encrypted

### Short answer (`wb-13-06-short-answer.md`) — model answers
1. Encryption scrambles data so only the right key can read it; it protects confidentiality.
2. Plaintext is the readable data before encryption; ciphertext is the scrambled data after.
3. Symmetric uses one shared key for both directions; asymmetric uses a public/private key pair.
4. Hashing turns data into a fixed fingerprint; it is one-way because you cannot turn the fingerprint back into the data.
5. If the data changes, its hash changes — so a matching hash proves the data was not altered (integrity).
6. A VPN is a private, encrypted connection; it creates a tunnel across the public internet.
7. Site-to-site connects two whole networks (e.g., two offices); remote-access connects one person (e.g., you from home).

### Hands-on observation (`wb-13-06-hands-on-observation.md`)
Answers vary by browser. Full credit when the learner finds the padlock and https on a secure site, notes a "Not secure"/http site as a warning, and identifies TLS (from 10-04) as what encrypts the web traffic.

### Vocabulary review (`wb-13-06-vocabulary-review.md`)
- **Encryption** — scrambling data so only the right key can read it.
- **Plaintext** — readable data before encryption.
- **Ciphertext** — scrambled data after encryption.
- **Key (encryption)** — the secret that locks and unlocks data.
- **Symmetric encryption** — one shared key for both directions.
- **Asymmetric encryption** — a public/private key pair.
- **Hashing** — a one-way fingerprint used to detect changes.
- **VPN** — a private, encrypted tunnel across the internet.
- **Tunnel** — the protected path a VPN creates.
- **IPsec** — a common protocol set for building VPN tunnels.

**Part 3 quick recall:** 1. Encryption · 2. Asymmetric encryption · 3. Site-to-site VPN

---
_NetworkAcademy+ · Answer Key · CompTIA Network+ N10-009 · NA-M13-L06 · Module 13_
