import React from 'react';
import pic2 from "../assets/happiest minds.png"
import pic3 from "../assets/goldman sachs.png"


function Experience() {
  const experienceData = [
    {
      id: 1,
      company: 'Happiest Minds IT Company',
      description: 'Backend Intern',
      logo: <img class="image-edit1" src={pic2} alt="Company Logo" />,
    },
    {
      id: 2,
      company: 'Goldman Sachs',
      description: 'Data Analyst',
      logo: <img class="image-edit2" src={pic3} alt="Company Logo" />,
    },
    // Add more experience objects as needed
  ];
  
  return (
    <section id="experience">
      <h2>Experience</h2>
      {experienceData.map((experience) => (
        <div key={experience.id} className="experience-item">
          <img src={experience.logo} alt={experience.company} />
          <h3>{experience.company}</h3>
          <p>{experience.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;
