import React from 'react';

const education = [
  {
    school: 'Ynov Campus Maroc',
    degree: 'Formation Jobintech - DevOps',
    year: '2024',
    location: 'Rabat',
  },
  {
    school: 'EMSI - École Marocaine des Sciences de l\'ingénieure',
    degree: 'Ingénierie - Informatique et Réseaux',
    year: '2021-2023',
    location: 'Marrakech',
  },
];

const Education = () => {
  return (
    <section className="resume-section">
      <h2 className="resume-section-title">
        <i className="fas fa-graduation-cap"></i> Education
      </h2>
      {education.map((edu, index) => (
        <div key={index} className="resume-education-item">
          <h3 className="resume-item-title">{edu.school}</h3>
          <p className="resume-item-subtitle">
            <span>{edu.degree}</span>
            <span className="resume-item-duration">{edu.year}</span>
          </p>
          <p className="resume-item-details">{edu.location}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
