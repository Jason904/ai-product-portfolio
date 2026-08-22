(() => {
  const STYLES = [
    { href: './v03.css', attr: 'portfolioV03' },
    { href: './v031.css', attr: 'portfolioV031' },
    { href: './v032.css', attr: 'portfolioV032' },
    { href: './v04.css', attr: 'portfolioV04' },
  ];

  STYLES.forEach(({ href, attr }) => {
    const selector = `link[data-${attr.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}]`;
    if (document.querySelector(selector)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.dataset[attr] = 'true';
    document.head.appendChild(link);
  });

  const hydrateUiSkillLab = () => {
    const section = document.querySelector('.project--ui');
    if (!section || section.dataset.evidenceVersion === 'v04') return;
    section.dataset.evidenceVersion = 'v04';
    section.innerHTML = `
      <div class="ui-proof-header reveal">
        <div>
          <p class="project-index">03 / PRODUCTIZE · OPEN SOURCE</p>
          <h2>UI Skill Lab</h2>
        </div>
        <div class="ui-proof-intro">
          <div class="ui-social-proof" aria-label="GitHub 社会证明">
            <span>GitHub</span>
            <strong>★ 154</strong>
            <span>9 Forks</span>
            <span>7 Skills</span>
          </div>
          <p class="project-lead">把“让 AI 写前端”从一次性的 Prompt 调试，变成一套有视觉目标、有规格合同、有质量门禁、有结构化修复的可复用 Workflow。</p>
          <blockquote>真正的问题不是 Agent 会不会写 UI，而是团队的视觉意图有没有形成一份 <b>Agent 可以理解、执行、验收和修复的合同</b>。</blockquote>
        </div>
      </div>

      <figure class="ui-workflow-proof reveal">
        <div class="ui-workflow-image">
          <img
            src="https://raw.githubusercontent.com/Jason904/ui-skill-lab/main/docs/from-prd-to-acceptable-page.zh.png"
            alt="UI Skill Lab 从 PRD 到可验收页面的完整工作流"
            loading="lazy"
            decoding="async"
          >
        </div>
        <figcaption>
          <span>Repository evidence</span>
          <strong>从 PRD 到可验收页面</strong>
          <p>先用视觉稿建立共识，再把定稿转成规格合同约束 Agent，最后通过截图验收和定向修复让页面逐轮收敛。</p>
        </figcaption>
      </figure>

      <div class="ui-skill-strip reveal" aria-label="七个主流程 Skill">
        <span>image2-prompt-pack</span>
        <i></i><span>visual-to-spec</span>
        <i></i><span>visual-spec-review</span>
        <i></i><span>design-system-governor</span>
        <i></i><span>spec-compliance-review</span>
        <i></i><span>visual-acceptance-review</span>
        <i></i><span>visual-diff-fix</span>
      </div>

      <div class="ui-evidence-grid">
        <article class="ui-evidence-card ui-evidence-card--target reveal">
          <small>01 / VISUAL TARGET</small>
          <h3>先让团队看见目标，再让 Agent 开始写</h3>
          <p>PRD 先进入视觉生成与确认环节，最终的 <code>reference.png</code> 成为视觉事实源，避免在错误方向上高效编码。</p>
          <div class="artifact artifact--target" aria-hidden="true">
            <span>PRD</span><b>→</b><span>image2-prompt-pack</span><b>→</b><strong>reference.png</strong>
          </div>
        </article>

        <article class="ui-evidence-card ui-evidence-card--contract reveal">
          <small>02 / SPEC CONTRACT</small>
          <h3>把“我想要这种感觉”翻译成机器可执行规格</h3>
          <p><code>visual-to-spec</code> 把视觉稿拆成 tokens、layout、component tree 和 design rules，再由 review gate 检查规格本身是否可信。</p>
          <div class="artifact artifact--files">
            <span>visual-spec.md</span>
            <span>tokens</span>
            <span>layout</span>
            <span>component tree</span>
            <span>design rules</span>
          </div>
        </article>

        <article class="ui-evidence-card ui-evidence-card--gate reveal">
          <small>03 / PRODUCT QUALITY GATE</small>
          <h3>代码能跑，不等于页面正确</h3>
          <p>通过 spec compliance + browser screenshot 做双层验收；视觉重建 Benchmark 进一步使用 MAE / RMSE / SSIM 等指标并加入 anti-cheat 约束。</p>
          <div class="artifact artifact--metrics">
            <span><b>SPEC</b> compliance</span>
            <span><b>SHOT</b> acceptance</span>
            <span><b>MAE</b> / RMSE</span>
            <span><b>SSIM</b> / anti-cheat</span>
          </div>
        </article>

        <article class="ui-evidence-card ui-evidence-card--repair reveal">
          <small>04 / STRUCTURED REPAIR</small>
          <h3>把“再调好看一点”变成结构化 Fix Task</h3>
          <p><code>visual-diff-fix</code> 把差异转成具体修复任务，限制 Agent 只改证据指向的问题，并在修改后重新截图验收。</p>
          <div class="artifact artifact--repair" aria-hidden="true">
            <span>Evidence</span><b>→</b><strong>fix-tasks.json</strong><b>→</b><span>Fix</span><b>→</b><span>Re-check</span>
          </div>
        </article>
      </div>

      <div class="ui-proof-footer reveal">
        <div>
          <p class="ui-proof-label">AI PM 能力体现</p>
          <div class="ability-list ability-list--inline">
            <span>实践问题 → 方法抽象</span>
            <span>Agent Contract / Spec 设计</span>
            <span>AI Eval / Quality Gate</span>
            <span>Workflow / Skill 产品设计</span>
            <span>开源与方法产品化</span>
          </div>
        </div>
        <div class="ui-proof-actions">
          <a class="button button--dark" href="https://github.com/Jason904/ui-skill-lab" target="_blank" rel="noreferrer">GitHub · ★ 154 ↗</a>
          <a class="button button--light" href="https://skills.sh/Jason904/ui-skill-lab" target="_blank" rel="noreferrer">skills.sh ↗</a>
        </div>
      </div>
    `;
  };

  hydrateUiSkillLab();

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

  let topbarScrolled = null;
  const updateTopbar = () => {
    if (!topbar) return;
    const next = window.scrollY > 24;
    if (next === topbarScrolled) return;
    topbarScrolled = next;
    topbar.classList.toggle('is-scrolled', next);
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
    { x: -68, y: -82,  rotate: -1.4, scale: 0.985, opacity: 0.96 },
    { x:  76, y: -118, rotate:  2.8, scale: 0.965, opacity: 0.91 },
    { x: -92, y:  24,  rotate: -2.6, scale: 1.010, opacity: 0.97 },
    { x: 102, y:  62,  rotate:  3.8, scale: 0.885, opacity: 0.76 },
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

    updateTopbar();
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

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
  window.addEventListener('load', onResize, { once: true });
  update();
})();