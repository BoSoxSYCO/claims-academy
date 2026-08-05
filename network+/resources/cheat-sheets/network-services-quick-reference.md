# Cheat Sheet — Core Network Services

> A printable quick reference for **Module 09**. Grows as the module's lessons are published.

---

## DHCP (Lesson 09-01)

- **DHCP** = automatic **IP + mask + gateway + DNS** for every device.
- **DORA:** **D**iscover → **O**ffer → **R**equest → **A**cknowledge.

```
device ── Discover ──▶ server      "any DHCP servers?"
device ◀── Offer ──── server        "try 192.168.1.24"
device ── Request ──▶ server        "yes, that one"
device ◀── Acknowledge ─ server     "it's yours" (lease starts)
```

| Term | Meaning |
|------|---------|
| **Lease** | how long you keep the address (renewed before expiry) |
| **Scope** | the pool of addresses the server hands out |
| **Reservation** | a fixed IP tied to one device's MAC |
| **Dynamic** | DHCP-assigned (can change) |
| **Static** | set by hand (doesn't change) |

- **169.254.x.x (APIPA)** = the DHCP server **didn't answer**.
- See it: **`ipconfig /all`** → DHCP Enabled, DHCP Server, Lease Obtained/Expires.

> **Remember:** DHCP is the front desk — DORA hands you IP + mask + gateway + DNS on a lease.

---

## DNS (Lesson 09-02)

- **DNS** = turns a **domain name** → an **IP address** (the internet's phone book).
- **Flow:** cache → resolver → root → .com (TLD) → the site's (authoritative) server → IP.

**Record types:**

| Record | Maps |
|:------:|------|
| **A** | name → IPv4 |
| **AAAA** | name → IPv6 |
| **CNAME** | name → another name (alias) |
| **MX** | domain → mail server |
| **PTR** | IP → name (reverse) |
| **TXT** | name → text (verification) |

- Answers are **cached** for a **TTL**.
- Name fails but the **IP works** → suspect **DNS**. Test: **`nslookup <name>`**.
- **DHCP** tells your device which DNS server to use.

> **Remember:** names for people, numbers for machines — DNS connects the two. A = the main name→IPv4 record.

---

## NAT & PAT (Lesson 09-03)

| Kind | Mapping | Public IPs |
|------|---------|:----------:|
| **Static NAT** | one private ↔ one public (fixed) | one per device |
| **Dynamic NAT** | private → any free public (pool) | a pool |
| **PAT / overload** | **many** private → **one** public (by port) | **one** |

- **PAT** is what home routers do: one public IP, many devices, told apart by **ports**.
- **Port number** = apartment number for a conversation (full detail: Module 10).
- **NAT translation table:** inside IP:port ⇄ public IP:port → routes replies back.
- **Port forwarding:** public port → one inside device (game/camera/lab). Use sparingly + firewall.
- See ports: **`netstat -n`** (Local / Foreign address:port).

```
inside 192.168.1.24:51000  ⇄  public 203.0.113.7:40001  → internet
inside 192.168.1.25:49500  ⇄  public 203.0.113.7:40002  → internet
reply to :40002 → table → 192.168.1.25   (right device!)
```

> **Remember:** apartment building — one street address (public IP), many apartments (ports).

---
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 09_
