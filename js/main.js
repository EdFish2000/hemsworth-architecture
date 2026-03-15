/* ─── Hemsworth Architecture — Home Page ───────────────────────── */

(function () {

  // ── Slideshow ─────────────────────────────────────────────────
  const slides      = document.querySelectorAll('.slide');
  const DURATION    = 6000;   // ms each slide is visible
  let current       = 0;
  let timer         = null;
  let navigating    = false;

  function nextSlide () {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  function startSlideshow () {
    timer = setInterval(nextSlide, DURATION);
  }

  startSlideshow();

  // ── Custom cursor ─────────────────────────────────────────────
  document.addEventListener('mousemove', function (e) {
    document.documentElement.style.setProperty('--cursor-x', e.clientX + 'px');
    document.documentElement.style.setProperty('--cursor-y', e.clientY + 'px');
  });

  // ── Navigation (click or scroll → projects) ───────────────────
  const overlay = document.createElement('div');
  overlay.id    = 'transition-overlay';
  document.body.appendChild(overlay);

  function goToProjects () {
    if (navigating) return;
    navigating = true;

    clearInterval(timer);
    overlay.classList.add('fade-in');

    setTimeout(function () {
      window.location.href = 'projects.html';
    }, 1550);
  }

  // Click anywhere (except the wordmark, which has its own link)
  document.getElementById('hero').addEventListener('click', function (e) {
    if (e.target.closest('#wordmark')) return;
    goToProjects();
  });

  // First scroll (wheel or touch) triggers navigation
  window.addEventListener('wheel', function handler (e) {
    if (e.deltaY > 10) {
      window.removeEventListener('wheel', handler);
      goToProjects();
    }
  }, { passive: true });

  let touchStartY = 0;
  window.addEventListener('touchstart', function (e) {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchmove', function handler (e) {
    const delta = touchStartY - e.touches[0].clientY;
    if (delta > 30) {
      window.removeEventListener('touchmove', handler);
      goToProjects();
    }
  }, { passive: true });

})();
