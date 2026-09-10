# AI Product Portfolio — Master Site (index.html) Visual Design Audit & Hierarchy Forensic Report

> **审计执行时间**：2026-09-10  
> **审计环境**：`http://localhost:3000/index.html` (标准视口 1440 × 900 & 移动视口 390 × 844)  
> **审计基准**：TasteSkill (Variance: 7, Motion: 4, Density: 4)、出版物级非对称排印、去卡片化蓝图规范  
> **审计目标**：全面排查全站字阶层级、留白间隙、物理分割线、视线轴与跨模块呼吸感，输出精确客观的病灶定位，为后续精细化整固提供明确事实锚点。

---

## 一、推测创作者期待的终局效果（Target Vision Alignment）

结合此前与创作者在 `01 HERO`、`01 PROBLEM`、`02 PLAN` 的多轮高标准打磨经验，创作者所期望的绝不是“每个小节各自为战、拼凑堆砌的卡片流”，而是**高度统一、一气呵成的瑞士出版物级 AI 产品经理作品集（Editorial Masterwork & Industrial Blueprint）**：

1. **统一严谨的字阶天梯（Typographic Scale Hierarchy）**：
   - 全站所有一级章节均拥有统一的 **52~56px 英文全大写 Display 视觉锚点**；
   - 所有二级中文主标题收敛在 **28~30px / 850 极限黑体**，字形挺拔，段落行高紧密从容（1.3~1.35），绝对杜绝字号层级倒挂；
   - 技术元数据、标尺与微标全部统一为 **10.5~11px Monospace 等宽字阶**。
2. **数学级节奏的垂直呼吸系统（Rhythmic Whitespace Cadence）**：
   - **大项目换章呼吸（Inter-Project Gap）**：控制在 **100px ~ 120px**，留白有呼吸感但绝不造成“超长空滚断层”；
   - **子章节推演节律（Inter-Plate Gap）**：控制在 **56px ~ 72px**，阅读视线自然随滚动向前推演；
   - 彻底消灭 **200px+ 的视觉大坑** 与 **0px 紧贴无留白** 两种极端失衡。
3. **100% 贯通的去卡片化工程蓝图语言（De-boxed Blueprint Consistency）**：
   - 全站统一使用温润工程图纸质感底纸（`#f4efe9` / `#f3efe8`）；
   - 全站所有大节、子节一律使用标准的 **1px 极细发丝线（`rgba(23, 23, 20, 0.12)`）与等宽工程标尺** 划分物理边界；
   - 关键概念高亮（焦橙色微底线、粗墨色）语法全站 100% 连贯。

---

## 二、四大核心系统性视觉缺陷汇总（Global Systematic Defects）

### 缺陷 1：字阶系统（Typographic Scale）跳跃脱节与层级倒挂
- **现象**：
  - `01 HERO` (56px Display / 29px 中文主标)、`01 PROBLEM` (52px Display / 28px 中标)、`02 PLAN` (56px Display / 30px 中标) 已经高度收敛在同一套现代字阶中；
  - 但滚动到 **`03 CROWD`** 时，英文 Display 跌落为 **49.68px**，中文主标题暴跌至 **22.32px / 600 字重**（极度单薄）；更严重的是，其子级 H3 `角色与编队分开控制` 居然高达 **37.44px**！**子标题比主标题还要大 15px，出现严重的视觉层级倒挂**；
  - 滚动到 **`04 POSE`、`05 SYSTEM`、`06 THESIS`** 时，统领全章的 56px 英文 Display 标题突然消失，直接以一段长句中文 H1 开篇（34~36px），造成前三章与后四章的视觉节奏严重脱节；
  - 跨项目对比中，`Hermes` 的项目大标题仅 **37.6px**，而 `UI Skill Lab` 的项目大标题高达 **64.8px**，字号相差近一倍。

