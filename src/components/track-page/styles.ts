// Shared CSS for all track pages (/for-engineers, /for-professionals, /for-leaders).
// Scoped under .gt-track-page so it cannot leak into the rest of the site.
// Per-track accent colors are supplied via inline CSS custom properties on the wrapper
// (--accent and --accent-dark), so this sheet stays accent-neutral.

export const TRACK_PAGE_CSS = `
.gt-track-page {
  --ink: #1a1814;
  --paper: #f4efe6;
  --muted: #6b645a;
  /* --accent and --accent-dark are set per-page via inline style */
  font-family: 'Fraunces', serif;
  background: var(--paper);
  color: var(--ink);
  /* Top padding clears the 64px fixed Navbar, then 56px of breathing room */
  padding: 120px 40px 56px;
  min-height: 100vh;
}
.gt-track-page *,
.gt-track-page *::before,
.gt-track-page *::after { box-sizing: border-box; }
.gt-track-page .tp-container { max-width: 980px; margin: 0 auto; }

/* Breadcrumb */
.gt-track-page .tp-breadcrumb {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 32px;
}
.gt-track-page .tp-breadcrumb a {
  color: inherit;
  text-decoration: none;
}
.gt-track-page .tp-breadcrumb a:hover { color: var(--ink); }
.gt-track-page .tp-breadcrumb strong { color: var(--ink); font-weight: 600; }
.gt-track-page .tp-breadcrumb .tp-sep { margin: 0 8px; }

/* Header */
.gt-track-page .tp-header {
  border-top: 6px solid var(--accent);
  padding-top: 32px;
  margin-bottom: 64px;
}
.gt-track-page .tp-track-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-dark);
  margin-bottom: 16px;
}
.gt-track-page .tp-h1 {
  font-family: 'Fraunces', serif;
  font-size: clamp(48px, 7vw, 88px);
  font-weight: 500;
  line-height: 0.92;
  letter-spacing: -0.03em;
  font-style: italic;
  margin: 0 0 24px;
}
.gt-track-page .tp-h1 em { font-style: normal; color: var(--accent-dark); }
.gt-track-page .tp-lede {
  font-size: 21px;
  line-height: 1.45;
  color: var(--ink);
  max-width: 640px;
  margin: 0;
}

/* Built For panel */
.gt-track-page .tp-who {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 40px;
  padding: 32px 0;
  border-top: 1px solid var(--ink);
  border-bottom: 1px solid var(--ink);
  margin-bottom: 64px;
}
.gt-track-page .tp-who-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
}
.gt-track-page .tp-who-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 32px;
}
.gt-track-page .tp-who-item {
  font-size: 16px;
  font-style: italic;
  line-height: 1.4;
}
.gt-track-page .tp-who-item::before {
  content: '— ';
  color: var(--accent-dark);
  font-style: normal;
}

/* Offerings */
.gt-track-page .tp-offerings-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 12px;
}
.gt-track-page .tp-offerings-h {
  font-family: 'Fraunces', serif;
  font-size: 40px;
  font-style: italic;
  font-weight: 500;
  margin: 0 0 40px;
  letter-spacing: -0.02em;
}
.gt-track-page .tp-offerings-h em {
  color: var(--accent-dark);
  font-style: normal;
}

/* Product card */
.gt-track-page .tp-product {
  display: grid;
  grid-template-columns: 100px 1fr 200px;
  gap: 32px;
  padding: 40px 0;
  border-top: 1px solid var(--ink);
  align-items: start;
  position: relative;
}
.gt-track-page .tp-product:last-of-type { border-bottom: 1px solid var(--ink); }
.gt-track-page .tp-product.tp-flagship {
  background: var(--ink);
  color: var(--paper);
  margin: 0 -32px;
  padding: 48px 32px;
}
.gt-track-page .tp-product.tp-flagship .tp-p-level-num,
.gt-track-page .tp-product.tp-flagship .tp-p-level-name { color: var(--accent); }
.gt-track-page .tp-product.tp-flagship .tp-p-desc { color: var(--paper); }
.gt-track-page .tp-product.tp-flagship .tp-p-includes {
  color: rgba(244, 239, 230, 0.75);
  border-left-color: var(--accent);
}
.gt-track-page .tp-product.tp-flagship .tp-p-delivered { color: rgba(244, 239, 230, 0.65); }
.gt-track-page .tp-product.tp-flagship .tp-p-meta-row { border-bottom-color: rgba(244, 239, 230, 0.3); }
.gt-track-page .tp-product.tp-flagship .tp-p-meta-row span:first-child { color: rgba(244, 239, 230, 0.6); }
.gt-track-page .tp-product.tp-flagship::after {
  content: 'FLAGSHIP';
  position: absolute;
  top: 24px;
  right: 32px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.25em;
  color: var(--accent);
  padding: 4px 8px;
  border: 1px solid var(--accent);
}

.gt-track-page .tp-p-level { display: flex; flex-direction: column; gap: 4px; }
.gt-track-page .tp-p-level-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.15em;
  color: var(--accent-dark);
  font-weight: 600;
}
.gt-track-page .tp-p-level-name {
  font-size: 14px;
  font-style: italic;
  color: var(--muted);
}

.gt-track-page .tp-p-content { display: flex; flex-direction: column; gap: 16px; }
.gt-track-page .tp-p-name {
  font-size: 30px;
  font-weight: 500;
  font-style: italic;
  line-height: 1.05;
  letter-spacing: -0.015em;
}
.gt-track-page .tp-p-desc {
  font-size: 16px;
  line-height: 1.55;
  color: var(--ink);
  margin: 0;
}
.gt-track-page .tp-p-includes {
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted);
  padding-left: 16px;
  border-left: 2px solid var(--accent);
  font-style: italic;
}
.gt-track-page .tp-p-delivered {
  font-size: 13px;
  line-height: 1.55;
  color: var(--muted);
  font-style: italic;
}

.gt-track-page .tp-p-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
}
.gt-track-page .tp-p-meta-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 6px;
  border-bottom: 1px dashed var(--muted);
}
.gt-track-page .tp-p-meta-row span:first-child {
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 10px;
}
.gt-track-page .tp-p-meta-row span:last-child { font-weight: 500; text-align: right; }

/* Custom engagement band */
.gt-track-page .tp-custom {
  margin-top: 48px;
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  align-items: center;
}
.gt-track-page .tp-custom.tp-custom-light {
  background: var(--paper);
  border: 2px solid var(--ink);
}
.gt-track-page .tp-custom.tp-custom-dark {
  background: var(--ink);
  color: var(--paper);
}
.gt-track-page .tp-custom-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-dark);
  margin-bottom: 8px;
}
.gt-track-page .tp-custom.tp-custom-dark .tp-custom-label { color: var(--accent); }
.gt-track-page .tp-custom-title {
  font-size: 22px;
  font-style: italic;
  line-height: 1.3;
  max-width: 480px;
}
.gt-track-page .tp-custom-cta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 14px 24px;
  background: var(--ink);
  color: var(--paper);
  text-decoration: none;
  white-space: nowrap;
  display: inline-block;
  border: 1px solid var(--ink);
  transition: background 0.2s ease, color 0.2s ease;
}
.gt-track-page .tp-custom-cta:hover {
  background: var(--accent-dark);
  border-color: var(--accent-dark);
}
.gt-track-page .tp-custom.tp-custom-dark .tp-custom-cta {
  background: transparent;
  color: var(--accent);
  border-color: var(--accent);
}
.gt-track-page .tp-custom.tp-custom-dark .tp-custom-cta:hover {
  background: var(--accent);
  color: var(--ink);
  border-color: var(--accent);
}

/* Footer */
.gt-track-page .tp-footer {
  margin-top: 80px;
  padding-top: 24px;
  border-top: 1px solid var(--ink);
  display: flex;
  justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
}

@media (max-width: 800px) {
  .gt-track-page { padding: 96px 20px 40px; }
  .gt-track-page .tp-who { grid-template-columns: 1fr; gap: 16px; }
  .gt-track-page .tp-who-list { grid-template-columns: 1fr; }
  .gt-track-page .tp-product { grid-template-columns: 1fr; gap: 16px; padding: 32px 0; }
  .gt-track-page .tp-product.tp-flagship { margin: 0; padding: 32px 24px; }
  .gt-track-page .tp-product.tp-flagship::after { top: 16px; right: 16px; }
  .gt-track-page .tp-custom { grid-template-columns: 1fr; padding: 24px; }
  .gt-track-page .tp-footer { flex-direction: column; gap: 8px; }
}
`;
