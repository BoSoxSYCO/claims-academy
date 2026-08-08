# Practice Exam #2 — CompTIA Network+ (N10-009)

> **Companion lesson:** NA-M15-L05 · **Module:** 15 · **Unit:** 12
> **Questions:** 90 · **Time limit:** 90 minutes · **Passing target:** aim for 80%+ before your real exam
> **Name:** ______________________  **Date:** __________  **Score:** ____ / 90

**Instructions:** Set a 90-minute timer. Simulate the real exam. Choose the best answer; some items say "choose two." Flag hard ones and return — never leave a blank. This is a second, distinct form — the questions differ from Exam #1. Answers and full explanations are in `instructor/answer-keys/practice-exam-02-answers.md`. Each question is tagged with its domain and the module that teaches it.

---

## Domain 1 — Networking Concepts

1. Which OSI layer decides the best path across networks using IP addresses? *(1.1 · M05)*
   - A) Physical (Layer 1)
   - B) Data Link (Layer 2)
   - C) Network (Layer 3)
   - D) Session (Layer 5)

2. At which layer does a frame get its source and destination MAC address? *(1.1 · M05)*
   - A) Layer 1
   - B) Layer 2
   - C) Layer 3
   - D) Layer 4

3. Which device breaks up collision domains but shares one broadcast domain? *(1.1 · M07)*
   - A) Hub
   - B) Switch
   - C) Router
   - D) Modem

4. A user can reach `142.250.1.1` but not `www.example.com`. The failing service is… *(1.6 · M08)*
   - A) DHCP
   - B) DNS
   - C) NTP
   - D) SNMP

5. A device boots and receives its IP, mask, and gateway automatically. This is… *(1.6 · M08)*
   - A) DNS
   - B) DHCP
   - C) ARP
   - D) NAT

6. Which port does plain (unencrypted) HTTP use? *(1.5 · M10)*
   - A) 443
   - B) 80
   - C) 22
   - D) 25

7. Which port does RDP (Remote Desktop) use? *(1.5 · M10)*
   - A) 3389
   - B) 21
   - C) 53
   - D) 143

8. SMTP (sending email) uses which port? *(1.5 · M10)*
   - A) 25
   - B) 110
   - C) 443
   - D) 22

9. Which protocol guarantees delivery with acknowledgements? *(1.1 · M05)*
   - A) UDP
   - B) TCP
   - C) ICMP
   - D) ARP

10. A live video call favors UDP because it needs… *(1.1 · M05)*
    - A) retransmission of every lost packet
    - B) low delay over perfect delivery
    - C) encryption only
    - D) a static IP

11. How many bits are in an IPv4 address? *(1.4 · M08)*
    - A) 32
    - B) 48
    - C) 64
    - D) 128

12. Which is a loopback address? *(1.4 · M08)*
    - A) 127.0.0.1
    - B) 169.254.0.1
    - C) 192.168.0.1
    - D) 10.0.0.1

13. On `/24`, which address is the broadcast for `192.168.5.0`? *(1.4 · M08)*
    - A) 192.168.5.0
    - B) 192.168.5.1
    - C) 192.168.5.255
    - D) 192.168.5.254

14. A `/16` mask is written as… *(1.4 · M08)*
    - A) 255.0.0.0
    - B) 255.255.0.0
    - C) 255.255.255.0
    - D) 255.255.255.255

15. Which media carries data as light and resists electrical noise? *(1.3 · M06)*
    - A) UTP copper
    - B) Coaxial
    - C) Fiber optic
    - D) Twisted pair

16. Two switches are linked together. The link between them typically carries… *(1.3 · M06)*
    - A) power only
    - B) a straight-through PC cable
    - C) an uplink/trunk between switches
    - D) no data

17. Which topology gives the most redundancy with many direct links? *(1.2 · M04)*
    - A) Bus
    - B) Star
    - C) Mesh
    - D) Ring

18. An IP address is best described as… *(1.1 · M08)*
    - A) a permanent hardware address
    - B) a logical address that can change
    - C) a port number
    - D) a cable standard

19. Ports (like 80 and 443) are used at which layer? *(1.1 · M05)*
    - A) Layer 1
    - B) Layer 2
    - C) Layer 3
    - D) Layer 4

20. A MAC address is written as… *(1.1 · M08)*
    - A) four decimal octets
    - B) six hex pairs
    - C) a /24 prefix
    - D) a port range

