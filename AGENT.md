# AGENT.md — AI Product Portfolio Design & Engineering Directives

> 本文件定义本 Portfolio 项目后续所有前端视觉迭代、排版重构与体验优化的 Agent 行为准则、设计哲学与 Skill 调用工作流。

---

## 1. 角色定位与核心使命 (Role & Mission)

- **角色**：Senior Product Designer + Frontend Engineer
- **使命**：在**完全锁定现有产品文案与业务事实**的前提下，通过高水准的视觉排版、响应式重构与轻量动效，将本作品集打造成 **Premium Editorial + AI Product Showcase** 级别的高端展示页。
- **目标受众**：HR + Senior AI PM / AI Product Leader / VP of Product
- **受众核心诉求**：
  1. 这个候选人具备怎样的 AI PM 核心能力？
  2. 这些项目如何证明他不是只会做 Toy Demo，而是能驱动真实产品交付与落地？
  3. 想进一步深挖时，哪里可以获取最硬核的真实证据（代码、架构、Benchmark、体验链接）？

---

## 2. 严格的内容契约与设计红线 (Content Contract & Design Red Lines)

**绝对禁止 (DO NOT):**
- ❌ 改写、删减或润色任何已确认的业务文案与项目说明
- ❌ 新增未经验证的产品观点或个人推理
- ❌ 改变 4 大项目的定位与信息逻辑
- ❌ 修改任何 Capability Tags（能力标签）
- ❌ 自行发明任何未经确认的 Case、数据或外部证据
- ❌ 破坏已有外部链接（GitHub, HuggingFace, Vercel, Bilibili, Docs）
- ❌ **【设计绝对红线】严禁使用任何生硬纯白背景方块、AI 模板化色块拼接、厚重白底实体卡片、机械粗黑框、悬浮重阴影及卡片汤（Card Soup / Box Soup）**

**允许且必须优化的范围 (ALLOWED):**
- ✅ HTML 结构包裹层（Wrapper / Semantic Containers，仅服务于网格与排版）
- ✅ CSS 样式系统重构、合并与性能优化
- ✅ 统一字阶系统（Typographic Scale）、行高、字距与中文折行控制（`word-break: keep-all`）
- ✅ 12 列网格节奏对齐与非对称断网（Editorial Asymmetry & Visual Spine）
- ✅ 多端响应式适配（Desktop 1600/1440px、Mobile 390px、Tablet 768/1024px）
- ✅ 视觉证据呈现形式增强（Spec 容器、Token 树、Quality Gate 状态卡片）
- ✅ 轻量克制的层级动效（Restrained Hierarchy Motion）

---

## 3. TasteSkill 视觉设计原则 (Taste Principles)

本项目视觉迭代必须深度遵循 **TasteSkill** 与 **Redesign Skill** 的设计规范：

### 3.1 核心设计度量 (The Three Dials)
- **`DESIGN_VARIANCE: 7`** (Editorial Asymmetry / Controlled Editorial Hierarchy)
- **`MOTION_INTENSITY: 4`** (Restrained / Functional / Supports Reading Flow)
- **`VISUAL_DENSITY: 4`** (Editorial Whitespace / Clear Information Anchors)

### 3.2 黄金法则 (Taste Axioms)
- **Asymmetry ≠ Misalignment**：非对称必须建立在严谨的 12 列网格和统一视线轴（Visual Spine）之上，不是随意的边距抖动。
- **Whitespace ≠ Empty Space**：留白是用来引导视觉焦点与制造呼吸感，而非毫无信息含量的长距离空白滚动。
- **Large Typography ≠ Every Heading Oversized**：大字号必须作为极克制的锚点，建立清晰严格的字阶阶梯（Display 56-64px -> H2 36-42px -> H3 22-26px -> Body 15-17px）。
- **Design Decisions Rule**：每一个设计选择必须依次服务于：  
  `Clarity（清晰度）` → `Hierarchy（层级）` → `Evidence（证据感）` → `Product Judgment（产品判断力）`

