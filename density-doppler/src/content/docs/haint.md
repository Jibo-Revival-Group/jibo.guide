---
title: How to Pair Home Assistant
description: How you pair with Home Assistant
---

## Install the Integration
You can get it through HACS
## Configure the Integration
1. Go to your Devices menu and click "Add Integration"
2. Select/Search OpenJibo in the new menu
3. Enter the base URL of your OpenJibo Server. For the local .NET server from this guide, use http://<server-ip>:24605; for a hosted server, use the URL it provides (e.g. https://api.5x1.com:443).
4. Set an Integration Name for your Jibo (it doesn't matter what you pick)
5. Enter the IP of your Robot (optional, requires HA to be on the same network as Jibo)
6. Go to the OpenJibo portal (SERVER_URL/portal)
7. On the portal, sign in and access the robot you're setting up.
8. Go to your Home Assistant Notifications and copy your pairing code
9. Paste your pairing code into the OpenJibo portal