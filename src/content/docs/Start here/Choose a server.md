---
title: Choose a server
description: 5x1 and Phoenix, and what each one is good for
category: "Start here"
sidebar:
  order: 2
---

Jibo needs a server to understand "Hey Jibo", get updates and do most of what he used to. The original one shut down in 2019. This guide covers two community servers you can connect him to: **5x1** and **Phoenix**. Both are free and open source, and you start both the same way, with the [DFU Mod Toolkit](/mod/dfu-toolkit/). They go about it differently though, so it's worth reading about both before you pick.

## 5x1 (the BEcosystem)

5x1 is home to the BEcosystem, a vibrant collection of community-driven projects built to bring Jibo back to life. Experience Jibo just like he used to be, enhanced with powerful new features deployed almost weekly.

Under the hood, 5x1's custom primary server (BEefy) has been completely rewritten in C# to be faster, lighter, and far more efficient than Jibo's original Node.js cloud service. Your robot retains his iconic personality and core feature set, but with expanded responses and a fully modernized, privacy-focused networking stack.

### Key Features:

- High Performance: Powered by BEefy, a high-efficiency C# cloud backend.

- Flexible Access: Control your robot via our feature-rich mobile app (BEep) or directly through your web browser via port 8123—no app required.

- Expanded Capabilities: Enjoy a built-in Skill Store, custom themes, AirPlay, YouTube Music integration, and a free AI mode.

- Enhanced Privacy: Upgraded, private networking stack keeping your data secure.


| Service | Feature |
| --- | --- |
| BEam | On-Robot Skills |
| BEnch | On-Robot System Services |
| BEacon | On-Robot Dashboard |
| BEefy | Cloud Primary Server |
| BEaker | Cloud OTA Server |
| BEach | Scripts for your robot |
| BEep | Mobile app for extended features |

A good fit if you want Jibo to work like he used to, while getting extra features for free.

**Setup:** 5x1 is completely free. To set it up, put Jibo into developer mode on your Wi-Fi using the [DFU Mod Toolkit](/mod/dfu-toolkit/), then run the 5x1 post-mod script over SSH (or use the BEep mobile app). Visit [5x1.com](https://5x1.com) for full step-by-step guides.

## Phoenix

Phoenix is an open source Node.js rebuild of the cloud service Jibo was made for: speech recognition, conversation, skills and updates. It also has a web console that does what the old Jibo app did, like your household and the people in it, personal reports (weather, news, commute and calendar), photos and messages. Jibo keeps the skills and personality he shipped with and talks to Phoenix the same way he used to talk to Jibo's own servers. There's a Skill Store too. You need a free account at jibo.io.

A good fit if you want Jibo to work the way he originally did, with the app's household features back.

**Setup:** flash the Phoenix image with the DFU toolkit, then finish setup by showing Jibo a QR code from the jibo.io console. If you'd rather not reflash him, there's also a setup command. The steps are in [Connect to Phoenix](/mod/phoenix/), and there's more about the project at [jibo.io](https://jibo.io).

## Side by side

| | 5x1 | Phoenix |
| --- | --- | --- |
| On Jibo | BEam: community skills built on his originals | His original skills, kept up to date by Phoenix |
| "Hey Jibo" goes to | BEefy, at api.5x1.com | Phoenix, at jibo.io |
| Updates | BEaker, for BEam and Jibo's services | Phoenix, for Jibo's OS, services and skills |
| Setup | DFU toolkit, int-developer mode, then the post-mod script over SSH or BEep (Free Mobile App) | DFU toolkit, the Phoenix image, then a QR code from the console |
| Account | None | Free jibo.io account |
| Run your own server | Yes, from BEefy's source | Yes, from Phoenix's source |
| Mobile App | BEep, available on Altstore and F-droid | None |
| Storage | On Robot | Data Stored by Phoenix |
| Cost | Free | Free |
| Source | [Jibo-Revival-Group on GitHub](https://github.com/Jibo-Revival-Group) | [Paskooter/phoenix on GitHub](https://github.com/Paskooter/phoenix) |

Each project explains what data it keeps: see [5x1.com](https://5x1.com) and [jibo.io/privacy](https://jibo.io/privacy).

## Can I switch later?

Yes. The DFU toolkit can put Jibo back in int-developer mode or reflash him whenever you like. And if you make a full backup before you start, you can always restore him to how he was.
