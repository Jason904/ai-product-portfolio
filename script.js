(() => {
  const STYLES = [
    { href: './v03.css', attr: 'portfolioV03' },
    { href: './v031.css', attr: 'portfolioV031' },
    { href: './v032.css', attr: 'portfolioV032' },
    { href: './v04.css', attr: 'portfolioV04' },
    { href: './v05.css', attr: 'portfolioV05' },
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
    if (!section || section.dataset.evidenceVersion === 'v2-1-1-capabilities') return;
    section.dataset.evidenceVersion = 'v2-1-1-capabilities';
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
          <p class="project-lead">把“让 AI 写前端”从一次性的 Prompt 调试，变成一套有视觉目标、有规格合同、有验收门禁、有结构化修复的可复用 Workflow。</p>
          <p class="ui-case-thesis">今天 AI 已经非常会写页面。真正困难的问题变成：<b>它写出来的是不是我们真正想要的页面？</b></p>
          <div class="ui-capability-meta" aria-label="UI Skill Lab AI 产品经理能力标签">
            <span class="ui-capability-label">AI PM CAPABILITIES</span>
            <div class="ui-capability-tags">
              <span>AI Skill / Workflow 产品设计</span>
              <span>Agent Contract / Specification</span>
              <span>Human × AI 协作设计</span>
              <span>AI Eval / Product Quality Gate</span>
              <span>方法产品化 / Open Source</span>
            </div>
          </div>
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
          <article><span>01</span><strong>目标不可见</strong><p>PRD 只有文字，团队很难在实现前建立一致的视觉预期。</p></article>
          <article><span>02</span><strong>Agent 自由度过高</strong><p>缺少明确中间合同，容易出现“能运行，但不是我要的页面”。</p></article>
          <article><span>03</span><strong>验收与修复靠感觉</strong><p>“再大一点 / 再高级一点 / 再像一点”无法形成稳定、可复验的修复闭环。</p></article>
        </div>
      </section>

      <section class="ui-middle-layer reveal" aria-labelledby="ui-middle-title">
        <div class="ui-middle-heading">
          <small>THE MISSING LAYER</small>
          <h3 id="ui-middle-title">真正缺的是中间层。</h3>
          <p>AI Coding 的问题已经不主要是“能不能写 UI”，而是视觉意图没有形成一个 Agent 可以理解、执行、验收和修复的合同。</p>
        </div>
        <div class="ui-flow-compare" aria-label="传统 AI Coding 与 UI Skill Lab 工作流对比">
          <article class="ui-flow-column ui-flow-column--before">
            <small>传统方式</small>
            <ol>
              <li>PRD</li><li>AI 自由生成</li><li>页面能跑</li><li>人肉判断“不太对”</li><li>AI 猜 CSS</li><li>继续修改</li>
            </ol>
          </article>
          <div class="ui-flow-divider" aria-hidden="true"><span>VS</span></div>
          <article class="ui-flow-column ui-flow-column--system">
            <small>UI Skill Lab</small>
            <ol>
              <li>PRD</li><li>Visual Target</li><li>Visual Spec</li><li>Design System</li><li>Agent Code</li><li>Screenshot Acceptance</li><li>Diff Fix</li>
            </ol>
          </article>
        </div>
        <p class="ui-middle-thesis">不是让 Agent 更自由地写，而是给 Agent 建立正确的 <b>目标、规格、门禁和反馈闭环。</b></p>
      </section>

      <section class="ui-core-highlights reveal" aria-labelledby="ui-highlights-title">
        <div class="ui-highlights-heading">
          <small>CORE DESIGN</small>
          <h3 id="ui-highlights-title">四个关键设计，分别控制目标、规格、验收和修复。</h3>
        </div>
        <div class="ui-highlight-rows">
          <article>
            <span>01</span>
            <div><small>VISUAL-FIRST</small><h4>先让团队看到目标，再让 AI 写代码。</h4></div>
            <p>PRD 先变成可讨论的视觉方向，由人确认后形成最终 Reference，再进入实现。<b>Specification 不应该从已有代码反推，而应该从确认后的产品目标产生。</b> 最终的 <code>reference.png</code> 成为 Visual Source of Truth，优先解决目标漂移。</p>
          </article>
          <article>
            <span>02</span>
            <div><small>VISUAL → SPEC</small><h4>把“我想要这种感觉”变成 Agent 可以执行的合同。</h4></div>
            <p>一张设计图不能直接约束 Codex，所以继续拆成 tokens、layout、component tree、spacing、typography、hierarchy 与 design rules。核心是在解决：<b>人和 Agent 使用的不是同一种语言，怎么建立中间协议？</b></p>
          </article>
          <article>
            <span>03</span>
            <div><small>QUALITY GATE</small><h4>代码能运行，不代表页面正确。</h4></div>
            <p>用 Spec Compliance 检查代码是否服从规格，再用 Screenshot Acceptance 检查浏览器最终输出是否满足目标。这里坚持 <b>Product Correctness &gt; Engineering Correctness</b>。视觉重建 Benchmark 进一步加入 MAE / RMSE / SSIM 与 anti-cheat 约束。 <a href="https://github.com/Jason904/ui-skill-lab/blob/main/docs/visual-reconstruction-benchmark.md" target="_blank" rel="noreferrer">Read Benchmark ↗</a></p>
          </article>
          <article>
            <span>04</span>
            <div><small>VISUAL DIFF FIX</small><h4>把“再调好看一点”变成结构化修复任务。</h4></div>
            <p>把哪里不一致、证据是什么、严重程度、对应组件和具体 Fix Task 明确下来，再修改、重新截图、再次验收。最终形成可执行的 <code>fix-tasks</code>，重点解决修复漂移。</p>
          </article>
        </div>
      </section>

      <figure class="ui-workflow-section reveal">
        <div class="ui-workflow-heading">
          <small>HOW IT WORKS</small>
          <h3>从 PRD 到可验收页面</h3>
          <p>上面的产品判断最终被落成一条完整 Workflow：先建立视觉共识，再规格化目标，最后通过真实浏览器结果验收与修复。</p>
        </div>
        <a class="ui-workflow-image" href="https://github.com/Jason904/ui-skill-lab/blob/main/docs/from-prd-to-acceptable-page.zh.png" target="_blank" rel="noreferrer" aria-label="打开完整 UI Skill Lab 工作流图">
          <img src="https://raw.githubusercontent.com/Jason904/ui-skill-lab/main/docs/from-prd-to-acceptable-page.zh.png" alt="UI Skill Lab 从 PRD 到可验收页面的完整工作流" loading="lazy" decoding="async">
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

      <section class="ui-role-block reveal" aria-labelledby="ui-role-title">
        <div class="ui-section-heading">
          <small>MY ROLE</small>
          <h3 id="ui-role-title">我在这个项目里做了什么？</h3>
        </div>
        <div class="ui-role-rows">
          <article><span>01</span><div><strong>重新定义问题</strong><p>没有继续把重点放在“Agent 会不会生成代码”，而是识别目标漂移、规格漂移、验收漂移和修复漂移。</p></div></article>
          <article><span>02</span><div><strong>设计 Human × Agent 协作协议</strong><p>人负责目标和最终判断，Agent 负责执行，Skill 负责规格化、约束、检查与定向修复。</p></div></article>
          <article><span>03</span><div><strong>把实践产品化</strong><p>从 Case → Pattern → Method → Productized Workflow，最终形成公开仓库、文档、测试和可安装 Skill。</p></div></article>
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

  const hydrateGuangfan = () => {
    const section = document.querySelector('.project--guangfan');
    if (!section || section.dataset.conceptVersion === 'v1-method-first') return;
    section.dataset.conceptVersion = 'v1-method-first';
    section.innerHTML = `
      <header class="gf-hero reveal">
        <div class="gf-hero-title">
          <p class="project-index">04 / VALIDATE · AI PRODUCT CONCEPT</p>
          <h2>AI Product Concept Validation<span>把还不存在的产品，提前变成可体验、可讨论、可决策的产品概念。</span></h2>
        </div>
        <div class="gf-hero-intro">
          <div class="gf-case-chip">CASE STUDY · 光帆 AI 全感耳机</div>
          <p class="gf-hero-lead">用 AIGC + AI Coding，把抽象的产品想法提前变成组织可以共同看见和判断的产品体验。</p>
          <div class="gf-capabilities" aria-label="AI Product Concept Validation 能力标签">
            <span>AI PM CAPABILITIES</span>
            <div class="gf-capability-list">
              <span>0→1 Product Concept</span>
              <span>Technology → User Value</span>
              <span>AI-powered Prototyping</span>
              <span>POC / Hypothesis Validation</span>
              <span>Cross-functional Alignment</span>
            </div>
          </div>
        </div>
      </header>

      <section class="gf-judgment reveal">
        <span class="gf-section-label">CORE JUDGMENT</span>
        <h3>高成本 Build 之前，先把产品“做给组织看”。</h3>
        <div class="gf-judgment-copy">
          <p>0→1 产品早期最大的风险之一，不是团队没有想法，而是每个人脑中的“产品”并不是同一个产品。</p>
          <p>我利用 AIGC 和 AI Coding，把产品形态、用户场景、交互逻辑和体验节奏提前具象化，让产品先变成一个可以被理解、讨论和判断的对象。</p>
        </div>
        <div class="gf-decision-line"><span>Concept</span><i></i><span>Experience</span><i></i><span>Decision</span></div>
      </section>

      <section class="gf-levers reveal">
        <div class="gf-levers-head">
          <span class="gf-section-label">HOW I VALIDATE</span>
          <h3>三个核心杠杆</h3>
        </div>
        <div class="gf-lever-list">
          <article class="gf-lever">
            <div class="gf-lever-index"><b>01</b><small>Technology → User Value</small></div>
            <h4>把技术能力翻译成体验</h4>
            <p>把模型、算法、硬件等抽象技术能力，重新组织成用户能够直接理解和感知的产品体验，而不是停留在 Feature List。</p>
          </article>
          <article class="gf-lever">
            <div class="gf-lever-index"><b>02</b><small>Killer Scenario</small></div>
            <h4>用故事验证存在价值</h4>
            <p>把产品能力放进具体人物、场景和任务里，用 Experience Story 验证：用户为什么需要它、什么时候真正有价值。</p>
          </article>
          <article class="gf-lever">
            <div class="gf-lever-index"><b>03</b><small>Shared Decision Object</small></div>
            <h4>让未来产品成为共同讨论对象</h4>
            <p>用视觉稿、Storyboard、Video 和 Interactive Prototype，把不同角色脑中的“产品想象”变成同一个可见对象，推动跨团队对齐、MVP 取舍和下一步投入决策。</p>
          </article>
        </div>
      </section>

      <section class="gf-ai-lever reveal">
        <div class="gf-ai-lever-head">
          <span class="gf-section-label">AI AS LEVER</span>
          <h3>AIGC + AI Coding，让产品概念更早变得可见、可体验。</h3>
        </div>
        <div class="gf-ai-grid">
          <article class="gf-ai-column">
            <small>AIGC</small>
            <h4>Make the invisible visible</h4>
            <p>把抽象产品概念快速变成可见的产品形态、场景和体验故事。</p>
            <ul><li>Product Form</li><li>Scenario</li><li>Storyboard</li><li>Concept Film</li><li>Experience Moment</li></ul>
          </article>
          <article class="gf-ai-column">
            <small>AI CODING</small>
            <h4>Make the concept explorable</h4>
            <p>把静态表达进一步做成可浏览、可交互、可快速迭代的产品概念体验。</p>
            <ul><li>Interactive Prototype</li><li>Product Story</li><li>Hotspot Exploration</li><li>Experience Simulation</li></ul>
          </article>
        </div>
        <div class="gf-ai-outcome">Shared Product Understanding → Decision</div>
      </section>

      <section class="gf-case reveal">
        <div class="gf-case-head">
          <span class="gf-section-label">CASE STUDY</span>
          <h3>光帆 AI 全感耳机</h3>
          <p>我用这套方法，把一款仍处在概念阶段的 AI 穿戴产品，提前制作成完整的视觉、场景、动态体验和线上 Interactive Concept。</p>
        </div>
        <div class="gf-live-preview">
          <a href="https://lightwear-ai-hardware-v3.vercel.app/files/hardware-hotspots-value-v3.html" target="_blank" rel="noreferrer" aria-label="打开光帆 AI 全感耳机 Interactive Concept" style="position:absolute;inset:0;display:block;z-index:1;">
            <img src="./assets/guangfan-concept-cover.svg" alt="光帆 AI 全感耳机 Interactive Concept 封面" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block;">
          </a>
          <div class="gf-preview-topbar">
            <span>lightwear-ai-hardware-v3.vercel.app / Interactive Concept</span>
            <a href="https://lightwear-ai-hardware-v3.vercel.app/files/hardware-hotspots-value-v3.html" target="_blank" rel="noreferrer">Explore Interactive Concept ↗</a>
          </div>
        </div>
      </section>

      <section class="gf-role reveal">
        <div class="gf-role-head">
          <span class="gf-section-label">MY ROLE</span>
          <h3>我在这个项目里做了什么？</h3>
        </div>
        <div class="gf-role-list">
          <article><span>01</span><div><strong>Define · 定义产品概念</strong><p>把技术输入转成清晰的产品价值、用户问题和 Experience Proposition。</p></div></article>
          <article><span>02</span><div><strong>Visualize · 用 AIGC 快速具象化</strong><p>把抽象概念转成产品形态、用户场景、Storyboard 和动态体验。</p></div></article>
          <article><span>03</span><div><strong>Prototype · 用 AI Coding 搭建 Experience Simulation</strong><p>把静态概念进一步做成可浏览、可交互、可迭代的线上产品体验。</p></div></article>
          <article><span>04</span><div><strong>Align · 推动跨团队共同判断</strong><p>让产品、算法、硬件、设计和决策者围绕同一个产品对象讨论，而不是围绕各自脑中的想象讨论。</p></div></article>
        </div>
      </section>

      <footer class="gf-footer reveal">
        <span>04 / VALIDATE · AI Product Concept Validation</span>
        <a href="https://lightwear-ai-hardware-v3.vercel.app/files/hardware-hotspots-value-v3.html" target="_blank" rel="noreferrer">Explore Interactive Concept ↗</a>
      </footer>
    `;
  };

  hydrateUiSkillLab();
  hydrateGuangfan();

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
