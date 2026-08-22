(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = document.querySelector('.hero-scroll');
  const cards = Array.from(document.querySelectorAll('.hero-card'));
  const topbar = document.querySelector('.topbar');
  const revealEls = document.querySelectorAll('.reveal:not(.is-visible)');

  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  if (reduceMotion || !hero || cards.length === 0) return;

  let ticking = false;
  const update = () => {
    const rect = hero.getBoundingClientRect();
    const travel = Math.max(hero.offsetHeight - window.innerHeight, 1);
    const passed = Math.min(Math.max(-rect.top, 0), travel);
    const progress = passed / travel;

    cards.forEach((card, index) => {
      const speed = Number(card.dataset.speed || 1);
      const tilt = Number(card.dataset.tilt || 0);
      const direction = index % 2 === 0 ? -1 : 1;
      const y = (progress - 0.22) * -150 * speed;
      const x = progress * 16 * direction * speed;
      const rotate = tilt + progress * direction * 1.6;
      card.style.setProperty('--scroll-y', `${y.toFixed(2)}px`);
      card.style.setProperty('--tilt', `${rotate.toFixed(2)}deg`);
      card.style.marginLeft = `${x.toFixed(2)}px`;
    });

    if (topbar) topbar.classList.toggle('is-scrolled', window.scrollY > 24);
    ticking = false;
  };

  const requestUpdate = () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  update();
})();
