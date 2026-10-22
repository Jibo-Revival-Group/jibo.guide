---
title: Choose a server
description: 5x1 and Phoenix, and what each one is good for
category: "Start here"
sidebar:
  order: 2
---

Jibo needs a server to understand "Hey Jibo", get updates and do most of what he used to. The original one shut down in 2019. This guide covers two community servers you can connect him to: **5x1** and **Phoenix**. Both are free and open source, and you start both the same way, with the [DFU Mod Toolkit](/mod/dfu-toolkit/). They go about it differently though, so it's worth reading about both before you pick.

## 5x1 (the BEcosystem)

5x1 is home to the BEcosystem, a group of community projects built around Jibo. The setup script installs **BEam** on Jibo, the community's version of his skills. BEam is built on Jibo's original system skills and adds new things on top: custom themes for his eye, menu and icons, a jukebox for your own music, cooking videos, and **BEacon**, a control panel you can open in a browser on any device on your network. "Hey Jibo" conversations go to **BEefy** at api.5x1.com, and **BEaker** delivers updates for BEam and for Jibo's services. You don't need an account.

A good fit if you want a Jibo you can customize and tinker with, with community skills alongside his familiar ones.

**Setup:** put Jibo in int-developer mode on your Wi-Fi with the DFU toolkit, then run the 5x1 post-mod script over SSH. The steps are in [Connect to 5x1](/mod/pmscript/), and there's more about the project at [5x1.com](https://5x1.com).

## Phoenix

Phoenix is an open source rebuild of the cloud service Jibo was made for: speech recognition, conversation, skills and updates. It also has a web console that does what the old Jibo app did, like your household and the people in it, personal reports (weather, news, commute and calendar), photos and messages. Jibo keeps the skills and personality he shipped with and talks to Phoenix the same way he used to talk to Jibo's own servers. There's a Skill Store too. You need a free account at jibo.io.

A good fit if you want Jibo to work the way he originally did, with the app's household features back.

**Setup:** flash the Phoenix image with the DFU toolkit, then finish setup by showing Jibo a QR code from the jibo.io console. If you'd rather not reflash him, there's also a setup command. The steps are in [Connect to Phoenix](/mod/phoenix/), and there's more about the project at [jibo.io](https://jibo.io).

## Side by side

| | 5x1 | Phoenix |
| --- | --- | --- |
| On Jibo | BEam: community skills built on his originals | His original skills, kept up to date by Phoenix |
| "Hey Jibo" goes to | BEefy, at api.5x1.com | Phoenix, at jibo.io |
| Updates | BEaker, for BEam and Jibo's services | Phoenix, for Jibo's OS, services and skills |
| Setup | DFU toolkit, int-developer mode, then the post-mod script over SSH | DFU toolkit, the Phoenix image, then a QR code from the console |
| Account | None | Free jibo.io account |
| Run your own server | Yes, from BEefy's source | Yes, from Phoenix's source |
| Cost | Free | Free |
| Source | [Jibo-Revival-Group on GitHub](https://github.com/Jibo-Revival-Group) | [Paskooter/phoenix on GitHub](https://github.com/Paskooter/phoenix) |

Each project explains what data it keeps: see [5x1.com](https://5x1.com) and [jibo.io/privacy](https://jibo.io/privacy).

## Can I switch later?

Yes. The DFU toolkit can put Jibo back in int-developer mode or reflash him whenever you like. And if you make a full backup before you start, you can always restore him to how he was.
