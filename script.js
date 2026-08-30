(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hero = document.querySelector(".hero-scroll");
  const cards = Array.from(document.querySelectorAll(".hero-card"));
  const topbar = document.querySelector(".topbar");
  const revealEls = document.querySelectorAll(".reveal:not(.is-visible)");

  // 1. Reveal Animations with High Reliability & Wide Margins
  const revealVisible = () => {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 400 && rect.bottom > -400) {
        el.classList.add("is-visible");
      }
    });
  };

  if ("IntersectionObserver" in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: "400px 0px 400px 0px" });
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // Instant reveal on scroll, resize, load & anchor navigation
  window.addEventListener("scroll", revealVisible, { passive: true });
  window.addEventListener("resize", revealVisible, { passive: true });
  window.addEventListener("DOMContentLoaded", revealVisible);
  window.addEventListener("load", revealVisible);
  revealVisible();

  // Safety fallback: ensure nothing stays hidden
  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => el.classList.add("is-visible"));
  }, 1000);

  // Immediate reveal on anchor jump
  const revealTarget = (hash) => {
    if (!hash || hash === "#" || hash === "#top") return;
    try {
      const target = document.querySelector(hash);
      if (target) {
        if (target.classList.contains("reveal")) target.classList.add("is-visible");
        target.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
      }
    } catch (_) {}
  };

  document.querySelectorAll("a[href^=\"#\"]").forEach((anchor) => {
    anchor.addEventListener("click", () => {
      revealTarget(anchor.getAttribute("href"));
    });
  });

  if (window.location.hash) {
    revealTarget(window.location.hash);
  }
  window.addEventListener("hashchange", () => revealTarget(window.location.hash));

  // 2. Topbar Scrolled State
  let topbarScrolled = null;
  const updateTopbar = () => {
    if (!topbar) return;
    const next = window.scrollY > 20;
    if (next === topbarScrolled) return;
    topbarScrolled = next;
    topbar.classList.toggle("is-scrolled", next);
  };
  window.addEventListener("scroll", updateTopbar, { passive: true });
  updateTopbar();

  // 3. Hero Parallax / Card Motion (Desktop only)
  const initHeroParallax = () => {
    if (reduceMotion || !hero || cards.length === 0) {
      return;
    }

  const clamp01 = (value) => Math.min(Math.max(value, 0), 1);
  const smoothstep = (value) => {
    const t = clamp01(value);
    return t * t * (3 - 2 * t);
  };

  const profiles = [
    { x: -50, y: -60, rotate: -1.8, scale: 0.99, opacity: 0.98 },
    { x:  60, y: -85, rotate:  2.2, scale: 0.97, opacity: 0.94 },
    { x: -65, y:  20, rotate: -2.0, scale: 1.00, opacity: 0.98 },
    { x:  75, y:  48, rotate:  2.8, scale: 0.92, opacity: 0.84 },
  ];

  const motionCards = cards.map((card, index) => ({
    card,
    profile: profiles[index] || profiles[profiles.length - 1],
    speed: Number(card.dataset.speed || 1),
    baseTilt: Number(card.dataset.tilt || 0),
    delay: index * 0.03,
  }));

  let heroStart = 0;
  let travel = 1;
  const measure = () => {
    heroStart = hero.offsetTop;
    travel = Math.max(hero.scrollHeight - window.innerHeight, 1);
  };
  measure();

  let ticking = false;
  const update = () => {
    // Only apply physics transform on desktop viewports
    if (window.innerWidth < 768) {
      motionCards.forEach(({ card }) => {
        card.style.transform = "";
        card.style.opacity = "";
      });
      ticking = false;
      return;
    }

    const progress = clamp01((window.scrollY - heroStart) / travel);

    motionCards.forEach(({ card, profile, speed, baseTilt, delay }) => {
      const local = smoothstep((progress - delay) / Math.max(1 - delay, 0.001));
      const factor = 0.86 + speed * 0.14;
      const x = profile.x * local * factor;
      const y = profile.y * local * factor;
      const rotate = baseTilt + profile.rotate * local;
      const scale = 1 + (profile.scale - 1) * local;
      const opacity = 1 + (profile.opacity - 1) * local;

      card.style.transform = `translate3d(${x.toFixed(2)}px,${y.toFixed(2)}px,0) rotate(${rotate.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
      card.style.opacity = opacity.toFixed(4);
    });

    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  const onResize = () => {
    measure();
    requestUpdate();
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", onResize, { passive: true });
  window.addEventListener("load", onResize, { once: true });
  update();
  };

  initHeroParallax();

  // 2.5 Terminal Copy Button Interaction
  const terminalFixture = document.querySelector('.terminal-fixture-body');
  if (terminalFixture) {
    terminalFixture.addEventListener('click', async (e) => {
      const codeEl = terminalFixture.querySelector('.cli-code');
      const textToCopy = codeEl ? codeEl.textContent.trim() : 'npx skills add Jason904/ui-skill-lab --all';
      try {
        await navigator.clipboard.writeText(textToCopy);
        const copyLabel = terminalFixture.querySelector('.cli-copy-label');
        if (copyLabel) {
          const original = copyLabel.textContent;
          copyLabel.textContent = 'COPIED ✓';
          copyLabel.style.color = '#27c93f';
          setTimeout(() => {
            copyLabel.textContent = original;
            copyLabel.style.color = '';
          }, 2000);
        }
      } catch (err) {
        console.error('Failed to copy', err);
      }
    });
  }


    // 4. PROJECT 02: HERMES P7+ INTERACTIVE CONSOLES
  // 4.1 Plate 3: 8Q Cognitive Inspector & Method Sync Controller
  const qItems = document.querySelectorAll('.hermes-8q-item');
  const qPanels = document.querySelectorAll('.hermes-q-panel');
  const syncChips = document.querySelectorAll('.hermes-sync-chip');

  const questionMethodMap = {
    q1: ['stakeholder', 'jtbd'],
    q2: ['scenario'],
    q3: ['first-principles', 'loss'],
    q4: ['jtbd', 'value-prop'],
    q5: ['5why', 'first-principles', 'toc'],
    q6: ['systems', 'stakeholder', 'toc', 'value-chain'],
    q7: ['scenario-plan', 's-curve'],
    q8: ['value-chain', 'stakeholder']
  };

  if (qItems.length && qPanels.length) {
    const switchQuestion = (targetQ) => {
      qItems.forEach(item => {
        const isMatch = item.getAttribute('data-q') === targetQ;
        item.classList.toggle('is-active', isMatch);
        item.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });
      qPanels.forEach(panel => {
        const isMatch = panel.getAttribute('data-panel') === targetQ;
        panel.classList.toggle('is-active', isMatch);
      });

      // Sync active method chips in footer strip
      const activeMethods = questionMethodMap[targetQ] || [];
      syncChips.forEach(chip => {
        const methodKey = chip.getAttribute('data-method');
        const isActive = activeMethods.includes(methodKey);
        chip.classList.toggle('is-method-active', isActive);
      });
    };

    qItems.forEach(item => {
      item.addEventListener('click', () => {
        const targetQ = item.getAttribute('data-q');
        switchQuestion(targetQ);
      });
      item.addEventListener('mouseenter', () => {
        const targetQ = item.getAttribute('data-q');
        switchQuestion(targetQ);
      });
    });
  }

  // 4.2 Plate 3: Governance & Failure Diff Tabs Controller
  const diffTabs = document.querySelectorAll('.hermes-diff-tab');
  const diffPanes = document.querySelectorAll('.hermes-diff-pane');
  if (diffTabs.length && diffPanes.length) {
    const switchDiffTab = (targetPane) => {
      diffTabs.forEach(tab => {
        const isMatch = tab.getAttribute('data-target') === targetPane;
        tab.classList.toggle('is-active', isMatch);
        tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });
      diffPanes.forEach(pane => {
        const isMatch = pane.getAttribute('data-pane') === targetPane;
        pane.classList.toggle('is-active', isMatch);
      });
    };

    diffTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetPane = tab.getAttribute('data-target');
        switchDiffTab(targetPane);
      });
    });
  }


  // 5. UI SKILL LAB AIPM Competency Matrix 1-to-1 Column & Dot Dynamic Linkage
  const aipmCols = document.querySelectorAll('.aipm-ledger-col');
  const aipmDots = document.querySelectorAll('.aipm-node-dot');
  const aipmNodes = document.querySelectorAll('.aipm-track-node');

  if (aipmCols.length && aipmDots.length) {
    let currentActiveIdx = 0; // Default first active

    const setActiveAipm = (index) => {
      currentActiveIdx = index;
      aipmCols.forEach((col, idx) => {
        col.classList.toggle('is-active', idx === index);
      });
      aipmDots.forEach((dot, idx) => {
        dot.classList.toggle('is-active', idx === index);
      });
    };

    // Initialize with 01 active
    setActiveAipm(0);

    aipmCols.forEach((col, idx) => {
      col.addEventListener('mouseenter', () => setActiveAipm(idx));
      col.addEventListener('click', () => setActiveAipm(idx));
    });

    aipmNodes.forEach((node, idx) => {
      node.addEventListener('mouseenter', () => setActiveAipm(idx));
      node.addEventListener('click', () => setActiveAipm(idx));
    });
  }

})();
