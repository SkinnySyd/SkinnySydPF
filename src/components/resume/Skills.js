import React from 'react';

const SkillItem = ({ skill, level }) => {
  return (
    <div className="resume-skill-item">
      <span className="resume-skill-name">{skill}</span>
      <div className="resume-skill-level">
        <div className="resume-skill-level-bar" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    { skill: 'DevOps', level: 90 },
    { skill: 'Cloud Computing', level: 85 },
    { skill: 'Kubernetes', level: 80 },
    { skill: 'CI/CD', level: 85 },
    { skill: 'Infrastructure as Code', level: 75 },
    { skill: 'Monitoring & Logging', level: 80 },
    { skill: 'Python', level: 70 },
    { skill: 'Bash Scripting', level: 75 }
  ];

  return (
    <section className="resume-section">
      <h2 className="resume-section-title">
        <i className="fas fa-cogs"></i> Technical Skills
      </h2>
      <div className="resume-skills-container">
        <div className="resume-skills-column">
          <div className="resume-skills-list">
            {skillsData.slice(0, 4).map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
        </div>
        <div className="resume-skills-column">
          <div className="resume-skills-list">
            {skillsData.slice(4).map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;