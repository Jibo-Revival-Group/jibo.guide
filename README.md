# jibo.guide

Community-maintained mod guide for reviving Jibo social robots.  
Live at **[jibo.guide](https://jibo.guide)**

---

## About

Jibo was the world's first social robot. When the original company shut down its servers in 2019, thousands of units went silent. This guide documents the community's work to restore them using the Tegra K1 boot-ROM recovery path (RCM/ShofEL2) to obtain SSH access, install community software, and connect to replacement services.

This is a project of the [Jibo Revival Group](https://github.com/Jibo-Revival-Group). We are not affiliated with Jibo Inc.

## Running Locally

The site uses Starlight docs, and is served statically on gh-pages

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
