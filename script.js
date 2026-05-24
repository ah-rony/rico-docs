/* ═══════════════════════════════════════════════════════════
   script.js — Rico Documentation Interactivity
   ═══════════════════════════════════════════════════════════ */


/* ─── 1. DOM REFERENCES ─── */
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

let activePanelType = null;


/* ─── 2. SEARCH DATA ─── */
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
  { title: 'User onboarding',               path: 'Global Sections',                      id: 'user-onboarding' },
];


/* ════════════════════════════════════════
   3. SIDEBAR OPEN / CLOSE
   ════════════════════════════════════════ */
function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('open');
  header.classList.add('header-panel-open');
  if (sidebarCloseBtn) sidebarCloseBtn.classList.add('visible');
  // Position sidebar X button right after the sidebar
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
  if (window.innerWidth <= 900) closeSidebar();
}

/**
 * Position the sidebar X close button just to the right of the sidebar panel.
 */
// function positionSidebarCloseBtn() {
//   if (!sidebarCloseBtn) return;
//   const sidebarW = sidebar.getBoundingClientRect().width;
//   sidebarCloseBtn.style.left = sidebarW + 'px';
// }

function positionSidebarCloseBtn() {
  if (!sidebarCloseBtn) return;

  const sidebarRect = sidebar.getBoundingClientRect();

  sidebarCloseBtn.style.left = (sidebarRect.width + 16) + 'px';
}

window.openSidebar        = openSidebar;
window.closeSidebar       = closeSidebar;
window.closeSidebarMobile = closeSidebarMobile;

// Sidebar close button click
if (sidebarCloseBtn) {
  sidebarCloseBtn.addEventListener('click', closeSidebar);
}


/* ════════════════════════════════════════
   4. MOBILE SEARCH
   ════════════════════════════════════════ */
// function openMobileSearch() {
//   mobileSearchPanel.classList.add('open');
//   overlay.classList.add('open');
//   header.classList.add('header-panel-open');
//   activePanelType = 'mobileSearch';
//   setTimeout(() => mobileSearchInput.focus(), 50);
// }

// function closeMobileSearch() {
//   mobileSearchPanel.classList.remove('open');
//   overlay.classList.remove('open');
//   header.classList.remove('header-panel-open');
//   mobileSearchInput.value = '';
//   mobileSearchResults.innerHTML = '';
//   activePanelType = null;
// }
function openMobileSearch() {
  mobileSearchPanel.classList.add('open');
  overlay.classList.add('open');
  header.classList.add('header-panel-open');

  activePanelType = 'mobileSearch';

  if (mobileSearchCloseBtn) {
    mobileSearchCloseBtn.classList.add('visible');
  }

  setTimeout(() => mobileSearchInput.focus(), 50);
}function closeMobileSearch() {
  mobileSearchPanel.classList.remove('open');
  overlay.classList.remove('open');
  header.classList.remove('header-panel-open');

  if (mobileSearchCloseBtn) {
    mobileSearchCloseBtn.classList.remove('visible');
  }

  mobileSearchInput.value = '';
  mobileSearchResults.innerHTML = '';
  activePanelType = null;
}

window.openMobileSearch  = openMobileSearch;
window.closeMobileSearch = closeMobileSearch;

function positionMobileSearchCloseBtn() {
  if (!mobileSearchCloseBtn) return;

  const rect = mobileSearchPanel.getBoundingClientRect();

  mobileSearchCloseBtn.style.left = (rect.width + 16) + 'px';
}

if (mobileSearchCloseBtn) {
  mobileSearchCloseBtn.addEventListener('click', closeMobileSearch);
}
/* ════════════════════════════════════════
   5. CLOSE ALL
   ════════════════════════════════════════ */
function closeAll() {
  if (activePanelType === 'sidebar') {
    closeSidebar();
  } else if (activePanelType === 'mobileSearch') {
    closeMobileSearch();
  } else {
    closeSidebar();
    closeMobileSearch();
  }
}
window.closeAll = closeAll;
overlay.addEventListener('click', closeAll);


/* ════════════════════════════════════════
   6. DESKTOP SEARCH
   ════════════════════════════════════════ */
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
  const matches = pages.filter(p =>
    p.title.toLowerCase().includes(q) || p.path.toLowerCase().includes(q)
  );
  renderDesktopResults(matches);
});

