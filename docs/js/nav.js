/* Navigation data and renderer for Jibo Revival Guide */

const NAV_PAGES = [
  {
    section: 'Getting Started',
    items: [
      { id: 'welcome',          title: 'Welcome',               url: '/index.html',         breadcrumb: ['Getting Started'] },
    ]
  },
  {
    section: 'Choose Your Route',
    items: [
      { id: 'automod',          title: 'Route A — Automated',   url: '/automod.html',        breadcrumb: ['Choose Your Route'] },
      { id: 'manual-1',         title: 'Route B — Manual',      url: '/manual-1.html',       breadcrumb: ['Choose Your Route', 'Route B: Manual'] },
    ]
  },
  {
    section: 'Route B: Manual Steps',
    items: [
      { id: 'manual-1',         title: '1. Environment Setup',  url: '/manual-1.html',       breadcrumb: ['Route B: Manual'], sub: true },
      { id: 'manual-2',         title: '2. Dump the eMMC',      url: '/manual-2.html',       breadcrumb: ['Route B: Manual'], sub: true },
      { id: 'manual-3',         title: '3. Flash & First Boot', url: '/manual-3.html',       breadcrumb: ['Route B: Manual'], sub: true },
    ]
  },
  {
    section: 'After the Mod',
    items: [
      { id: 'post-mod',        title: 'SSH & Next Steps',       url: '/post-mod.html',        breadcrumb: ['After the Mod'] },
      { id: 'skills-manager', title: 'Skills Service Manager', url: '/skills-manager.html',  breadcrumb: ['After the Mod'] },
      { id: 'asr-service',     title: 'Local ASR Service',      url: '/asr-service.html',     breadcrumb: ['After the Mod'] },
      { id: 're-commander',    title: 'Re-Commander',           url: '/re-commander.html',    breadcrumb: ['After the Mod'] },
      { id: 'jibo-llm',        title: 'jibo-llm',               url: '/jibo-llm.html',        breadcrumb: ['After the Mod'] },
      { id: 'troubleshooting', title: 'Troubleshooting',        url: '/troubleshooting.html', breadcrumb: ['After the Mod'] },
    ]
  }
];

// Flatten for prev/next navigation
// prevId / nextId override the array position when the two routes branch
const FLAT_PAGES = [
  { id: 'welcome',          url: '/index.html',          title: 'Welcome' },
  { id: 'automod',          url: '/automod.html',         title: 'Route A — Automated Installer', prevId: 'welcome', nextId: 'post-mod' },
  { id: 'manual-1',         url: '/manual-1.html',        title: '1. Environment Setup',           prevId: 'welcome' },
  { id: 'manual-2',         url: '/manual-2.html',        title: '2. Dump the eMMC' },
  { id: 'manual-3',         url: '/manual-3.html',        title: '3. Flash & First Boot' },
  { id: 'post-mod',        url: '/post-mod.html',        title: 'SSH & Next Steps' },
  { id: 'skills-manager', url: '/skills-manager.html',  title: 'Skills Service Manager' },
  { id: 'asr-service',    url: '/asr-service.html',     title: 'Local ASR Service' },
  { id: 're-commander',   url: '/re-commander.html',    title: 'Re-Commander' },
  { id: 'jibo-llm',       url: '/jibo-llm.html',        title: 'jibo-llm' },
  { id: 'troubleshooting', url: '/troubleshooting.html', title: 'Troubleshooting' },
];

function buildSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const currentId = typeof PAGE_ID !== 'undefined' ? PAGE_ID : '';

  let html = `
    <a class="sidebar-logo" href="/index.html">
      <div class="sidebar-logo-icon">👁</div>
      <div class="sidebar-logo-text">
        <strong>jibo.guide</strong>
        <span>Jibo Revival Guide</span>
      </div>
    </a>
    <nav class="sidebar-nav">
  `;

  for (const group of NAV_PAGES) {
    html += `<span class="nav-section-title">${group.section}</span>`;
    for (const item of group.items) {
      const active = item.id === currentId ? ' active' : '';
      const sub = item.sub ? ' nav-sub' : '';
      html += `<a href="${item.url}" class="${active}${sub}".trimStart()>${item.title}</a>`;
    }
  }

  html += `</nav>
    <div class="sidebar-footer">
      Community project. Not affiliated with Jibo&nbsp;Inc.<br>
      <a href="https://discord.gg/jibo" target="_blank">Discord</a> ·
      <a href="https://github.com/Jibo-Revival-Group" target="_blank">GitHub</a>
    </div>
  `;

  sidebar.innerHTML = html;
}

function buildBreadcrumb() {
  const el = document.querySelector('.header-breadcrumb');
  if (!el) return;
  const currentId = typeof PAGE_ID !== 'undefined' ? PAGE_ID : '';

  for (const group of NAV_PAGES) {
    for (const item of group.items) {
      if (item.id === currentId) {
        const parts = [];
        for (const crumb of item.breadcrumb) {
          parts.push(`<span>${crumb}</span>`);
        }
        parts.push(`<span class="sep">›</span><span class="current">${item.title}</span>`);
        el.innerHTML = parts.join(' <span class="sep">›</span> ').replace(/ <span class="sep">›<\/span>  <span class="sep">›<\/span> /, ' <span class="sep">›</span> ');
        return;
      }
    }
  }
}

function buildPageNav() {
  const el = document.querySelector('.page-nav');
  if (!el) return;
  const currentId = typeof PAGE_ID !== 'undefined' ? PAGE_ID : '';
  const idx = FLAT_PAGES.findIndex(p => p.id === currentId);
  if (idx < 0) return;

  const current = FLAT_PAGES[idx];

  const prevPage = current.prevId
    ? FLAT_PAGES.find(p => p.id === current.prevId)
    : idx > 0 ? FLAT_PAGES[idx - 1] : null;

  const nextPage = current.nextId
    ? FLAT_PAGES.find(p => p.id === current.nextId)
    : idx < FLAT_PAGES.length - 1 ? FLAT_PAGES[idx + 1] : null;

  let html = '';
  if (prevPage) {
    html += `<a href="${prevPage.url}" class="prev">
      <span class="nav-dir">← Previous</span>
      <span class="nav-title">${prevPage.title}</span>
    </a>`;
  } else {
    html += `<div></div>`;
  }

  if (nextPage) {
    html += `<a href="${nextPage.url}" class="next">
      <span class="nav-dir">Next →</span>
      <span class="nav-title">${nextPage.title}</span>
    </a>`;
  }

  el.innerHTML = html;
}

function buildProgress() {
  const el = document.querySelector('.page-progress-wrap');
  if (!el) return;
  const currentId = typeof PAGE_ID !== 'undefined' ? PAGE_ID : '';
  const MANUAL = ['manual-1', 'manual-2', 'manual-3'];
  const idx = MANUAL.indexOf(currentId);
  if (idx < 0) return;
  const pct = Math.round(((idx + 1) / MANUAL.length) * 100);
  el.innerHTML = `
    <p class="page-progress">Step ${idx + 1} of ${MANUAL.length}</p>
    <div class="progress-bar"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
  `;
}

function setupMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  if (!toggle || !sidebar || !overlay) return;

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('visible');
  });
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildSidebar();
  buildBreadcrumb();
  buildPageNav();
  buildProgress();
  setupMobileMenu();
});
