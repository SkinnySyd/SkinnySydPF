import React, { useState } from 'react';
import SkillCard from './SkillCard';

const Skills = () => {
 // Define categories for the skills
 const categories = ['All', 'Frontend', 'Backend','Database','DevOps'];

 // Skills with categories
 const skills = [

   {
     name: 'Git',
     description: 'Version control system for tracking changes in source code.',
     image: 'https://res.cloudinary.com/dsq1xkg4o/image/upload/v1726583843/kusrlieylujspggqk4pu.png',
     category: 'DevOps',
   },
   {
     name: 'Jenkins',
     description: 'Continuous integration and continuous delivery (CI/CD) tool.',
     image: 'https://res.cloudinary.com/dsq1xkg4o/image/upload/v1726516322/szmvsfbknhuhg74azxdx.png',
     category: 'DevOps',
   },
   {
     name: 'Docker',
     description: 'Platform for building, shipping, and running applications.',
     image: 'https://res.cloudinary.com/dsq1xkg4o/image/upload/v1726519515/f9fxowluubiutwipfj4g.png',
     category: 'DevOps',
   },
   {
     name: 'Kubernetes',
     description: 'Orchestration system for containerized applications.',
     image: 'https://res.cloudinary.com/dsq1xkg4o/image/upload/v1726519883/zwapa9rkhhwsgq6bozbb.svg',
     category: 'DevOps',
   },

   {
    name: 'HTML/CSS/JS',
    description: 'Building websites.',
    image: 'https://res.cloudinary.com/dsq1xkg4o/image/upload/v1726583612/ljgmr4bdhx9dnor4qsgl.png',
    category: 'Frontend',
    hiddenInAll: true,  

  },
  {
   name: 'Angular',
   description: 'Popular frontend framework for building web apps.',
   image: 'https://res.cloudinary.com/dsq1xkg4o/image/upload/v1726590928/hsqmkorearciktjn4z6h.png',
   category: 'Frontend',
   hiddenInAll: true,  
 },
  {
    name: 'Java',
    description: 'Versatile programming language for various applications.',
    image: 'https://res.cloudinary.com/dsq1xkg4o/image/upload/v1726516165/j8nwfup8ydspypumpdr4.png',
    category: 'Backend',
  },
  {
   name: 'Spring',
   description: 'Versatile programming language for various applications.',
   image: 'https://res.cloudinary.com/dsq1xkg4o/image/upload/v1726590567/ps6d2m09eou6satwyizx.png',
   category: 'Backend',
   hiddenInAll: true,  
 },
 {
  name: 'API REST',
  description: 'Versatile programming language for various applications.',
  image: 'https://res.cloudinary.com/dsq1xkg4o/image/upload/v1726590811/x6q5zfilrgt4z8enxfpk.png',
  category: 'Backend',
  hiddenInAll: true,  
},
{
  name: 'MySQL',
  description: 'Versatile programming language for various applications.',
  image: 'https://res.cloudinary.com/dsq1xkg4o/image/upload/v1726596955/y8neatugt5i19es3fk5q.png',
  category: 'Database',
},
{
  name: 'SQL',
  description: 'Versatile programming language for various applications.',
  image: 'https://res.cloudinary.com/dsq1xkg4o/image/upload/v1726590651/x7qicspmwewhqxejd5uk.png',
  category: 'Backend',
  hiddenInAll: true,  
},

   // Add more skills as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter skills based on selected category

  const filteredSkills = skills.filter(skill => {
    if (selectedCategory === 'All') {
      return !skill.hiddenInAll; // Show all skills except those hidden in "All"
    }
    return skill.category === selectedCategory;
  });

  return (
    <section>
      <h2>Tools I'm Comfortable Using</h2>

      {/* Category filter buttons */}
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={category === selectedCategory ? 'active' : ''}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display filtered skills */}
      <div className="skills-container">
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;