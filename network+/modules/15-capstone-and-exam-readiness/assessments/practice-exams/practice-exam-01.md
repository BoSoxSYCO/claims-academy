# Practice Exam #1 — CompTIA Network+ (N10-009)

> **Companion lesson:** NA-M15-L04 · **Module:** 15 · **Unit:** 12
> **Questions:** 90 · **Time limit:** 90 minutes · **Passing target:** aim for 80%+ before your real exam
> **Name:** ______________________  **Date:** __________  **Score:** ____ / 90

**Instructions:** Set a 90-minute timer. Simulate the real exam. Choose the best answer; some items say "choose two." Flag hard ones and return — never leave a blank. Answers and full explanations are in `instructor/answer-keys/practice-exam-01-answers.md`. Each question is tagged with its domain and the module that teaches it.

---

## Domain 1 — Networking Concepts

1. Which OSI layer moves bits as electrical or light signals on the wire? *(1.1 · M05)*
   - A) Physical (Layer 1)
   - B) Data Link (Layer 2)
   - C) Network (Layer 3)
   - D) Transport (Layer 4)

2. A switch mainly works at which OSI layer? *(1.1 · M05)*
   - A) Layer 1
   - B) Layer 2
   - C) Layer 3
   - D) Layer 4

3. Which device connects two different networks and routes between them? *(1.1 · M07)*
   - A) Hub
   - B) Switch
   - C) Router
   - D) Repeater

4. What does DNS do? *(1.6 · M08)*
   - A) Hands out IP addresses
   - B) Turns names into IP addresses
   - C) Encrypts traffic
   - D) Blocks ports

5. What does DHCP do? *(1.6 · M08)*
   - A) Turns names into IPs
   - B) Automatically hands out IP settings
   - C) Routes between VLANs
   - D) Tests a cable

6. Which port does HTTPS use by default? *(1.5 · M10)*
   - A) 21
   - B) 80
   - C) 443
   - D) 53

7. Which port does DNS use? *(1.5 · M10)*
   - A) 53
   - B) 25
   - C) 110
   - D) 143

8. Which port does SSH use? *(1.5 · M10)*
   - A) 22
   - B) 23
   - C) 80
   - D) 3389

9. TCP is best described as… *(1.1 · M05)*
   - A) connectionless and best-effort
   - B) connection-oriented and reliable
   - C) only for streaming
   - D) a routing protocol

10. UDP is chosen when you need… *(1.1 · M05)*
    - A) guaranteed delivery
    - B) speed with low overhead
    - C) encryption
    - D) error correction on every packet

11. A `192.168.1.0/24` network has how many usable host addresses? *(1.4 · M08)*
    - A) 254
    - B) 256
    - C) 24
    - D) 512

12. Which address is a private IPv4 range? *(1.4 · M08)*
    - A) 8.8.8.8
    - B) 172.16.5.4
    - C) 200.1.1.1
    - D) 1.1.1.1

13. A `169.254.x.x` address means… *(1.4 · M08)*
    - A) a public address
    - B) APIPA — no DHCP answered
    - C) a loopback
    - D) a gateway

14. The subnet mask for `/24` is… *(1.4 · M08)*
    - A) 255.0.0.0
    - B) 255.255.0.0
    - C) 255.255.255.0
    - D) 255.255.255.255

15. Which cable type best resists interference over long distances? *(1.3 · M06)*
    - A) Cat5e
    - B) Coaxial
    - C) Fiber
    - D) Cat6

16. A PC-to-switch link normally uses which cable? *(1.3 · M06)*
    - A) crossover
    - B) straight-through
    - C) rollover
    - D) power

17. Which topology connects every device to a central switch? *(1.2 · M04)*
    - A) Bus
    - B) Ring
    - C) Star
    - D) Mesh

18. A MAC address is… *(1.1 · M08)*
    - A) a logical address that changes
    - B) a hardware address burned into the device
    - C) a port number
    - D) a subnet mask

19. Which layer does IP addressing live at? *(1.1 · M05)*
    - A) Layer 2
    - B) Layer 3
    - C) Layer 4
    - D) Layer 7

20. Which of these is a Layer 4 identifier? *(1.1 · M05)*
    - A) MAC address
    - B) IP address
    - C) Port number
    - D) Cable type

21. What is the main job of ARP? *(1.4 · M08)*
    - A) Find the MAC that goes with an IP
    - B) Turn a name into an IP
    - C) Assign IP addresses
    - D) Encrypt a session