21. When a PC knows an IP but needs the matching MAC, it uses… *(1.4 · M08)*
    - A) DNS
    - B) ARP
    - C) DHCP
    - D) NAT

22. "Pay only for what you use, scale on demand" describes… *(1.7 · M04)*
    - A) a fixed on-prem server
    - B) cloud elasticity
    - C) a crossover cable
    - D) a broadcast domain

23. **True or false —** A switch forwards a frame to every port, just like a hub. Explain in one sentence. *(1.1 · M07)*

24. Which protocol resolves a hostname to an IPv4 address record? *(1.6 · M09)*
    - A) DNS A record
    - B) DHCP lease
    - C) ARP request
    - D) NTP sync

25. NAT is mainly used to… *(1.4 · M08)*
    - A) encrypt traffic
    - B) let private addresses share a public one
    - C) speed up DNS
    - D) assign VLANs

---

## Domain 2 — Network Implementation

26. Putting ports into separate VLANs mainly improves… *(2.1 · M11)*
    - A) cable length
    - B) segmentation and security
    - C) electrical power
    - D) DNS speed

27. Frames on a trunk are tagged so the other switch knows… *(2.1 · M11)*
    - A) the cable length
    - B) which VLAN each frame belongs to
    - C) the IP address
    - D) the port speed

28. Traffic between VLAN 10 and VLAN 20 must pass through… *(2.1 · M11)*
    - A) a hub
    - B) a router or Layer 3 switch
    - C) a loopback plug
    - D) a patch panel

29. Which Wi-Fi band offers higher speed but shorter range? *(2.3 · M06)*
    - A) 2.4 GHz
    - B) 5 GHz
    - C) both equal
    - D) neither

30. A user far from the AP has a low signal reading. This is measured as… *(2.3 · M14)*
    - A) RSSI
    - B) TTL
    - C) MTU
    - D) SSID

31. To avoid interference, nearby APs should use… *(2.3 · M14)*
    - A) identical channels
    - B) non-overlapping channels
    - C) no SSID
    - D) the widest channel only

32. A printer should keep the same IP. The best method is… *(2.1 · M08)*
    - A) let DHCP change it daily
    - B) a DHCP reservation or static IP
    - C) APIPA
    - D) no address

33. An IP phone gets both network and power from the switch through… *(2.2 · M07)*
    - A) PoE
    - B) DNS
    - C) NAT
    - D) STP

34. **Matching —** match each item to its OSI layer. *(2.1 · M05)*
    - ___ IP address &nbsp;&nbsp; ___ MAC address &nbsp;&nbsp; ___ Port number
    - A) Layer 2
    - B) Layer 4
    - C) Layer 3

35. Which command renews a Windows DHCP address? *(2.1 · M14)*
    - A) `ipconfig /renew`
    - B) `ping /new`
    - C) `tracert /dhcp`
    - D) `nslookup /renew`

36. The gateway address a host uses to leave its subnet is the… *(2.1 · M08)*
    - A) DNS server
    - B) default gateway
    - C) broadcast address
    - D) loopback

37. STP prevents which problem when switches have redundant links? *(2.2 · M07)*
    - A) DNS failure
    - B) switching loops
    - C) IP conflicts
    - D) weak Wi-Fi

38. Bundling two links for more bandwidth is called… *(2.2 · M07)*
    - A) subnetting
    - B) link aggregation
    - C) NAT
    - D) VLAN hopping

39. Which host is valid on `192.168.20.0/24`? *(2.1 · M08)*
    - A) 192.168.20.50
    - B) 192.168.21.50
    - C) 10.0.0.50
    - D) 192.168.20.255

40. The name a wireless client sees for a network is the… *(2.3 · M06)*
    - A) SSID
    - B) BSSID hash
    - C) VLAN tag
    - D) subnet mask

41. **Scenario (PBQ-style) —** A laptop must join `10.10.0.0/24`. Give one valid IP, the subnet mask, and a sensible gateway. *(2.1 · M08)*

42. On a shared classroom switch, the safe rule is… *(2.1 · M11)*
    - A) reset it to defaults
    - B) touch only your assigned ports
    - C) delete every VLAN
    - D) unplug the uplink

43. Which is the more secure wireless option? *(2.3 · M13)*
    - A) WEP
    - B) Open network
    - C) WPA3
    - D) No password

44. A `/24` splits an IP so the host part is the… *(2.1 · M08)*
    - A) first octet
    - B) last octet
    - C) first two octets
    - D) all four octets

