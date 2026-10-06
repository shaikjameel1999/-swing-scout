/* ============================================
   SWING SCOUT — SHARED APP UTILITIES
   ============================================ */

// ===== THEME TOGGLE =====
(function initTheme() {
  const saved = localStorage.getItem('scout-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();

function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('scout-theme', next);
  updateThemeIcon();
}

function updateThemeIcon() {
  const cur = document.documentElement.getAttribute('data-theme');
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.innerHTML = cur === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  });
}

// ===== FADE IN ON SCROLL =====
function initFadeIn() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
}

// ===== LOCAL STORAGE HELPERS (per-user state) =====
const Store = {
  get(key, fallback = null) {
    try { const v = localStorage.getItem('scout-' + key); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem('scout-' + key, JSON.stringify(value)); } catch {}
  },
  remove(key) { localStorage.removeItem('scout-' + key); }
};

// ===== NUMBER FORMATTERS =====
const fmt = {
  inr(n) { return '₹' + Number(n).toLocaleString('en-IN', { maximumFractionDigits: 0 }); },
  inr2(n) { return '₹' + Number(n).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); },
  num(n, d = 2) { return Number(n).toFixed(d); },
  pct(n, d = 2) { return (n >= 0 ? '+' : '') + Number(n).toFixed(d) + '%'; },
  date(d) { return new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }); }
};

// ===== PROVENANCE TAG RENDERER =====
function provTag(type, extra = '') {
  const map = {
    live: { cls: 'prov-live', label: 'LIVE' },
    delayed: { cls: 'prov-delayed', label: 'DELAYED' + (extra ? ' · ' + extra : '') },
    reference: { cls: 'prov-reference', label: 'REFERENCE' + (extra ? ' · ' + extra : '') },
    unavailable: { cls: 'prov-unavailable', label: 'UNAVAILABLE' }
  };
  const m = map[type] || map.unavailable;
  return `<span class="prov ${m.cls}">${m.label}</span>`;
}

// ===== VERDICT BADGE RENDERER =====
function verdictBadge(v) {
  const map = {
    SUPPORTS: 'v-supports', NEUTRAL: 'v-neutral',
    WARNS: 'v-warns', VETO: 'v-veto'
  };
  return `<span class="verdict ${map[v] || 'v-neutral'}">${v}</span>`;
}

// ===== DEMO CHIP =====
function demoChip() { return `<span class="demo-chip">Demo Data</span>`; }

// ===== RENDER NAV =====
function renderNav(active = '') {
  const links = [
    { href: 'index.html', label: 'Home' },
    { href: 'console.html', label: 'Console' },
    { href: 'desk.html', label: 'Desk' },
    { href: 'analyst.html', label: 'Analyst' },
    { href: 'chat.html', label: 'Chat' }
  ];
  const html = `
    <nav class="nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">
          <span class="nav-mark">S</span>
          <span>Swing Scout</span>
        </a>
        <div class="nav-links">
          ${links.filter(l => l.href !== active).map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
        </div>
        <div class="nav-actions">
          <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme"></button>
          <a href="console.html" class="btn btn-primary btn-sm">Open Console</a>
        </div>
      </div>
    </nav>`;
  const slot = document.getElementById('nav-slot');
  if (slot) slot.innerHTML = html;
  updateThemeIcon();
}

// ===== RENDER FOOTER =====
function renderFooter() {
  const slot = document.getElementById('footer-slot');
  if (!slot) return;
  slot.innerHTML = `
    <footer class="footer">
      <div class="disclaimer">
        <strong>Research & Intelligence Only — Not Financial Advice.</strong><br>
        All output is analytical research, never a buy/sell recommendation or a promise of returns.
        Cash-market equities only · 3–4 day horizon · Max 1% trade risk · Day-4 time stop.
        This is a <strong>Phase 1 static demo</strong> — all data is simulated for UI demonstration.
      </div>
      <p>Swing Scout · Built for retail capital preservation</p>
    </footer>`;
}

// ===== BOOT =====
document.addEventListener('DOMContentLoaded', () => {
  renderNav(document.body.dataset.page || '');
  renderFooter();
  initFadeIn();
  updateThemeIcon();
});
