/* script.js — Rico Documentation Interactivity */

/* DOM References */
const header             = document.getElementById('siteHeader');
const hamburger          = document.getElementById('hamburger');
const sidebar            = document.getElementById('sidebar');
const overlay            = document.getElementById('overlay');
const sidebarCloseBtn    = document.getElementById('sidebarCloseBtn');
const searchInput        = document.getElementById('searchInput');
const searchDropdown     = document.getElementById('searchDropdown');
const mobileSearchBtn    = document.getElementById('mobileSearchBtn');
const mobileSearchPanel  = document.getElementById('mobileSearchPanel');
const mobileSearchInput  = document.getElementById('mobileSearchInput');
const mobileSearchResults = document.getElementById('mobileSearchResults');
const mobileSearchCloseBtn = document.getElementById('mobileSearchCloseBtn');
const mobileTocBtn       = document.getElementById('mobileTocBtn');
const mobileTocPanel     = document.getElementById('mobileTocPanel');
const mobileTocCloseBtn  = document.getElementById('mobileTocCloseBtn');
const mobileTocList      = document.getElementById('mobileTocList');

let activePanelType = null;

/* Search index */
const pages = [
  { title: 'Welcome to Rico Documentation',  path: 'Welcome',                              id: 'welcome' },
  { title: 'Install Rico theme',             path: 'Getting Started',                      id: 'install' },
  { title: 'Refund Policy',                  path: 'Legal',                                id: 'refund' },
  { title: 'Privacy Policy',                 path: 'Legal',                                id: 'privacy' },
  { title: 'Theme customization options',    path: 'Theme Configuration',                  id: 'customization' },
  { title: 'Languages & currencies',         path: 'Theme Configuration',                  id: 'languages' },
  { title: 'Announcement bar',               path: 'Global Sections',                      id: 'announcement' },
  { title: 'Customer account',               path: 'Global Sections › Feature highlights', id: 'customer-account' },
  { title: 'Localization',                   path: 'Global Sections › Feature highlights', id: 'localization' },
  { title: 'Social media',                   path: 'Global Sections › Feature highlights', id: 'social-media' },
  { title: 'Link',                           path: 'Global Sections › Feature highlights', id: 'link' },
  { title: 'System notifications',           path: 'Global Sections',                      id: 'system-notifications' },
  { title: 'Maintenance updates',            path: 'Global Sections',                      id: 'maintenance' },
  { title: 'User onboarding',                path: 'Global Sections',                      id: 'user-onboarding' },
];

/* Sidebar */
function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('open');
  header.classList.add('header-panel-open');
  if (sidebarCloseBtn) sidebarCloseBtn.classList.add('visible');
  positionSidebarCloseBtn();
  activePanelType = 'sidebar';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
  header.classList.remove('header-panel-open');
  if (sidebarCloseBtn) sidebarCloseBtn.classList.remove('visible');
  activePanelType = null;
}

function closeSidebarMobile() {
  if (window.innerWidth <= 1024) closeSidebar();
}

function positionSidebarCloseBtn() {
  if (!sidebarCloseBtn) return;
  const sidebarRect = sidebar.getBoundingClientRect();
  sidebarCloseBtn.style.left = (sidebarRect.width + 16) + 'px';
}

window.openSidebar        = openSidebar;
window.closeSidebar       = closeSidebar;
window.closeSidebarMobile = closeSidebarMobile;

if (sidebarCloseBtn) {
  sidebarCloseBtn.addEventListener('click', closeSidebar);
}

/* Mobile search */
function openMobileSearch() {
  mobileSearchPanel.classList.add('open');
  overlay.classList.add('open');
  header.classList.add('header-panel-open');
  if (mobileSearchCloseBtn) mobileSearchCloseBtn.classList.add('visible');
  activePanelType = 'mobileSearch';
  setTimeout(() => mobileSearchInput.focus(), 50);
}

function closeMobileSearch() {
  mobileSearchPanel.classList.remove('open');
  overlay.classList.remove('open');
  header.classList.remove('header-panel-open');
  if (mobileSearchCloseBtn) mobileSearchCloseBtn.classList.remove('visible');
  mobileSearchInput.value = '';
  mobileSearchResults.innerHTML = '';
  activePanelType = null;
}

window.openMobileSearch  = openMobileSearch;
window.closeMobileSearch = closeMobileSearch;

if (mobileSearchCloseBtn) {
  mobileSearchCloseBtn.addEventListener('click', closeMobileSearch);
}

