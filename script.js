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

  // 2.1 TasteSkill Top Navigation Controller (5s Smart Idle-Dismiss & Range ScrollSpy)
  const initProjectTabsNav = () => {
    const tabs = Array.from(document.querySelectorAll('.nav-pill--project-tabs .nav-tab[data-target]'));
    if (!tabs.length || !topbar) return;

    const IDLE_TIMEOUT_MS = 5000; // 5秒静止智能隐退
    let idleTimer = null;
    let isHovered = false;

    const scheduleIdleDismiss = () => {
      if (idleTimer) clearTimeout(idleTimer);
      if (!isHovered && window.scrollY > 180) {
        idleTimer = setTimeout(() => {
          if (!isHovered && window.scrollY > 180) {
            topbar.classList.remove('is-visible-nav');
          }
        }, IDLE_TIMEOUT_MS);
      }
    };

    // 获取核心模块的连续全域区间 (覆盖子章节，整段保持高亮)
    const getActiveTarget = () => {
      const scrollPos = window.scrollY + 140;
      const tCanva = document.getElementById('twitcanva-h1-r1') || document.getElementById('twitcanva');
      const hermes = document.getElementById('hermes');
      const uiLab = document.getElementById('ui-skill-lab');
      const gFan = document.getElementById('guangfan');
      const profile = document.getElementById('closing-profile');

      const getTop = (el) => el ? Math.round(el.getBoundingClientRect().top + window.scrollY) : 0;

      const profileTop = getTop(profile);
      const gFanTop = getTop(gFan);
      const uiLabTop = getTop(uiLab);
      const hermesTop = getTop(hermes);
      const tCanvaTop = getTop(tCanva);

      // 从下往上分段判断整个项目的连续纵深：
      if (scrollPos >= profileTop) return 'closing-profile';
      if (scrollPos >= gFanTop) return 'guangfan';
      if (scrollPos >= uiLabTop) return 'ui-skill-lab';
      if (scrollPos >= hermesTop) return 'hermes';
      if (scrollPos >= tCanvaTop) return 'twitcanva'; // 涵盖 01~06 全系子板块！
      return null;
    };

    const onNavScroll = () => {
      const scrollY = window.scrollY;

      // 1. 首屏 (<= 180px) 保持纯净隐藏
      if (scrollY <= 180) {
        if (idleTimer) clearTimeout(idleTimer);
        topbar.classList.remove('is-visible-nav');
        return;
      }

      // 2. 离开首屏后滑动：立即唤醒滑入
      topbar.classList.add('is-visible-nav');

      // 3. 动态高亮对应项目（在整个大项目内部滑动时持续保持黑块激活）
      const activeTarget = getActiveTarget();
      tabs.forEach(tab => {
        const isMatch = tab.getAttribute('data-target') === activeTarget;
        tab.classList.toggle('is-active', isMatch);
      });

      // 4. 重置 5 秒倒计时
      scheduleIdleDismiss();
    };

    // 鼠标悬停保护
    topbar.addEventListener('mouseenter', () => {
      isHovered = true;
      if (idleTimer) clearTimeout(idleTimer);
      topbar.classList.add('is-visible-nav');
    });

    topbar.addEventListener('mouseleave', () => {
      isHovered = false;
      scheduleIdleDismiss();
    });

    // Tab 点击平滑滚动
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const targetId = tab.getAttribute('data-target');
        const anchorMap = {
          'twitcanva': 'twitcanva-h1-r1',
          'hermes': 'hermes',
          'ui-skill-lab': 'ui-skill-lab',
          'guangfan': 'guangfan',
          'closing-profile': 'closing-profile'
        };
        const targetEl = document.getElementById(anchorMap[targetId] || targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
          scheduleIdleDismiss();
        }
      });
    });

    window.addEventListener('scroll', onNavScroll, { passive: true });
    window.addEventListener('resize', onNavScroll, { passive: true });
    window.addEventListener('load', onNavScroll, { passive: true });
    onNavScroll();
  };

  initProjectTabsNav();

  // 3. Hero Parallax / Card Motion (Desktop only)
  const initHeroParallax = () => {
    if (!hero) return;

    const orbitalCards = cards.filter((card) => card.classList.contains("hero-card--orbital"));
    if (!orbitalCards.length) {
      if (reduceMotion || cards.length === 0) return;

      const clamp01 = (value) => Math.min(Math.max(value, 0), 1);
      const smoothstep = (value) => {
        const t = clamp01(value);
        return t * t * (3 - 2 * t);
      };

      const profiles = [
        { x: -50, y: -60, rotate: -1.8, scale: 0.99, opacity: 0.98 },
        { x: 60, y: -85, rotate: 2.2, scale: 0.97, opacity: 0.94 },
        { x: -65, y: 20, rotate: -2.0, scale: 1.00, opacity: 0.98 },
        { x: 75, y: 48, rotate: 2.8, scale: 0.92, opacity: 0.84 },
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
      return;
    }

    const clamp01 = (value) => Math.min(Math.max(value, 0), 1);
    const smoothstep = (value) => {
      const t = clamp01(value);
      return t * t * (3 - 2 * t);
    };
    const mix = (from, to, progress) => from + (to - from) * progress;

    // Gathered card stack that expands along the cream orbital field while scrolling.
    const profiles = [
      {
        from: { x: -18, y: -42, z: 105, rx: -2.2, ry: 6.2, rz: -1.2, scale: 0.96 },
        to: { x: -12, y: -296, z: 155, rx: -6.2, ry: 9, rz: -4.8, scale: 0.72 },
      },
      {
        from: { x: 44, y: -30, z: 48, rx: -1.8, ry: -5.4, rz: 1.6, scale: 0.96 },
        to: { x: 299, y: -220, z: 82, rx: -4.4, ry: -8.4, rz: 4, scale: 0.96 },
      },
      {
        from: { x: -38, y: 30, z: 18, rx: 2.2, ry: -4.8, rz: -1.6, scale: 0.94 },
        to: { x: -153, y: 137, z: 48, rx: 5.2, ry: -8.2, rz: -4.4, scale: 0.76 },
      },
      {
        from: { x: 48, y: 44, z: -42, rx: 2.8, ry: 5.2, rz: 2.2, scale: 0.94 },
        to: { x: 351, y: 326, z: -58, rx: 6, ry: 8.4, rz: 5, scale: 0.98 },
      },
    ];

    const orbitCards = orbitalCards.map((card, index) => ({
      card,
      profile: profiles[index] || profiles[profiles.length - 1],
      delay: index * 0.045,
    }));

    const heroVisuals = hero.querySelector(".hero-visuals");
    const supportsFineHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const clearOrbitalHover = () => {
      orbitCards.forEach(({ card }) => card.classList.remove("is-orbital-hovered"));
    };

    const updateOrbitalHover = (event) => {
      if (!heroVisuals || window.innerWidth < 768) {
        clearOrbitalHover();
        return;
      }

      let closestCard = null;
      let closestScore = Infinity;

      orbitCards.forEach(({ card }) => {
        const rect = card.getBoundingClientRect();
        const radiusX = rect.width / 2 + 18;
        const radiusY = rect.height / 2 + 18;
        const dx = (event.clientX - (rect.left + rect.width / 2)) / radiusX;
        const dy = (event.clientY - (rect.top + rect.height / 2)) / radiusY;
        const score = dx * dx + dy * dy;

        if (score <= 1 && score < closestScore) {
          closestCard = card;
          closestScore = score;
        }
      });

      orbitCards.forEach(({ card }) => {
        card.classList.toggle("is-orbital-hovered", card === closestCard);
      });
    };

    if (heroVisuals && supportsFineHover && !reduceMotion) {
      heroVisuals.addEventListener("pointermove", updateOrbitalHover, { passive: true });
      heroVisuals.addEventListener("pointerleave", clearOrbitalHover, { passive: true });
    }

    const getOrbitScale = () => ({
      x:
        window.innerWidth < 960
          ? 0.44
          : window.innerWidth <= 1180
            ? 0.22
            : window.innerWidth < 1366
              ? 0.5
              : 1,
      y: window.innerHeight < 840 ? 0.72 : window.innerHeight <= 1000 ? 0.95 : 1,
      z: window.innerHeight < 820 ? 0.8 : 1,
      layout:
        window.innerWidth <= 1180
          ? 0.76
          : window.innerWidth < 1366
            ? 0.68
            : window.innerHeight < 820
              ? 0.92
              : 1,
    });

    const setOrbitalState = (card, profile, progress) => {
      const scale = getOrbitScale();
      const expandedScale = 1 + 0.3 * progress;
      card.style.setProperty("--orbit-x", `${(mix(profile.from.x, profile.to.x, progress) * scale.x).toFixed(2)}px`);
      card.style.setProperty("--orbit-y", `${(mix(profile.from.y, profile.to.y, progress) * scale.y).toFixed(2)}px`);
      card.style.setProperty("--orbit-z", `${(mix(profile.from.z, profile.to.z, progress) * scale.z).toFixed(2)}px`);
      card.style.setProperty("--orbit-rx", `${mix(profile.from.rx, profile.to.rx, progress).toFixed(2)}deg`);
      card.style.setProperty("--orbit-ry", `${mix(profile.from.ry, profile.to.ry, progress).toFixed(2)}deg`);
      card.style.setProperty("--orbit-rz", `${mix(profile.from.rz, profile.to.rz, progress).toFixed(2)}deg`);
      card.style.setProperty("--orbit-depth-layer", `${Math.round(100 + mix(profile.from.z, profile.to.z, progress))}`);
      card.style.setProperty(
        "--orbit-scale",
        (mix(profile.from.scale, profile.to.scale, progress) * scale.layout * expandedScale).toFixed(3)
      );
    };

    if (reduceMotion) {
      orbitCards.forEach(({ card, profile }) => setOrbitalState(card, profile, 1));
      return;
    }

    const HERO_ANIMATION_RATIO = 0.8;
    const HERO_EXIT_SETTLE_MS = 280;
    const heroExitKeys = new Set(["ArrowDown", "PageDown", " ", "Spacebar"]);
    const heroExitKeyStep = (event) => {
      if (event.key === "ArrowDown") return 48;
      return Math.max(window.innerHeight * 0.85, 240);
    };
    let heroStart = 0;
    let travel = 1;
    let animationTravel = 1;
    let ticking = false;
    let heroExitState = "blocked";
    let heroExitReleaseTimer = 0;

    const measure = () => {
      heroStart = hero.offsetTop;
      travel = Math.max(hero.scrollHeight - window.innerHeight, 1);
      animationTravel = Math.max(travel * HERO_ANIMATION_RATIO, 1);
    };

    const update = () => {
      if (window.innerWidth < 768) {
        ticking = false;
        return;
      }

      const progress = clamp01((window.scrollY - heroStart) / animationTravel);

      orbitCards.forEach(({ card, profile, delay }) => {
        const local = smoothstep((progress - delay) / Math.max(1 - delay, 0.001));
        setOrbitalState(card, profile, local);
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

    const clearHeroExitRelease = () => {
      if (!heroExitReleaseTimer) return;
      window.clearTimeout(heroExitReleaseTimer);
      heroExitReleaseTimer = 0;
    };

    const scheduleHeroExitRelease = () => {
      clearHeroExitRelease();
      heroExitReleaseTimer = window.setTimeout(() => {
        heroExitReleaseTimer = 0;
        heroExitState = "armed";
      }, HERO_EXIT_SETTLE_MS);
    };

    const holdHeroAtEnd = () => {
      window.scrollTo({
        top: heroStart + travel,
        left: 0,
        behavior: "instant",
      });
    };

    const blockHeroExit = (event) => {
      if (event) event.preventDefault();
      holdHeroAtEnd();
      scheduleHeroExitRelease();
    };

    const handleHeroWheel = (event) => {
      if (
        window.innerWidth < 768 ||
        event.ctrlKey ||
        event.metaKey ||
        event.altKey ||
        event.deltaY <= 0
      ) {
        return;
      }

      const heroEnd = heroStart + travel;
      const currentY = window.scrollY;
      if (currentY < heroStart - 1 || currentY > heroEnd + 1) return;

      if (heroExitState === "armed") {
        clearHeroExitRelease();
        heroExitState = "passed";
        return;
      }

      if (heroExitState === "passed") return;

      if (currentY >= heroEnd - 1 || currentY + event.deltaY >= heroEnd - 1) {
        blockHeroExit(event);
      }
    };

    const handleHeroExitKeydown = (event) => {
      if (
        window.innerWidth < 768 ||
        event.ctrlKey ||
        event.metaKey ||
        event.altKey ||
        !heroExitKeys.has(event.key)
      ) {
        return;
      }

      const heroEnd = heroStart + travel;
      const currentY = window.scrollY;
      if (currentY < heroStart - 1 || currentY > heroEnd + 1) return;

      if (heroExitState === "armed") {
        clearHeroExitRelease();
        heroExitState = "passed";
        return;
      }

      if (heroExitState === "passed") return;
      if (currentY >= heroEnd - 1 || currentY + heroExitKeyStep(event) >= heroEnd - 1) {
        blockHeroExit(event);
      }
    };

    const resetHeroExitAfterReturn = () => {
      if (heroExitState !== "passed") return;
      if (window.scrollY <= heroStart + animationTravel * 0.5) {
        clearHeroExitRelease();
        heroExitState = "blocked";
      }
    };

    measure();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("load", onResize, { once: true });
    window.addEventListener("wheel", handleHeroWheel, { passive: false });
    window.addEventListener("keydown", handleHeroExitKeydown);
    window.addEventListener("scroll", resetHeroExitAfterReturn, { passive: true });
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
