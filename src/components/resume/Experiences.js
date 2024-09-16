import React from 'react';
import ExperienceItem from './ExperienceItem';

const experiences = [
  {
    title: 'DevOps Intern',
    company: 'CBI - Systems and Infrastructure',
    duration: 'March 2023 - August 2023',
    location: 'Casablanca',
    tasks: [
      'Provisioned and managed access to a multi-tenant Kubernetes cluster, reducing operational costs.',
      'Designed and developed CI/CD pipelines to streamline code integration and deployment efforts.',
      'Provisioned and integrated Azure Cloud Services with Kubernetes.',
      'Automated Terraform infrastructure deployments with GitOps practices.',
      'Developed and deployed a helpdesk management system to Kubernetes.',
    ],
  },
];


const Experiences = () => {
  return (
    <section className="resume-section">
      <h2 className="resume-section-title">
        <i className="fas fa-briefcase"></i> Professional Experience
      </h2>
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} {...experience} />
      ))}
    </section>
  );
};

export default Experiences;