/* Mobile TOC */
function openMobileToc() {
  if (window.innerWidth <= 1024) {
    sidebar.classList.remove('open');
    if (sidebarCloseBtn) sidebarCloseBtn.classList.remove('visible');
  }
  const desktopToc = document.getElementById('tocList');
  if (mobileTocList && desktopToc) {
    mobileTocList.innerHTML = desktopToc.innerHTML;
    mobileTocList.querySelectorAll('.toc-link').forEach(link => {
      link.addEventListener('click', () => setTimeout(() => closeMobileToc(), 50));
    });
  }
  mobileTocPanel.classList.add('open');
  overlay.classList.add('open');
  header.classList.add('header-panel-open');
  if (mobileTocCloseBtn) mobileTocCloseBtn.classList.add('visible');
  activePanelType = 'mobileToc';
}

function closeMobileToc() {
  mobileTocPanel.classList.remove('open');
  overlay.classList.remove('open');
  header.classList.remove('header-panel-open');
  if (mobileTocCloseBtn) mobileTocCloseBtn.classList.remove('visible');
  activePanelType = null;
}

window.openMobileToc  = openMobileToc;
window.closeMobileToc = closeMobileToc;

if (mobileTocCloseBtn) {
  mobileTocCloseBtn.addEventListener('click', closeMobileToc);
}

/* Close all panels */
function closeAll() {
  if (activePanelType === 'sidebar') closeSidebar();
  else if (activePanelType === 'mobileSearch') closeMobileSearch();
  else if (activePanelType === 'mobileToc') closeMobileToc();
  else { closeSidebar(); closeMobileSearch(); closeMobileToc(); }
}
window.closeAll = closeAll;
overlay.addEventListener('click', closeAll);

  /* Desktop search */
  function renderDesktopResults(results) {
  if (results.length === 0) {
    searchDropdown.innerHTML = '<div class="search-empty">No results found</div>';
  } else {
    searchDropdown.innerHTML = results.map(p => `
      <div class="search-result-item" onclick="navigateTo('${escapeAttr(p.id)}')">
        <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          <path d="M14 2v6h6"/>
        </svg>
        ${escapeHtml(p.title)}
        <span class="search-result-path">${escapeHtml(p.path)}</span>
      </div>
    `).join('');
  }
  searchDropdown.classList.add('open');
}

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { searchDropdown.classList.remove('open'); return; }
  renderDesktopResults(pages.filter(p =>
    p.title.toLowerCase().includes(q) || p.path.toLowerCase().includes(q)
  ));
});

searchInput.addEventListener('focus', () => {
  if (searchInput.value.trim()) searchDropdown.classList.add('open');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-wrap') && !e.target.closest('#searchDropdown')) {
    searchDropdown.classList.remove('open');
  }
});

/* Mobile search results */
function renderMobileResults(results) {
  if (results.length === 0) {
    mobileSearchResults.innerHTML = '<div class="mobile-search-empty">No results found</div>';
  } else {
    mobileSearchResults.innerHTML = results.map(p => `
      <div class="mobile-result-item" onclick="navigateTo('${escapeAttr(p.id)}'); closeMobileSearch();">
        <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          <path d="M14 2v6h6"/>
        </svg>
        ${escapeHtml(p.title)}
        <span class="mobile-result-path">${escapeHtml(p.path)}</span>
      </div>
    `).join('');
  }
}

mobileSearchInput.addEventListener('input', () => {
  const q = mobileSearchInput.value.trim().toLowerCase();
  if (!q) { mobileSearchResults.innerHTML = ''; return; }
  renderMobileResults(pages.filter(p =>
    p.title.toLowerCase().includes(q) || p.path.toLowerCase().includes(q)
  ));
});

/* Collapsible sub-menus */
function toggleSub(id, link, e) {
  e.preventDefault();
  const sub     = document.getElementById(id);
  const chevron = link.querySelector('.nav-chevron');
  const isOpen  = sub.classList.toggle('open');
  if (chevron) chevron.classList.toggle('open', isOpen);
}
window.toggleSub = toggleSub;

/* Active nav link */
function setActive(el) {
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  el.classList.add('active');
}
window.setActive = setActive;

/* TOC scroll spy */
let tocSections = [];

function rebuildTocSpy() {
  const tocLinks = document.querySelectorAll('.toc-link[data-section]');
  tocSections = Array.from(tocLinks).map(link => ({
    sectionId: link.dataset.section,
    tocLink: link
  })).filter(s => document.getElementById(s.sectionId));
}

function updateTocActiveState() {
  if (!tocSections.length) return;
  const headerH   = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 56;
  const topOffset = window.scrollY + headerH + 24;
  let current = tocSections[0];
  for (const s of tocSections) {
    const el = document.getElementById(s.sectionId);
    if (el && el.offsetTop <= topOffset) current = s;
  }
  tocSections.forEach(s => s.tocLink.classList.remove('active'));
  if (current) current.tocLink.classList.add('active');
}