searchInput.addEventListener('focus', () => {
  if (searchInput.value.trim()) searchDropdown.classList.add('open');
});

function selectDesktopResult(id) {
  searchDropdown.classList.remove('open');
  searchInput.value = '';
  searchInput.blur();
  navigateTo(id);
}
window.selectDesktopResult = selectDesktopResult;

document.addEventListener('click', (e) => {
  const inside = e.target.closest('.search-wrap') || e.target.closest('#searchDropdown');
  if (!inside) searchDropdown.classList.remove('open');
});


/* ════════════════════════════════════════
   7. MOBILE SEARCH
   ════════════════════════════════════════ */
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
  const matches = pages.filter(p =>
    p.title.toLowerCase().includes(q) || p.path.toLowerCase().includes(q)
  );
  renderMobileResults(matches);
});


/* ════════════════════════════════════════
   8. NAV: COLLAPSIBLE SUB-MENUS
   ════════════════════════════════════════ */
function toggleSub(id, link, e) {
  e.preventDefault();
  const sub     = document.getElementById(id);
  const chevron = link.querySelector('.nav-chevron');
  const isOpen  = sub.classList.toggle('open');
  if (chevron) chevron.classList.toggle('open', isOpen);
}
window.toggleSub = toggleSub;


/* ════════════════════════════════════════
   9. NAV: ACTIVE LINK STATE
   ════════════════════════════════════════ */
// function setActive(el) {
//   document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
//   el.classList.add('active');
//   const parentSub = el.closest('.nav-sub');
//   if (parentSub) {
//     const parentLink = parentSub.previousElementSibling;
//     if (parentLink && parentLink.classList.contains('nav-link')) {
//       parentLink.classList.add('active');
//     }
//   }
// }
function setActive(el) {

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  el.classList.add('active');
}
window.setActive = setActive;


/* ════════════════════════════════════════
   10. TOC: SCROLL SPY
   ════════════════════════════════════════ */
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
  const scrollY   = window.scrollY;
  const headerH   = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 56;
  const topOffset = scrollY + headerH + 24;

  let current = tocSections[0];
  for (const s of tocSections) {
    const el = document.getElementById(s.sectionId);
    if (el && el.offsetTop <= topOffset) current = s;
  }

  tocSections.forEach(s => s.tocLink.classList.remove('active'));
  if (current) current.tocLink.classList.add('active');
}

window.addEventListener('scroll', updateTocActiveState, { passive: true });


/* ════════════════════════════════════════
   11. CONTENT RENDERING
   ════════════════════════════════════════ */

/**
 * navigateTo(pageId)
 * Loads content for the given page ID and re-renders the main area.
 */
