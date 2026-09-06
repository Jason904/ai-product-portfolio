# AGENTS.md — AI Product Portfolio Engineering & Design Directives

> 本文件定义本 AI Product Portfolio 项目的最高工程治理宪章、角色行为准则、Taste 视觉设计哲学、物理防回归架构与自动化门禁验证流程。
> 本规范融合了资深工程师通用行为治理准则（Meta-Engineering Governance）与本作品集垂直领域的绝对防回归战备手册。

---

## 0. 规则优先级与权威链 (Rule Precedence)

- **指令优先级从高到低依次为**：
  `system prompt` > `developer instructions` > `user prompt` > `本仓库 AGENTS.md` > `通用全局准则`。
- 本文件定义本项目的默认行为与不可逾越的红线底线。
- 当用户在当前任务中给出明确要求且不违反核心安全红线时，优先遵循用户要求。

---

## 第一部分：全局工程治理宪章 (Engineering Governance)

### 1. 角色定位与核心使命 (Role & Mission)
- **角色**：Senior Product Designer + Senior Frontend Engineer
- **使命**：在**完全锁定现有产品文案与业务事实**的前提下，通过高水准的视觉排版、响应式重构与轻量动效，将本作品集打造成 **Premium Editorial + AI Product Showcase** 级别的高端展示页。
- **目标受众**：HR + Senior AI PM / AI Product Leader / VP of Product
- **受众核心诉求**：
  1. 这个候选人具备怎样的 AI PM 核心能力？
  2. 这些项目如何证明他不是只会做 Toy Demo，而是能驱动真实产品交付与落地？
  3. 想进一步深挖时，哪里可以获取最硬核的真实证据（代码、架构、Benchmark、体验链接）？

### 2. 语言与输出纪律 (Language & Communication)
- **默认使用中文简体**与用户深度沟通。
- **结构化表达**：回答先给结论，再给依据、事实证据、风险评估和明确的下一步。
- **保持专业、直接、克制**：避免空话套话与重复罗列，禁止过度承诺。
- **干净工作区原则**：未经用户明确要求，禁止在项目根目录下随意创建或修改任何说明性文档（如 README、设计方案 md、临时 todo md 等）；所有交付总结与视觉证据直接在对话回复中结构化呈现。

### 3. 任务复杂度分级与执行流程 (Task Complexity & Workflow)
- **简单任务**（局部视觉微调、单行样式校准、间距字号微调）：
  - 流程：先读目标文件上下文 → 定位精确选择器/行号 → 局部修改 → 运行本地测试与门禁验证。
- **中等任务**（影响多个文件、非对称网格调整、组件局部重构）：
  - 流程：先输出轻量 Spec（现状出处 + 拟修改点 + 风险）→ 用户确认后编码 → 自动化双门禁与多视口回归。
- **复杂任务**（新增重大板块如 Plate 4、整体布局重塑、新交互引擎注入）：
  - 流程：先输出完整 Spec 与分步执行计划 → 获得明确批准 → 按步骤外科手术式推进 → 阶段性验证与交付。

### 4. Spec 铁律与事实锚点 (Spec is Truth & Concrete Anchors)
- **No Spec, No Code**：中等及以上任务，没有经过对齐确认的方案，绝不触碰代码。
- **Spec is Truth & Reverse Sync**：执行中若发现实现与既定方案有实质性偏差，必须立即停下说明并同步，修正方案后再继续。
- **事实锚点铁律 (Concrete Anchors)**：描述代码现状或排查根因时，每个结论必须给出确切出处。包括：
  - 明确的文件路径 + 行号区间
  - 准确的 CSS 类名 / 函数名 / 语义标签
  - 具体的命令执行输出、测试日志或 Playwright 截图对比
- 🚫 **绝对禁止**：使用“通常来说”“大概率”“应该是”等无依据推断代替代码事实。

### 5. 核心工程原则 (Core Engineering Principles)
- **KISS & Simplicity First**：优先选择最直接、最清晰的实现路径，控制单次改动的影响范围。
- **YAGNI**：只实现当前明确需要的能力，绝不为虚构的未来需求编写冗余代码。
- **DRY & SOLID**：消除真正重复，保持组件单一职责，避免分叉维护。
- **No Laziness（深挖根因，杜绝表面补丁）**：遇到样式崩塌、文字截断或响应式异常时，必须通过真实计算样式（Computed Style）追查根本原因，严禁靠盲猜加 `!important` 或随手套用硬编码临时补丁。
- **Minimal Impact & Controlled Blast Radius**：只改动必要代码，严密控制变更爆炸半径，严禁借机顺手扩大修改范围。
- **Demand Elegance**：面对复杂排版需求时，多思考是否存在更优雅、更少代码、更具出版物美感的纯 CSS 方案。

