# Resume Builder - 项目规范文档

## 1. 项目概述

**项目名称**: ResumeCraft - 智能简历生成器

**项目类型**: 单页Web应用 (SPA)

**核心功能**: 通过对话式交互收集用户信息，提供多主题模板和强大的CSS自定义功能，支持实时预览和多种格式导出。

**目标用户**: 求职者、学生、转职者、需要创建专业简历的用户

---

## 2. UI/UX 规范

### 2.1 布局结构

**主布局**: 左右分栏设计
- **左侧面板** (40%): 信息收集与自定义控制区
- **右侧面板** (60%): 实时简历预览区
- **移动端**: 上下堆叠布局，标签页切换

**响应式断点**:
- 桌面端: ≥1200px (双栏布局)
- 平板端: 768px - 1199px (可折叠侧边栏)
- 移动端: <768px (单栏 + 底部导航)

### 2.2 视觉设计

**色彩系统**:
- 主色 (Primary): #6366F1 (Indigo-500)
- 次色 (Secondary): #8B5CF6 (Violet-500)
- 强调色 (Accent): #06B6D4 (Cyan-500)
- 背景色: #0F172A (Slate-900) - 深色主题
- 卡片背景: #1E293B (Slate-800)
- 文字主色: #F8FAFC (Slate-50)
- 文字次色: #94A3B8 (Slate-400)
- 边框色: #334155 (Slate-700)
- 成功色: #10B981 (Emerald-500)
- 警告色: #F59E0B (Amber-500)
- 错误色: #EF4444 (Red-500)

**字体系统**:
- 标题字体: "Clash Display", "Noto Sans SC", sans-serif
- 正文字体: "Satoshi", "Noto Sans SC", sans-serif
- 代码字体: "JetBrains Mono", monospace
- 字号层级: 
  - H1: 32px / 2rem
  - H2: 24px / 1.5rem
  - H3: 20px / 1.25rem
  - Body: 16px / 1rem
  - Small: 14px / 0.875rem
  - Caption: 12px / 0.75rem

**间距系统** (8px 基数):
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

**视觉效果**:
- 圆角: 8px (按钮), 12px (卡片), 16px (模态框)
- 阴影: 
  - sm: 0 1px 2px rgba(0,0,0,0.3)
  - md: 0 4px 6px rgba(0,0,0,0.4)
  - lg: 0 10px 15px rgba(0,0,0,0.5)
