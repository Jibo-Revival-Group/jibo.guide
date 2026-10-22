---
title: Connect to 5x1
description: Installing BEam and pointing your robot at a server.
category: "mod"
---

Now that you have SSH access to your robot, it's time to set up the robot side! This will:
- Install BEam (Community Software)
- Point Jibo at 5x1 (Revival Server)
- Install Let's Encrypt certificates (for secure connections)
- Setup OTA Updates on JOAP (so you can get latest software)

## Before You Start
Jibo needs to be in int-developer mode and on your Wi-Fi, and you need his IP address. The [DFU Mod Toolkit](/mod/dfu-toolkit/) does all of that: follow it through [Restart Jibo and Find His IP](/mod/dfu-toolkit/#restart-jibo-and-find-his-ip). His IP is on his boot screen. If you modded him with [JiboAutoMod (Legacy)](/mod/automod/), use the IP you wrote down then.

You'll run these commands from a terminal on your computer: Terminal on a Mac or Linux, or PowerShell on Windows.
## SSH into Jibo
Run this command on your computer, replacing "[Jibo IP Address]" with your Jibo's IP.
```bash
ssh root@[Jibo IP Address]
```
The password is "jibo". (you may get a host authenticity notice, just say yes)
## Run the Post-Mod script
Now that we have access, your terminal should look something like this:
```bash
#
```
That means you have root access to Jibo! Now what you want to do is run the Post-Mod script.
So to run the script just run these commands on Jibo via SSH:
```bash
jibo-mount --rw
curl -fsSL -k https://scripts.5x1.com/pm -o /tmp/pm.sh
chmod +x /tmp/pm.sh
sh /tmp/pm.sh
```
This will take about 5-15 minutes, and when it completes the script will automatically reboot your robot.

:::note
This script is for a Jibo that was set up before with the original Jibo app. If your Jibo is new or was factory reset (he shows a setup screen), ask in the [Jibo Revival Group Discord](https://discord.gg/CBVJzkRGwN) which script to run. 5x1's own setup app, [BEetle](https://github.com/Jibo-Revival-Group/BEetle), also handles both.
:::
## Update Services
The PM script only covers the Jibo skills. His services and overall OS should still get updated just to be safe. To update the OS, go to his menu, click settings, then click update and allow him to check for updates. Click yes to allow him to update and wait a while. He should reboot into an update mode and then reboot again to reach his main menu.

If you are experiencing problems, please join the [Jibo Revival Group Discord](https://discord.gg/CBVJzkRGwN). Other than that, your robot should now be running 5x1 and work just fine! If you don't plan on tinkering with your robot, this is a good point to stop as you shouldn't need any other guide(s). Have a wonderful day!
