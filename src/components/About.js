import React from 'react';
import { User, BookOpen, Zap, Cloud, ChevronRight, Code, Server } from 'lucide-react';
import '../styles/about.css';

const OffsetSkill = ({ skill }) => {
  return (
    <button className="btn btn-offset">
      {skill}
    </button>
  );
};

const About = () => {
  const skills = ['Collaboration', 'Problem-solving', 'Motivation', 'Innovation', 'Autonomy', 'Continuous Learning'];

  return (
    <section className="about-section">
      <h2 className="about-section-title">About Me</h2>
      <div className="about-section-content">
        <div className="about-intro">
          <Code size={48} className="about-intro-icon" />
          <h3 className="about-intro-title">DevOps Engineer & Software Developer</h3>
        </div>
        <div className="about-description">
          <p>
            As a DevOps Engineer and Software Developer, I bring a unique blend of technical expertise and innovative problem-solving to the field of IT. With a strong foundation in software engineering and a passion for optimizing deployment processes, I strive to bridge the gap between development and operations, ensuring seamless integration and efficient workflows.
          </p>
          <p>
            My journey in the tech world has been marked by a constant drive for learning and improvement. From my early days as a Java Developer Intern to my recent role as a DevOps Intern at CBI, I've consistently sought out challenges that push me to grow both personally and professionally.
          </p>
          <p>
            I'm motivated by the desire to contribute to dynamic teams, tackle complex problems, and collaborate in innovative environments to achieve excellence. My skills in continuous integration, containerization, and cloud technologies, combined with my ability to adapt quickly to new technologies, make me well-equipped to drive efficiency and innovation in any IT ecosystem.
          </p>
        </div>
      </div>

      <h3 className="about-subsection-title"><Server className="about-subsection-icon" /> What I'm Working On</h3>
      <div className="about-expertise-grid">
        <ExpertiseCard
          icon={<Zap />}
          title="Automation"
          description="Streamlining processes and automating infrastructure for better efficiency."
        />
        <ExpertiseCard
          icon={<BookOpen />}
          title="Software Engineering"
          description="Building scalable, maintainable applications with clean code."
        />
        <ExpertiseCard
          icon={<Cloud />}
          title="Cloud Technologies"
          description="Building resilient, cloud-native solutions for modern business challenges."
        />
        <ExpertiseCard
          icon={<User />}
          title="Deployment Optimization"
          description="Optimizing deployment pipelines to deliver applications faster and more securely."
        />
      </div>

      <h3 className="about-subsection-title"><ChevronRight className="about-subsection-icon" /> Skills Highlight</h3>
      <div className="about-skills-container">
        {skills.map((skill) => (
          <OffsetSkill key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
};

const ExpertiseCard = ({ icon, title, description }) => {
  return (
    <div className="about-card">
      <div className="about-card-face about-card-front">
        {React.cloneElement(icon, { size: 48, className: "about-card-icon" })}
        <h4 className="about-card-title">{title}</h4>
      </div>
      <div className="about-card-face about-card-back">
        <h4 className="about-card-title">{title}</h4>
        <p className="about-card-description">{description}</p>
      </div>
    </div>
  );
};

export default About;