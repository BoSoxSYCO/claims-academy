# Quiz — Worked Scenarios: "The Internet Is Down"

> **Lesson:** NA-M14-L07 · **Module:** 14 · **Unit:** 11 · **Objective:** 5.1–5.5
> **Name:** ______________________  **Date:** __________  **Score:** ____ / 10

**Instructions:** Choose the best answer. One answer each unless it says "choose two." Don't peek at the answer key until you finish. Answers and explanations are in `instructor/answer-keys/wb-14-07-answers.md`.

---

1. A PC has no internet and `ipconfig` shows **169.254.10.4**. The theory is…
   - A) a DNS problem
   - B) no DHCP answered (APIPA)
   - C) a duplex mismatch
   - D) weak Wi-Fi

2. Names fail but IPs work. Which tool do you test with?
   - A) cable tester
   - B) nslookup
   - C) loopback plug
   - D) Wi-Fi analyzer

3. The whole office is slow at once. A likely theory is…
   - A) one bad DNS record
   - B) bandwidth saturation or a duplex mismatch
   - C) a single weak Wi-Fi signal
   - D) APIPA on one PC

4. Wi-Fi is fine near the router but drops in the far room. The cause is likely…
   - A) low RSSI (distance/attenuation)
   - B) a DNS problem
   - C) no DHCP
   - D) a bad DNS cache

5. What is the **last** step of every scenario?
   - A) Identify
   - B) Test the theory
   - C) Document
   - D) Escalate

6. **True or false —** You can skip verifying once you apply a fix. Explain in one sentence.

   _______________________________________________________________

7. After `ipconfig /flushdns` fixes a name problem, what should you do next?
   - A) Nothing
   - B) Verify the name resolves, then document
   - C) Reboot the switch
   - D) Escalate

8. **Matching —** match each complaint to its first tool.
   - ___ No internet, one PC &nbsp;&nbsp; ___ Name won't load &nbsp;&nbsp; ___ Wi-Fi drops far away
   - A) nslookup
   - B) ipconfig (check for 169.254)
   - C) netsh wlan show interfaces

9. Fill in the blank: In any scenario, the tool you use at "test the theory" must match your ____________.

10. **Scenario —** A user says "the internet is down." The link light is on, `ipconfig` shows a real IP, and `ping 8.8.8.8` works — but no website loads by name. What is the likely problem, and your next tool?

    _______________________________________________________________

---
_NetworkAcademy+ · Quiz · CompTIA Network+ N10-009 · NA-M14-L07 · Module 14 · Unit 11_
