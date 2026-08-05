/* ─── Hemsworth Architecture — About Page ──────────────────────── */

(function () {

  const btn     = document.getElementById('hamburger-btn');
  const nav     = document.getElementById('hamburger-nav');
  const sidebar = document.getElementById('sidebar');

  function setOpen (isOpen) {
    btn.classList.toggle('open', isOpen);
    nav.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    nav.setAttribute('aria-hidden', !isOpen);
    // Mobile: toggle sidebar class so #mobile-nav appears in flow
    if (sidebar) sidebar.classList.toggle('menu-open', isOpen);
  }

  btn.addEventListener('click', function () {
    setOpen(!btn.classList.contains('open'));
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!document.getElementById('hamburger').contains(e.target)) {
      setOpen(false);
    }
  });

})();

// ── Sub-nav expand/collapse ────────────────────────────────────────
(function () {

  var subNav = document.querySelector('#site-nav .sub-nav');
  if (!subNav) return;

  // Walk siblings of the sub-nav to find the Projects <a> link
  var projectsLink = null;
  var parent = subNav.parentElement;
  if (!parent) return;
  for (var i = 0; i < parent.children.length; i++) {
    var child = parent.children[i];
    if (child.tagName === 'A' && child.classList.contains('site-link')) {
      projectsLink = child;
      break;
    }
  }
  if (!projectsLink) return;

  // Auto-expand on project detail pages (identified by #nav-prev presence)
  // and whenever a ?cat= filter context is carried in the URL
  var cat = new URLSearchParams(window.location.search).get('cat');
  var onProjectDetailPage = !!document.getElementById('nav-prev');
  if (cat || onProjectDetailPage) {
    subNav.classList.add('expanded');
  }

  // Highlight the active cat-link when a category context is present
  if (cat) {
    var catLinks = subNav.querySelectorAll('.cat-link');
    for (var j = 0; j < catLinks.length; j++) {
      catLinks[j].classList.toggle('active', catLinks[j].dataset.cat === cat);
    }
  }

  // Indicator: reflect the initial state (expanded or collapsed)
  var indicator = document.createElement('span');
  indicator.className = 'subnav-indicator';
  indicator.textContent = subNav.classList.contains('expanded') ? '−' : '+';
  projectsLink.appendChild(indicator);

  // Clicking PROJECTS always toggles the sub-nav; never navigates
  projectsLink.addEventListener('click', function (e) {
    e.preventDefault();
    var isExpanded = subNav.classList.toggle('expanded');
    indicator.textContent = isExpanded ? '−' : '+';
  });

})();
