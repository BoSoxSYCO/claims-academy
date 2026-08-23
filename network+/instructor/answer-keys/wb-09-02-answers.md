# Answer Key — Lesson NA-M09-L02 "DNS: Turning Names into Numbers"

> 🔒 **Instructor / self-check only.** Covers Quiz 9.2.Q and Worksheets 9.2.A–9.2.G.

**In one line:** **DNS** turns a **domain name** into an **IP address**. Flow: **cache → resolver → root → .com → the site's server → IP**. Records: **A** (IPv4), **AAAA** (IPv6), **CNAME** (alias), **MX** (mail), **PTR** (reverse), **TXT** (text). Test with **`nslookup`**.

---

## Quiz 9.2.Q — Knowledge Check (10 pts)

1. **B** — DNS turns names into IP addresses.
2. **B** — google.com is a domain name.
3. **C** — The A record maps a name to an IPv4 address.
4. **B** — The MX record names a domain's mail server.
5. **B** — A PTR record does the reverse lookup: IP → name.
6. **True.** Good answer: if the IP works but the name doesn't, DNS (name→IP) is the likely failure; the network itself is fine.
7. **B** — The DNS resolver looks up a name and returns its IP.
8. A → **C** (name→IPv4), CNAME → **A** (alias), AAAA → **B** (name→IPv6).
9. **cache**.
10. **DNS** is likely broken (the network is fine, since 8.8.8.8 pings). Confirm with **`nslookup google.com`** — if it fails to return an address, it's DNS; try a different DNS server.

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 9.2.A — Fill-in-the-blank (20 pts, 2 each)

1. DNS 2. domain 3. IP 4. A 5. MX 6. PTR 7. CNAME 8. resolver 9. cache 10. nslookup.
**Challenge (+2):** DNS is the likely broken service — the name-to-IP lookup is failing even though the network (and the IP) work.

## Worksheet 9.2.B — Matching (20 pts)

1→C, 2→E, 3→A, 4→B, 5→D, 6→H, 7→F, 8→G.
**Explain (+2):** any correct reason.

## Worksheet 9.2.C — Label the lookup flow (20 pts, 4 each)

1. IP 2. cache 3. resolver 4. .com 5. A.
**Why (+2):** a cache saves recent answers so the computer doesn't repeat the full lookup every time, which is faster and eases load on DNS servers.

## Worksheet 9.2.D — Short answer (20 pts, 5 each)

1. DNS turns a human name (google.com) into the IP address a computer needs; we need it so people can use easy names instead of memorizing numbers. *(idea /3, why /2)*
2. Check the local cache; if not found, ask a resolver; the resolver walks root → .com → the site's authoritative server; the IP returns, gets cached, and the computer connects. *(idea /3, why /2)*
3. An A record maps a name → IPv4 address; a PTR record does the reverse, mapping an IP → name. *(idea /3, why /2)*
4. **DHCP** (Lesson 09-01) tells the device which DNS server to use — it hands out the DNS server address along with the IP, mask, and gateway. *(idea /3, why /2)*

## Worksheet 9.2.E — Hands-on observation (25 pts)

- Step 1: `nslookup google.com` ran *(5)*.
- Step 2: DNS Server address recorded *(5)*.
- Step 3: a returned IP recorded *(5)*.
- Step 4: second name resolved *(5)*.
- Step 5: IP shown in `ping` brackets *(5)*.
- (Accept any valid IPs — real addresses vary and change.)

## Worksheet 9.2.F — Vocabulary review (20 pts)

- **Part A:** DNS = turns names into IP addresses; Domain name = a human-friendly site name; DNS resolver = the server that looks up a name; A record = maps a name to an IPv4 address.
- **Part B:** 5. MX record 6. AAAA record 7. DNS cache.
- **Part C:** any correct sentences.
- **Part D:** the **DNS server** address (one of DHCP's four settings: IP, mask, gateway, DNS).

## Worksheet 9.2.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 9.2 · CompTIA Network+ N10-009 · Instructor materials_