22. Which is a benefit of the cloud model "on-demand / elastic"? *(1.7 · M04)*
    - A) You must buy all hardware upfront
    - B) You scale resources up or down as needed
    - C) It removes the need for any network
    - D) It only works offline

23. **True or false —** A hub creates one collision domain for all its ports. Explain in one sentence. *(1.1 · M07)*

24. Which protocol securely transfers files over SSH? *(1.5 · M10)*
    - A) FTP
    - B) SFTP
    - C) TFTP
    - D) HTTP

25. IPv6 addresses are how many bits long? *(1.4 · M08)*
    - A) 32
    - B) 64
    - C) 128
    - D) 256

---

## Domain 2 — Network Implementation

26. A VLAN mainly gives you… *(2.1 · M11)*
    - A) faster cables
    - B) separate broadcast domains on one switch
    - C) more electrical power
    - D) longer cable runs

27. A trunk port on a switch… *(2.1 · M11)*
    - A) carries only one VLAN
    - B) carries many VLANs between switches
    - C) blocks all VLANs
    - D) powers a phone

28. The default/native VLAN carries frames that are… *(2.1 · M11)*
    - A) always tagged
    - B) untagged
    - C) encrypted
    - D) dropped

29. To let two VLANs talk to each other you need… *(2.1 · M11)*
    - A) a longer cable
    - B) routing (a router or Layer 3 switch)
    - C) a hub
    - D) a loopback plug

30. Which wireless band generally reaches farther but is slower? *(2.3 · M06)*
    - A) 2.4 GHz
    - B) 5 GHz
    - C) 6 GHz
    - D) They are identical

31. Two nearby access points should use… *(2.3 · M14)*
    - A) the same channel
    - B) non-overlapping channels
    - C) no channel
    - D) only channel 6 always

32. A weak Wi-Fi signal far from the router is measured by… *(2.3 · M14)*
    - A) RSSI
    - B) MAC
    - C) TTL
    - D) MTU

33. Which addressing method is best for a server that must always have the same IP? *(2.1 · M08)*
    - A) A DHCP lease that changes
    - B) A static IP (or DHCP reservation)
    - C) APIPA
    - D) No IP

34. PoE lets a switch… *(2.2 · M07)*
    - A) route between subnets
    - B) send power and data over one Ethernet cable
    - C) encrypt traffic
    - D) block ports

35. **Matching —** match each device to its main OSI layer. *(2.1 · M05/M07)*
    - ___ Hub &nbsp;&nbsp; ___ Switch &nbsp;&nbsp; ___ Router
    - A) Layer 3
    - B) Layer 1
    - C) Layer 2

36. Which command shows a Windows PC's IP settings? *(2.1 · M14)*
    - A) `ping`
    - B) `ipconfig`
    - C) `tracert`
    - D) `nslookup`

37. A default gateway is… *(2.1 · M08)*
    - A) the DNS server
    - B) the router address a device uses to leave its network
    - C) the switch's MAC
    - D) the subnet mask

38. Link aggregation is used to… *(2.2 · M07)*
    - A) shrink bandwidth
    - B) combine links for more bandwidth/redundancy
    - C) block a VLAN
    - D) assign IPs

39. Which is a valid host on `10.0.0.0/8`? *(2.1 · M08)*
    - A) 10.55.4.9
    - B) 192.168.1.9
    - C) 172.16.1.1
    - D) 8.8.8.8

40. A wireless network name broadcast by an AP is the… *(2.3 · M06)*
    - A) SSID
    - B) MAC
    - C) VLAN ID
    - D) TTL

41. **Scenario (PBQ-style) —** A laptop must join `192.168.10.0/24`. Give one valid IP, the subnet mask, and a sensible gateway. *(2.1 · M08)*

42. Which is the safe rule when configuring a shared lab switch? *(2.1 · M11)*
    - A) Erase its settings first
    - B) Only change the ports you were assigned
    - C) Disable every port
    - D) Remove all VLANs

43. Spanning Tree Protocol (STP) exists to… *(2.2 · M07)*
    - A) speed up DNS
    - B) prevent switching loops
    - C) hand out IPs
    - D) encrypt frames

44. A `255.255.255.0` mask means the network part is… *(2.1 · M08)*
    - A) the first octet
    - B) the first two octets
    - C) the first three octets
    - D) all four octets

