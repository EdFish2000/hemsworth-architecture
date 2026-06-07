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
  if (!subNav || subNav.classList.contains('expanded')) return;

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

  // Indicator lives inside the link so the whole "PROJECTS +" area is one click target
  var indicator = document.createElement('span');
  indicator.className = 'subnav-indicator';
  indicator.textContent = '+';
  projectsLink.appendChild(indicator);

  // Clicking PROJECTS toggles the sub-nav; never navigates on non-projects pages
  projectsLink.addEventListener('click', function (e) {
    e.preventDefault();
    var isExpanded = subNav.classList.toggle('expanded');
    indicator.textContent = isExpanded ? '−' : '+';
  });

})();
