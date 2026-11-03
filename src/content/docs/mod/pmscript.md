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

:::caution[Coming from Phoenix?]
If Jibo is running [Phoenix](/mod/phoenix/), his firewall must be open before you can switch him to 5x1. BEep and the steps below both log in to Jibo over SSH, and his firewall blocks that. Putting him in int-developer mode with [Set int-developer Mode and Wi-Fi](/mod/dfu-toolkit/#set-int-developer-mode-and-wi-fi) opens it.
:::

## Use BEep (Easiest)
BEep is 5x1's phone app. It can run the Post-Mod script on Jibo for you, so you don't need a computer or a terminal. Your phone has to be on the same Wi-Fi as Jibo.

1. Install BEep from [apps.5x1.com](https://apps.5x1.com):
   - **iPhone or iPad:** add BEep with AltStore or SideStore using the source on that page.
   - **Android:** download the APK, or tap "Add to F-Droid" to get updates through F-Droid.
2. Open BEep and tap **Convert a Jibo to 5x1**.
3. Type in Jibo's IP address and tap **Convert to 5x1**.
4. Keep BEep open while it works. It shows the script's progress as it goes, and this takes several minutes. (If BEep closes or your phone locks, the script keeps going on Jibo. Open Convert again with the same IP to keep following it.)
5. When BEep says Jibo is restarting into 5x1, you're done. After a couple of minutes he'll show up under **Your robots** in BEep.

If BEep says it couldn't log in, check the IP address and make sure Jibo was modded and is in int-developer mode. If it says the script stopped with an error, its output is shown in BEep; share that in the [Jibo Revival Group Discord](https://discord.gg/CBVJzkRGwN).

Once it finishes, skip to [Update Services](#update-services).

## Use a Computer
If you'd rather do it yourself, you can run the same script over SSH.

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
