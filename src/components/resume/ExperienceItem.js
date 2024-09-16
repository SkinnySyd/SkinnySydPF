import React from 'react';

const ExperienceItem = ({ title, company, duration, location, tasks }) => {
    return (
      <div className="resume-experience-item">
        <h3 className="resume-item-title">{title} at {company}</h3>
        <p className="resume-item-subtitle">
          <span>{location}</span>
          <span className="resume-item-duration">{duration}</span>
        </p>
        <ul className="resume-item-details">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  };

export default ExperienceItem;