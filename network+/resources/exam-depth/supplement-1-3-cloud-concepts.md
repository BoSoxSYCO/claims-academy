# Exam-Depth Supplement — Objective 1.3: Cloud concepts and connectivity

> **What this is:** a short, exam-depth add-on that goes past the beginner lessons. Read it when you are getting ready for the exam.
> **Objective:** N10-009 **1.3** — Summarize cloud concepts and connectivity options. **Builds on:** Module 04 (network types), Module 09 (services).

## Why this matters

Most companies now rent computers instead of buying them all. They run servers, storage, and apps inside a provider's data center — "the cloud." The exam expects you to know the main cloud words and how a network reaches the cloud safely. You will not configure a cloud in this course, but you must be able to explain it.

## Key words

- **Cloud** — Renting computing (servers, storage, apps) over the internet instead of owning the hardware.
- **On-demand / elasticity** — You get more power in minutes and give it back when you're done. You pay for what you use.
- **Scalability** — The ability to grow (or shrink) resources to match the load.
- **Multitenancy** — Many customers share the same physical hardware, kept apart by software.

## The three service models

Think of it like getting a pizza: how much does the provider make, and how much do you?

| Model | Provider gives you | You still manage | Everyday example |
|-------|--------------------|------------------|------------------|
| **IaaS** (Infrastructure as a Service) | Virtual machines, storage, networking | The operating system and apps | Rent a bare server in the cloud |
| **PaaS** (Platform as a Service) | A ready place to run your code | Just your app and data | A hosted app platform/database |
| **SaaS** (Software as a Service) | The finished app | Only your settings and data | Web email, online docs |

The higher you go (IaaS → SaaS), the less you manage and the less you control.

## The deployment models (where it lives)

- **Public cloud** — Shared provider (many customers). Cheapest to start, least control.
- **Private cloud** — Cloud tech, but for one organization only. More control, more cost.
- **Hybrid cloud** — A mix of private and public, joined together.
- **Multicloud** — Using more than one public provider at once.

## Cloud building blocks CompTIA names

- **NFV (Network Functions Virtualization)** — Running network gear (router, firewall, load balancer) as software instead of physical boxes.
- **VPC (Virtual Private Cloud)** — Your own walled-off network inside a public cloud.
- **Network security group / security list** — A cloud firewall rule set that says which traffic may reach a resource.
- **Cloud gateway** — A door in or out of your VPC: an **internet gateway** for public traffic, a **NAT gateway** so private hosts can reach out.
- **Region / availability zone** — A provider's location, split into separate data centers for redundancy.

## How you connect to the cloud

| Way in | What it is | Trade-off |
|--------|-----------|-----------|
| **VPN over the internet** | An encrypted tunnel from your office to the VPC | Cheap, quick; speed depends on the internet |
| **Direct / dedicated connect** | A private circuit from your site to the provider | Fast and steady; costs more, takes time to set up |

> 🎯 **Exam tip:** Match the model to who manages what. "We only manage the app and data" = **PaaS**; "we manage the OS too" = **IaaS**; "we just log in and use it" = **SaaS**. "Private network inside a public cloud" = **VPC**.

## Quick check

1. A team rents virtual servers and installs their own operating system on them. Which service model is that?
2. What does a **VPC** give you inside a public cloud?
3. Name the two common ways an office connects to its cloud, and the main trade-off between them.

### Quick-check answers

1. **IaaS** — the provider supplies the virtual hardware; you manage the OS and up.
2. Your own private, walled-off network inside the shared public cloud.
3. **VPN over the internet** (cheap, speed varies) vs. a **direct/dedicated connection** (fast and steady, but costs more and takes longer to set up).

---
_NetworkAcademy+ · Exam-Depth Supplement · Objective 1.3 (Cloud) · CompTIA Network+ N10-009_
