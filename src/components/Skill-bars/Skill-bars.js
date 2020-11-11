import React from 'react';

//Css
import './skill-bars.scss';

const skills = [
  { type: 'CSS', level: 90 },
  { type: 'HTML', level: 95 },
  { type: 'JavaScript', level: 75 },
  { type: 'React', level: 80 },
  { type: 'React Native', level: 80 },
  { type: 'Redux', level: 70 },
  { type: 'Node.js', level: 50 },
  { type: 'Express', level: 50 },
  { type: 'Yarn & npm ', level: 70 },
  { type: 'Bootstrap', level: 75 },
  { type: 'SASS', level: 60 },
  { type: 'Wordpress', level: 70 },
  { type: 'GitHub', level: 45 },
  { type: 'UI Design & Photoshop', level: 50 }
];
const SkillBars = () => {
  return (
    <div className='bars-view container-fluid'>
      <ul className='bars-list'>
        {skills.map((skills, index) => (
          <li key={skills.type} style={{ width: `100%` }} className='bars'>
            <p className='bars-p' style={{ width: `${skills.level}%` }}>
              <span className='bars-name'>{skills.type}</span>
              <span className='bars-perc'>{skills.level}%</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillBars;
