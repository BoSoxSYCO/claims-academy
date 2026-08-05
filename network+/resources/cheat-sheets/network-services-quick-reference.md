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
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 09_
