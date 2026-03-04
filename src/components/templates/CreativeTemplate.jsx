export default function CreativeTemplate({ data }) {
  const { personal, education, experience, skills, projects, awards } = data;

  return (
    <div className="template-creative">
      <header className="resume-header">
        <div className="header-content">
          <div className="header-text">
            <h1 className="name">{personal.name || '您的姓名'}</h1>
            {personal.title && <p className="title">{personal.title}</p>}
          </div>
          <div className="header-decoration"></div>
        </div>
        
        <div className="contact-info">
          {personal.email && <div className="contact-item"><span className="icon">✉</span>{personal.email}</div>}
          {personal.phone && <div className="contact-item"><span className="icon">☎</span>{personal.phone}</div>}
          {personal.location && <div className="contact-item"><span className="icon">◉</span>{personal.location}</div>}
          {personal.website && <div className="contact-item"><span className="icon">⬡</span>{personal.website}</div>}
        </div>
      </header>

      {personal.summary && (
        <section className="section summary-section">
          <p className="summary">{personal.summary}</p>
        </section>
      )}

      {education.length > 0 && (
        <section className="section">
          <h2 className="section-title"><span className="title-icon">▸</span>教育背景</h2>
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
              {edu.description && <p className="item-description">{edu.description}</p>}
            </div>
          ))}
        </section>
      )}

      {experience.length > 0 && (
        <section className="section">
          <h2 className="section-title"><span className="title-icon">▸</span>工作经历</h2>
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
          <h2 className="section-title"><span className="title-icon">▸</span>技能特长</h2>
          <div className="skills-grid">
            {skills.hard.length > 0 && (
              <div className="skill-group">
                <span className="skill-label">硬技能</span>
                <div className="skill-tags">
                  {skills.hard.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            )}
            {skills.soft.length > 0 && (
              <div className="skill-group">
                <span className="skill-label">软技能</span>
                <div className="skill-tags">
                  {skills.soft.map((skill, i) => (
                    <span key={i} className="skill-tag soft">{skill}</span>
                  ))}
                </div>
              </div>
            )}
            {skills.tools.length > 0 && (
              <div className="skill-group">
                <span className="skill-label">工具</span>
                <div className="skill-tags">
                  {skills.tools.map((skill, i) => (
                    <span key={i} className="skill-tag tool">{skill}</span>
                  ))}
                </div>
              </div>
            )}
            {skills.languages.length > 0 && (
              <div className="skill-group">
                <span className="skill-label">语言</span>
                <div className="skill-tags">
                  {skills.languages.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {projects.length > 0 && (
        <section className="section">
          <h2 className="section-title"><span className="title-icon">▸</span>项目经验</h2>
          {projects.map((project, index) => (
            <div key={index} className="item">
              <div className="item-header">
                <h3 className="item-title">{project.name}</h3>
                {project.url && <span className="item-link">{project.url}</span>}
              </div>
              {project.role && <p className="item-subtitle">{project.role}</p>}
              {project.description && <p className="item-description">{project.description}</p>}
              {project.technologies && project.technologies.length > 0 && (
                <div className="tech-tags">
                  {project.technologies.filter(t => t).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {awards.length > 0 && (
        <section className="section">
          <h2 className="section-title"><span className="title-icon">▸</span>证书与奖项</h2>
          {awards.map((award, index) => (
            <div key={index} className="item">
              <div className="item-header">
                <h3 className="item-title">{award.name}</h3>
                <span className="item-date">{award.date}</span>
              </div>
              <p className="item-subtitle">{award.issuer}</p>
              {award.description && <p className="item-description">{award.description}</p>}
            </div>
          ))}
        </section>
      )}

      <style>{`
        .template-creative {
          padding: 40px 48px;
          color: #1a1a1a;
          background: linear-gradient(135deg, #fff 0%, #fafafa 100%);
        }
        
        .template-creative .resume-header {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          margin: -40px -48px 32px;
          padding: 48px 48px 32px;
          color: white;
        }
        
        .template-creative .name {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 6px;
        }
        
        .template-creative .title {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 20px;
        }
        
        .template-creative .contact-info {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 24px;
        }
        
        .template-creative .contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          opacity: 0.95;
        }
        
        .template-creative .contact-item .icon {
          font-size: 14px;
        }
        
        .template-creative .section {
          margin-bottom: 28px;
        }
        
        .template-creative .section-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .template-creative .title-icon {
          font-size: 12px;
        }
        
        .template-creative .summary {
          font-size: 15px;
          line-height: 1.8;
          color: #555;
          padding: 20px;
          background: rgba(99, 102, 241, 0.05);
          border-left: 4px solid var(--accent);
          border-radius: 0 8px 8px 0;
        }
        
        .template-creative .item {
          margin-bottom: 18px;
          padding: 16px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        
        .template-creative .item-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 4px;
        }
        
        .template-creative .item-title {
          font-size: 15px;
          font-weight: 700;
          color: #1a1a1a;
        }
        
        .template-creative .item-date {
          font-size: 12px;
          color: var(--accent);
          font-weight: 500;
        }
        
        .template-creative .item-subtitle {
          font-size: 14px;
          color: #666;
          margin-bottom: 8px;
        }
        
        .template-creative .item-description {
          font-size: 13px;
          color: #555;
          line-height: 1.6;
        }
        
        .template-creative .item-list {
          margin: 8px 0 0 16px;
          padding: 0;
        }
        
        .template-creative .item-list li {
          font-size: 13px;
          color: #444;
          margin-bottom: 5px;
          line-height: 1.5;
        }
        
        .template-creative .item-link {
          font-size: 12px;
          color: var(--accent);
        }
        
        .template-creative .skills-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .template-creative .skill-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .template-creative .skill-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .template-creative .skill-tags,
        .template-creative .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .template-creative .skill-tag,
        .template-creative .tech-tag {
          display: inline-block;
          padding: 4px 12px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          color: white;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .template-creative .skill-tag.soft {
          background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
        }
        
        .template-creative .skill-tag.tool {
          background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
        }
        
        .template-creative .tech-tag {
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary);
          font-size: 11px;
        }
      `}</style>
    </div>
  );
}
