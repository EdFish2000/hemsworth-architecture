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
