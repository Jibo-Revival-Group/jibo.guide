---
title: Complete The Mod
description: Installing BEam and pointing your robot at a server.
---

Now that you have SSH access to your robot, it's time to set-up the robot side! This will:
- Install BEam (Community Software)
- Point Jibo at 5x1 (Revival Server)
- Setup OTA Updates on JOAP (so you can get latest software)

## SSH into Jibo
```bash
ssh root@[Jibo IP Address]
```
The password is "jibo"
## Run the Post-Mod script
Now that we have access, your terminal should look something like this:
```bash
#
```
That means you have root access to Jibo! Now what you want to do is run the Post-Mod script.
So to run the script just do these commands:
```bash
curl -fsSL -k https://scripts.5x1.com/pm -o /tmp/pm.sh
chmod +x /tmp/pm.sh
sh /tmp/pm.sh
```
This will take about 3-10 minutes, and when it completes the script will automatically reboot your robot. After your robot has rebooted it should function with the 5x1 server. If you are experiencing problems with that, please join the [Jibo Revival Group Discord](https://discord.gg/CBVJzkRGwN).