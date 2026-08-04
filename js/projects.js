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

  if (cards.length > 0) {
    catLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        // Update active state — re-query live DOM to guarantee stale refs don't persist
        document.querySelectorAll('.cat-link').forEach(function (l) {
          l.classList.remove('active');
        });
        link.classList.add('active');

        const selected = link.dataset.cat;

        cards.forEach(function (card) {
          const cats = (card.dataset.cat || '').split(' ');
          if (selected === 'all' || cats.includes(selected)) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

})();
