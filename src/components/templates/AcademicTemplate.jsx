export default function AcademicTemplate({ data }) {
  const { personal, education, experience, skills, projects, awards } = data;

  return (
    <div className="template-academic">
      <header className="resume-header">
        <h1 className="name">{personal.name || '您的姓名'}</h1>
        {personal.title && <p className="title">{personal.title}</p>}
        
        <div className="contact-info">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.website && <span>{personal.website}</span>}
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
        .template-academic {
          padding: 40px 48px;
          color: #1a1a1a;
          background: #fff;
        }
        
        .template-academic .resume-header {
          text-align: center;
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid #ddd;
        }
        
        .template-academic .name {
          font-size: 26px;
          font-weight: 600;
          margin-bottom: 6px;
          color: #000;
        }
        
        .template-academic .title {
          font-size: 15px;
          color: #444;
          margin-bottom: 12px;
        }
        
        .template-academic .contact-info {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px 20px;
          font-size: 12px;
          color: #555;
        }
        
        .template-academic .section {
          margin-bottom: 24px;
        }
        
        .template-academic .section-title {
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #333;
          margin-bottom: 14px;
          padding-bottom: 6px;
          border-bottom: 2px solid #333;
        }
        
        .template-academic .summary {
          font-size: 14px;
          color: #333;
          line-height: 1.7;
          text-align: justify;
        }
        
        .template-academic .item {
          margin-bottom: 14px;
        }
        
        .template-academic .item-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        
        .template-academic .item-title {
          font-size: 15px;
          font-weight: 600;
          color: #000;
        }
        
        .template-academic .item-date {
          font-size: 12px;
          color: #666;
        }
        
        .template-academic .item-subtitle {
          font-size: 14px;
          color: #444;
          margin: 4px 0;
        }
        
        .template-academic .item-description {
          font-size: 13px;
          color: #555;
          line-height: 1.5;
        }
        
        .template-academic .item-list {
          margin: 6px 0 0 16px;
          padding: 0;
        }
        
        .template-academic .item-list li {
          font-size: 13px;
          color: #444;
          margin-bottom: 3px;
          line-height: 1.4;
        }
        
        .template-academic .item-tech {
          font-size: 12px;
          color: #666;
          margin-top: 4px;
          font-style: italic;
        }
        
        .template-academic .item-link {
          font-size: 12px;
          color: #333;
        }
        
        .template-academic .skill-category {
          margin-bottom: 8px;
        }
        
        .template-academic .skill-label {
          font-weight: 600;
          color: #000;
          margin-right: 6px;
        }
        
        .template-academic .skill-value {
          color: #444;
        }
      `}</style>
    </div>
  );
}
