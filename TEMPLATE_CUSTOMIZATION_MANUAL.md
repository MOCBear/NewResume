# ResumeCraft 模板与样式定制手册

## 1. 引言

本手册旨在为 ResumeCraft 用户提供全面的模板和样式定制指南，帮助您创建个性化的专业简历。通过本文档，您将学习如何修改现有模板、自定义样式、添加图像、创建自定义信息模块，以及解决常见问题。

## 2. 模板修改指南

### 2.1 模板结构

每个模板都是一个独立的 React 组件，位于 `src/components/templates/` 目录下。模板文件结构如下：

```jsx
// 模板组件结构
export default function TemplateName({ data }) {
  const { personal, education, experience, skills, projects, awards } = data;
  
  return (
    <div className="template-name">
      {/* 模板内容 */}
    </div>
  );
}
```

### 2.2 数据变量

模板接收一个 `data` 属性，包含以下数据结构：

```javascript
{
  personal: {
    name: "姓名",
    title: "职业标题",
    email: "邮箱",
    phone: "电话",
    location: "所在地",
    website: "个人网站",
    linkedin: "LinkedIn",
    github: "GitHub",
    summary: "个人简介"
  },
  education: [
    {
      school: "学校",
      degree: "学位",
      major: "专业",
      startDate: "开始日期",
      endDate: "结束日期",
      gpa: "GPA",
      description: "描述"
    }
  ],
  experience: [
    {
      company: "公司",
      position: "职位",
      startDate: "开始日期",
      endDate: "结束日期",
      description: ["职责1", "职责2"],
      achievements: ["成就1"]
    }
  ],
  skills: {
    hard: ["技能1", "技能2"],
    soft: ["软技能1"],
    languages: ["语言1"],
    tools: ["工具1"]
  },
  projects: [
    {
      name: "项目名称",
      description: "项目描述",
      technologies: ["技术1"],
      url: "项目链接",
      role: "角色"
    }
  ],
  awards: [
    {
      name: "奖项名称",
      issuer: "颁发机构",
      date: "获得日期",
      description: "描述"
    }
  ]
}
```

### 2.3 组件使用示例

**添加新模板**：

1. 在 `src/components/templates/` 创建新文件，例如 `CustomTemplate.jsx`
2. 复制现有模板结构并修改内容
3. 在 `src/components/Preview.jsx` 中添加模板映射

**示例：创建自定义模板**

```jsx
// src/components/templates/CustomTemplate.jsx
export default function CustomTemplate({ data }) {
  const { personal, education } = data;
  
  return (
    <div className="template-custom">
      <header className="resume-header">
        <h1>{personal.name}</h1>
        <p>{personal.title}</p>
      </header>
      
      {education.length > 0 && (
        <section className="education">
          {education.map((edu, index) => (
            <div key={index}>
              <h3>{edu.school}</h3>
              <p>{edu.degree}</p>
            </div>
          ))}
        </section>
      )}
      
      <style>{`
        .template-custom {
          padding: 40px;
          font-family: Arial, sans-serif;
        }
        .resume-header {
          text-align: center;
          margin-bottom: 30px;
        }
      `}</style>
    </div>
  );
}
```

**在 Preview.jsx 中添加模板**：

```jsx
// src/components/Preview.jsx
const templateMap = {
  minimal: MinimalTemplate,
  creative: CreativeTemplate,
  // ... 其他模板
  custom: CustomTemplate  // 添加新模板
};
```

## 3. 样式定制指南

### 3.1 颜色方案

**使用颜色预设**：
- 在样式定制面板中选择预设颜色方案
- 或手动输入颜色代码（HEX、RGB、HSL）

**CSS 变量**：

```css
:root {
  --primary: #6366F1;      /* 主色调 */
  --accent: #06B6D4;      /* 强调色 */
  --bg-dark: #0F172A;      /* 背景色 */
  --text-primary: #F8FAFC;  /* 主文字色 */
}
```

### 3.2 排版

**字体选择**：
- 支持 10+ 种字体，包括思源黑体、Arial、Georgia 等
- 字体应用于整个简历

**字体大小与行高**：
- 字号：12-20px
- 行高：1.2-2.0

**示例**：

```css
.resume {
  font-family: var(--font, 'Noto Sans SC');
  font-size: var(--font-size, 14px);
  line-height: var(--line-height, 1.6);
}
```

### 3.3 间距

**间距选项**：
- 紧凑 (compact)
- 标准 (normal)
- 宽松 (relaxed)

**区块间距**：
- 可调整 16-40px 之间的间距

**CSS 实现**：

```css
.section {
  margin-bottom: var(--gap, 24px);
  padding: var(--padding, 16px);
}
```

### 3.4 响应式设计

**断点**：
- 桌面端：≥1200px
- 平板端：768px - 1199px
- 移动端：<768px

**媒体查询示例**：

```css
@media (max-width: 768px) {
  .resume {
    padding: 20px;
  }
  
  .section {
    margin-bottom: 16px;
  }
}
```

## 4. 图像优化指南

### 4.1 格式要求

**支持的格式**：
- JPG/JPEG
- PNG
- WebP
- SVG

**推荐格式**：
- 照片：JPG（压缩率高）
- 图标/标志：SVG（矢量清晰）

### 4.2 大小限制

**文件大小**：
- 个人照片：≤200KB
- 图标/标志：≤50KB

**尺寸建议**：
- 头像：150x150px
- 标志：100x100px

### 4.3 放置选项

**添加个人照片**：

1. 在 `personal` 数据中添加 `photo` 字段
2. 在模板中添加图像元素

**示例**：

