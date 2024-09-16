import React from 'react';
import { User, BookOpen, Zap, Cloud } from 'lucide-react';
import '../styles/about.css'; // Import the new CSS

const About = () => {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <h1 className="about-title">About Me</h1>

        <section className="about-section">
          <h2 className="about-section-title">Oussama RACHIQ</h2>
          <p className="about-description">
            As a DevOps Engineer and Software Developer, I bring a unique blend of technical expertise and innovative problem-solving to the field of IT. With a strong foundation in software engineering and a passion for optimizing deployment processes, I strive to bridge the gap between development and operations, ensuring seamless integration and efficient workflows.
          </p>
          <p className="about-description">
            My journey in the tech world has been marked by a constant drive for learning and improvement. From my early days as a Java Developer Intern to my recent role as a DevOps Intern at CBI, I've consistently sought out challenges that push me to grow both personally and professionally.
          </p>
          <p className="about-description">
            I'm motivated by the desire to contribute to dynamic teams, tackle complex problems, and collaborate in innovative environments to achieve excellence. My skills in continuous integration, containerization, and cloud technologies, combined with my ability to adapt quickly to new technologies, make me well-equipped to drive efficiency and innovation in any IT ecosystem.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">What I'm Working On</h2>
          <div className="about-grid">
            <ExpertiseCard 
              icon={<Zap className="about-card-icon" />}
              title="Automation"
              description="Streamlining processes and automating infrastructure for better efficiency."
            />
            <ExpertiseCard 
              icon={<BookOpen className="about-card-icon" />}
              title="Software Engineering"
              description="Building scalable, maintainable applications with clean code."
            />
            <ExpertiseCard 
              icon={<Cloud className="about-card-icon" />}
              title="Cloud Technologies"
              description="Building resilient, cloud-native solutions for modern business challenges."
            />
            <ExpertiseCard 
              icon={<User className="about-card-icon" />}
              title="Deployment Optimization"
              description="Optimizing deployment pipelines to deliver applications faster and more securely."
            />
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">Skills Highlight</h2>
          <div className="about-skills">
            {['Collaboration', 'Problem-solving', 'Motivation', 'Innovation', 'Autonomy', 'Continuous Learning'].map((skill) => (
              <span key={skill} className="about-skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const ExpertiseCard = ({ icon, title, description }) => {
  return (
    <div className="about-card">
      <div className="about-card-header">
        {icon}
        <h3 className="about-card-title">{title}</h3>
      </div>
      <p className="about-card-description">{description}</p>
    </div>
  );
};

export default About;