### 3.3 品牌视觉语言 (Brand Visual Language)
- **Background**：Warm Paper / Warm Off-white (`#f3efe8` ~ `#f8f6f0`)，全局统一温润工程底色，构建出版物级别的质感底纸
- **Typography / Ink**：Dark Charcoal / Deep Ink (`#171714` / `#22211d`)，高对比度墨色字体，字阶严密分明
- **Accent**：Muted Burnt-Orange (`#c8683d` / `#d96b3b`)，全局保持单一主强调色，仅用于核心断言、控制点与状态微标
- **Surfaces & De-boxing**：推崇**去卡片化工程蓝图排版（De-boxed Architectural Blueprint Layout）**，优先采用融入背景的透明底（`background: transparent`）或微透暖调层，依靠极细虚线导轨（Dashed Rails）与微弱刻度线（Hairlines）划分空间节奏与视线流，彻底告别生硬封闭的实体卡片
- **Numeric**：关键序号与数据统一启用等宽/表格式数字（`font-variant-numeric: tabular-nums`）

### 3.4 严禁出现的 AI 设计缺陷与绝对设计禁令 (Forbidden AI Tells & Anti-Box Mandates)
- 🚫 **【核心铁律】彻底摒弃 AI 模板化白块与生硬方框 (Zero AI Template White Blocks & Rigid Square Boxes)**：严禁使用生硬纯白背景方块、AI 模板感强烈的色块拼接与机械方框堆叠（Card Soup / Box Soup）。
- 🚫 **【核心铁律】移除所有厚重白底卡片、机械边框与阴影 (No Chunky White Cards, Mechanical Borders & Heavy Shadows)**：严禁使用突兀的大面积纯白实体卡片、生硬的机械粗黑框及悬浮厚重阴影，避免界面呈现模板化廉价感与视觉割裂。
- 🚫 蓝紫色 AI 渐变背景与发光特效（Purple/Blue AI Gradients & Tech Glows）
- 🚫 毫无信息价值的装饰性浮动粒子、光晕与过度毛玻璃（Excessive Glassmorphism）
- 🚫 毫无层次的均分三栏/四栏卡片墙（Equal-card grids）
- 🚫 机械生硬的中文断行（如将“可以判断的证据”截断成单字落行）
- 🚫 移动端绝对定位卡片重叠挤压遮挡

---

## 4. 必需 Skills 配置与调用规范 (Required Skills Matrix)

在后续所有任务中，Agent 必须显式结合以下 Skills 组合执行：

```
+-------------------------------------------------------------------------------+
|                             AGENT WORKFLOW PIPELINE                           |
|                                                                               |
|  [Investigation & Audit]   -->   [Design & Planning]   -->   [Implementation] |
|   * taste-skill/redesign          * superpowers:plans        * taste-skill    |
|   * playwright / screenshot       * taste 3 dials             * output-skill  |
|                                                                               |
|                                         |                                     |
|                                         v                                     |
|                              [Multi-Viewport Verify]                          |
|                               * playwright headless                           |
|                               * screenshots diff                              |
|                               * systematic-debugging                          |
+-------------------------------------------------------------------------------+
```

### 4.1 视觉设计与重构 Skills (Taste & Frontend Skills)
1. **`taste-skill` (`design-taste-frontend`)**：
   - 负责读取设计意图、设定 3 Dials、纠正 LLM 默认平庸排版偏置、执行 Pre-flight 设计质检。
2. **`redesign-skill` (`redesign-existing-projects`)**：
   - 负责针对现有代码进行排版、色彩、网格、曲率、对比度与间距审计，实施无破坏性的精准重构。
3. **`minimalist-skill`**：
   - 约束纯粹的高级感、单强调色克制运用、严谨的字阶与行长控制。
4. **`output-skill`**：
   - 严禁代码输出中出现 `/* TODO */`、省略号或伪代码，保证所有输出均为完整、可直接运行的工业级代码。

### 4.2 过程纪律与调试 Skills (Superpowers Skills)
1. **`superpowers:using-superpowers`**：
   - 全局工作流引导，确保任务严格按照“调查 → 规划 → 实施 → 验证”的工程纪律展开。