```jsx
// 模板中添加照片
<div className="photo-container">
  {personal.photo && (
    <img src={personal.photo} alt="个人照片" className="profile-photo" />
  )}
</div>

// CSS 样式
.profile-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--accent);
}
```

## 5. 自定义信息模块

### 5.1 代码熟练度

**实现步骤**：
1. 在 `skills` 数据中添加 `codeProficiency` 字段
2. 创建熟练度组件
3. 在模板中集成

**示例**：

```jsx
// 代码熟练度组件
function CodeProficiency({ skills }) {
  return (
    <div className="code-proficiency">
      <h3>代码熟练度</h3>
      {skills.codeProficiency?.map((skill, index) => (
        <div key={index} className="skill-item">
          <span className="skill-name">{skill.name}</span>
          <div className="skill-bar">
            <div 
              className="skill-level" 
              style={{ width: `${skill.level}%` }}
            />
          </div>
          <span className="skill-percent">{skill.level}%</span>
        </div>
      ))}
    </div>
  );
}

// 数据结构
{
  skills: {
    codeProficiency: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 75 },
      { name: "React", level: 85 }
    ]
  }
}
```

### 5.2 技能评估

**实现步骤**：
1. 添加 `skillAssessments` 字段
2. 创建评估组件
3. 集成到模板

**示例**：

```jsx
// 技能评估组件
function SkillAssessment({ assessments }) {
  return (
    <div className="skill-assessment">
      <h3>技能评估</h3>
      {assessments?.map((item, index) => (
        <div key={index} className="assessment-item">
          <span>{item.skill}</span>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={i < item.rating ? 'star-filled' : 'star-empty'}
              >★</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
```

### 5.3 学习进度追踪

**实现步骤**：
1. 添加 `learningProgress` 字段
2. 创建进度组件
3. 集成到模板

**示例**：

```jsx
// 学习进度组件
function LearningProgress({ progress }) {
  return (
    <div className="learning-progress">
      <h3>学习进度</h3>
      {progress?.map((item, index) => (
        <div key={index} className="progress-item">
          <span className="course-name">{item.course}</span>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${item.progress}%` }}
            />
          </div>
          <span className="progress-text">{item.progress}%</span>
        </div>
      ))}
    </div>
  );
}
```

## 6. 示例和代码片段

### 6.1 自定义模板示例

**现代技术风格模板**：

```jsx
// 现代技术风格模板特点
- 深色背景
- 代码风格元素
- 科技感设计
- 强调技能和项目

// 关键 CSS
.template-tech {
  background: #0f172a;
  color: #e2e8f0;
  font-family: 'Courier New', monospace;
}

.skill-item {
  background: rgba(99, 102, 241, 0.2);
  border: 1px solid rgba(99, 102, 241, 0.3);
  padding: 4px 10px;
  border-radius: 4px;
}
```

### 6.2 样式定制示例

**创建渐变背景**：

```css
/* 在高级 CSS 编辑器中添加 */
.resume-header {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
  padding: 40px;
  text-align: center;
}

.section-title {
  background: linear-gradient(90deg, var(--primary), transparent);
  padding: 8px 16px;
  border-left: 4px solid var(--accent);
  color: var(--text-primary);
}
```

### 6.3 响应式设计示例

**移动端优化**：

```css
/* 响应式布局 */
@media (max-width: 768px) {
  .resume {
    padding: 20px;
  }
  
  .item-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  
  .skill-tags {
    flex-direction: column;
  }
  
  .skill-tag {
    width: 100%;
    text-align: center;
  }
}
```

## 7. 故障排除

### 7.1 常见问题

**问题 1: 模板切换不生效**
- 原因：模板组件未正确添加到 templateMap
- 解决：检查 Preview.jsx 中的模板映射

**问题 2: 样式更改不显示**
- 原因：CSS 优先级问题或缓存
- 解决：使用更具体的选择器或清除浏览器缓存

**问题 3: 导出的 PDF 样式错误**
- 原因：CSS 兼容性问题
- 解决：使用内联样式或确保 CSS 选择器兼容性

**问题 4: 响应式布局异常**
- 原因：媒体查询顺序错误
- 解决：确保媒体查询按正确顺序排列（从大到小）

### 7.2 调试技巧

1. **检查浏览器控制台**：查看 JavaScript 错误
2. **使用开发者工具**：检查元素样式和布局
3. **简化测试**：逐步添加样式和组件
4. **备份原始模板**：修改前复制原始文件

## 8. 最佳实践

### 8.1 保持一致性

- **颜色方案**：使用 2-3 种主色调，确保对比度
- **排版**：保持字体家族和大小一致
- **间距**：统一区块间距和对齐方式
- **图标**：使用一致的图标风格

### 8.2 性能优化

- **图像优化**：使用适当大小和格式
- **CSS 精简**：移除未使用的样式
- **组件拆分**：合理拆分大型组件
- **避免过度动画**：适度使用动画效果

### 8.3 兼容性考虑

- **浏览器兼容**：测试主流浏览器
- **打印友好**：确保 PDF 导出效果
- **无障碍**：使用适当的颜色对比度和语义化 HTML

### 8.4 维护建议

- **版本控制**：使用 Git 管理模板版本
- **文档化**：记录自定义修改
- **模块化**：将通用组件抽象为可复用模块
- **定期更新**：保持模板和样式的现代性

## 9. 结论

通过本手册的指导，您现在应该能够：
- 理解和修改现有模板结构
- 自定义简历样式以匹配个人品牌
- 优化图像和布局
- 创建个性化信息模块
- 解决常见的定制问题

记住，简历是您专业形象的重要组成部分。通过精心的定制，您可以创建一份脱颖而出的专业简历，展示您的技能和经验。

**祝您定制愉快！** 🎨
