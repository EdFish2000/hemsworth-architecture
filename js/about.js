/* ─── Hemsworth Architecture — About Page ──────────────────────── */

(function () {

  const btn = document.getElementById('hamburger-btn');
  const nav = document.getElementById('hamburger-nav');

  btn.addEventListener('click', function () {
    const isOpen = btn.classList.toggle('open');
    nav.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    nav.setAttribute('aria-hidden', !isOpen);
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!document.getElementById('hamburger').contains(e.target)) {
      btn.classList.remove('open');
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', false);
      nav.setAttribute('aria-hidden', true);
    }
  });

})();
