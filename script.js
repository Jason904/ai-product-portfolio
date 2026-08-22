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
    if (!section || section.dataset.evidenceVersion === 'final-taste') return;
    section.dataset.evidenceVersion = 'final-taste';
    section.innerHTML = `
      <div class="ui-proof-header reveal">
        <div>
          <p class="project-index">03 / PRODUCTIZE · OPEN SOURCE</p>
          <h2>UI Skill Lab</h2>
        </div>
        <div class="ui-proof-intro">
          <div class="ui-social-proof" aria-label="GitHub 社会证明">
            <strong>154 ★ GitHub</strong>
            <span>9 Forks</span>
            <span>7 Main Skills</span>
            <span>MIT Open Source</span>
          </div>
          <p class="project-lead">把“让 AI 写前端”从一次性的 Prompt 调试，变成一套有视觉目标、有规格合同、有质量门禁、有结构化修复的可复用 Workflow。</p>
          <blockquote>真正的问题不是 Agent 会不会写 UI，而是团队的视觉意图有没有形成一份 <b>Agent 可以理解、执行、验收和修复的合同</b>。</blockquote>
        </div>
      </div>

      <section class="ui-proof-question reveal" aria-labelledby="ui-problem-title">
        <h3 id="ui-problem-title">AI 已经会写 UI，真正难的是写对。</h3>
        <div class="ui-problem-signals">
          <article class="ui-problem-signal">
            <span>01</span>
            <strong>目标看不见</strong>
            <p>PRD 是文字，团队很难在实现前建立同一个视觉体感。</p>
          </article>
          <article class="ui-problem-signal">
            <span>02</span>
            <strong>规格不可执行</strong>
            <p>截图对人直观，却不能直接告诉 Agent layout、tokens 与组件关系。</p>
          </article>
          <article class="ui-problem-signal">
            <span>03</span>
            <strong>Build ≠ Product Pass</strong>
            <p>代码能运行，不代表最终页面真的符合已经确认的视觉目标。</p>
          </article>
          <article class="ui-problem-signal">
            <span>04</span>
            <strong>修复容易漂移</strong>
            <p>“再调好看一点”会让 Agent 扩大修改范围，甚至重新设计页面。</p>
          </article>
        </div>
      </section>

      <figure class="ui-workflow-proof reveal">
        <div class="ui-workflow-heading">
          <p>Artifact 01 · Workflow Map</p>
          <h3>从 PRD 到可验收页面的完整闭环。</h3>
        </div>
        <div class="ui-workflow-image">
          <a href="https://github.com/Jason904/ui-skill-lab/blob/main/docs/from-prd-to-acceptable-page.zh.png" target="_blank" rel="noreferrer" aria-label="打开完整 UI Skill Lab 工作流图">
            <img
              src="https://raw.githubusercontent.com/Jason904/ui-skill-lab/main/docs/from-prd-to-acceptable-page.zh.png"
              alt="UI Skill Lab 从 PRD 到可验收页面的完整工作流"
              loading="lazy"
              decoding="async"
            >
            <span class="ui-workflow-open">查看完整流程图 ↗</span>
          </a>
        </div>
        <figcaption>
          <strong>Repository evidence</strong>
          <p>先用视觉稿建立团队共识，再把定稿转成 visual spec、tokens、layout、component tree 与 design rules 约束 Agent，最后通过截图验收和定向修复让页面逐轮收敛。</p>
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

      <section class="ui-artifacts" aria-labelledby="ui-artifacts-title">
        <div class="ui-artifacts-head reveal">
          <p>Evidence, not claims</p>
          <h3 id="ui-artifacts-title">三个 Artifact，证明这套 Workflow 真的被做成了系统。</h3>
        </div>

        <article class="ui-artifact-row reveal">
          <div class="ui-artifact-copy">
            <small>ARTIFACT 02 / QUALITY GATE</small>
            <h4>Visual Reconstruction Benchmark</h4>
            <p>验证的不只是 Skill 有没有跑完，而是最终浏览器页面有没有真正接近固定 Reference；同时用 anti-cheat contract 防止直接复用参考图“骗过”视觉指标。</p>
            <a href="https://github.com/Jason904/ui-skill-lab/blob/main/docs/visual-reconstruction-benchmark.md" target="_blank" rel="noreferrer">Read Benchmark ↗</a>
          </div>
          <div class="ui-artifact-real ui-artifact-real--benchmark" aria-label="Visual Reconstruction Benchmark 真实内容摘录">
            <pre>What it verifies

reference.png  →  actual.png

<mark>normalizedMae</mark>   average pixel error
<mark>rmse</mark>            root mean squared error
<mark>p95Abs</mark>          95th percentile error
<mark>badPixelRatio</mark>   bad-pixel share
<mark>globalSsim</mark>      structural similarity

Candidate contract
• build strict cases with real HTML / CSS
• do not reference composite reference.png
• anti-cheat audit before pixel scoring</pre>
          </div>
        </article>

        <article class="ui-artifact-row ui-artifact-row--reverse reveal">
          <div class="ui-artifact-copy">
            <small>ARTIFACT 03 / STRUCTURED REPAIR</small>
            <h4>从模糊反馈到 Fix Contract</h4>
            <p><code>visual-diff-fix</code> 读取差异证据与规格上下文，把修复限制成结构化任务；修复完成后重新截图，再回到 visual acceptance，而不是让 Agent 借机重写整个页面。</p>
            <a href="https://github.com/Jason904/ui-skill-lab/blob/main/skills/visual-diff-fix/examples/fix-report.example.md" target="_blank" rel="noreferrer">Open Real Fix Report ↗</a>
          </div>
          <div class="ui-artifact-real ui-artifact-real--repair" aria-label="Visual Diff Fix Report 真实内容摘录">
            <pre>Visual Diff Fix Report

Tasks read:             <mark>3</mark>
Fixed:                  <mark>2</mark>
Needs human review:     <mark>1</mark>
Unresolved:             <mark>0</mark>

Validation
lint:        passed
build:       passed
screenshot:  captured

Remaining risk
Final visual similarity requires rerunning
<mark>visual-acceptance-review</mark>.</pre>
          </div>
        </article>
      </section>

      <section class="ui-proof-capabilities reveal" aria-labelledby="ui-proves-title">
        <h3 id="ui-proves-title">这证明了什么 AI PM 能力？</h3>
        <div class="ui-capability-lines">
          <article class="ui-capability-line">
            <span>01</span>
            <div><strong>从实践问题抽象成系统方法</strong><p>不是修一个“页面不像”的 Case，而是识别目标、规格、实现、验收与修复中的系统性漂移。</p></div>
          </article>
          <article class="ui-capability-line">
            <span>02</span>
            <div><strong>Agent Contract / Specification Design</strong><p>把主观视觉目标转成 Source of Truth、Spec、Rules 与 Acceptance Criteria。</p></div>
          </article>
          <article class="ui-capability-line">
            <span>03</span>
            <div><strong>AI Eval / Product Quality Gate</strong><p>明确区分 Engineering PASS 与 Product PASS，用真实浏览器结果和独立证据判断正确性。</p></div>
          </article>
          <article class="ui-capability-line">
            <span>04</span>
            <div><strong>Human × AI Workflow Design</strong><p>人负责目标与最终判断，AI 负责规格化、执行、检查与定向修复，而不是追求无边界全自动。</p></div>
          </article>
          <article class="ui-capability-line">
            <span>05</span>
            <div><strong>方法产品化与开源</strong><p>把个人实践拆成 7 个可独立理解和复用的 Skill，并通过公开仓库与 skills.sh 对外验证。</p></div>
          </article>
        </div>
      </section>

      <section class="ui-deep-dive reveal" aria-labelledby="ui-deep-title">
        <div>
          <small>Explore the evidence</small>
          <h3 id="ui-deep-title">代码、Skill、Benchmark 都可以继续验证。</h3>
        </div>
        <nav class="ui-deep-links" aria-label="UI Skill Lab 深挖入口">
          <a href="https://github.com/Jason904/ui-skill-lab" target="_blank" rel="noreferrer"><span>GitHub Repository · ★154</span><span>↗</span></a>
          <a href="https://skills.sh/Jason904/ui-skill-lab" target="_blank" rel="noreferrer"><span>skills.sh</span><span>↗</span></a>
          <a href="https://github.com/Jason904/ui-skill-lab/blob/main/docs/visual-reconstruction-benchmark.md" target="_blank" rel="noreferrer"><span>Visual Reconstruction Benchmark</span><span>↗</span></a>
        </nav>
      </section>

      <p class="ui-proof-closing reveal">AI Coding 的下一阶段，不只是让 Agent 写得更快，而是让人的目标更可靠地进入执行、验收和修复闭环。</p>
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