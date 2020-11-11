import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Css
import './navBar.scss';

// Images
import menuIcon from './../../assets/images/menu01.png';

//Actions
import { closeMenu, openMenu } from './../../actions/menu';

// Icons
import {
  TiHome,
  TiUser,
  TiChartBar,
  TiStarFullOutline,
  TiCoffee,
  TiMail,
  TiSocialInstagram,
  TiLocationArrow,
  TiSocialFacebook
} from 'react-icons/ti';

// Logo
import logo from './../../assets/images/logo.png';
// Navbar Component
const NavBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const menu = useSelector(state => state.menuReducer.isOpen);
  const [isOpen, setIsOpen] = useState(menu);
  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      dispatch(openMenu());
    } else {
      setIsOpen(false);
      dispatch(closeMenu());
    }
  };

  const node = useRef();
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    //close nav
    document
      .getElementsByClassName('navParent')[0]
      .parentNode.classList.remove('col-3-mob-open');
    document
      .getElementsByClassName('navParent')[0]
      .parentNode.classList.add('col-3-mob-close');
    document
      .getElementsByClassName('hamburger')[0]
      .classList.remove('is-active');
    document.getElementsByClassName('butn')[0].classList.remove('open');
  };

  return (
    <div className='navParent' ref={node}>
      <div className='pagesContainer'>
        <div className='btnView'>
          <div className={!isOpen ? 'butn' : 'butn open'} onClick={toggleMenu}>
            <button
              className={
                !isOpen
                  ? 'hamburger hamburger--collapse'
                  : 'hamburger hamburger--collapse is-active'
              }
              type='button'
            >
              <span className='hamburger-box'>
                <span className='hamburger-inner'></span>
              </span>
            </button>
          </div>
        </div>
        <div className='cardView'>
          <Link to='/'>
            <div className='cardContainer'>
              <div className='card_face card_face_front'>
                <TiHome className='menuIcon' />
              </div>
              <div className='card_face card_face_back'>خانه</div>
            </div>
          </Link>
        </div>
        <div className='cardView'>
          <Link to='/about'>
            <div className='cardContainer'>
              <div className='card_face card_face_front'>
                <TiUser className='menuIcon' />
              </div>
              <div className='card_face card_face_back'>درباره من</div>
            </div>
          </Link>
        </div>
        <div className='cardView'>
          <Link to='/skills'>
            <div className='cardContainer'>
              <div className='card_face card_face_front'>
                <TiChartBar className='menuIcon' />
              </div>
              <div className='card_face card_face_back'>توانایی ها</div>
            </div>
          </Link>
        </div>
        <div className='cardView'>
          <Link to='/myworks'>
            <div className='cardContainer'>
              <div className='card_face card_face_front'>
                <TiStarFullOutline className='menuIcon' />
              </div>
              <div className='card_face card_face_back'>نمونه کارها</div>
            </div>
          </Link>
        </div>
        {/* <div className='cardView'>
          <Link to='/blog'>
            <div className='cardContainer'>
              <div className='card_face card_face_front'>
                <TiCoffee className='menuIcon' />
              </div>
              <div className='card_face card_face_back'>دیوار من</div>
            </div>
          </Link>
        </div> */}
        <div className='cardView'>
          <Link to='/contact'>
            <div className='cardContainer'>
              <div className='card_face card_face_front'>
                <TiMail className='menuIcon' />
              </div>
              <div className='card_face card_face_back'>تماس با من</div>
            </div>
          </Link>
        </div>
      </div>
      <div className='socialContainer'>
        <div>
          <a
            href='https://www.instagram.com/rezapb96/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TiSocialInstagram className='socialIcon' />
          </a>
        </div>
        <div>
          <a
            href='https://t.me/rezaapb'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TiLocationArrow className='socialIcon' />
          </a>
        </div>
        <div>
          <a
            href='https://www.facebook.com/reza.pb.39'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TiSocialFacebook className='socialIcon' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
