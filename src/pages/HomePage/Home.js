import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Css
import './../../App.scss';
import './homePage.scss';

// Components
import NavBar from './../../components/NavBar/NavBar';
import BackgroundParticle from './../../components/Bg-particle/Bg-particle';

const Home = () => {
  const isOpen = useSelector(state => state.menuReducer.isOpen);
  return (
    <div className='row no-gutters'>
      <div className='col-lg-11 col-md-12 col-12'>
        <div className='bg-particle'>
          <BackgroundParticle />
        </div>
        <div className='main-content'>
          <div className='intro'>
            <p>
              سلام، من <span>رضا پوربافرانی</span>
            </p>
            <p>برنامه نویس و توسعه دهنده وب هستم</p>
          </div>
          <div className='resume-btn'>
            <Link to='/contact'>تماس با من</Link>
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

export default Home;
