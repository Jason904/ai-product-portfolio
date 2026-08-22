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
    if (!section || section.dataset.evidenceVersion === 'v2-compact') return;
    section.dataset.evidenceVersion = 'v2-compact';
    section.innerHTML = `
      <header class="ui-case-hero reveal">
        <div class="ui-case-title">
          <p class="project-index">03 / PRODUCTIZE · OPEN SOURCE</p>
          <h2>UI Skill Lab</h2>
        </div>
        <div class="ui-case-intro">
          <div class="ui-social-proof" aria-label="GitHub 社会证明">
            <strong>154 ★ GitHub</strong>
            <span>9 Forks</span>
            <span>7 Main Skills</span>
          </div>
          <p class="project-lead">把 AI 前端开发从一次性的 Prompt 调试，变成一套视觉目标驱动、可执行、可验收、可修复的 Workflow。</p>
          <p class="ui-case-thesis">Codex / Claude Code 已经能快速写页面，真正的问题变成：<b>怎么让它持续写出团队真正想要的那个页面。</b></p>
          <div class="ui-case-actions">
            <a href="https://github.com/Jason904/ui-skill-lab" target="_blank" rel="noreferrer">View GitHub ↗</a>
            <a href="https://skills.sh/Jason904/ui-skill-lab" target="_blank" rel="noreferrer">skills.sh ↗</a>
          </div>
        </div>
      </header>

      <section class="ui-problem-block reveal" aria-labelledby="ui-problem-title">
        <div class="ui-section-heading">
          <small>WHY IT EXISTS</small>
          <h3 id="ui-problem-title">AI 已经会写 UI，难的是让它持续写对。</h3>
        </div>
        <div class="ui-problem-rows">
          <article>
            <span>01</span>
            <strong>目标不可见</strong>
            <p>PRD 只有文字，团队很难在实现前建立一致的视觉预期。</p>
          </article>
          <article>
            <span>02</span>
            <strong>Agent 自由度过高</strong>
            <p>缺少明确中间合同，容易出现“能运行，但不是我要的页面”。</p>
          </article>
          <article>
            <span>03</span>
            <strong>验收与修复靠感觉</strong>
            <p>“再好看一点”无法形成稳定、可复验、范围可控的修复闭环。</p>
          </article>
        </div>
      </section>

      <figure class="ui-workflow-section reveal">
        <div class="ui-workflow-heading">
          <small>HOW IT WORKS</small>
          <h3>从 PRD 到可验收页面</h3>
          <p>先建立视觉共识，再把视觉目标规格化，最后通过截图验收和定向修复持续收敛。</p>
        </div>
        <a class="ui-workflow-image" href="https://github.com/Jason904/ui-skill-lab/blob/main/docs/from-prd-to-acceptable-page.zh.png" target="_blank" rel="noreferrer" aria-label="打开完整 UI Skill Lab 工作流图">
          <img
            src="https://raw.githubusercontent.com/Jason904/ui-skill-lab/main/docs/from-prd-to-acceptable-page.zh.png"
            alt="UI Skill Lab 从 PRD 到可验收页面的完整工作流"
            loading="lazy"
            decoding="async"
          >
          <span>查看完整流程图 ↗</span>
        </a>
      </figure>

      <section class="ui-skill-pipeline reveal" aria-labelledby="ui-skill-title">
        <div class="ui-pipeline-heading">
          <small>7 MAIN SKILLS</small>
          <h3 id="ui-skill-title">一条 Workflow，7 个职责明确的 Skill。</h3>
        </div>
        <div class="ui-skill-track" role="list" aria-label="UI Skill Lab 七个主流程 Skill">
          <article class="ui-skill-stage" role="listitem"><small>TARGET</small><strong>image2-prompt-pack</strong><p>把 PRD 变成可讨论的视觉方向。</p></article>
          <article class="ui-skill-stage" role="listitem"><small>SPEC</small><strong>visual-to-spec</strong><p>把定稿视觉拆成可执行规格。</p></article>
          <article class="ui-skill-stage" role="listitem"><small>REVIEW</small><strong>visual-spec-review</strong><p>阻止错误 Spec 进入开发。</p></article>
          <article class="ui-skill-stage" role="listitem"><small>SYSTEM</small><strong>design-system-governor</strong><p>补齐状态、响应式与设计规则。</p></article>
          <article class="ui-skill-stage" role="listitem"><small>BUILD</small><strong>spec-compliance-review</strong><p>检查代码是否服从视觉合同。</p></article>
          <article class="ui-skill-stage" role="listitem"><small>ACCEPT</small><strong>visual-acceptance-review</strong><p>用真实浏览器截图验收结果。</p></article>
          <article class="ui-skill-stage" role="listitem"><small>REPAIR</small><strong>visual-diff-fix</strong><p>把差异转成结构化修复任务。</p></article>
        </div>
      </section>

      <section class="ui-core-highlights reveal" aria-labelledby="ui-highlights-title">
        <div class="ui-highlights-heading">
          <small>CORE DESIGN</small>
          <h3 id="ui-highlights-title">三个关键设计，让 Workflow 从“能生成”走向“可控制”。</h3>
        </div>
        <div class="ui-highlight-rows">
          <article>
            <span>01</span>
            <div><small>VISUAL-FIRST</small><h4>先看见目标，再开始 Build。</h4></div>
            <p>先把 PRD 变成可讨论的 UI Visual，由人确认方向，再进入编码。把最昂贵的方向错误提前到开发之前暴露。</p>
          </article>
          <article>
            <span>02</span>
            <div><small>CONTRACT-DRIVEN</small><h4>把视觉意图变成 Agent 可以执行的合同。</h4></div>
            <p>Reference 进一步拆成 tokens、layout、component tree、design rules 与 states，让 Agent 围绕明确 Source of Truth 执行。</p>
          </article>
          <article>
            <span>03</span>
            <div><small>ACCEPTANCE LOOP</small><h4>Build 完成，不代表 Product 完成。</h4></div>
            <p>Implementation → Screenshot → Compare → Diff → Fix → Re-check。视觉重建 Benchmark 再用 MAE / RMSE / SSIM 与 anti-cheat 约束校验结果。 <a href="https://github.com/Jason904/ui-skill-lab/blob/main/docs/visual-reconstruction-benchmark.md" target="_blank" rel="noreferrer">Read Benchmark ↗</a></p>
          </article>
        </div>
      </section>

      <section class="ui-role-block reveal" aria-labelledby="ui-role-title">
        <div class="ui-section-heading">
          <small>MY ROLE</small>
          <h3 id="ui-role-title">我在这个项目里做了什么？</h3>
        </div>
        <div class="ui-role-rows">
          <article><span>01</span><div><strong>定义问题</strong><p>识别 AI 写 UI 的瓶颈已经从“能不能生成代码”，迁移到目标对齐、执行约束和结果验收。</p></div></article>
          <article><span>02</span><div><strong>设计系统</strong><p>把问题拆成 Visual Target、Spec、Gate、Acceptance、Repair，并设计成 7 个职责明确的 Skill。</p></div></article>
          <article><span>03</span><div><strong>做成可复用产品</strong><p>把个人 AI Coding 实践沉淀成公开仓库、文档、测试和可安装 Skill，而不是一次性的项目技巧。</p></div></article>
        </div>
      </section>

      <footer class="ui-case-footer reveal">
        <span>UI Skill Lab · Open Source</span>
        <nav aria-label="UI Skill Lab 外部链接">
          <a href="https://github.com/Jason904/ui-skill-lab" target="_blank" rel="noreferrer">GitHub Repository ↗</a>
          <a href="https://skills.sh/Jason904/ui-skill-lab" target="_blank" rel="noreferrer">skills.sh ↗</a>
          <a href="https://github.com/Jason904/ui-skill-lab/blob/main/docs/visual-reconstruction-benchmark.md" target="_blank" rel="noreferrer">Benchmark ↗</a>
        </nav>
      </footer>
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