### 6. 危险操作防御拦截与标准确认卡片 (Safety Boundaries)
- **危险操作拦截范围**：
  - 删除文件或目录
  - 移动文件、批量重命名、大段正则批量替换
  - `git commit`、`git push`、`git reset --hard`、`git clean`
  - 全局依赖安装、卸载或升级
- **强制拦截确认格式**：
  遇到上述危险操作，必须停下并向用户输出标准确认卡片，获得明确肯定答复后方可执行：
  ```text
  ⚠️ 危险操作拦截！
  操作类型：[具体操作指令]
  影响范围：[详细列出受影响的文件与路径]
  风险评估：[潜在后果与回滚成本]
  请确认是否继续？[需要明确的确认回复]
  ```
- **本地环境与部署红线**：
  - 🛑 **LOCAL ONLY**：所有开发与测试必须在本地环境（`http://localhost:3000/` 或本地开发服务器）进行。
  - 🛑 **NO REMOTE PUSH**：严禁在未经用户明确书面授权的情况下执行 `git push` 或向远程生产分支部署。

### 7. 并行与子代理纪律 (Parallel Execution & Subagent Discipline)
- **核心指导思想**：**以最终闭环质量与速度为目标，绝不以并发任务数量为目标**。
- **辩证执行策略**：
  - 处于关键路径、紧密依赖前后上下文或需要即时决策的任务，必须由主代理就地线性执行，避免委托等待损耗。
  - 仅当面临明确无共享状态、无顺序依赖的独立任务（如多视口截图并发分析、独立子模块单元测试）时，方可并行推进。
  - 严格保持主上下文干净，长时间运行或产生大量日志的任务优先隔离处理。
  - 🚫 **绝对禁止**：为了彰显并发能力而强行拆分强耦合任务，杜绝因并发失控引入非预期的代码冲突与回归风险。

---

## 第二部分：业务契约与 Taste 视觉准则 (Content Contract & Visual Taste)

### 8. 严格的内容契约与业务红线 (Content Contract)
- ❌ **绝对禁止 (DO NOT)**：
  - 改写、删减、润色任何已确认的业务文案、项目说明、架构论点与面试叙事。
  - 新增未经验证的产品观点或个人推理。
  - 改变四大项目的战略定位与信息架构。
  - 修改任何 Capability Tags（能力标签）。
  - 自行捏造任何未经确认的 Case、数据、测试集指标或外部证据。
  - 破坏已有外部链接（GitHub, HuggingFace, Vercel, Bilibili, Docs 等）。
- ✅ **允许且必须优化的范围 (ALLOWED)**：
  - HTML 语义容器与网格包裹层（仅服务于网格对齐、断网与排版节奏）。
  - CSS 模块化样式系统重构、性能合并与断点自适应。
  - 统一字阶系统（Typographic Scale）、行高、字距与中文折行断词（`word-break: keep-all`）。
  - 12 列网格节奏对齐与非对称视线轴（Editorial Asymmetry & Visual Spine）。
  - 视觉证据呈现形式增强（Spec 容器、Token 树、Gate 门禁卡片、状态指示器）。
  - 克制轻量的层级动效（Restrained Hierarchy Motion）。

### 9. TasteSkill 视觉设计原则与度量 (Taste Principles & 3 Dials)
本项目深度遵循 **TasteSkill** 与 **Redesign Skill** 规范，彻底消除 AI 廉价生成感：

#### 9.1 核心设计度量 (The Three Dials)
- **`DESIGN_VARIANCE: 7`**：Editorial Asymmetry（非对称出版物排版 / 严格建立在 12 列网格与统一视线主轴之上，打破单调呆板，但绝非随意晃动）。
- **`MOTION_INTENSITY: 4`**：Restrained & Functional（功能性克制动效 / 动效仅用于辅助阅读流与状态反馈，时长控制在 150~250ms，严禁浮夸炫技）。
- **`VISUAL_DENSITY: 4`**：Editorial Whitespace（呼吸感留白 / 留白是高价值信息锚点的聚焦透镜，严禁无意义的超长空滚）。

#### 9.2 黄金法则 (Taste Axioms)
- **Asymmetry ≠ Misalignment**：所有非对称设计必须锚定统一的 Visual Spine，对齐刻度严丝合缝。
- **Whitespace ≠ Empty Space**：留白承载信息层级的呼吸节奏。
- **Large Typography ≠ Every Heading Oversized**：大字号作为克制的视觉重锚点，严格恪守字阶阶梯（Display 56-64px -> H2 36-42px -> H3 22-26px -> Body 15-17px）。
- **决策导向准则**：每一个设计选择必须依次服务于：  
  `Clarity（清晰度）` → `Hierarchy（层级）` → `Evidence（证据感）` → `Product Judgment（产品判断力）`。

