(function () {
  // Guarded GSAP animations
  function initAnimations() {
    if (!window.gsap) return;
    gsap.from('.tile', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.bento',
        start: 'top 80%'
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }
})();