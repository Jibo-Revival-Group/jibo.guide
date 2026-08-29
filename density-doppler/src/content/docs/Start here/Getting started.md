---
title: Getting started
description: An introduction to jibo modding
---
# Welcome!

A community driven guide to restoring your jibo social robot after the original cloud servers went out. Get jibo back on track, awake and talking.

:::tip{icon="heart"}
Using the automated Jibo modding tool will include a fast exploit PLUS the old /var partition rewrite, as well as the full eMMC Dump path. Both routes still perform low level instructions so just to be safe we recomend having a robot backup just in case. If you get stuck, write a forum post or join our discord where you can contact others involved with the project!
:::

# What you'll be able to do
 - SSH into your jibo as root user
 - Install/modify community software such as BEam & Troposphere
 - Access to Jibos local ASR (Automatic Speech Recognition) & TTS (Text To Speech) Services
 - Build and run custom skills (Work in Progress)
 - Use community tools such as Re-Commander, Jibo-LLM, Be-a-Maker, BAM-Scratch, Home Assistant integration etc...
 - And connect to an OpenJibo Cloud Server (or self-host it if you want)
# I don't have a Jibo yet
You can look for second hand Jibos on eBay, Facebook marketplace, Vinted and more.... you can also use [this tool](https://buy.jibo.guide) to fetch Jibos currently on sale from popular websites like eBay and Goodwill


# What do I need
Well, Linux is simplest (any distro with libusb). The current AutoMod launcher also supports macOS with Homebrew and Windows with MSYS2/Zadig. WSL2 remains an option, but USB passthrough needs additional setup.