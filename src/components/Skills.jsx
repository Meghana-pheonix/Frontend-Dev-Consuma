import React from 'react';

function Skills() {
  const skillsData = [
    { name: 'Python', proficiency: 90 },
    { name: 'C++', proficiency: 80 },
    { name: 'Java', proficiency: 70 },
    { name: 'C', proficiency: 60 },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skillsData.map((skill, index) => (
          <li key={index}>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-progress">
              <div
                className="progress-bar"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
            <div className="skill-proficiency">{skill.proficiency}%</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