45. Inter-VLAN routing on one switch is done by a… *(2.1 · M11)*
    - A) Layer 3 (multilayer) switch
    - B) hub
    - C) media converter
    - D) loopback plug

---

## Domain 3 — Network Operations

46. A logical network diagram focuses on… *(3.1 · M12)*
    - A) exact cable colors
    - B) IP subnets, VLANs, and flow
    - C) rack screw sizes
    - D) power outlets

47. "3 copies, 2 media, 1 off-site" is the… *(3.3 · M12)*
    - A) OSI rule
    - B) 3-2-1 backup rule
    - C) subnet rule
    - D) AAA rule

48. The main reason for an off-site backup copy is… *(3.3 · M12)*
    - A) faster Wi-Fi
    - B) surviving a local disaster
    - C) more VLANs
    - D) shorter cables

49. Which protocol collects device stats for monitoring? *(3.1 · M12)*
    - A) SNMP
    - B) SMTP
    - C) SSH
    - D) FTP

50. In Syslog, a message marked severity 0 is… *(3.1 · M12)*
    - A) the least urgent
    - B) the most urgent (emergency)
    - C) a debug note
    - D) ignored

51. **True or false —** Keeping device clocks in sync (NTP) helps logs line up during an incident. Explain in one sentence. *(3.1 · M12)*

52. Collecting a departing employee's laptop and removing access is… *(3.2 · M12)*
    - A) onboarding
    - B) offboarding
    - C) hardening
    - D) baselining

53. You compare today's traffic to a saved normal. That saved normal is the… *(3.1 · M12)*
    - A) baseline
    - B) broadcast
    - C) gateway
    - D) subnet

54. "Five nines" (99.999%) describes very high… *(3.3 · M12)*
    - A) latency
    - B) availability/uptime
    - C) packet loss
    - D) cable length

55. Which survives a single drive failure without data loss? *(3.3 · M12)*
    - A) RAID redundancy
    - B) a faster switch
    - C) a new SSID
    - D) a longer cable

56. A formal approval-and-record process for edits is… *(3.2 · M12)*
    - A) change management
    - B) NAT
    - C) DHCP
    - D) trunking

57. NTP synchronizes devices' … *(3.1 · M12)*
    - A) IP addresses
    - B) time/clocks
    - C) VLANs
    - D) passwords

---

## Domain 4 — Network Security

58. The "A" in the CIA triad stands for… *(4.1 · M13)*
    - A) Authentication
    - B) Availability
    - C) Access
    - D) Auditing

59. A fake email asking for your password is… *(4.2 · M13)*
    - A) phishing
    - B) a backup
    - C) NAT
    - D) a baseline

60. An attacker quietly relaying and altering traffic between two hosts is doing… *(4.2 · M13)*
    - A) an on-path attack
    - B) a backup
    - C) subnetting
    - D) load balancing

61. The last "A" in AAA (Accounting) means… *(4.1 · M13)*
    - A) proving who you are
    - B) what you're allowed to do
    - C) recording what you did
    - D) assigning an IP

62. A rule that blocks all traffic unless explicitly allowed is… *(4.3 · M13)*
    - A) default-allow
    - B) default-deny
    - C) no firewall
    - D) open access

63. Remote workers reach the office network securely using a… *(4.5 · M13)*
    - A) VPN
    - B) hub
    - C) crossover cable
    - D) broadcast

64. Turning off unused services and ports reduces the… *(4.4 · M13)*
    - A) attack surface
    - B) cable length
    - C) VLAN count
    - D) uptime

65. **True or false —** Reusing one strong password everywhere is a safe practice. Explain in one sentence. *(4.1 · M13)*

66. Flooding a site with traffic so real users can't connect is a… *(4.2 · M13)*
    - A) DDoS attack
    - B) backup
    - C) DNS query
    - D) ping test

67. Giving a user only the access their job needs is… *(4.1 · M13)*
    - A) least privilege
    - B) full admin
    - C) open sharing
    - D) no access

68. To protect a web login in transit, you should use… *(4.5 · M13)*
    - A) HTTP
    - B) HTTPS/TLS
    - C) a longer cable
    - D) a smaller MTU

69. Public-facing servers are best placed in a… *(4.3 · M13)*
    - A) screened subnet (DMZ)
    - B) loopback
    - C) broadcast domain
    - D) patch panel

