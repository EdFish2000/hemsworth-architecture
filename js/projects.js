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

  var currentCat = 'all';

  function applyFilter(selected) {
    currentCat = selected;

    catLinks.forEach(function (l) {
      l.classList.toggle('active', l.dataset.cat === selected);
    });

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
      if (grid) grid.scrollTop = 0;
      window.scrollTo(0, 0);
    });
  }

  // ── Apply filter from URL on page load (cross-page navigation) ─
  var catParam = new URLSearchParams(location.search).get('cat');
  if (catParam) {
    applyFilter(catParam);
  } else {
    // Ensure 'all' is marked active on fresh load
    catLinks.forEach(function (l) {
      l.classList.toggle('active', l.dataset.cat === 'all');
    });
  }

  // ── Click handler — in-page filtering on projects.html ────────
  catLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      applyFilter(link.dataset.cat);
    });
  });

  // ── Card clicks — carry category context to project pages ─────
  // When a specific filter is active, append ?cat=<filter> to the
  // destination URL so the project page knows which sequence to use
  // for Prev/Next navigation.
  document.querySelectorAll('.card-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (currentCat !== 'all') {
        e.preventDefault();
        window.location.href = link.getAttribute('href') + '?cat=' + currentCat;
      }
    });
  });

})();
