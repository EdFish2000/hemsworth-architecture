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

  if (cards.length === 0) return;

  function applyFilter(selected) {
    // Active state — match by data-cat value
    catLinks.forEach(function (l) {
      l.classList.toggle('active', l.dataset.cat === selected);
    });

    // Show / hide cards
    cards.forEach(function (card) {
      const cats = (card.dataset.cat || '').split(' ');
      if (selected === 'all' || cats.includes(selected)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });

    // Scroll to top — defer one frame so display:none layout changes are committed first
    requestAnimationFrame(function () {
      var grid = document.getElementById('project-grid');
      if (grid) grid.scrollTop = 0; // desktop: grid is the scroll container
      window.scrollTo(0, 0);        // mobile: html/body scrolls
    });
  }

  // ── Apply filter from URL on page load (cross-page navigation) ─
  var catParam = new URLSearchParams(location.search).get('cat');
  if (catParam) {
    applyFilter(catParam);
  }

  // ── Click handler — in-page filtering on projects.html ────────
  catLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      applyFilter(link.dataset.cat);
    });
  });

})();