45. Which is a wireless security standard you should prefer today? *(2.3 · M13)*
    - A) WEP
    - B) Open
    - C) WPA2/WPA3
    - D) No encryption

---

## Domain 3 — Network Operations

46. A physical network diagram shows… *(3.1 · M12)*
    - A) only IP addresses
    - B) real devices, ports, and cables
    - C) only VLAN numbers
    - D) only DNS names

47. The 3-2-1 backup rule means… *(3.3 · M12)*
    - A) 3 copies, 2 media types, 1 off-site
    - B) 3 servers, 2 switches, 1 router
    - C) back up 3 times a day
    - D) keep data for 3 years

48. An off-site backup protects you from… *(3.3 · M12)*
    - A) a slow network
    - B) a local disaster destroying both copies
    - C) a weak Wi-Fi signal
    - D) a duplex mismatch

49. SNMP is used to… *(3.1 · M12)*
    - A) assign IPs
    - B) monitor and manage network devices
    - C) route packets
    - D) test cables

50. A lower Syslog severity number means… *(3.1 · M12)*
    - A) less urgent
    - B) more urgent
    - C) no message
    - D) a warning only

51. **True or false —** Documentation is optional if the network is small. Explain in one sentence. *(3.1 · M12)*

52. Onboarding a new employee mainly involves… *(3.2 · M12)*
    - A) removing their access
    - B) setting up accounts, access, and training
    - C) wiping their laptop
    - D) closing tickets

53. A baseline is useful because it… *(3.1 · M12)*
    - A) shows normal so you can spot abnormal
    - B) blocks all traffic
    - C) encrypts logs
    - D) assigns VLANs

54. High availability is often measured in… *(3.3 · M12)*
    - A) cable length
    - B) "nines" of uptime
    - C) MAC addresses
    - D) port numbers

55. Which protects against data loss from a single disk failure? *(3.3 · M12)*
    - A) RAID redundancy
    - B) a longer cable
    - C) a faster CPU
    - D) a new SSID

56. A change management process exists to… *(3.2 · M12)*
    - A) make changes safely and on record
    - B) block all changes
    - C) skip approvals
    - D) hide outages

57. NTP keeps devices' … in sync. *(3.1 · M12)*
    - A) IP addresses
    - B) clocks/time
    - C) passwords
    - D) VLANs

---

## Domain 4 — Network Security

58. The "C" in the CIA triad stands for… *(4.1 · M13)*
    - A) Control
    - B) Confidentiality
    - C) Copy
    - D) Cache

59. Phishing is an attack that… *(4.2 · M13)*
    - A) floods a server
    - B) tricks a person into giving up secrets
    - C) cuts a cable
    - D) assigns an IP

60. An on-path (formerly man-in-the-middle) attack… *(4.2 · M13)*
    - A) sits between two parties to read/change traffic
    - B) only affects Wi-Fi speed
    - C) is a backup method
    - D) is a routing protocol

61. AAA stands for… *(4.1 · M13)*
    - A) Access, Audit, Alert
    - B) Authentication, Authorization, Accounting
    - C) Assign, Allow, Archive
    - D) Any, All, Always

62. A firewall's default-deny rule means… *(4.3 · M13)*
    - A) allow everything, block nothing
    - B) block what is not explicitly allowed
    - C) allow only pings
    - D) disable the firewall

63. A VPN gives you… *(4.5 · M13)*
    - A) a private, encrypted tunnel over a public network
    - B) more cable length
    - C) faster DNS
    - D) a bigger broadcast domain

64. Disabling unused switch ports is an example of… *(4.4 · M13)*
    - A) hardening
    - B) routing
    - C) monitoring
    - D) backup

65. **True or false —** Multifactor authentication uses two or more different proofs of identity. Explain in one sentence. *(4.1 · M13)*

66. A DDoS attack aims to… *(4.2 · M13)*
    - A) steal a password quietly
    - B) overwhelm a service so it can't respond
    - C) encrypt your backups
    - D) assign fake IPs

67. Least privilege means giving users… *(4.1 · M13)*
    - A) all access to be safe
    - B) only the access they need
    - C) no access ever
    - D) admin by default

68. Which is the strongest listed way to protect data in transit? *(4.5 · M13)*
    - A) Send it in plain text
    - B) Encrypt it (e.g., HTTPS/VPN)
    - C) Use a longer cable
    - D) Lower the MTU

69. A screened subnet (DMZ) is used to… *(4.3 · M13)*
    - A) isolate public-facing servers from the internal network
    - B) speed up Wi-Fi
    - C) assign VLANs
    - D) back up data

