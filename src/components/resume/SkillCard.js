import React from 'react';
import '../../styles/skills.css'; // Assuming you have a CSS file for styling

const SkillCard = ({ skill }) => {
  return (
    <div className="card">
      <div className="imgBx">
        <img src={skill.image} alt={skill.name} />
      </div>
      <div className="contentBx">
        <h2>{skill.name}</h2>
        <p>{skill.description}</p>
      </div>
    </div>
  );
};

export default SkillCard;