70. First thing to change on a brand-new switch or router is the… *(4.4 · M13)*
    - A) default password
    - B) cable color
    - C) rack position
    - D) serial number

71. **Matching —** match each control to its CIA goal. *(4.1 · M13)*
    - ___ Redundant links / backups &nbsp;&nbsp; ___ Encryption &nbsp;&nbsp; ___ Checksums / hashing
    - A) Confidentiality
    - B) Integrity
    - C) Availability

72. Connecting two office LANs over the internet with encryption uses a… *(4.5 · M13)*
    - A) remote-access VPN
    - B) site-to-site VPN
    - C) crossover cable
    - D) hub

---

## Domain 5 — Network Troubleshooting

73. In the CompTIA method, right after you identify the problem you… *(5.1 · M14)*
    - A) document
    - B) establish a theory of probable cause
    - C) verify
    - D) close the ticket

74. After you implement a fix, the next step is to… *(5.1 · M14)*
    - A) skip ahead
    - B) verify full system functionality
    - C) forget it
    - D) reboot everything

75. `ping` uses which protocol to test reachability? *(5.2 · M14)*
    - A) ICMP
    - B) SMTP
    - C) FTP
    - D) DNS

76. To see each router hop between you and a site, you run… *(5.2 · M14)*
    - A) `nslookup`
    - B) `tracert`
    - C) `ipconfig`
    - D) `arp -a`

77. `arp -a` on Windows displays… *(5.2 · M14)*
    - A) the IP-to-MAC table
    - B) the DNS cache
    - C) the routing metric
    - D) the VLAN list

78. A PC shows `169.254.5.9` and can't reach anything. The cause is… *(5.3 · M14)*
    - A) DNS down
    - B) no DHCP (APIPA)
    - C) duplex mismatch
    - D) firewall block

79. Websites load by IP but not by name. First tool to test the theory? *(5.3 · M14)*
    - A) `nslookup`
    - B) cable tester
    - C) loopback plug
    - D) `ipconfig /release`

80. Everyone on one switch slows at the same time. Likely cause? *(5.3 · M14)*
    - A) one PC's APIPA
    - B) bandwidth saturation or duplex mismatch
    - C) a single DNS typo
    - D) one weak Wi-Fi client

81. The safest order to troubleshoot a dead connection is… *(5.3 · M14)*
    - A) name first, cable last
    - B) bottom-up: link light → IP → ping → name
    - C) reboot the router first
    - D) replace the switch first

82. Which tool checks that a cable's wires are correct end to end? *(5.2 · M14)*
    - A) cable tester
    - B) protocol analyzer
    - C) DHCP server
    - D) DNS resolver

83. `netstat` on Windows shows… *(5.2 · M14)*
    - A) active connections and listening ports
    - B) the Wi-Fi signal
    - C) the subnet mask only
    - D) the cable length

84. **True or false —** Documenting the fix is a waste of time on a small network. Explain in one sentence. *(5.1 · M14)*

85. Slow speed plus errors on a link, but not a full outage, suggests… *(5.3 · M14)*
    - A) a duplex mismatch
    - B) no power
    - C) a DNS outage
    - D) a missing VLAN

86. A name fails due to a stale cached entry. You run… *(5.3 · M14)*
    - A) `ipconfig /flushdns`
    - B) `ping -t`
    - C) `tracert -d`
    - D) `arp -d` only

87. **Scenario —** A laptop has a link light and a valid IP, and `ping 8.8.8.8` succeeds, but no website opens by name. Name the likely problem and your next tool. *(5.3 · M14)*

88. A tool used to test a theory must, above all… *(5.1 · M14)*
    - A) be the newest tool
    - B) actually test that specific theory
    - C) be a hardware tool
    - D) always be tracert

89. A loopback plug is used to… *(5.2 · M14)*
    - A) test a single port by sending its own signal back
    - B) assign an IP
    - C) resolve a name
    - D) tag a VLAN

90. **Scenario —** You suspect a bad wall jack. Walk through the first three steps of the CompTIA method for this complaint. *(5.1 · M14)*

---

> ⚠️ Any command output referenced is a varying example. **[TO VERIFY ON HARDWARE]** Exam format specifics (exact counts, policies) may change — **[VERIFY WITH CompTIA]**.

---
_NetworkAcademy+ · Practice Exam #2 · CompTIA Network+ N10-009 · Module 15 · Unit 12_