70. Changing default passwords on devices is important because… *(4.4 · M13)*
    - A) defaults are public and easy to guess
    - B) it makes the device faster
    - C) it adds bandwidth
    - D) it is never needed

71. **Matching —** match each control to its CIA goal. *(4.1 · M13)*
    - ___ Encryption &nbsp;&nbsp; ___ Backups &nbsp;&nbsp; ___ Hashing/checksums
    - A) Availability
    - B) Confidentiality
    - C) Integrity

72. A site-to-site VPN connects… *(4.5 · M13)*
    - A) one user's laptop to a server
    - B) two whole networks/offices
    - C) two switches in one rack
    - D) a printer to a PC

---

## Domain 5 — Network Troubleshooting

73. What is the **first** step of the CompTIA troubleshooting method? *(5.1 · M14)*
    - A) Establish a theory
    - B) Identify the problem
    - C) Document
    - D) Verify

74. What is the **last** step? *(5.1 · M14)*
    - A) Identify
    - B) Test the theory
    - C) Document findings
    - D) Escalate

75. `ping` tests… *(5.2 · M14)*
    - A) name resolution only
    - B) basic reachability and round-trip time
    - C) cable color
    - D) VLAN tags

76. `tracert` shows… *(5.2 · M14)*
    - A) the hops along a path
    - B) the DNS cache
    - C) the MAC table
    - D) the subnet mask

77. `nslookup` is used to… *(5.2 · M14)*
    - A) test DNS name resolution
    - B) reset a switch
    - C) show routes
    - D) flush an ARP cache

78. A `169.254` address with the internet down points to… *(5.3 · M14)*
    - A) a DNS problem
    - B) no DHCP (APIPA)
    - C) a duplex mismatch
    - D) weak Wi-Fi

79. Names fail but `ping 8.8.8.8` works. The cause is likely… *(5.3 · M14)*
    - A) DNS
    - B) no power
    - C) no link light
    - D) a bad uplink

80. A whole office slows at once. A likely cause is… *(5.3 · M14)*
    - A) one bad DNS record
    - B) bandwidth saturation or a duplex mismatch
    - C) one weak Wi-Fi signal
    - D) APIPA on one PC

81. You should troubleshoot connectivity in which order? *(5.3 · M14)*
    - A) top-down from the website
    - B) bottom-up: link light, then IP, then ping, then name
    - C) random
    - D) DNS first always

82. A cable tester is used to… *(5.2 · M14)*
    - A) check a cable's wiring and continuity
    - B) assign IPs
    - C) monitor SNMP
    - D) set a VLAN

83. `pathping` combines… *(5.2 · M14)*
    - A) ping and tracert (path + loss per hop)
    - B) DNS and DHCP
    - C) ARP and NAT
    - D) two VLANs

84. **True or false —** You can skip verifying after a fix. Explain in one sentence. *(5.1 · M14)*

85. A duplex mismatch usually causes… *(5.3 · M14)*
    - A) a full outage
    - B) slowness and errors
    - C) a new IP
    - D) a DNS failure

86. `ipconfig /flushdns` is used when… *(5.3 · M14)*
    - A) a stale DNS entry is causing a name to fail
    - B) a cable is unplugged
    - C) a VLAN is down
    - D) a port has no power

87. **Scenario —** A user says "the internet is down." Link light is on, `ipconfig` shows a real IP, `ping 8.8.8.8` works, but no site loads by name. Name the likely problem and your next tool. *(5.3 · M14)*

88. To match a tool to a theory, the tool must… *(5.1 · M14)*
    - A) be the fastest one
    - B) actually test that theory
    - C) be a hardware tool
    - D) always be ping

89. `netsh wlan show interfaces` on Windows shows… *(5.3 · M14)*
    - A) the wireless signal and connection details
    - B) the routing table
    - C) the ARP cache
    - D) the DHCP scope

90. **Scenario —** After you reseat a cable and renew the address, the PC gets a valid IP and loads a page. What are the final two steps you must still do? *(5.1 · M14)*

---

> ⚠️ Any command output referenced is a varying example. **[TO VERIFY ON HARDWARE]** Exam format specifics (exact counts, policies) may change — **[VERIFY WITH CompTIA]**.

---
_NetworkAcademy+ · Practice Exam #1 · CompTIA Network+ N10-009 · Module 15 · Unit 12_
