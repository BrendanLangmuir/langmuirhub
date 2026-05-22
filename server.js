/**
 * langmuir-hub — minimal Express static server.
 *
 * Serves a single landing page (public/index.html) that links to every
 * internal Langmuir tool. No data, no API, no auth — just a portal.
 */
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Avoid stale HTML after Railway deploys (same gotcha as procurement)
app.use((req, res, next) => {
  if (req.path.endsWith('.html') || req.path === '/' || !path.extname(req.path)) {
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
  }
  next();
});

app.use(express.static('public'));

app.get('/api/health', (req, res) => res.json({ ok: true, ts: new Date().toISOString() }));

app.use((req, res) => res.status(404).sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(PORT, () => console.log(`langmuir-hub listening on :${PORT}`));
