# Cheat Sheet — Network Security

> A printable quick reference for **Module 13**. Grows as the module's lessons are published.

---

## The CIA triad (Lesson 13-01)

Security has **three goals**. Together they are the **CIA triad**.

| Goal | Plain meaning | Kept safe by |
|------|---------------|--------------|
| **Confidentiality** | keep secrets secret | passwords, encryption |
| **Integrity** | keep data true and unchanged | checksums, hashes |
| **Availability** | keep it up and usable | backups, redundancy |

- **Confidentiality** — only the right people can see the data. Broken by snooping/theft.
- **Integrity** — the data is not changed by accident or on purpose. Broken by tampering.
- **Availability** — the service is up when you need it (from Lesson 12-03). Broken by outages/attacks.
- A **checksum** is a short number from data used to spot a change (integrity).
- Every security control protects **one or more** of the three goals.

> **Remember:** **C**onfidentiality = secret · **I**ntegrity = true · **A**vailability = up. Break one and you have a security problem.

---

## Common attacks (Lesson 13-02)

**Attack = threat (danger) + vulnerability (weak spot).**

| Attack | What it does | Breaks |
|--------|--------------|--------|
| **Social engineering** | tricks a person | usually C |
| **Phishing** | fake message steals secrets | C |
| **Malware** | any harmful software | C / I / A |
| **Ransomware** | locks files, demands money | A |
| **Spoofing** | fakes a trusted identity | varies |
| **On-path** (was "man-in-the-middle") | secretly reads / changes traffic | C / I |
| **DoS / DDoS** | floods a service offline | A |

- **Threat** = the danger · **Vulnerability** = the weak spot · **Attack** = the act.
- Most attacks start with a **trick**, not a genius hack. People are the top target.
- **DDoS** = a DoS from many machines at once (harder to stop).
- Phishing red flags: odd sender, urgency, bad link, spelling errors, surprise attachment.

> **Remember:** trick people (phishing, social engineering) · bad software (malware, ransomware) · hit the network (spoofing, on-path, DoS). Each breaks a CIA goal.

---

## AAA — access control (Lesson 13-03)

**Order is fixed: authenticate → authorize → account.**

| A | Question | Key ideas |
|---|----------|-----------|
| **Authentication** | Who are you? | factors: know / have / are; **MFA** = 2+ |
| **Authorization** | What may you do? | **least privilege**, **RBAC** |
| **Accounting** | What did you do? | logs (Syslog, 12-02) |

- **Three factors:** something you **know** (password), **have** (phone/token), **are** (fingerprint).
- **MFA** needs two **different** factor types — two passwords is NOT MFA.
- **Least privilege** = only the access you need · **RBAC** = access by job role.
- **RADIUS** and **TACACS+** = central AAA servers for many devices.

> **Remember:** prove who you are, get the right access, leave a trail — like a workplace badge.

---

## Firewalls, ACLs & segmentation (Lesson 13-04)

| Tool | What it does |
|------|--------------|
| **Firewall** | allows / blocks traffic by rules (the guard) |
| **Stateful** | remembers connections (smarter, common) |
| **Stateless** | checks each packet alone |
| **ACL** | ordered allow/deny list, top-down, first match wins |
| **Implicit deny** | not allowed = blocked by default |
| **Segmentation** | split into zones → smaller blast radius (VLANs) |
| **DMZ / screened subnet** | zone for public servers, away from private |

- ACL order: **specific rules first, broad rules last.**
- Implicit deny is **always there**, even if you don't write it.
- Segmentation = least privilege for the whole network.

> **Remember:** guard at the edge (firewall + ACL), public servers in the DMZ, inside split into zones.

---

## Securing ports & wireless (Lesson 13-05)

**Switch ports (wired):**

| Control | What it does |
|---------|--------------|
| **Port security** | allow only known MAC addresses on a port |
| **Sticky MAC** | port locks to the first device's MAC |
| **Disable unused ports** | an open port is an open door |
| **Native VLAN off 1** | move it off the default VLAN 1 |

**Wireless (Wi-Fi):**

| Do this | Why |
|---------|-----|
| **WPA3** (or **WPA2** AES) | strong encryption — never **WEP** |
| Strong **PSK** | a long, unique Wi-Fi password |
| Change default **SSID** + admin pw | defaults are published |
| Turn **WPS** off | its easy-join is easy to attack |
| Add a **guest network** | keep visitors off your main devices |

- Wi-Fi ranking: **WPA3 > WPA2 (AES) > (never) WEP / Open.**
- Check your Wi-Fi type (Windows): `netsh wlan show interfaces` → read **Authentication**.

> **Remember:** lock the wired doors (ports) and the wireless doors (Wi-Fi).

---

## VPNs & encryption (Lesson 13-06)

| Idea | Plain meaning | Protects |
|------|---------------|----------|
| **Encryption** | scramble with a key (two-way) | confidentiality |
| **Plaintext → ciphertext** | readable → scrambled | — |
| **Symmetric** | one shared key (fast) | — |
| **Asymmetric** | public + private key pair | — |
| **Hashing** | one-way fingerprint | integrity |
| **VPN** | encrypted tunnel over the internet | confidentiality |

- Encryption is **two-way** (lock/unlock); hashing is **one-way** (fingerprint only).
- VPN types: **site-to-site** (two networks) · **remote-access** (one person).
- **IPsec** and **TLS** build the tunnel; the browser padlock + **https** = TLS in action.

> **Remember:** lock the message (encryption), seal it so tampering shows (hashing), tunnel it (VPN).

---

## Hardening checklist — defense in depth (Lesson 13-07)

**Hardening** = remove weak spots. **Defense in depth** = stack layers so one failure isn't fatal.

| Layer | Do this |
|-------|---------|
| **Accounts** | change default passwords · MFA · least privilege |
| **Switch** | port security/sticky MAC · disable unused ports · native VLAN off 1 |
| **Segment** | VLANs · guest network |
| **Wireless** | WPA3 · strong PSK · WPS off |
| **Edge** | firewall on · sensible ACLs |
| **Data** | encryption/VPN · backups (12-04) · documentation (12-01) |
| **Updates** | patch management (firmware + software) |

- Biggest first wins: **default passwords** and **MFA**.
- Change one setting at a time; keep a note so you can roll back.

> **Remember:** harden every layer — if one fails, the next still protects you.

---
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 13_