### 缺陷 2：垂直留白间隙（Vertical Spacing）忽大忽小、断层脱节
- **现象**：
  - **TwitCanva 尾部到 Hermes 的“空白巨坑”**：`06 THESIS` 底部拥有 `padding-bottom: 88px`，而 `hermes` 顶部拥有 `padding-top: 122.4px`，两者直接相加导致中间空隙高达 **210.4px**，视线流严重断裂，用户需要空滚近屏才能看到下一个项目；
  - **光帆尾部到 Closing 结语的超大断层**：`guangfan` 底部拥有 122.4px 留白，加上 20px margin，再加上 `closing` 的 158.4px `padding-top`，总空隙高达 **300.8px**，几乎相当于小半个视口的空白浪费；
  - **TwitCanva 内部子章节留白失衡**：`05 SYSTEM` 外部容器的 `padding-top` 为 **0px**（标题贴边），而 `06 THESIS` 的 `padding-top` 仅 **32px**，对比 `01 HERO` 与 `01 PROBLEM` 的 72px 显得局促紧绷。

### 缺陷 3：物理分割线（Section Dividers）的“时有时无”
- **现象**：
  - 顶部 `top ➔ work ➔ 01 HERO ➔ 01 PROBLEM ➔ 02 PLAN ➔ 03 CROWD` 均有精细统一的 `border-top: 1px solid rgba(23, 23, 20, 0.12)`；
  - 但从 **`03 CROWD ➔ 04 POSE`**、**`04 POSE ➔ 05 SYSTEM`**、**`05 SYSTEM ➔ 06 THESIS`**，板块顶部的分割线全部为 **`0px none`（缺失）**，物理划分标准前后不一致；
  - 到了 `Hermes`、`UI Skill Lab`、`Guangfan`，又重新恢复了 `1px solid` 分割线。

### 缺陷 4：内容容器最大宽度（Container Max-Width）存在微幅跳跃
- **现象**：
  - TwitCanva 内部全系采用 `min(1240px, calc(100% - 48px))`；
  - 而 Hermes、UI Skill Lab、Guangfan 采用 `.project-shell`（`max-width: 1400px; padding: 0 40px;`，内容净宽 1320px）；
  - 这导致从 TwitCanva 滚动到 Hermes 时，视线两侧的排版边距发生了 80px 的轻微外扩，两套布局体系没有实现完全的视线轴贯通。

---

## 三、逐板块逐像素实测取证表（Computed Style Audit Table）

