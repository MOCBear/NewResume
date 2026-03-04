export default function ElegantTemplate({ data }) {
  const { personal, education, experience, skills, projects, awards } = data;

  return (
    <div className="template-elegant">
      <header className="resume-header">
        <div className="header-decoration"></div>
        <h1 className="name">{personal.name || '您的姓名'}</h1>
        {personal.title && <p className="title">{personal.title}</p>}
        
        <div className="contact-info">
          {personal.email && <span className="contact-item">{personal.email}</span>}
          {personal.phone && <span className="contact-item">{personal.phone}</span>}
          {personal.location && <span className="contact-item">{personal.location}</span>}
          {personal.website && <span className="contact-item">{personal.website}</span>}
          {personal.linkedin && <span className="contact-item">{personal.linkedin}</span>}
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
              <span className="skill-label">硬技能</span>
              <span className="skill-value">{skills.hard.join(' · ')}</span>
            </div>
          )}
          {skills.soft.length > 0 && (
            <div className="skill-category">
              <span className="skill-label">软技能</span>
              <span className="skill-value">{skills.soft.join(' · ')}</span>
            </div>
          )}
          {skills.tools.length > 0 && (
            <div className="skill-category">
              <span className="skill-label">工具</span>
              <span className="skill-value">{skills.tools.join(' · ')}</span>
            </div>
          )}
          {skills.languages.length > 0 && (
            <div className="skill-category">
              <span className="skill-label">语言</span>
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
                <p className="item-tech">{project.technologies.filter(t => t).join(' · ')}</p>
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
        .template-elegant {
          padding: 40px 48px;
          color: #1f2937;
          background: #fafafa;
          font-family: 'Georgia', serif;
        }
        
        .template-elegant .resume-header {
          text-align: center;
          margin-bottom: 32px;
          padding-bottom: 28px;
          border-bottom: 1px solid #d1d5db;
          position: relative;
        }
        
        .template-elegant .header-decoration {
          width: 60px;
          height: 3px;
          background: var(--primary);
          margin: 0 auto 20px;
        }
        
        .template-elegant .name {
          font-size: 28px;
          font-weight: 400;
          margin-bottom: 8px;
          color: #111827;
          letter-spacing: 2px;
        }
        
        .template-elegant .title {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 16px;
          font-style: italic;
          letter-spacing: 1px;
        }
        
        .template-elegant .contact-info {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 6px 24px;
          font-size: 12px;
          color: #4b5563;
        }
        
        .template-elegant .contact-item {
          position: relative;
        }
        
        .template-elegant .contact-item:not(:last-child)::after {
          content: '·';
          position: absolute;
          right: -14px;
          color: #d1d5db;
        }
        
        .template-elegant .section {
          margin-bottom: 24px;
        }
        
        .template-elegant .section-title {
          font-size: 12px;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--primary);
          margin-bottom: 14px;
          padding-bottom: 8px;
          border-bottom: 1px solid #e5e7eb;
          font-family: 'Arial', sans-serif;
        }
        
        .template-elegant .summary {
          font-size: 14px;
          color: #374151;
          line-height: 1.8;
          font-style: italic;
        }
        
        .template-elegant .item {
          margin-bottom: 16px;
        }
        
        .template-elegant .item-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        
        .template-elegant .item-title {
          font-size: 15px;
          font-weight: 600;
          color: #111827;
        }
        
        .template-elegant .item-date {
          font-size: 12px;
          color: #9ca3af;
          font-style: italic;
        }
        
        .template-elegant .item-subtitle {
          font-size: 14px;
          color: #4b5563;
          margin: 4px 0;
        }
        
        .template-elegant .item-description {
          font-size: 13px;
          color: #6b7280;
          line-height: 1.6;
        }
        
        .template-elegant .item-list {
          margin: 8px 0 0 16px;
          padding: 0;
        }
        
        .template-elegant .item-list li {
          font-size: 13px;
          color: #4b5563;
          margin-bottom: 4px;
          line-height: 1.5;
        }
        
        .template-elegant .item-tech {
          font-size: 12px;
          color: var(--accent);
          margin-top: 4px;
        }
        
        .template-elegant .item-link {
          font-size: 12px;
          color: var(--accent);
        }
        
        .template-elegant .skill-category {
          margin-bottom: 10px;
        }
        
        .template-elegant .skill-label {
          font-weight: 600;
          color: #111827;
          margin-right: 8px;
          font-family: 'Arial', sans-serif;
          font-size: 13px;
        }
        
        .template-elegant .skill-value {
          color: #4b5563;
          font-size: 13px;
        }
      `}</style>
    </div>
  );
}
