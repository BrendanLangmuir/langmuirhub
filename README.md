# langmuir-hub

Central portal linking every Langmuir Systems internal tool — production boards, line and warehouse requests, procurement, tooling.

A static landing page served by a minimal Express server. No data, no API, no auth.

## Add or update a card

Edit `public/index.html`. Each tool is one `<a class="nav-card …">` block.

Card colors are set via CSS variable on the card's class:
- `.accent-red` — default Langmuir red (`#C8102E`)
- `.accent-orange` — Titan amber (`#EF9F27`)
- `.accent-cyan` — KPI board cyan (`#38bdf8`)

To add a new color, define `.accent-<name> { --accent: #...; }` in the `<style>` block.

## Run locally

```bash
npm install
npm start
# → http://localhost:8080
```

## Deploy (Railway)

Push to `main`. Railway auto-deploys.

```bash
git add . && git commit -m "Update" && git push origin main
```
