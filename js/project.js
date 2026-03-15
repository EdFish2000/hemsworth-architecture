/* ─── Hemsworth Architecture — Project Detail Page ─────────────── */

(function () {

  // ── Desktop gallery ───────────────────────────────────────────
  const slides         = Array.from(document.querySelectorAll('.gallery-slide'));
  const total          = slides.length;
  const counterCurrent = document.getElementById('counter-current');
  let current          = 0;

  function goTo (index) {
    slides[current].classList.remove('active');
    current = (index + total) % total;
    slides[current].classList.add('active');
    counterCurrent.textContent = current + 1;
  }

  document.getElementById('arrow-next').addEventListener('click', function () {
    goTo(current + 1);
  });

  document.getElementById('arrow-prev').addEventListener('click', function () {
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

  // Helper: create a static slide div from an existing slide's background style
  function makeStaticSlide (sourceSlide) {
    const div = document.createElement('div');
    div.className = 'mobile-slide';
    div.setAttribute('style', sourceSlide.getAttribute('style'));
    return div;
  }

  // 1. First image
  const mobileHero = document.createElement('div');
  mobileHero.id = 'mobile-hero';
  mobileHero.appendChild(makeStaticSlide(slides[0]));

  // 2. Title + year
  const titleBar   = document.createElement('div');
  titleBar.id      = 'mobile-title-bar';
  const titleClone = desc.querySelector('.project-title').cloneNode(true);

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