function navigateTo(pageId) {
  const data = window.CONTENT && window.CONTENT[pageId];
  if (!data) {
    console.warn('No content for page:', pageId);
    return;
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update active nav link
  const navLinks = document.querySelectorAll('.nav-link[data-page]');
  // navLinks.forEach(link => {
  //   link.classList.remove('active');
  //   if (link.dataset.page === pageId) {
  //     link.classList.add('active');
  //     // Open parent sub if needed
  //     const sub = link.closest('.nav-sub');
  //     if (sub) {
  //       sub.classList.add('open');
  //       const parent = sub.previousElementSibling;
  //       if (parent) {
  //         parent.classList.add('active');
  //         const chevron = parent.querySelector('.nav-chevron');
  //         if (chevron) chevron.classList.add('open');
  //       }
  //     }
  //   }
  // });
// Reset all active states
navLinks.forEach(link => {
  link.classList.remove('active');
});

// Reset all submenu + chevrons
document.querySelectorAll('.nav-sub').forEach(sub => {
  sub.classList.remove('open');
});

document.querySelectorAll('.nav-chevron').forEach(ch => {
  ch.classList.remove('open');
});

// Activate current page
navLinks.forEach(link => {

  if (link.dataset.page === pageId) {

    link.classList.add('active');

    const sub = link.closest('.nav-sub');

    if (sub) {

      sub.classList.add('open');

      const parent = sub.previousElementSibling;

      if (parent) {

        const chevron = parent.querySelector('.nav-chevron');

        if (chevron) {
          chevron.classList.add('open');
        }
      }
    }
  }
});
  // Render breadcrumb
  const breadcrumbEl = document.getElementById('breadcrumb');
  breadcrumbEl.innerHTML = data.breadcrumb.map((crumb, i) =>
    i < data.breadcrumb.length - 1
      ? `<span>${escapeHtml(crumb)}</span>
         <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="20" height="20"><path d="M9 18l6-6-6-6"/></svg>`
      : `<span>${escapeHtml(crumb)}</span>`
  ).join('');

  // Render page title & subtitle
  document.getElementById('pageTitle').textContent    = data.title;
  document.getElementById('pageSubtitle').innerHTML   = data.subtitle;

  // Render sections
  const sectionsEl = document.getElementById('sections');
  sectionsEl.innerHTML = data.sections.map(sec => renderSection(sec)).join('');

  // Render TOC
  const tocList = document.getElementById('tocList');
  tocList.innerHTML = data.toc.map((item, i) =>
    `<li><a href="#${item.id}" class="toc-link${i === 0 ? ' active' : ''}" data-section="${item.id}">${escapeHtml(item.label)}</a></li>`
  ).join('');

  // Render pagination
  const paginationEl = document.getElementById('pagination');
  paginationEl.innerHTML = renderPagination(data.pagination);

  // Rebuild TOC spy
  rebuildTocSpy();
  updateTocActiveState();

  // Update URL hash without reload (for bookmarkability)
  history.pushState({ page: pageId }, data.title, '#' + pageId);
}

/**
 * Render a single section block
 */
function renderSection(sec) {
  let html = `<h2 class="section-heading" id="${sec.id}">${escapeHtml(sec.heading)}</h2>`;

  if (sec.body) {
    html += `<p class="section-body">${sec.body}</p>`;
  }

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

/**
 * Render pagination buttons
 */
// function renderPagination(pag) {
//   const prev = pag.prev
//     ? `<button class="pag-btn prev" onclick="navigateTo('${escapeAttr(pag.prev.id)}')">
//          <span class="pag-label">
//            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
//            Previous
//          </span>
//          <span class="pag-name">${escapeHtml(pag.prev.label)}</span>
//        </button>`
//     : `<div class="pag-placeholder"></div>`;

//   const next = pag.next
//     ? `<button class="pag-btn next" onclick="navigateTo('${escapeAttr(pag.next.id)}')">
//          <span class="pag-label">
//            Next
//            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
//          </span>
//          <span class="pag-name">${escapeHtml(pag.next.label)}</span>
//        </button>`
//     : `<div class="pag-placeholder"></div>`;

//   return prev + next;
// }



function renderPagination(pag) {
  const prev = pag.prev
    ? `
      <button class="pag-btn prev" onclick="navigateTo('${escapeAttr(pag.prev.id)}')">
        <span class="pag-icon">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </span>

        <span class="pag-text">
          <span class="pag-label">Previous</span>
          <span class="pag-name">${escapeHtml(pag.prev.label)}</span>
        </span>
      </button>
    `
    : `<div class="pag-placeholder"></div>`;

  const next = pag.next
    ? `
      <button class="pag-btn next" onclick="navigateTo('${escapeAttr(pag.next.id)}')">

        <span class="pag-text">
          <span class="pag-label">Next</span>
          <span class="pag-name">${escapeHtml(pag.next.label)}</span>
        </span>

        <span class="pag-icon">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </span>

      </button>
    `
    : `<div class="pag-placeholder"></div>`;

  return prev + next;
}

/* ════════════════════════════════════════
   12. KEYBOARD SHORTCUTS
   ════════════════════════════════════════ */
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    if (window.innerWidth > 900) {
      searchInput.focus();
      searchInput.select();
    } else {
      if (activePanelType !== 'mobileSearch') openMobileSearch();
    }
  }
  if (e.key === 'Escape') {
    searchDropdown.classList.remove('open');
    searchInput.blur();
    closeAll();
  }
});


/* ════════════════════════════════════════
   13. INIT
   ════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Load initial page from URL hash or default to localization
  const hash = window.location.hash.replace('#', '');
  const startPage = (hash && window.CONTENT && window.CONTENT[hash]) ? hash : 'localization';
  navigateTo(startPage);
});

// Handle browser back/forward
window.addEventListener('popstate', (e) => {
  if (e.state && e.state.page) navigateTo(e.state.page);
});


/* ════════════════════════════════════════
   UTILITY
   ════════════════════════════════════════ */
function escapeAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}