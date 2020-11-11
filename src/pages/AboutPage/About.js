import React from 'react';
import { useSelector } from 'react-redux';

// Css
import './../../App.scss';
import './about.scss';

//Images
import mySelfPic from './../../assets/images/myself.jpg';

// Components
import NavBar from './../../components/NavBar/NavBar';

const About = () => {
  const isOpen = useSelector(state => state.menuReducer.isOpen);
  return (
    <div className='row no-gutters'>
      <div className='col-lg-11 col-md-12 col-12'>
        <div className='about-view'>
          <div className='col-lg-4 col-md-4 col-12 img-container'>
            <div className='img-view'>
              <img src={mySelfPic} alt='pic of myself' />
            </div>
          </div>
          <div className='col-lg-8 col-md-8 col-12 about-txt-container'>
            <div className='about-txt-view'>
              <div>
                <h3>
                  کی <span>هستم</span> اصلا؟
                </h3>
              </div>
              <div className='about-text'>
                من رضا متولد ۱۳۷۵ الان بمدت ۳ سال میشود که دارم طراحی و برنامه
                نویسی وب یادمیگیرم و در کنارش مشغول به کارهم هستم. سال ۱۳۹۴
                کنکور ریاضی دادم و در دانشگاه علم و صنعت رشته ی صنایع قبول شدم.
                بعد از گذراندن چند ترم بدلیل مشکلاتی خاص و کمرنگ شدن علاقم نسبت
                به رشته ی تحصیلیم با تغییر رشته وارد نرم افزار شدم و درکنارش
                شروع کردم برنامه نویسی یاد بگیرم.
                <br /> بدلیل عارضه قلبی و ریوی قادر به ادامه دانشگاه بصورت حضوری
                نبودم و بیشتر تمرکزم را روی یادگیری برنامه نویسی وب و تکنولوژی
                های مختلفش گذاشتم و روز به روز علاقه ام به این کار افزایش می
                یابد. درکنار برنامه نویسی مشغول به تدریس زبان هستم. دانش زبان
                خیلی توی این کار کمکم میکنه و یکی از نقاط قوت اصلیه خودم
                میدونمش. درحال یادگیری موسیقی سنتی ایرانی و ساز بی نظیره سنتور
                هستم و به آرامش و تمرکزم توی کار خیلی کمک میکنه، از علایق دیگرم
                خواندن کتاب و تماشای فیلم و سریال و مهم تراز همه بازی کردن هست.
                حتما سعی میکنم بعدا بیشتر از خودم بگم فعلا برای الان بسه...
              </div>
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

export default About;
