(() => {
  const STYLE_HREF = './v03.css';
  if (!document.querySelector('link[data-portfolio-v03]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = STYLE_HREF;
    link.dataset.portfolioV03 = 'true';
    document.head.appendChild(link);
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = document.querySelector('.hero-scroll');
  const visuals = document.querySelector('.hero-visuals');
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

  const updateTopbar = () => {
    if (topbar) topbar.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  if (reduceMotion || !hero || cards.length === 0) {
    updateTopbar();
    window.addEventListener('scroll', updateTopbar, { passive: true });
    return;
  }

  const clamp01 = (value) => Math.min(Math.max(value, 0), 1);
  const smoothstep = (value) => {
    const t = clamp01(value);
    return t * t * (3 - 2 * t);
  };

  const profiles = [
    { x: -42, y: -122, rotate: -2.4, scale: 0.955, opacity: 0.82 },
    { x: 34,  y: -215, rotate:  3.0, scale: 1.035, opacity: 0.94 },
    { x: -56, y: -302, rotate: -2.2, scale: 1.025, opacity: 0.96 },
    { x: 48,  y: -392, rotate:  3.4, scale: 0.925, opacity: 0.78 },
  ];

  let ticking = false;
  const update = () => {
    const rect = hero.getBoundingClientRect();
    const travel = Math.max(hero.offsetHeight - window.innerHeight, 1);
    const passed = Math.min(Math.max(-rect.top, 0), travel);
    const progress = clamp01(passed / travel);
    const eased = smoothstep(progress);

    cards.forEach((card, index) => {
      const profile = profiles[index] || profiles[profiles.length - 1];
      const speed = Number(card.dataset.speed || 1);
      const baseTilt = Number(card.dataset.tilt || 0);
      const delay = index * 0.035;
      const local = smoothstep((progress - delay) / Math.max(1 - delay, 0.001));

      const x = profile.x * local * (0.84 + speed * 0.16);
      const y = profile.y * local * (0.78 + speed * 0.22);
      const rotate = baseTilt + profile.rotate * local;
      const scale = 1 + (profile.scale - 1) * local;
      const opacity = 1 + (profile.opacity - 1) * local;

      card.style.setProperty('--scroll-x', `${x.toFixed(2)}px`);
      card.style.setProperty('--scroll-y', `${y.toFixed(2)}px`);
      card.style.setProperty('--tilt', `${rotate.toFixed(2)}deg`);
      card.style.setProperty('--scale', scale.toFixed(4));
      card.style.setProperty('--card-opacity', opacity.toFixed(4));
    });

    if (visuals) {
      visuals.style.setProperty('--hero-progress', eased.toFixed(4));
    }
    updateTopbar();
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
