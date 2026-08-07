# Teaching Notes — NA-M14-L06 "Troubleshooting Names, Speed, and Wireless"

> 🔒 Instructor material. **Module:** 14 · **Unit:** 11 · **Objective:** N10-009 5.2 / 5.3 / 5.4 · **Time:** ~35 min

---

## Learning objective (one line)

Learners sort a complaint into name (DNS), speed, or wireless, and match each symptom to a cause and tool.

## Why this lesson matters

After Layers 1–3 connectivity (14-05), these are the *subtler* everyday complaints: a name won't load, everything is slow, or Wi-Fi keeps dropping. The key skill is **sorting the complaint into the right family first** — it's exactly how CompTIA phrases 5.2/5.3/5.4 questions, and it saves real time.

## The three families

- **Name (DNS):** IP works, name fails → check DNS server, `nslookup`, `ipconfig /flushdns`.
- **Speed:** duplex mismatch, bandwidth saturation, high latency/jitter, bad cable/interference. Distinguish bandwidth (size) vs. throughput (actual) vs. latency (delay) vs. jitter (delay variation).
- **Wireless:** low RSSI (distance/walls = attenuation), channel overlap, wrong band, interference, wrong SSID/passphrase.

## Common misconceptions (and fixes)

- **"A name failure is a connection problem."** If ping to the **IP** works, the connection is fine — it's **DNS**.
- **"More bandwidth fixes lag."** Bandwidth ≠ latency. A wider pipe still has the same delay.
- **"Weak Wi-Fi is always the router."** Often it's distance/walls (attenuation, low RSSI) or channel overlap — check with a Wi-Fi analyzer.
- **"Bandwidth and throughput are the same."** Bandwidth is capacity; throughput is what actually gets through.

## Pacing guidance

- ~35 minutes. Lead with the busy-diner analogy (§4): wrong phone book (DNS), backed-up kitchen (speed), can't hear across the room (wireless).
- The lab (§9) is real and satisfying: `ipconfig /flushdns` shows a success message, and `netsh wlan show interfaces` shows the **Signal** % dropping as you walk away.
- Drill the ping-IP-vs-name = DNS pattern, and bandwidth-vs-latency.
- Where learners stall: the speed vocabulary (bandwidth/throughput/latency/jitter) and separating wireless causes.

## How CompTIA tends to test it

- ping-IP-works-name-fails = DNS.
- bandwidth vs. latency vs. jitter definitions and which one a symptom points to.
- low RSSI / channel overlap / wrong band for wireless.
- `ipconfig /flushdns` as the DNS-cache fix.

## Accuracy note (Prime Directive #7)

`nslookup`, `ipconfig /flushdns`, and `netsh wlan show interfaces` are **real** Windows commands. Outputs — IPs, the flush message, the **Signal** percentage — are **examples that vary**, marked `[TO VERIFY ON HARDWARE]`. The lab only tests and clears a cache; nothing is fabricated or disconnected.

## Extension ideas (fast learners)

- Speed-test tools and how to read them (down/up/latency).
- QoS for jitter-sensitive traffic (voice/video).
- AP placement, roaming, and 2.4 vs. 5 vs. 6 GHz trade-offs.

## Support ideas (struggling learners)

- Give the busy-diner table (§4) as the anchor; sort five symptoms into families before any detail.
- Teach only the ping-IP-vs-name DNS test first; add speed/wireless once that's solid.
- Use one sentence for bandwidth vs. latency ("size vs. delay") and repeat it.

## Where this leads

Next is 14-07 — full worked scenarios ("the internet is down") that run the whole method with all the tools, end to end. It is the **finale of Module 14** — mark the module ✅ Complete after publishing it.

---
_NetworkAcademy+ · Teaching Notes · CompTIA Network+ N10-009 · NA-M14-L06 · Module 14_
