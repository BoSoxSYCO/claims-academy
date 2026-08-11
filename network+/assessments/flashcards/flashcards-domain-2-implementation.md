# Flashcards — Domain 2: Network Implementation

> **Domain 2 of 5 · CompTIA Network+ (N10-009)** · master deck (by domain)
> Every answer comes from a Published lesson (Modules 07 & 11). Cover the answer, say it from memory, then check.

**How to use:** answer from memory first (active recall); sort "got it" / "review again"; re-drill the second pile after growing gaps (spaced repetition).

---

## Devices & switching (Module 07)

| Q | A |
|---|---|
| Hub — layer + behavior | Layer 1; floods all ports; one collision domain |
| Switch — layer + behavior | Layer 2; learns MACs, forwards to the right port |
| Router — layer + behavior | Layer 3; routes between networks by IP |
| Collision domain vs broadcast domain | Where collisions can happen vs where broadcasts reach |
| A switch breaks up… | Collision domains (one per port); shares one broadcast domain |
| PoE provides | Power + data over one Ethernet cable |
| STP prevents | Switching loops (blocks redundant paths) |
| Link aggregation | Combines links for more bandwidth / redundancy |
| Access port vs trunk port | Carries one VLAN vs many (tagged) VLANs |
| Console port | Management-only port for the switch's first login |
| Managed switch | A switch you can log into and configure |

## VLANs & segmentation (Module 11)

| Q | A |
|---|---|
| A VLAN gives you… | Separate broadcast domains / segmentation on one switch |
| Trunk tagging purpose | Tells the other switch which VLAN each frame belongs to |
| Native VLAN | The one VLAN whose frames cross a trunk untagged (default VLAN 1) |
| Inter-VLAN traffic needs… | A router or Layer 3 (multilayer) switch |
| VLAN ID range | 1–4094 (VLAN 1 is default) |

## Wireless & addressing (Modules 11, 08)

| Q | A |
|---|---|
| SSID | The wireless network name an AP broadcasts |
| 2.4 GHz vs 5 GHz | 2.4 = farther/slower; 5 = faster/shorter range |
| Nearby APs should use… | Non-overlapping channels |
| Prefer which Wi-Fi security today? | WPA2/WPA3 (never WEP/Open) |
| Server needs a fixed IP — best method? | Static IP or a DHCP reservation |
| Renew a Windows DHCP address | `ipconfig /renew` |

---

> Any command output referenced is a varying example. **[TO VERIFY ON HARDWARE]** Shared-switch changes can lock others out — change only what you were told to.

---
_NetworkAcademy+ · Flashcards · CompTIA Network+ N10-009 · Domain 2 (Network Implementation)_