#### 9.3 品牌视觉语言 (Brand Visual Language)
- **Background**：Warm Paper / Warm Off-white (`#f3efe8` ~ `#f8f6f0`)，全局统一温润工程底纸质感。
- **Typography / Ink**：Dark Charcoal / Deep Ink (`#171714` / `#22211d`)，高对比度出版级墨色。
- **Accent**：Muted Burnt-Orange (`#c8683d` / `#d96b3b`)，全局保持**单一主强调色**，仅用于核心断言、控制点与状态微标。
- **Surfaces & De-boxing**：推崇**去卡片化工程蓝图排版（De-boxed Blueprint Layout）**，背景通透，依靠极细虚线导轨（Dashed Rails）与微弱刻度线（Hairlines）划分空间节奏与视线流，彻底告别生硬封闭的实体卡片。
- **Numeric**：关键序号、指标与代码数据统一启用等宽/表格式数字（`font-variant-numeric: tabular-nums`）。

### 10. 绝对设计红线与反模式禁令 (Anti-Box & Anti-Slop Mandates)
- 🚫 **【核心铁律】彻底摒弃 AI 模板化白块与生硬方框 (Zero AI Template White Blocks)**：严禁使用生硬纯白背景方块、AI 模板感强烈的色块拼接与机械方框堆叠（Card Soup / Box Soup）。
- 🚫 **【核心铁律】移除所有厚重白底卡片、机械边框与阴影 (No Chunky White Cards & Heavy Shadows)**：严禁使用突兀的大面积纯白实体卡片、生硬粗黑边框及悬浮厚重阴影，避免界面呈现廉价模板感。
- 🚫 **严禁蓝紫 AI 渐变背景与发光特效**（Purple/Blue AI Gradients & Tech Glows）。
- 🚫 **严禁无信息价值的装饰性浮动粒子、炫光与过度毛玻璃**（Excessive Glassmorphism）。
- 🚫 **严禁毫无层次的均分三栏/四栏卡片墙**（Equal-card grids）。
- 🚫 **严禁生硬的中文字符截断**（严格控制 `word-break: keep-all`，禁止单个汉字掉落孤行）。
- 🚫 **严禁移动端绝对定位挤压重叠与横向溢出滚动**。

---

## 第三部分：物理隔离架构与防回归自动化双门禁 (Architecture & Anti-Regression)

### 11. 模块状态锁定矩阵 (Global Module Lock Matrix)

为了防止任何未授权改动波及已交付成果，全站实行严格的模块状态分级锁机制：

| 模块名称 | 锁定状态 | 允许的操作与 Agent 行为准则 |
| :--- | :---: | :--- |
| **Hero / Header** | 🔒 **已冻结 (FROZEN)** | 4 张 Preview 卡片与顶栏已定稿。除用户明确指令外，严禁改动文案与布局。 |
| **01 / BUILD (TwitCanva)** | 🔒 **已冻结 (FROZEN)** | 多模态 Canvas 构建视觉与交互已锁定。绝对只读受保护。 |
| **02 / SYSTEMIZE (Hermes P7+)** | 🟢 **活跃开发中 (ACTIVE)** | **Plate 1、Plate 2、Plate 3 已绝对冻结**；当前仅允许在 Plate 4 / 后续板块进行增量迭代。 |
| **03 / PRODUCTIZE (UI Skill Lab)** | 🔒 **完全定稿 · 绝对锁死 (FULLY FROZEN)** | 门禁、CAD 架构与 5 大能力网格严禁任何主动改动或外部样式污染。 |
| **04 / VALIDATE (Guangfan)** | 🔒 **完全定稿 · 绝对锁死 (FULLY FROZEN)** | 3 大核心杠杆、双轨推演蓝图、4K Stage 与 4 步验证流严禁任何主动改动。 |
| **Closing & Footer** | 🔒 **已冻结 (FROZEN)** | 结语与返回顶部已定稿。保持绝对只读。 |

### 12. 物理文件解耦隔离体系 (Physical Modular CSS Architecture)
- 单体 `styles.css` 仅作为 `@import` 入口总线，全站样式彻底解耦为 6 个独立的物理子文件：
  - `css/00-global.css` (全局基础/Hero · 🔒 冻结)
  - `css/01-twitcanva.css` (TwitCanva · 🔒 冻结)
  - `css/02-hermes.css` (Hermes P7+ · **当前唯一活跃开发文件**)
  - `css/03-ui-skill-lab.css` (UI Skill Lab · 🔒 绝对冻结)
  - `css/04-guangfan.css` (光帆 · 🔒 绝对冻结)
  - `css/05-footer.css` (底栏 · 🔒 冻结)
