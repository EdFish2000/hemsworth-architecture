/* ─── Hemsworth Architecture — Project Detail Page ─────────────── */

(function () {

  const slides  = document.querySelectorAll('.gallery-slide');
  const total   = slides.length;
  const counterCurrent = document.getElementById('counter-current');
  let current   = 0;

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

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') goTo(current + 1);
    if (e.key === 'ArrowLeft')  goTo(current - 1);
  });

  // Touch / swipe
  let touchStartX = 0;

  document.getElementById('gallery').addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  document.getElementById('gallery').addEventListener('touchend', function (e) {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      goTo(delta > 0 ? current + 1 : current - 1);
    }
  }, { passive: true });

})();
