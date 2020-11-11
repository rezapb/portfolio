import React from 'react';
import { useSelector } from 'react-redux';

// Css
import './../../App.scss';
import './skills.scss';

// Components
import NavBar from './../../components/NavBar/NavBar';
import SkillBars from '../../components/Skill-bars/Skill-bars';

const Skills = () => {
  const isOpen = useSelector(state => state.menuReducer.isOpen);
  return (
    <div className='row no-gutters'>
      <div className='col-lg-11 col-md-12 col-12'>
        <div className='skills-view'>
          <div className='col-lg-6 col-md-6 col-12 skills'>
            <SkillBars />
          </div>
          <div className='col-lg-6 col-md-6 col-12'>
            <div className='skills-text'>
              <h3>
                خب، <span>توانایی هام</span> چیه؟
              </h3>
              <p>
                بعد از یادگرفتن مباحث پایه و مهم وب (HTML, CSS, JavaScript) من
                اول کار کردنو با Wordpress شروع کردم ولی بعد از مدت 8 ماه تصمیم
                گرفتم بهتر و از پایه تر وارد مباحث یادگیری برنامه نویسی وب بشم.
                بعد از اون مدت وارد React شدم و در کنارش با تقویت JavaScript سعی
                کردم در قسمت برنامه نویسی Front-end خودمو تقویت کنم. در این راه
                با خیلی تکنولوژی ها و مباحث جدید و کارآمدی هم آشنا شدم. و الان
                تمرکزم روی یادگیری MERN Stack (MongoDb, Express, React, Nodejs)
                هستش تا حدودی با Back-end هم آشنا بشم و در آینده بتونم به عنوان
                یک Full Stack Developer فعالیت کنم.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`col-lg-1 col-md-12 col-3 col-3-mob-${
          !isOpen ? 'close' : 'open'
        }`}
      >
        <NavBar />
      </div>
    </div>
  );
};

export default Skills;
