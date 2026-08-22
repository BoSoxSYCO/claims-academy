# Exam-Depth Supplement — Objective 1.8: Modern network environments

> **What this is:** a short, exam-depth add-on that goes past the beginner lessons. Read it when you are getting ready for the exam.
> **Objective:** N10-009 **1.8** — Summarize evolving use cases for modern network environments. **Builds on:** Module 04 (fundamentals), Module 11 (implementation), Module 13 (security).

## Why this matters

Networks used to be all physical boxes. A person set up each one by hand. Today, big networks are run more like software. They are set in files, changed from one place, and trusted less by default. The exam asks you to know these newer ideas by name. For each one, you say what problem it solves. You need only the "what and why," not the setup.

## Key words

- **Software-defined** — The rules live in software in one place. That place is kept apart from the boxes that just move traffic.
- **Overlay** — A logical network built on top of the real one. Think of a tunnel riding over the internet.
- **Provisioning** — Setting up and configuring network resources.

## Software-defined networking

- **SDN (Software-Defined Networking)** — Split the network in two. The **control plane** is the brain that decides. The **data plane** is the parts that forward. One central controller programs all the switches. The win: change the whole network from one place, not box by box.
- **SD-WAN (Software-Defined Wide Area Network)** — SDN ideas for the links between sites. It picks the best path on its own: internet, broadband, or cellular. It can send each app over the best link. The win: cheaper, smarter branch links.
- **VXLAN (Virtual Extensible LAN)** — An overlay that stretches a Layer 2 network across a Layer 3 network. The win: huge, flexible data-center networks.

## Secure access, the modern way

- **Zero trust** — "Never trust, always verify." Being inside the network earns no trust. Every request is checked every time. Checks include identity, device health, and least privilege.
- **SASE (Secure Access Service Edge)** — One cloud service that bundles networking and security. The networking is like SD-WAN. The security adds a firewall and a web gateway. It sits close to the user. Say it "sassy."
- **SSE (Security Service Edge)** — The security-only part of SASE. It leaves out the SD-WAN networking piece.

## Automation and other trends

- **IaC (Infrastructure as Code)** — Write the network in text files. A tool then builds it the same way every time. The win: fast, repeatable, no drift.
- **IPv6 adoption** — Moving to IPv6 because IPv4 addresses ran out. See the IPv6 lessons and the 3.4 supplement.
- **IoT (Internet of Things)** — Many small smart devices, like cameras and sensors. They are often weak on security, so they get their own isolated network.
- **Edge computing** — Do the work near where the data is made, like a store or a factory. That beats sending it to a far-off data center. The win: less delay.

## Putting the names to problems

| Buzzword | The problem it solves |
|----------|-----------------------|
| SDN | Managing many switches one by one is slow |
| SD-WAN | Branch links are costly and dumb about which path to use |
| Zero trust | "Inside the network" is no longer safe to trust |
| SASE / SSE | Users work everywhere; security should follow them, from the cloud |
| IaC | Hand-built networks drift and are hard to rebuild |

> 🎯 **Exam tip:** These are **summarize**-level topics. You match the name to its purpose — you are not asked to configure them. "Never trust, always verify" = **zero trust**. "Central controller programs the switches" = **SDN**. "Networking + security delivered from the cloud to remote users" = **SASE**.

## Quick check

1. What does the phrase "never trust, always verify" describe?
2. In SDN, which plane is the "brain that decides," and which just forwards traffic?
3. What problem does **Infrastructure as Code (IaC)** solve?

### Quick-check answers

1. **Zero trust** — every user and device is verified on every request, even inside the network.
2. The **control plane** decides; the **data plane** forwards.
3. It builds the network from text files the same way every time, so setups are fast, repeatable, and don't drift.

---
_NetworkAcademy+ · Exam-Depth Supplement · Objective 1.8 (Modern environments) · CompTIA Network+ N10-009_