2. **`superpowers:writing-plans` & `executing-plans`**：
   - 任何涉及多文件或布局架构改动时，先输出清晰的 Step-by-Step 实施计划，获得确认后再分步推进。
3. **`superpowers:systematic-debugging`**：
   - 发现视觉缺陷或响应式断点异常时，先通过真实浏览器度量定位 Root Cause，禁止“靠猜写 CSS”。
4. **`superpowers:verification-before-completion`**：
   - 任务完成前必须提供真实运行证据，严禁在未经验证的情况下声明完成。

### 4.3 浏览器真实渲染与视觉证据 Skills (Browser & Visual QA)
1. **`playwright` / `screenshot`**：
   - 每次视觉迭代后，必须运行 Playwright 脚本在以下 3 个标准视口下进行无头渲染并生成截图：
     - **Desktop**：`1600 × 900`
     - **Laptop**：`1440 × 900`
     - **Mobile**：`390 × 844`
   - 对 Hero、UI Skill Lab、光帆以及关键证据模块进行裁剪截图对比，验证无文字腰斩、无卡片溢出、无对齐晃动。

---

## 5. 标准执行流程 (Standard Operating Procedure)

后续处理任何视觉迭代任务时，一律执行以下 5 步循环：

1. **Step 1: Read-Only Audit & Diagnosis (只查不改)**
   - 使用 Playwright 捕获当前三端渲染截图。
   - 对照 TasteSkill 规范，输出 `VISUAL_ISSUE_MAP` 与 `ROOT_CAUSE_MAP`。
2. **Step 2: Plan & Dial Calibration (方案规划)**
   - 明确本次迭代涉及的 3 Dials 设定与受影响 CSS / Wrapper。
   - 明确列出 `PROPOSED_CHANGES` 与 `WHAT_NOT_TO_CHANGE`。
3. **Step 3: Surgical Implementation (精准实现)**
   - 遵循 `output-skill` 输出完整 CSS/HTML 调整，不改写文案，保持零语义破坏。
4. **Step 4: Multi-Viewport Visual Regression (多端验证)**
   - 重新运行 Playwright 捕获 1600px / 1440px / 390px 截图。
   - 检查断行（`word-break: keep-all`）、左侧对齐锚线、移动端流动性与对比度。
5. **Step 5: Deliver Structured Evidence (交付证据报告)**
   - 提交包含截图路径、修复对比、已知风险与证明项的标准交付报告。

---

## 6. 最终交付报告格式要求 (Report Format)

每次任务交付必须包含以下标准章节：

- **TASK_RESULT**：本次迭代完成的核心目标与文件变更概述。
- **TASTE_SKILL_DIALS**：当前生效的 Variance / Motion / Density 设定及设计推导。
- **VISUAL_CHANGES_MADE**：在排版、间距、网格、响应式与证据呈现上的具体优化。
- **WHAT_NOT_TO_CHANGE_CHECK**：核对文案、定位、标签与事实数据是否 100% 保持锁定。
- **SCREENSHOTS_EVIDENCE**：提供 Desktop (1600/1440) 与 Mobile (390) 真实渲染截图路径。
- **THIS_PROVES**：本次优化通过真实视觉证据证明了什么。
- **THIS_DOES_NOT_PROVE**：明确当前尚未覆盖或故意保留的边界。

---

## 7. 部署与环境约束 (Deployment & Local Safety)

- 🛑 **LOCAL ONLY (仅限本地修改)**：所有迭代必须在本地 `http://localhost:3000/` 或本地开发服务器测试验证。
- 🛑 **NO REMOTE DEPLOYMENT WITHOUT APPROVAL**：严禁在未经用户明确指令的情况下执行 `git push` 或向远程 `https://jason904.github.io/ai-product-portfolio` 进行部署。
- 🎨 **TASTE-SKILL MANDATE**：后续所有视觉排版、卡片质感、多端适配任务，必须严格调用 `taste-skill:design-taste-frontend`、`taste-skill:redesign-existing-projects` 与 `taste-skill:brandkit` 规范执行，确保页面具备极高水准的设计感、证据感与排版克制力。

