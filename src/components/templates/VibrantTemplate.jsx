export default function VibrantTemplate({ data }) {
  const { personal, education, experience, skills, projects, awards } = data;

  return (
    <div className="template-vibrant">
      <header className="resume-header">
        <div className="header-accent"></div>
        <h1 className="name">{personal.name || '您的姓名'}</h1>
        {personal.title && <p className="title">{personal.title}</p>}
        
        <div className="contact-info">
          {personal.email && <span className="contact-item">{personal.email}</span>}
          {personal.phone && <span className="contact-item">{personal.phone}</span>}
          {personal.location && <span className="contact-item">{personal.location}</span>}
          {personal.website && <span className="contact-item">{personal.website}</span>}
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
              <div className="skill-tags">
                {skills.hard.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
          {skills.soft.length > 0 && (
            <div className="skill-category">
              <span className="skill-label">软技能</span>
              <div className="skill-tags">
                {skills.soft.map((skill, i) => (
                  <span key={i} className="skill-tag secondary">{skill}</span>
                ))}
              </div>
            </div>
          )}
          {skills.tools.length > 0 && (
            <div className="skill-category">
              <span className="skill-label">工具</span>
              <div className="skill-tags">
                {skills.tools.map((skill, i) => (
                  <span key={i} className="skill-tag tertiary">{skill}</span>
                ))}
              </div>
            </div>
          )}
          {skills.languages.length > 0 && (
            <div className="skill-category">
              <span className="skill-label">语言</span>
              <div className="skill-tags">
                {skills.languages.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
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
        .template-vibrant {
          padding: 40px 48px;
          color: #1a1a1a;
          background: linear-gradient(180deg, #fff 0%, #f8fafc 100%);
        }
        
        .template-vibrant .resume-header {
          text-align: center;
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 3px solid var(--accent);
          position: relative;
        }
        
        .template-vibrant .header-accent {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          border-radius: 0 0 4px 4px;
        }
        
        .template-vibrant .name {
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 6px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .template-vibrant .title {
          font-size: 16px;
          color: #666;
          margin-bottom: 16px;
        }
        
        .template-vibrant .contact-info {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px 20px;
          font-size: 13px;
          color: #555;
        }
        
        .template-vibrant .section {
          margin-bottom: 24px;
        }
        
        .template-vibrant .section-title {
          font-size: 14px;
          font-weight: 700;
          color: white;
          margin-bottom: 14px;
          padding: 8px 16px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: 8px;
          display: inline-block;
        }
        
        .template-vibrant .summary {
          font-size: 14px;
          color: #444;
          line-height: 1.7;
          padding: 16px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(6, 182, 212, 0.08));
          border-radius: 12px;
          border-left: 4px solid var(--accent);
        }
        
        .template-vibrant .item {
          margin-bottom: 16px;
          padding: 16px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.05);
        }
        
        .template-vibrant .item-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 4px;
        }
        
        .template-vibrant .item-title {
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
        }
        
        .template-vibrant .item-date {
          font-size: 12px;
          color: var(--accent);
          font-weight: 500;
        }
        
        .template-vibrant .item-subtitle {
          font-size: 14px;
          color: #666;
          margin-bottom: 8px;
        }
        
        .template-vibrant .item-description {
          font-size: 13px;
          color: #555;
          line-height: 1.6;
        }
        
        .template-vibrant .item-list {
          margin: 8px 0 0 16px;
          padding: 0;
        }
        
        .template-vibrant .item-list li {
          font-size: 13px;
          color: #444;
          margin-bottom: 5px;
          line-height: 1.5;
        }
        
        .template-vibrant .item-link {
          font-size: 12px;
          color: var(--accent);
        }
        
        .template-vibrant .skill-category {
          margin-bottom: 12px;
        }
        
        .template-vibrant .skill-label {
          font-size: 13px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 8px;
          display: block;
        }
        
        .template-vibrant .skill-tags,
        .template-vibrant .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .template-vibrant .skill-tag,
        .template-vibrant .tech-tag {
          display: inline-block;
          padding: 6px 14px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .template-vibrant .skill-tag.secondary {
          background: linear-gradient(135deg, #10b981, #06b6d4);
        }
        
        .template-vibrant .skill-tag.tertiary {
          background: linear-gradient(135deg, #f59e0b, #ef4444);
        }
        
        .template-vibrant .tech-tag {
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary);
          font-size: 11px;
        }
      `}</style>
    </div>
  );
}
