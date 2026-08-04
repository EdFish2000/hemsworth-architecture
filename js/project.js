/* ─── Hemsworth Architecture — Project Detail Page ─────────────── */

// ── Project registry (matches projects.html grid order) ───────────
var PROJECTS = [
  { slug: 'upper-skeena-rec-centre',            cats: ['first-nations','mass-timber','public'] },
  { slug: 'leon-lebeniste',                     cats: ['mass-timber','industrial'] },
  { slug: 'bc-passive-house-factory',           cats: ['mass-timber','industrial'] },
  { slug: '1-lonsdale',                         cats: ['mass-timber','public'] },
  { slug: 'ajax-mass-timber-warehouse',         cats: ['mass-timber','industrial'] },
  { slug: 'indigenous-aquatic-research-centre', cats: ['first-nations','mass-timber','public','education'] },
  { slug: 'whistler-museum-and-archives',       cats: ['mass-timber','public','education'] },
  { slug: 'bc-passive-house-factory-addition',  cats: ['mass-timber','industrial'] },
  { slug: 'fleetwood-park-secondary-school',    cats: ['public','education'] },
  { slug: 'new-hazelton-municipal-hall',        cats: ['mass-timber','public'] },
  { slug: 'wedge-lane',                         cats: [] },
  { slug: 'morgan-elementary-school',           cats: ['public','education'] },
  { slug: 'whistler-skiers-chapel',             cats: ['mass-timber','public'] },
  { slug: 'listen-stanley-park',                cats: [] },
];

// ── Prev/Next navigation (category-aware) ─────────────────────────
// Runs immediately — independent of gallery initialisation so any
// gallery error cannot prevent navigation links from being set up.
(function buildProjectNav() {
  var prevEl = document.getElementById('nav-prev');
  var allEl  = document.getElementById('nav-all');
  var nextEl = document.getElementById('nav-next');
  if (!prevEl || !allEl || !nextEl) return;

  // Derive slug from current filename
  var parts = window.location.pathname.split('/');
  var currentSlug = parts[parts.length - 1].replace('.html', '');

  // Category context — default to 'all' if absent or unrecognised
  var cat = new URLSearchParams(window.location.search).get('cat') || 'all';
  var validCats = ['all', 'mass-timber', 'industrial', 'public', 'education', 'first-nations'];
  if (validCats.indexOf(cat) === -1) cat = 'all';

  // Filter to the active category subset
  var subset = PROJECTS.filter(function (p) {
    return cat === 'all' || p.cats.indexOf(cat) !== -1;
  });

  // Find current index in subset
  var idx = -1;
  for (var i = 0; i < subset.length; i++) {
    if (subset[i].slug === currentSlug) { idx = i; break; }
  }
  if (idx === -1 || subset.length < 2) return;

  var len      = subset.length;
  var prevSlug = subset[(idx - 1 + len) % len].slug;
  var nextSlug = subset[(idx + 1) % len].slug;
  var suffix   = cat !== 'all' ? '?cat=' + cat : '';

  prevEl.setAttribute('href', '../projects/' + prevSlug + '.html' + suffix);
  allEl.setAttribute('href',  '../projects.html' + suffix);
  nextEl.setAttribute('href', '../projects/' + nextSlug + '.html' + suffix);
}());

(function () {

  // ── Desktop gallery ───────────────────────────────────────────
  const slides = Array.from(document.querySelectorAll('.gallery-slide'));
  const total  = slides.length;
  let current  = 0;

  // Build dot indicators
  const dotsContainer = document.getElementById('gallery-dots');
  slides.forEach(function (_, i) {
    const dot = document.createElement('div');
    dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(dotsContainer.children);

  function goTo (index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + total) % total;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  document.getElementById('zone-next').addEventListener('click', function () {
    goTo(current + 1);
  });

  document.getElementById('zone-prev').addEventListener('click', function () {
    goTo(current - 1);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') goTo(current + 1);
    if (e.key === 'ArrowLeft')  goTo(current - 1);
  });

  let touchStartX = 0;
  document.getElementById('gallery').addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  document.getElementById('gallery').addEventListener('touchend', function (e) {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) goTo(delta > 0 ? current + 1 : current - 1);
  }, { passive: true });


  // ── Mobile layout restructure ─────────────────────────────────
  if (!window.matchMedia('(max-width: 640px)').matches) return;

  const main      = document.getElementById('project-main');
  const gallery   = document.getElementById('gallery');
  const info      = document.getElementById('project-info');
  const facts     = document.getElementById('project-facts');
  const desc      = document.getElementById('project-description');
  const backLink  = document.getElementById('back-link');

  // Helper: create a static slide div — supports both background-image and <img> slides
  function makeStaticSlide (sourceSlide) {
    const div = document.createElement('div');
    div.className = 'mobile-slide';
    const img = sourceSlide.querySelector('img');
    if (img) {
      div.appendChild(img.cloneNode(true));
    } else {
      div.setAttribute('style', sourceSlide.getAttribute('style'));
    }
    return div;
  }

  // 1. First image
  const mobileHero = document.createElement('div');
  mobileHero.id = 'mobile-hero';
  mobileHero.appendChild(makeStaticSlide(slides[0]));

  // 2. Title + year
  const titleBar   = document.createElement('div');
  titleBar.id      = 'mobile-title-bar';
  const titleClone = document.querySelector('.project-title').cloneNode(true);

  let yearText = '';
  facts.querySelectorAll('.fact-row').forEach(function (row) {
    if (row.querySelector('dt').textContent.trim() === 'Year') {
      yearText = row.querySelector('dd').textContent.trim();
    }
  });
  const yearEl      = document.createElement('p');
  yearEl.className  = 'mobile-year';
  yearEl.textContent = yearText;

  titleBar.appendChild(titleClone);
  titleBar.appendChild(yearEl);

  // 3. Written description
  const mobileDesc    = desc.querySelector('.description-body').cloneNode(true);
  mobileDesc.id       = 'mobile-description-body';

  // 4. Remaining images stacked
  const mobileRest    = document.createElement('div');
  mobileRest.id       = 'mobile-rest-images';
  slides.slice(1).forEach(function (s) {
    mobileRest.appendChild(makeStaticSlide(s));
  });

  // 5. Project facts
  const mobileFacts   = facts.cloneNode(true);
  mobileFacts.id      = 'mobile-facts-section';

  // Hide desktop sections
  gallery.style.display = 'none';
  info.style.display    = 'none';

  // Inject before back-link
  [mobileHero, titleBar, mobileDesc, mobileRest, mobileFacts].forEach(function (el) {
    main.insertBefore(el, backLink);
  });

})();