| 章节 / 板块 ID | 视口绝对位置 (Top / Height) | 上留白 (Padding-Top) | 下留白 (Padding-Bottom) | 板块顶部分割线 (Border-Top) | 核心主标题实测 (Font Size / Weight) | 当前存在的具体视觉细节问题 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`#top` (Hero)** | 0px / 1485px | 0px | 0px | 0px none | H1: 63.4px / 780 | 正常。首屏视觉预览卡片视差位移运作良好。 |
| **`#work` (Intro)** | 1485px / 338px | 112px | 88px | 1px solid rgba(23,23,20,0.12) | H2: 54.7px / 780 | 正常。过渡段落墨色浓郁。 |
| **`#twitcanva-h1-r1` (01 HERO)** | 1823px / 3098px | 72px | 57.6px | 1px solid rgba(23,23,20,0.12) | H1: 56px / 850<br>H2: 29px / 850 | **已定稿**。字阶标准，工匠印签与 16:9 画布节奏舒适。 |
| **`#twitcanva-problem` (01 PROBLEM)** | 4921px / 1465px | 72px | 43.2px | 1px solid rgba(23,23,20,0.12) | H1: 52px / 850<br>H2: 28px / 850 | **已定稿**。1左3右失控台与双核解剖、定性碑文节奏扎实。 |
| **`#twitcanva-control-plan-r1` (02 PLAN)** | 6386px / 1525px | 51.8px | 72px | 1px solid rgba(23,23,20,0.12) | H1: 56px / 850<br>H2: 30px / 850 | **已定稿**。四维解耦轨与 15 节点工作台无缝衔接。 |
| **`#twitcanva-crowd-r1` (03 CROWD)** | 7911px / 2656px | 86.4px | 80px | 1px solid rgba(23,23,20,0.12) | H1: 49.7px / 800<br>H2: 22.3px / 600<br>**H3: 37.4px / 700** | 🚨 **严重问题**：H2 中文主标太小太细（22px 600），下方 H3 子标题（37.4px）反而比主标题大，层级严重倒挂。 |
| **`#twitcanva-pose-r1` (04 POSE)** | 10567px / 3630px | 60px | 40px | **0px none** | H1: 34px / 900 (中文长句)<br>H2: 20px / 800 | 🚨 **问题**：缺失顶部分割线；缺失统领性的 56px 英文 Display 标题；底部 40px 留白偏紧。 |
| **`#twitcanva-system-r1` (05 SYSTEM)** | 14197px / 4255px | **0px** | **0px** | **0px none** | H1: 36px / 900 (中文长句)<br>H2: 28px / 900 | 🚨 **问题**：外层容器 paddingTop 为 0，内容紧贴上一节；缺失顶部发丝分割线；缺少大写英文 Display。 |
| **`#twitcanva-thesis-r1` (06 THESIS)** | 18452px / 2489px | **32px** | 88px | **0px none** | H1: 36px / 850<br>H2: 22px / 750 | 🚨 **问题**：上留白仅 32px 偏局促；缺失分割线；底部 88px 与下方 Hermes 顶部 122px 叠加形成 **210px 空白巨坑**。 |
| **`#hermes` (02 SYSTEMIZE)** | 20941px / 7737px | 122.4px | 122.4px | 1px solid rgba(23,23,20,0.12) | H2: 37.6px / 800<br>H3: 18.4px / 750 | 🚨 **问题**：项目大标题（37.6px）相较于 UI Skill Lab（64.8px）偏小；顶部留白叠加过大。 |
| **`#ui-skill-lab` (03 PRODUCTIZE)** | 28678px / 5936px | 122.4px | 122.4px | 1px solid rgba(23,23,20,0.12) | H2: 64.8px / 850<br>H3: 29.6px / 800 | 架构完整，CAD 蓝图质感极佳；与 Hermes 的标题字号有较大代差。 |
| **`#guangfan` (04 VALIDATE)** | 34614px / 3059px | 122.4px | 122.4px | 1px solid rgba(23,23,20,0.12) | H2: 49.0px / 850<br>H3: 46.1px / 850 | 🚨 **问题**：底部到 Closing 区域总空隙高达 **300.8px**，存在严重的过度空滚。 |
| **`#closing` (Closing)** | 37694px / 515px | 158.4px | 115.2px | 1px solid rgba(23,23,20,0.12) | H2: 74.9px / 780 | 正常大结语，但上方留白需要适当收拢。 |

---

## 四、推荐的针对性整固路线图（整改规划）

按照“先定位分析、获得确认后再分步实施”的原则，后续建议按以下三个阶梯推进治理：

### 第一阶段：解决致命的层级倒挂与物理断层（High Priority）
1. **修正 `03 CROWD` 的字阶倒挂**：
   - 将 `03 CROWD` 中文主标提至统一的 **29px / 850 墨黑**；
   - 将其内部过大的 H3（37.4px）收敛至 **20~22px / 800**，彻底理顺父子层级。
2. **切除 210px 与 300px 的“垂直空白巨坑”**：
   - 将 `06 THESIS ➔ Hermes` 之间的总间距从 210px 压缩至标准的 **110px**；
   - 将 `Guangfan ➔ Closing` 之间的总间距从 300px 压缩至标准的 **120px**。
3. **补齐物理发丝分割线**：
   - 为 `04 POSE`、`05 SYSTEM`、`06 THESIS` 顶部补上标准的 `border-top: 1px solid rgba(23, 23, 20, 0.12)`，形成全站连贯的章节边界。

### 第二阶段：统一 TwitCanva 后半段的大章题头语法（Medium Priority）
1. 为 `04 POSE`、`05 SYSTEM` 梳理出与前三章对齐的 **英文 Display 锚点 ＋ 中文主标题** 双阶梯排版，消除风格脱节感；
2. 规范 `05 SYSTEM` 与 `06 THESIS` 的顶部内边距（统一在 64px 呼吸感）。

### 第三阶段：全站项目级标题微校准（Polish Priority）
1. 适度微调 Hermes 的主标题视觉比重，缩小其与 UI Skill Lab（64.8px vs 37.6px）的夸张视觉代差，使四大项目在全站视线中平起平坐。

---
*本报告已原子级提交至 Git 版本库，待确认具体整改优先级后开始外科手术式执行。*
