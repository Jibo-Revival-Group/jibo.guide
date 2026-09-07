---
title: Jibo SSM
description: What is Jibo SSM and how to use it
---
Jibo SSM (Skills Service Manager) is important for controlling Jibo's skills. It allows you to launch and stop skills. It has a WebUI and API on port 8779.

## Accessing the WebUI
The webpage is accessible via port 8779 in your browser:
```
http://[Jibo IP Address]:8779
```
:::tip[Info]{icon="information"}
This won't work if your robot doesn't have port 8779 open. It will be open if you're in int-developer or normal with the firewall deleted.
:::
## HTTP API
These are the requests to port 8779 for interfacing with the API.
| Type | Endpoint | Result |
| --- | --- | --- |
| GET | /skill/list | Returns a JSON list of all installed skills and their running state |
| POST | /launch-dev | Launch a skill. Body: ```{"command": "skill-name"}``` |
| POST | /terminate | Stop a skill. Body: ```{"command": "skill-name"}``` |
| GET | /version | Returns the SSM version string |
| GET | /devtools | Chrome DevTools target list for the currently running skill (port 9191) |
| GET | /ssm-devtools | Chrome DevTools target list for the SSM itself (port 12345) |