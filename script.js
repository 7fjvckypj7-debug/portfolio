const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach((element) => revealObserver.observe(element));

const heroVisual = document.querySelector('.hero-visual');

const applyParallax = () => {
  if (!heroVisual) return;
  const offset = Math.min(window.scrollY * 0.03, 18);
  heroVisual.style.setProperty('--parallax', `${offset}px`);
};

window.addEventListener('scroll', () => {
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(applyParallax);
  } else {
    applyParallax();
  }
}, { passive: true });

applyParallax();
``