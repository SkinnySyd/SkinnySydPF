import React from 'react';
import '../styles/resume.css';
import Education from './resume/Educations';
import Experiences from './resume/Experiences';
import Skills from './resume/Skills';
import Header from './resume/Header';

const Resume = () => {
    return (
      <div className="resume-container">
        <Header />
        <Experiences />
        <Education />
        <Skills />
      </div>
    );
  };
  
export default Resume;