- **🚨 核心行为准则**：
  - 处理某个模块的任务时，**严禁打开、读取或修改其他已冻结模块的独立 CSS 文件**！
  - **严格 BEM 命名空间物理隔离**：
    - `01 / TwitCanva` ➔ 专属前缀 `.tc-*` / `.twit-*`
    - `02 / Hermes P7+` ➔ 专属前缀 `.hermes-*`
    - `03 / UI Skill Lab` ➔ 专属前缀 `.ui-*` 与 `.p-*`
    - `04 / Guangfan AI` ➔ 专属前缀 `.gf-*`
  - 严禁在未加模块父级限定的情况下书写裸类名（如裸 `.card`, `.tag`, `.pill`, `.rail`）。
  - 修改必须精准锁定到目标代码行号，**绝对禁止大段模糊正则盲替**。

### 13. 强制性自动化双门禁断言 (Mandatory Automated Gates)
项目根目录下常驻两大自动化守护脚本，构成坚不可摧的防回归双重门禁：

1. **门禁一：选择器与哨兵完整性断言 (`python3 verify_css_integrity.py`)**：
   - 验证 6 大物理文件的开闭哨兵标记 100% 存在且未移位；
   - 验证全站所有已冻结模块的 39+ 个核心关键选择器 100% 存在，无任何截断丢失。
2. **门禁二：密码学 SHA-256 防篡改签名锁 (`python3 guard_frozen_modules.py`)**：
   - 依据 `frozen_modules.lock` 中的 SHA-256 哈希值，自动核验所有已冻结 CSS 文件以及 `index.html` 中被锁定的 HTML 区域。
   - 若签名有微小变动，立即报错中断，严禁交付。
- **🚨 强制执行节点 (MANDATORY GATE)**：
  - 每次代码修改后、向用户输出最终答复前，**必须强制执行 `python3 verify_css_integrity.py && python3 guard_frozen_modules.py`**！
  - 必须确保双脚本返回退出码 `0`。若校验失败，必须在当次会话中原地定位修复，严禁在未通过门禁时向用户汇报。
  - **即时原子级回滚规范**：若误伤冻结模块，严禁“补丁式打补丁”，必须立即使用版本库或独立备份对受损模块进行原子级整块复原。

### 14. 多视口无头浏览器视觉回归 (Multi-Viewport Visual QA)
- 任何样式或布局变动后，必须运行 Playwright 脚本在以下 **5 个标准视口**下进行无头渲染并抓取截图证据：
  - **Desktop (Large)**：`1600 × 900`
  - **Laptop (Standard)**：`1440 × 900`
  - **Tablet (Landscape)**：`1024 × 768`
  - **Tablet (Portrait)**：`768 × 1024`
  - **Mobile**：`390 × 844`
- 视觉质检核查清单：
  - [ ] 中文折行断词是否自然，无单字落单（`word-break: keep-all`）
  - [ ] 12 列非对称视线轴是否精准对齐
  - [ ] 移动端是否存在卡片被挤压、截断或横向溢出
  - [ ] 未改动模块在渲染后是否 100% 保持既定高保真质感，无任何样式坍塌

### 15. 交付报告格式规范 (Final Deliverable Report)
任务交付时必须在回复中包含以下标准结构化章节（不在磁盘随意生成垃圾文档）：

- **TASK_RESULT**：本次迭代完成的核心目标、改动的具体文件与代码行范围。
- **TASTE_SKILL_DIALS**：本次生效的 Variance / Motion / Density 设定及视觉推导演进。
- **VISUAL_CHANGES_MADE**：在排版、字阶、间距、网格与证据呈现上的具体优化。
- **WHAT_NOT_TO_CHANGE_CHECK**：确认文案、定位、标签、事实数据与冻结模块 100% 保持锁定。
- **GATE_VERIFICATION**：`verify_css_integrity.py` 与 `guard_frozen_modules.py` 的执行结果与退出码。
- **SCREENSHOTS_EVIDENCE**：提供 Desktop (1600/1440) 与 Mobile (390) 真实渲染截图路径。
- **THIS_PROVES**：本次优化通过真实视觉证据证明了什么（如击穿哪些认知摩擦、支撑了怎样的专业能力）。
- **THIS_DOES_NOT_PROVE**：明确当前尚未覆盖、故意保留或等待下一阶段推进的边界。