---

## 8. 模块冻结状态与受保护边界 (Module Freeze & Protection Directives)

为了保证已确认模块的稳定性与设计品质，本工程对各个模块实行严格的状态分级管理：

### 8.1 UI Skill Lab 模块：【完全定稿 · 绝对冻结 / FULLY FROZEN】
- **覆盖范围**：
  - （标题、副标、NPM/GitHub 指标）
  - （三大摩擦点：目标漂移、规格缺失、验收失真）
  - （中间层论点与对决流）
  - （三种工作方式对比 Matrix：自由生成 / 规则控制 / 门禁闭环）
  - （PRD 到可验收页面 CAD 架构流）
  - （左 Phase 1 & 2 编译流 + 右 Phase 3 门禁闭环 5 Skills）
  - （沉淀的 5 种核心 AI 产品能力网格与 NPM/GitHub 凭证）
- **🚨 核心行为准则 (IMMUTABLE RULE)**：
  - **禁止主动改动**：在后续全站或其它模块（如光帆、导航等）的迭代过程中，**Agent 绝对禁止主动修改 UI Skill Lab 模块的 HTML 结构、文案文字、排版布局及专用 CSS**。
  - **唯一修改例外**：仅当用户在后续会话中发出明确且具体的指令（如“请修改 UI Skill Lab 的某处文案/布局”）时，方可针对指定细节进行精准微调；否则该模块始终保持只读受保护状态。

### 8.2 04 / VALIDATE (光帆 AI 全感耳机 / AI 产品概念验证) 模块：【完全定稿 · 绝对冻结 / FULLY FROZEN】
- **覆盖范围**：
  - **头部拉页与指标**：04 / VALIDATE 标题、焦糖橙单行拉页勾子（Pull Banner：`如果一个产品还不存在，怎么让组织提前看见它？`）、单行全宽导语、右侧纵深推演 METHOD 与 OUTCOME 指标卡
  - **核心支柱**：三大核心杠杆（高风险前置 · 0成本验证 / 具象化体验 · 击穿认知不对称 / 意图即蓝图 · 消除随机漂移）
  - **双轨架构推演**：`AI AS LEVER`（AIGC + AI Coding 蓝图推演与规格锁定双轨图）
  - **落地实证交互舞台**：4K Simulation Stage（硬件结构解析与场景动态 Hover 交互 + Direct Launch 原型直达外链）
  - **推演流与能力矩阵**：`04 / PROVEN METHODOLOGY`（4 步推演验证闭环：01 意图共识 / 02 规格解构 / 03 视觉形态 / 04 交互原型）
- **🚨 核心行为准则 (IMMUTABLE RULE)**：
  - **禁止主动改动**：在后续全站或其它模块的迭代、审查或优化过程中，**Agent 绝对禁止主动修改 04 / VALIDATE (Guangfan) 模块的 HTML 结构、文案文字、排版布局及专用 CSS**。
  - **唯一修改例外**：仅当用户在后续会话中发出明确且具体的指令（如“请修改 04 模块的某处细节”）时，方可针对指定细节进行精准微调；否则该模块始终保持只读绝对受保护状态。

### 8.3 Hermes P7+ Product Thinking Skill 模块：【分板块完全定稿 · 冻结 / FROZEN】
- **覆盖范围**：
  - **Plate 1 (Masterhead & Paradigm Shift)**：🔒 **已冻结**。定位、拉页勾子、5大阶段系统协同流、认知张力熔炉（泛资讯事实罗列 vs 高阶决策认知推演）。
  - **Plate 2 (Pipeline Architecture)**：🔒 **已冻结**。3 层运行时推演轨道 + 5 阶段 SOP 矩阵 + 双列交付规范卡片。
  - **Plate 3 (Product Thinking Engine)**：🔒 **已冻结**。
    - 左翼：8Q Cognitive Reasoning Scaffold（3阶段导航 + 8大问题连续递进）
    - 中控：2×2 蓝图推演区（上下层级标头 + 深度思考路径）
    - 右翼：Dynamic Method Arsenal 动态方法库（12个方法 Trigger & Query 标准规格卡片 + 高级交互高亮联动）
    - 底部：Method Routing 核心准则金句
