export default function MinimalTemplate({ data }) {
  const { personal, education, experience, skills, projects, awards } = data;

  return (
    <div className="template-minimal">
      <header className="resume-header">
        <h1 className="name">{personal.name || '您的姓名'}</h1>
        {personal.title && <p className="title">{personal.title}</p>}
        
        <div className="contact-info">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.website && <span>{personal.website}</span>}
          {personal.linkedin && <span>{personal.linkedin}</span>}
          {personal.github && <span>{personal.github}</span>}
        </div>
      </header>

      {personal.summary && (
        <section className="section">
          <h2 className="section-title">个人简介</h2>
          <p className="summary">{personal.summary}</p>
        </section>
      )}

      {education.length > 0 && (
        <section className="section">
          <h2 className="section-title">教育背景</h2>
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
          <h2 className="section-title">工作经历</h2>
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
          <h2 className="section-title">技能特长</h2>
          {skills.hard.length > 0 && (
            <div className="skill-category">
              <span className="skill-label">硬技能:</span>
              <span className="skill-value">{skills.hard.join(' · ')}</span>
            </div>
          )}
          {skills.soft.length > 0 && (
            <div className="skill-category">
              <span className="skill-label">软技能:</span>
              <span className="skill-value">{skills.soft.join(' · ')}</span>
            </div>
          )}
          {skills.tools.length > 0 && (
            <div className="skill-category">
              <span className="skill-label">工具:</span>
              <span className="skill-value">{skills.tools.join(' · ')}</span>
            </div>
          )}
          {skills.languages.length > 0 && (
            <div className="skill-category">
              <span className="skill-label">语言:</span>
              <span className="skill-value">{skills.languages.join(' · ')}</span>
            </div>
          )}
        </section>
      )}

      {projects.length > 0 && (
        <section className="section">
          <h2 className="section-title">项目经验</h2>
          {projects.map((project, index) => (
            <div key={index} className="item">
              <div className="item-header">
                <h3 className="item-title">{project.name}</h3>
                {project.url && <span className="item-link">{project.url}</span>}
              </div>
              {project.role && <p className="item-subtitle">{project.role}</p>}
              {project.description && <p className="item-description">{project.description}</p>}
              {project.technologies && project.technologies.length > 0 && (
                <p className="item-tech">
                  {project.technologies.filter(t => t).join(' · ')}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {awards.length > 0 && (
        <section className="section">
          <h2 className="section-title">证书与奖项</h2>
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
        .template-minimal {
          padding: 40px 48px;
          color: #1a1a1a;
        }
        
        .template-minimal .resume-header {
          text-align: center;
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 2px solid var(--primary);
        }
        
        .template-minimal .name {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 6px;
          color: var(--primary);
        }
        
        .template-minimal .title {
          font-size: 16px;
          color: #666;
          margin-bottom: 12px;
        }
        
        .template-minimal .contact-info {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px 20px;
          font-size: 13px;
          color: #666;
        }
        
        .template-minimal .section {
          margin-bottom: 24px;
        }
        
        .template-minimal .section-title {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--primary);
          margin-bottom: 16px;
          padding-bottom: 6px;
          border-bottom: 1px solid #e5e5e5;
        }
        
        .template-minimal .summary {
          font-size: 14px;
          color: #444;
          line-height: 1.7;
        }
        
        .template-minimal .item {
          margin-bottom: 16px;
        }
        
        .template-minimal .item-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 4px;
        }
        
        .template-minimal .item-title {
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
        }
        
        .template-minimal .item-date {
          font-size: 13px;
          color: #888;
        }
        
        .template-minimal .item-subtitle {
          font-size: 14px;
          color: #666;
          margin-bottom: 6px;
        }
        
        .template-minimal .item-description {
          font-size: 13px;
          color: #555;
          line-height: 1.6;
        }
        
        .template-minimal .item-list {
          margin: 8px 0 0 16px;
          padding: 0;
        }
        
        .template-minimal .item-list li {
          font-size: 13px;
          color: #444;
          margin-bottom: 4px;
          line-height: 1.5;
        }
        
        .template-minimal .item-tech {
          font-size: 12px;
          color: var(--accent);
          margin-top: 4px;
        }
        
        .template-minimal .item-link {
          font-size: 12px;
          color: var(--accent);
        }
        
        .template-minimal .skill-category {
          margin-bottom: 10px;
        }
        
        .template-minimal .skill-label {
          font-weight: 600;
          color: #1a1a1a;
          margin-right: 8px;
        }
        
        .template-minimal .skill-value {
          color: #444;
        }
      `}</style>
    </div>
  );
}
