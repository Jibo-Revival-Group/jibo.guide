# jibo.guide

Community-maintained mod guide for reviving Jibo social robots.  
Live at **[jibo.guide](https://jibo.guide)**

---

## About

Jibo was the world's first social robot. When the original company shut down its servers in 2019, thousands of units went silent. This guide documents the community's work to restore them using a known hardware exploit (RCM mode on the NVIDIA Tegra K1 chipset) to unlock SSH access and install the community **JiboOS** update.

This is a project of the [Jibo Revival Group](https://github.com/Jibo-Revival-Group). We are not affiliated with Jibo Inc.

## Guide Contents

| Page | Description |
|------|-------------|
| Welcome | What this is, FAQ, choose your route |
| Route A — Automated | Use `jibo_automod` to mod your Jibo automatically |
| Route B — Manual (3 steps) | Build ShofEL2, dump eMMC, modify `/var`, flash back |
| SSH & Next Steps | Install JiboOS, useful ports, local voice round-trip |
| Troubleshooting | Common failure modes and fixes |

## Running Locally

The site is static HTML served by a minimal Express server for local development. GitHub Pages serves the `docs/` folder directly in production.

```bash
npm install
npm start
# → http://localhost:3000
```

## Contributing

Content lives in `docs/*.html`. The navigation (sidebar, prev/next, breadcrumbs) is driven by `docs/js/nav.js` — add new pages there to wire them into the layout automatically.

Pull requests and issue reports are welcome. For real-time discussion join the community **[Discord](https://discord.gg/A34eFkKVFG)**.

## License

Guide content is released under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Do whatever you want with it — just attribute the Jibo Revival Group and share alike.