window.addEventListener('scroll', updateTocActiveState, { passive: true });

/* Page navigation */
function navigateTo(pageId) {
  const data = window.CONTENT && window.CONTENT[pageId];
  if (!data) { console.warn('No content for page:', pageId); return; }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Reset nav state
  document.querySelectorAll('.nav-link[data-page]').forEach(link => link.classList.remove('active'));
  document.querySelectorAll('.nav-sub').forEach(sub => sub.classList.remove('open'));
  document.querySelectorAll('.nav-chevron').forEach(ch => ch.classList.remove('open'));

  // Activate current link
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.dataset.page === pageId) {
      link.classList.add('active');
      const sub = link.closest('.nav-sub');
      if (sub) {
        sub.classList.add('open');
        const parent = sub.previousElementSibling;
        if (parent) {
          const chevron = parent.querySelector('.nav-chevron');
          if (chevron) chevron.classList.add('open');
        }
      }
    }
  });

  // Breadcrumb
  document.getElementById('breadcrumb').innerHTML = data.breadcrumb.map((crumb, i) =>
    i < data.breadcrumb.length - 1
      ? `<span>${escapeHtml(crumb)}</span>
         <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="20" height="20"><path d="M9 18l6-6-6-6"/></svg>`
      : `<span>${escapeHtml(crumb)}</span>`
  ).join('');

  document.getElementById('pageTitle').textContent  = data.title;
  document.getElementById('pageSubtitle').innerHTML = data.subtitle;
  document.getElementById('sections').innerHTML     = data.sections.map(sec => renderSection(sec)).join('');

  // TOC
  document.getElementById('tocList').innerHTML = data.toc.map((item, i) =>
    `<li><a href="#${item.id}" class="toc-link${i === 0 ? ' active' : ''}" data-section="${item.id}">${escapeHtml(item.label)}</a></li>`
  ).join('');

  document.getElementById('pagination').innerHTML = renderPagination(data.pagination);

  rebuildTocSpy();
  updateTocActiveState();
  history.pushState({ page: pageId }, data.title, '#' + pageId);
}

function renderSection(sec) {
  let html = `<h2 class="section-heading" id="${sec.id}">${escapeHtml(sec.heading)}</h2>`;
  if (sec.body) html += `<div class="section-body">${sec.body}</div>`;
  if (sec.table) {
    html += `<table class="settings-table">
      <thead><tr>${sec.table.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}</tr></thead>
      <tbody>${sec.table.rows.map(row =>
        `<tr>${row.map((cell, i) =>
          i === 0
            ? `<td><span class="tag">${escapeHtml(cell)}</span></td>`
            : `<td>${escapeHtml(cell)}</td>`
        ).join('')}</tr>`
      ).join('')}</tbody>
    </table>`;
  }
  return html;
}

function renderPagination(pag) {
  const prev = pag.prev
    ? `<button class="pag-btn prev" onclick="navigateTo('${escapeAttr(pag.prev.id)}')">
        <span class="pag-icon">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </span>
        <span class="pag-text">
          <span class="pag-label">Previous</span>
          <span class="pag-name">${escapeHtml(pag.prev.label)}</span>
        </span>
      </button>`
    : `<div class="pag-placeholder"></div>`;

  const next = pag.next
    ? `<button class="pag-btn next" onclick="navigateTo('${escapeAttr(pag.next.id)}')">
        <span class="pag-text">
          <span class="pag-label">Next</span>
          <span class="pag-name">${escapeHtml(pag.next.label)}</span>
        </span>
        <span class="pag-icon">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </span>
      </button>`
    : `<div class="pag-placeholder"></div>`;

  return prev + next;
}

/* Keyboard shortcuts */
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    if (window.innerWidth > 1024) {
      searchInput.focus();
      searchInput.select();
    } else if (activePanelType !== 'mobileSearch') {
      openMobileSearch();
    }
  }
  if (e.key === 'Escape') {
    searchDropdown.classList.remove('open');
    searchInput.blur();
    closeAll();
  }
});

/* Init */
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  const startPage = (hash && window.CONTENT && window.CONTENT[hash]) ? hash : 'welcome';
  navigateTo(startPage);
});

window.addEventListener('popstate', (e) => {
  if (e.state && e.state.page) navigateTo(e.state.page);
});

/* Utilities */
function escapeAttr(str) {
  return String(str).replace(/&/g, '&amp;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
}

function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}