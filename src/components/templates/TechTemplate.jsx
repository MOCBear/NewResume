export default function TechTemplate({ data }) {
  const { personal, education, experience, skills, projects, awards } = data;

  return (
    <div className="template-tech">
      <header className="resume-header">
        <div className="header-bg"></div>
        <div className="header-content">
          <h1 className="name">{personal.name || '您的姓名'}</h1>
          {personal.title && <p className="title">{personal.title}</p>}
          
          <div className="contact-info">
            {personal.email && <span className="contact-item"><span className="icon">{'</>'}</span>{personal.email}</span>}
            {personal.phone && <span className="contact-item"><span className="icon">#</span>{personal.phone}</span>}
            {personal.location && <span className="contact-item"><span className="icon">@</span>{personal.location}</span>}
            {personal.website && <span className="contact-item"><span className="icon">★</span>{personal.website}</span>}
            {personal.github && <span className="contact-item"><span className="icon">⚡</span>{personal.github}</span>}
          </div>
        </div>
      </header>

      {personal.summary && (
        <section className="section">
          <h2 className="section-title"><span className="title-marker"></span>关于我</h2>
          <p className="summary">{personal.summary}</p>
        </section>
      )}

      {education.length > 0 && (
        <section className="section">
          <h2 className="section-title"><span className="title-marker"></span>教育背景</h2>
          {education.map((edu, index) => (
            <div key={index} className="item">
              <div className="item-header">
                <h3 className="item-title">{edu.school}</h3>
                <span className="item-date">{edu.startDate} - {edu.endDate}</span>
              </div>
              <p className="item-subtitle">
                {edu.degree} {edu.major && `· ${edu.major}`}
                {edu.gpa && ` · GPA: ${edu.gpa}`}
              </p>
            </div>
          ))}
        </section>
      )}

      {experience.length > 0 && (
        <section className="section">
          <h2 className="section-title"><span className="title-marker"></span>工作经历</h2>
          {experience.map((exp, index) => (
            <div key={index} className="item">
              <div className="item-header">
                <h3 className="item-title">{exp.company}</h3>
                <span className="item-date">{exp.startDate} - {exp.endDate}</span>
              </div>
              <p className="item-subtitle">{exp.position}</p>
              {exp.description && exp.description.length > 0 && (
                <ul className="item-list">
                  {exp.description.filter(d => d).map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {(skills.hard.length > 0 || skills.soft.length > 0 || skills.tools.length > 0) && (
        <section className="section">
          <h2 className="section-title"><span className="title-marker"></span>技能栈</h2>
          <div className="skills-container">
            {skills.hard.length > 0 && (
              <div className="skill-group">
                <span className="skill-label">硬技能</span>
                <div className="skill-bar">
                  {skills.hard.map((skill, i) => (
                    <span key={i} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            )}
            {skills.soft.length > 0 && (
              <div className="skill-group">
                <span className="skill-label">软技能</span>
                <div className="skill-bar">
                  {skills.soft.map((skill, i) => (
                    <span key={i} className="skill-item soft">{skill}</span>
                  ))}
                </div>
              </div>
            )}
            {skills.tools.length > 0 && (
              <div className="skill-group">
                <span className="skill-label">工具</span>
                <div className="skill-bar">
                  {skills.tools.map((skill, i) => (
                    <span key={i} className="skill-item tool">{skill}</span>
                  ))}
                </div>
              </div>
            )}
            {skills.languages.length > 0 && (
              <div className="skill-group">
                <span className="skill-label">语言</span>
                <div className="skill-bar">
                  {skills.languages.map((skill, i) => (
                    <span key={i} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {projects.length > 0 && (
        <section className="section">
          <h2 className="section-title"><span className="title-marker"></span>项目</h2>
          {projects.map((project, index) => (
            <div key={index} className="item project-item">
              <div className="item-header">
                <h3 className="item-title">{project.name}</h3>
                {project.url && <span className="item-link">{project.url}</span>}
              </div>
              {project.role && <p className="item-subtitle">{project.role}</p>}
              {project.description && <p className="item-description">{project.description}</p>}
              {project.technologies && project.technologies.length > 0 && (
                <div className="tech-stack">
                  {project.technologies.filter(t => t).map((tech, i) => (
                    <code key={i} className="tech-code">{tech}</code>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {awards.length > 0 && (
        <section className="section">
          <h2 className="section-title"><span className="title-marker"></span>证书</h2>
          {awards.map((award, index) => (
            <div key={index} className="item">
              <div className="item-header">
                <h3 className="item-title">{award.name}</h3>
                <span className="item-date">{award.date}</span>
              </div>
              <p className="item-subtitle">{award.issuer}</p>
            </div>
          ))}
        </section>
      )}

      <style>{`
        .template-tech {
          padding: 40px 48px;
          color: #e2e8f0;
          background: #0f172a;
        }
        
        .template-tech .resume-header {
          position: relative;
          margin: -40px -48px 32px;
          padding: 48px 48px 32px;
          overflow: hidden;
        }
        
        .template-tech .header-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border-bottom: 2px solid var(--accent);
        }
        
        .template-tech .header-content {
          position: relative;
          z-index: 1;
        }
        
        .template-tech .name {
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 6px;
          color: var(--accent);
        }
        
        .template-tech .title {
          font-size: 16px;
          color: #94a3b8;
          margin-bottom: 16px;
        }
        
        .template-tech .contact-info {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 20px;
        }
        
        .template-tech .contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #cbd5e1;
        }
        
        .template-tech .contact-item .icon {
          color: var(--accent);
          font-weight: 600;
        }
        
        .template-tech .section {
          margin-bottom: 24px;
        }
        
        .template-tech .section-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--accent);
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .template-tech .title-marker {
          width: 8px;
          height: 8px;
          background: var(--accent);
          display: inline-block;
        }
        
        .template-tech .summary {
          font-size: 14px;
          color: #cbd5e1;
          line-height: 1.7;
          padding: 12px;
          background: rgba(99, 102, 241, 0.1);
          border-left: 3px solid var(--accent);
          border-radius: 0 6px 6px 0;
        }
        
        .template-tech .item {
          margin-bottom: 14px;
          padding: 12px;
          background: rgba(30, 41, 59, 0.5);
          border-radius: 8px;
        }
        
        .template-tech .item-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        
        .template-tech .item-title {
          font-size: 15px;
          font-weight: 600;
          color: #f1f5f9;
        }
        
        .template-tech .item-date {
          font-size: 12px;
          color: var(--accent);
        }
        
        .template-tech .item-subtitle {
          font-size: 14px;
          color: #94a3b8;
          margin: 4px 0;
        }
        
        .template-tech .item-description {
          font-size: 13px;
          color: #cbd5e1;
          line-height: 1.5;
        }
        
        .template-tech .item-list {
          margin: 8px 0 0 16px;
          padding: 0;
        }
        
        .template-tech .item-list li {
          font-size: 13px;
          color: #cbd5e1;
          margin-bottom: 4px;
        }
        
        .template-tech .item-link {
          font-size: 12px;
          color: var(--accent);
        }
        
        .template-tech .skills-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .template-tech .skill-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .template-tech .skill-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
        }
        
        .template-tech .skill-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        
        .template-tech .skill-item {
          padding: 4px 10px;
          background: rgba(99, 102, 241, 0.2);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 4px;
          font-size: 12px;
          color: #e2e8f0;
        }
        
        .template-tech .skill-item.soft {
          background: rgba(16, 185, 129, 0.2);
          border-color: rgba(16, 185, 129, 0.3);
        }
        
        .template-tech .skill-item.tool {
          background: rgba(245, 158, 11, 0.2);
          border-color: rgba(245, 158, 11, 0.3);
        }
        
        .template-tech .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 8px;
        }
        
        .template-tech .tech-code {
          padding: 3px 8px;
          background: rgba(6, 182, 212, 0.15);
          border-radius: 4px;
          font-size: 11px;
          color: #22d3ee;
          font-family: 'Courier New', monospace;
        }
      `}</style>
    </div>
  );
}
