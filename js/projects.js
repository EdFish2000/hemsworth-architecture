/* ─── Hemsworth Architecture — Projects Page ────────────────────── */

(function () {

  // ── Page entrance fade-in ─────────────────────────────────────
  const overlay = document.getElementById('page-overlay');
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      overlay.classList.add('cleared');
    });
  });

  // ── Category filtering ────────────────────────────────────────
  const catLinks = document.querySelectorAll('.cat-link');
  const cards    = document.querySelectorAll('.project-card');

  catLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      // Update active state
      catLinks.forEach(function (l) { l.classList.remove('active'); });
      link.classList.add('active');

      const selected = link.dataset.cat;

      cards.forEach(function (card) {
        if (selected === 'all' || card.dataset.cat === selected) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

})();
