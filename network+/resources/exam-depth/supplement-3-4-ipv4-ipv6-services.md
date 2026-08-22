# Exam-Depth Supplement — Objective 3.4: IPv4 and IPv6 network services

> **What this is:** a short, exam-depth add-on that goes past the beginner lessons. Read it when you are getting ready for the exam.
> **Objective:** N10-009 **3.4** — Given a scenario, implement IPv4 and IPv6 network services. **Builds on:** Module 08 (IPv6 addressing), Module 09 (DHCP, DNS, NAT, NTP).

## Why this matters

Module 09 taught how devices get an address and find names on **IPv4**. The exam also tests the **IPv6** ways of doing the same jobs, plus a few DHCP details. IPv6 has its own tricks — this fills that gap.

## Key words

- **Dual stack** — A device runs IPv4 and IPv6 at the same time. The most common way to adopt IPv6.
- **Link-local address** — An IPv6 address starting **fe80::** that works only on the local link. Every IPv6 interface makes one automatically.
- **NDP (Neighbor Discovery Protocol)** — IPv6's replacement for ARP; it finds neighbors and routers on the link.

## Two ways an IPv6 device gets its address

- **SLAAC (Stateless Address Autoconfiguration)** — The device hears a **Router Advertisement (RA)** telling it the network prefix, then builds its own address. No server keeps a list. "Stateless" = nobody tracks who has what.
- **DHCPv6** — A server hands out addresses and/or settings, like IPv4 DHCP.
  - **Stateful DHCPv6** — The server gives the address *and* keeps a record.
  - **Stateless DHCPv6** — SLAAC makes the address; DHCPv6 only supplies extras like DNS.

**EUI-64** is one way SLAAC builds the host part of the address from the interface's MAC (with `ff:fe` inserted in the middle); modern systems often use random values instead for privacy.

## IPv4 vs. IPv6 service map

| Job | IPv4 way | IPv6 way |
|-----|----------|----------|
| Find a MAC for an IP | **ARP** | **NDP** (Neighbor Discovery) |
| Auto-get an address | **DHCP** | **SLAAC** or **DHCPv6** |
| Name → address record | **A** record | **AAAA** record |
| Local-only address | 169.254.x.x (APIPA) | fe80:: (link-local) |

## DHCP details CompTIA tests (IPv4)

- **Scope** — The pool of addresses a DHCP server may hand out for a subnet.
- **Reservation** — A fixed address tied to one device's MAC, given every time.
- **Exclusion** — Addresses inside the scope the server must *not* give out (saved for servers/printers).
- **Lease** — How long an address is granted before it must be renewed.
- **DHCP relay / IP helper** — Lets one DHCP server serve many subnets by forwarding requests across a router (DHCP uses broadcasts, which routers block by default).

## Other services to remember

- **NTP (Network Time Protocol)** — Keeps clocks in sync; needed for logs and security to line up (Lesson 09-05).
- **DNS AAAA record** — The IPv6 version of an A record. A dual-stack host may get both an A and an AAAA answer.

> 🎯 **Exam tip:** "IPv6 address with no server keeping track" = **SLAAC**. "One DHCP server for several subnets across a router" = **DHCP relay / IP helper**. "IPv6 name record" = **AAAA**. "IPv6's ARP" = **NDP**.

## Quick check

1. What IPv6 method lets a device build its own address from a Router Advertisement, with no server tracking it?
2. Your DHCP server sits on a different subnet than the clients. What feature forwards their requests to it?
3. Which DNS record type answers with an IPv6 address?

### Quick-check answers

1. **SLAAC** (Stateless Address Autoconfiguration).
2. A **DHCP relay** (also called an **IP helper**) on the clients' router.
3. An **AAAA** record.

---
_NetworkAcademy+ · Exam-Depth Supplement · Objective 3.4 (IPv4/IPv6 services) · CompTIA Network+ N10-009_