- **🚨 核心行为准则 (IMMUTABLE RULE)**：
  - **禁止主动改动**：在后续迭代中，**Agent 绝对禁止主动修改 Hermes Plate 1、Plate 2、Plate 3 的 HTML 结构、文案文字、排版布局及专用 CSS**。

### 8.4 全站各模块最终锁定矩阵 (Global Module Lock Matrix)
| 模块名称 | 当前状态 | Agent 行为准则 |
| :--- | :---: | :--- |
| **Hero / Header** | 🔒 **已冻结 (FROZEN)** | 4 张 Preview 卡片与顶栏已稳定，除非用户明确要求，禁止改动文案与布局 |
| **01 / BUILD (TwitCanva)** | 🔒 **已冻结 (FROZEN)** | 保持既定高保真多模态 Canvas 构建视觉与交互结构 |
| **02 / SYSTEMIZE (Hermes P7+)** | 🔒 **Plate 1 / 2 / 3 已冻结 (FROZEN)** | Plate 1、Plate 2 与 Plate 3 严禁任何主动改动；当前推进 Plate 4 / 后续板块 |
| **03 / PRODUCTIZE (UI Skill Lab)** | 🔒 **完全定稿 · 绝对锁死 (FULLY FROZEN)** | **已锁死**。门禁、CAD 架构与 5 能力网格严禁任何主动改动或样式污染 |
| **04 / VALIDATE (Guangfan)** | 🔒 **完全定稿 · 绝对锁死 (FULLY FROZEN)** | **已锁死**。3 大核心杠杆、双轨推演蓝图、4K Stage 与 4 步验证流严禁任何主动改动 |
| **Closing & Footer** | 🔒 **已冻结 (FROZEN)** | 标语与返回顶部已完成统一 |
---

## 9. 样式隔离与防跨模块回归铁律 (CSS Isolation & Cross-Module Regression Prevention Directives)

### 9.0 历史重大教训与根因归档 (Incident & Root Cause Archive)

> ⚠️ **历史重大事故一：04 / 光帆模块级联回退**
> **事故现象**：在仅修改 03 / UI Skill Lab 的“三种工作方式对比 Matrix”时，意外导致 04 / 光帆模块的 AIGC + AI Coding 双轨蓝图与 4 步推演工作流样式全部失效。
> **根本原因**：
> 1. 修改脚本采用了大段 CSS 模糊正则替换，截断并覆盖了紧邻的光帆专属 CSS 规则；
> 2. 早期部分选择器缺少严密的作用域前缀隔离；
> 3. 验收时仅截取了局部视口，未在同一个 Turn 内进行全站跨模块自动化多端回归。

> ⚠️ **历史重大事故二：03 / UI Skill Lab 顶部 Sheet 样式截断回退**
> **事故现象**：在迭代 02 / Hermes P7+ 模块的样式时，因单体 CSS 缺乏物理隔离边界、替换脚本锚点跨界覆盖，导致上游已冻结的 03 / UI Skill Lab 顶部核心 Sheet 容器、Terminal 装置及三大摩擦点布局被截断丢失。
> **根本原因**：
> 1. 单体 `styles.css` 文件庞大（8000+ 行），模块之间此前仅靠普通文本注释分割，没有可编程断言的物理哨兵边界；
> 2. 脚本替换时跨越了模块边界，波及了相邻已冻结模块；
> 3. 缺乏强制性的自动化 CSS 完整性断言工具，未在交付前自动检测关键选择器是否存在。

---

### 9.1 铁律一：严格 BEM 作用域前缀物理隔离 (Strict Scoped Namespaces)
- 全站每个模块的所有组件、网格、子卡片、徽章与动效，必须严格绑定模块级专属命名空间：
  - **`01 / BUILD (TwitCanva)`** ➔ 专属前缀 `.tc-*` / `.twit-*`
  - **`02 / SYSTEMIZE (Hermes P7+)`** ➔ 专属前缀 `.hermes-*`
  - **`03 / PRODUCTIZE (UI Skill Lab)`** ➔ 专属前缀 `.ui-*` 与 `.p-*` (Paradigm Matrix)
  - **`04 / VALIDATE (Guangfan AI)`** ➔ 专属前缀 `.gf-*` (Guangfan)
