import React from 'react';

function Skills() {
  const skills = [
    { name: 'Android Studio', level:90},
    { name: 'Java', level: 85 },
    { name: 'C', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Flutter', level: 96 },
    { name: 'HTML & CSS', level: 98 },
    { name: 'SQL', level: 80 },
    { name: 'AdSense & ADX', level: 95 },
    { name: 'Digital Marketing', level: 95 },
    { name: 'Search Arbitrage', level: 90 },
    { name: 'React Native', level:70},
    { name: 'Wordpress', level:97}
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            <div className="circle" style={{ '--percentage': skill.level }}>
              <div className="circle-text">
                <span>{skill.level}%</span>
                <p>{skill.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
