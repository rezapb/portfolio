import React from 'react';
import { useSelector } from 'react-redux';

// Css
import './../../App.scss';
import './contact.scss';

// Components
import NavBar from './../../components/NavBar/NavBar';

// Icons
import {
  TiPhone,
  TiMail,
  TiSocialInstagram,
  TiLocationArrow,
  TiSocialFacebook
} from 'react-icons/ti';

const Contact = () => {
  const isOpen = useSelector(state => state.menuReducer.isOpen);
  return (
    <div className='row no-gutters'>
      <div className='col-lg-11 col-md-12 col-12'>
        <div className='contact-view'>
          <div className='col-lg-6 col-md=6 col-12'>
            <div className='info-view'>
              <h5>راه های دیگر تماس با من</h5>
              <div className='info-detail'>
                <div className='info-sub'>
                  <TiPhone className='info-icon' />
                  <a href='tel:+989129518463'>+989129518463</a>
                </div>
                <div className='info-sub'>
                  <TiMail className='info-icon' />
                  <a href='mailto:rezapb1996@gmail.com'>Rezapb1996@gmail.com</a>
                </div>
                <div className='info-sub'>
                  <TiSocialInstagram className='info-icon' />
                  <a href='https://www.instagram.com/rezapb96/'>rezapb96</a>
                </div>
                <div className='info-sub'>
                  <TiSocialInstagram className='info-icon' />
                  <a href='https://www.instagram.com/pibz.dev/'>pibz.dev</a>
                </div>
                <div className='info-sub'>
                  <TiLocationArrow className='info-icon' />
                  <a href='https://t.me/rezaapb'>rezaapb</a>
                </div>
                <div className='info-sub'>
                  <TiSocialFacebook className='info-icon' />
                  <a href='https://www.facebook.com/reza.pb.39'>Reza Pb</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md=6 col-12'>
            <div className='email-view'>
              <h3>تماس با من</h3>
              <p>
                من به فرصت های آزاد و به ویژه پروژه های بلند پروازانه یا بزرگ
                علاقه مندم. با این حال ، اگر درخواست یا سؤال دیگری دارید ، دریغ
                نکنید با استفاده از فرم زیر نیز با من تماس بگیرید.
              </p>
              <div className='form-view'>
                <form
                  action='mailto:pibzdev@pibz.dev'
                  method='POST'
                  encType='application/x-www-form-urlencoded'
                >
                  <div className='inside-form'>
                    <div className='form-head'>
                      <input type='text' name='email' placeholder='ایمیل' />
                      <input type='text' name='name' placeholder='نام' />
                    </div>
                    <textarea
                      name='message'
                      placeholder='پیام'
                      rows='5'
                    ></textarea>
                    <div className='form-foot'>
                      <input type='submit' value='ارسال' />
                    </div>
                  </div>
                </form>
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

export default Contact;