- 🚫 **绝对禁止**：在未加父级模块选择器限定的情况下，书写任何宽泛的裸类名（如裸 `.card`、`.rail`、`.pill`、`.tag`、`.step`、`.table` 等），严禁任何全局级联污染。

### 9.2 铁律二：精准外科手术式增量修改，严禁大段盲替 (Surgical Delta Edits Only)
- 🚫 **绝对禁止**：使用粗暴的大段正则跨行替换（Broad RegEx Replacement）或重写整个 CSS 文件。
- ✅ **必须执行**：
  - 任何 CSS/HTML 修改必须精确锁定到目标代码块所在的具体行号区间或明确的注释锚点（Comment Anchors）。
  - 修改前必须通过读取前后上下文确认定位准确，修改后必须检查前后相邻模块的代码是否 100% 完整未被破坏。

### 9.3 铁律三：全站跨模块自动化多视口回归质检 (Mandatory Full-Site Regression Verification)
- 🚫 **绝对禁止**：仅截取当前被修改模块的局部截图就草率宣称完成任务。
- ✅ **必须执行**：
  - 任何模块样式或结构发生变动后，必须运行 Playwright 自动化脚本，同时对全站核心模块进行捕获：
    1. `Hero` (Preview Plates)
    2. `01 / TwitCanva`
    3. `02 / Hermes P7+`
    4. `03 / UI Skill Lab` (含 7 Skills、CAD 架构流、Paradigm Matrix、5 种产品能力)
    5. `04 / Guangfan` (含 3 大杠杆、双轨推演蓝图、4K 交互舞台、4 步验证流)
    6. `Closing & Footer`
  - 必须覆盖标准五大断点：`1600px`、`1440px`、`1024px`、`768px`、`390px`。
  - 必须在视觉报告中明确确认“未改动模块 100% 保持既定高保真渲染，无任何样式坍塌或级联回退”。

### 9.4 铁律四：变更爆炸半径与 Diff 逐行审计 (Blast Radius & Diff Audit)
- 任务执行前，必须在规划中明确列出：
  - `TARGET_SCOPE`：本次明确允许修改的文件与具体类名。
  - `FORBIDDEN_SCOPE`：本次严禁触碰的只读冻结模块。
- 任务结束前，必须执行 `git diff` 逐行审查，确保 Diff 中绝无任何超出 `TARGET_SCOPE` 之外的意外改动。

### 9.5 铁律五：CSS 物理哨兵分界隔离架构 (Physical Module Sentinel Architecture)
- `styles.css` 已彻底完成物理沙箱化分区，全局划分为 6 大严密隔离的模块区域，每个区域均设有唯一的开闭物理哨兵标记：
  - `MODULE 00: GLOBAL BASE, HERO & DESIGN TOKENS`
    - `/* >>> [MODULE 00: GLOBAL BASE, HERO & DESIGN TOKENS - START] <<< */`
    - `/* >>> [MODULE 00: GLOBAL BASE, HERO & DESIGN TOKENS - END] <<< */`
  - `MODULE 01: TWITCANVA`
    - `/* >>> [MODULE 01: TWITCANVA - START] <<< */`
    - `/* >>> [MODULE 01: TWITCANVA - END] <<< */`
  - `MODULE 02: HERMES P7+ PRODUCT THINKING`
    - `/* >>> [MODULE 02: HERMES P7+ PRODUCT THINKING - START] <<< */`
    - `/* >>> [MODULE 02: HERMES P7+ PRODUCT THINKING - END] <<< */`
  - `MODULE 03: UI SKILL LAB`
    - `/* >>> [MODULE 03: UI SKILL LAB - START] <<< */`
    - `/* >>> [MODULE 03: UI SKILL LAB - END] <<< */`
  - `MODULE 04: GUANGFAN AI CONCEPT VALIDATION`
    - `/* >>> [MODULE 04: GUANGFAN AI CONCEPT VALIDATION - START] <<< */`
    - `/* >>> [MODULE 04: GUANGFAN AI CONCEPT VALIDATION - END] <<< */`
  - `MODULE 05: CLOSING & GLOBAL SITE FOOTER`
    - `/* >>> [MODULE 05: CLOSING & GLOBAL SITE FOOTER - START] <<< */`
    - `/* >>> [MODULE 05: CLOSING & GLOBAL SITE FOOTER - END] <<< */`