- 毛玻璃效果: backdrop-filter: blur(12px)
- 渐变: linear-gradient(135deg, #6366F1, #8B5CF6)

### 2.3 组件列表

**核心组件**:
1. **Sidebar** - 侧边导航栏 (模板选择/自定义/导出)
2. **ChatWizard** - 对话式信息收集向导
3. **FormSection** - 表单区块 (个人信息/教育/工作等)
4. **TemplateGallery** - 模板预览画廊
5. **StyleCustomizer** - 样式自定义面板
6. **ResumePreview** - 简历实时预览
7. **ColorPicker** - 颜色选择器
8. **FontSelector** - 字体选择器
9. **SliderControl** - 间距调整滑块
10. **CSSEditor** - CSS代码编辑器
11. **ExportModal** - 导出选项模态框
12. **ProgressBar** - 进度指示器

**组件状态**:
- Default: 默认状态
- Hover: 悬停 (轻微放大 + 颜色变化)
- Active: 激活 (按压效果)
- Disabled: 禁用 (50% 透明度)
- Loading: 加载中 (骨架屏 + 旋转图标)
- Error: 错误 (红色边框 + 提示)

### 2.4 动画效果

- 页面切换: fade + slide (300ms ease-out)
- 按钮悬停: scale(1.02) + 阴影增强 (150ms)
- 卡片进入: staggered fade-up (50ms delay each)
- 对话气泡: slide-in from bottom (200ms)
- 颜色选择: smooth transition (100ms)
- 预览更新: crossfade (150ms)

---

## 3. 功能规范

### 3.1 对话式信息收集流程

**步骤 1: 个人信息**
- 姓名 (必填)
- 职业标题/职位
- 邮箱 (必填)
- 电话
- 位置 (城市/国家)
- 个人网站/作品集链接
- LinkedIn/GitHub
- 个人简介/摘要 (200字内)

**步骤 2: 教育背景** (可多条)
- 学校名称
- 学位/学历
- 专业
- 入学时间 - 毕业时间
- 成绩/荣誉 (可选)
- 描述

**步骤 3: 工作经历** (可多条)
- 公司名称
- 职位名称
- 在职时间
- 职责描述 (bullet points)
- 成就/项目

**步骤 4: 技能特长**
- 硬技能 (标签输入)
- 软技能
- 语言能力
- 工具/软件

**步骤 5: 项目经验** (可多条)
- 项目名称
- 项目描述
- 技术栈
- 项目链接
- 角色/贡献

**步骤 6: 证书/奖项** (可选)
- 证书名称
- 颁发机构
- 获得时间

### 3.2 简历主题模板 (5种+)

1. **简约商务** (Minimal Business)
   - 黑白灰配色
   - 清晰的层次结构
   - 传统布局

2. **创意设计** (Creative Design)
   - 彩色强调
   - 独特排版
   - 现代感强

3. **专业学术** (Academic Professional)
   - 严谨布局
   - 学术风格
   - 强调教育背景

4. **现代技术** (Tech Modern)
   - 深色主题
   - 代码风格元素
   - 科技感

5. **优雅经典** (Elegant Classic)
   - 经典衬线字体
   - 精致细节
   - 正式感

6. **活力创意** (Vibrant Creative)
   - 渐变配色
   - 圆角设计
   - 活泼风格

### 3.3 CSS自定义功能

**基础样式控制**:
- 主题色选择器 (主色/强调色)
- 字体选择 (10+ 字体选项)
- 字号调整 (12-24px)
- 行高调整 (1.2-2.0)
- 间距调整 (紧凑/标准/宽松)
- 圆角风格 (无/小/中/大)

**高级样式**:
- CSS代码编辑器 (带语法高亮)
- 实时预览CSS更改
- 预设CSS片段

### 3.4 数据持久化

- 自动保存到 localStorage
- 手动保存/加载JSON文件
- 清除数据选项

### 3.5 导出功能

- **PDF导出**: 使用 html2pdf.js 或 jspdf
- **HTML导出**: 独立HTML文件 + 内联CSS
- **JSON导出**: 原始数据备份

---

## 4. 技术架构

### 4.1 技术栈

- **框架**: React 18 + Vite
- **状态管理**: React Context + useReducer
- **样式**: CSS Modules + CSS Variables
- **动画**: Framer Motion
- **图标**: Lucide React
- **PDF导出**: html2pdf.js
- **代码编辑**: @monaco-editor/react

### 4.2 项目结构

```
src/
├── components/
│   ├── common/          # 通用组件
│   ├── wizard/         # 对话向导
│   ├── templates/      # 模板组件
│   ├── customizer/     # 自定义面板
│   └── preview/        # 预览组件
├── contexts/           # React Context
├── hooks/              # 自定义Hooks
├── data/               # 静态数据
├── utils/              # 工具函数
├── styles/             # 全局样式
└── App.jsx             # 主应用
```

### 4.3 数据结构

```javascript
{
  personal: { name, title, email, phone, location, website, linkedin, github, summary },
  education: [{ school, degree, major, startDate, endDate, gpa, description }],
  experience: [{ company, position, startDate, endDate, description[], achievements[] }],
  skills: { hard: [], soft: [], languages: [], tools: [] },
  projects: [{ name, description, technologies, url, role }],
  awards: [{ name, issuer, date, description }],
  template: "minimal-business",
  styles: { primaryColor, font, fontSize, lineHeight, spacing, borderRadius }
}
```

---

## 5. 验收标准

### 5.1 功能验收

- [ ] 对话式收集流程完整，可逐步收集所有信息
- [ ] 至少5种模板可切换，切换后预览即时更新
- [ ] 颜色/字体/间距调整实时生效
- [ ] CSS编辑器可输入代码并实时预览效果
- [ ] 数据自动保存到localStorage，刷新后恢复
- [ ] PDF导出功能正常，生成可读的PDF文件
- [ ] HTML导出生成独立的可浏览文件

### 5.2 视觉验收

- [ ] 桌面端双栏布局正确
- [ ] 移动端单栏布局正常，导航可用
- [ ] 颜色符合设计规范
- [ ] 动画流畅，无卡顿
- [ ] 字体加载正确

### 5.3 技术验收

- [ ] 代码模块化，组件职责清晰
- [ ] 无控制台错误
- [ ] 响应式断点正确
- [ ] localStorage 存储/读取正常
