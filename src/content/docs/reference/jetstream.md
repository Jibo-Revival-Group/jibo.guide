---
title: Jetstream Server Override
description: How Jetstream Override works
---

Typically Jibo uses jibo.com servers which no longer exist. What Jetstream override does is that it overrides the default settings for Jetstream (what he uses for Hey Jibo requests) so it can use a different server such as our own.

## Jetstream Config
The Jetstream service has a config file in `/usr/local/etc/jibo-jetstream-service.json`. Within this file is the `HubClient` section. Within that section we can place a override that looks a little bit like this:
```json
"override": {
    "hub_port": {Server Port},
    "hub_hostname": "{Server Endpoint}",
    "entrypoint_hostname": "{Server Endpoint}"
```
For example, if you want to point your robot at OpenJibo.com servers, it would look like this:
```json
"override": {
    "hub_port": 443,
    "hub_hostname": "api.openjibo.com",
    "entrypoint_hostname": "api.openjibo.com"
```