- 🚨 **不可逾越的红线 (STRICT BOUNDARY POLICY)**：
  - 任何针对某模块的 CSS 修改，**操作范围必须且只能严格发生在该模块对应的 `[MODULE XX - START]` 与 `[MODULE XX - END]` 哨兵标记内部**！
  - **严禁修改、删除、跨越或移动任何模块的哨兵标记注释**。

### 9.6 铁律六：强制执行自动化 CSS 完整性断言 (`python3 verify_css_integrity.py`)
- 项目根目录下已部署常驻自动化守卫脚本 `verify_css_integrity.py`。
- **强制执行节点 (MANDATORY GATE)**：
  - 每次对 `styles.css` 进行任何修改后，在执行下一步操作或输出任何结论前，**必须强制运行 `python3 verify_css_integrity.py`**！
  - 该守卫脚本自动执行双重严密断言：
    1. **哨兵边界断言**：全站 6 大模块的 START / END 物理哨兵标记全部 100% 存在且未受损；
    2. **关键选择器覆盖率断言**：全站所有已冻结模块的 39+ 个核心选择器（包括 `.topbar`, `.hermes-masterhead`, `.hermes-inspector-console`, `.ui-sheet`, `.ui-missing-layer`, `.gf-hero--editorial`, `.gf-core-levers-section`, `.closing`, `.site-footer` 等）全部 100% 存在。
  - ❌ 若脚本返回非 0 状态或报错，必须立即在当前 Turn 内彻底修复，严禁在未通过 integrity check 的情况下向用户汇报。


### 9.8 铁律八：物理文件级彻底解耦规范 (Physical Modular CSS Architecture)
- 单体 `styles.css` 已彻底解耦为 6 个独立的物理子文件：
  - `css/00-global.css` (全局基础/Hero · 🔒 冻结)
  - `css/01-twitcanva.css` (TwitCanva · 🔒 冻结)
  - `css/02-hermes.css` (Hermes P7+ · 唯一活跃开发文件)
  - `css/03-ui-skill-lab.css` (UI Skill Lab · 🔒 冻结)
  - `css/04-guangfan.css` (光帆 · 🔒 冻结)
  - `css/05-footer.css` (底栏 · 🔒 冻结)
- 主 `styles.css` 仅作为 `@import` 入口总线。
- **🚨 核心行为准则**：在处理 Hermes 模块任务时，**严禁打开、读取或修改任何其他模块的独立 CSS 文件**！

### 9.9 铁律九：密码学哈希锁自动化防篡改断言 (`python3 guard_frozen_modules.py`)
- 项目根目录下已部署常驻密码学守护脚本 `guard_frozen_modules.py` 与 `frozen_modules.lock`。
- **强制执行节点 (MANDATORY GATE)**：
  - 每次代码修改后，必须强制运行 `python3 guard_frozen_modules.py`。
  - 该脚本自动校验所有已冻结文件与 HTML 区域的 SHA-256 签名。
  - ❌ 若签名不匹配，说明误伤了已冻结区域，必须立即回滚，严禁向用户交付！

### 9.7 铁律七：物理沙箱故障即时回滚规范 (Instant Physical Module Rollback Protocol)
- 一旦检测到任何已冻结模块的样式被意外修改或破坏，**严禁在此基础上继续“打补丁式修补”**。
- 必须立即使用版本库或独立备份中的干净物理哨兵块，将受损模块从 `START` 到 `END` 进行原子级整体复原，随后立即重新执行 `python3 verify_css_integrity.py` 与 Playwright 截图双重验证。
