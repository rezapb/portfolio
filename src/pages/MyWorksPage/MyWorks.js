import React from 'react';
import { useSelector } from 'react-redux';
import ImageGallery from 'react-image-gallery';

// Css
import './../../App.scss';
import './myworks.scss';

// Components
import NavBar from './../../components/NavBar/NavBar';

//Images
import img01 from './../../assets/images/myworks/react/01.jpg';
import img02 from './../../assets/images/myworks/react/02.jpg';
import img03 from './../../assets/images/myworks/react/03.jpg';
import img04 from './../../assets/images/myworks/react/04.jpg';
import img05 from './../../assets/images/myworks/react/05.jpg';
import img06 from './../../assets/images/myworks/react/06.jpg';
import img07 from './../../assets/images/myworks/react/07.jpg';
import img08 from './../../assets/images/myworks/react/08.jpg';
import img09 from './../../assets/images/myworks/react/09.jpg';
import img10 from './../../assets/images/myworks/react/10.jpg';
import img11 from './../../assets/images/myworks/react/11.jpg';
import img12 from './../../assets/images/myworks/react/12.jpg';
import img13 from './../../assets/images/myworks/react/13.jpg';
import img14 from './../../assets/images/myworks/react/14.jpg';
import img15 from './../../assets/images/myworks/react/15.jpg';
import img16 from './../../assets/images/myworks/react/16.jpg';

import img17 from './../../assets/images/myworks/wp/01.jpg';
import img18 from './../../assets/images/myworks/wp/02.jpg';
import img19 from './../../assets/images/myworks/wp/03.jpg';
import img20 from './../../assets/images/myworks/wp/04.jpg';
import img21 from './../../assets/images/myworks/wp/05.jpg';
import img22 from './../../assets/images/myworks/wp/06.jpg';
import img23 from './../../assets/images/myworks/wp/07.jpg';
import img24 from './../../assets/images/myworks/wp/08.jpg';
import img25 from './../../assets/images/myworks/wp/09.jpg';
import img26 from './../../assets/images/myworks/wp/10.jpg';

const MyWorks = () => {
  const isOpen = useSelector(state => state.menuReducer.isOpen);
  const nativeImages = [
    {
      original: img01,
      thumbnail: img01
    },
    {
      original: img02,
      thumbnail: img02
    },
    {
      original: img03,
      thumbnail: img03
    },
    {
      original: img04,
      thumbnail: img04
    },
    {
      original: img05,
      thumbnail: img05
    },
    {
      original: img06,
      thumbnail: img06
    },
    {
      original: img07,
      thumbnail: img07
    },
    {
      original: img08,
      thumbnail: img08
    },
    {
      original: img09,
      thumbnail: img09
    },
    {
      original: img10,
      thumbnail: img10
    },
    {
      original: img11,
      thumbnail: img11
    },
    {
      original: img12,
      thumbnail: img12
    },
    {
      original: img13,
      thumbnail: img13
    },
    {
      original: img14,
      thumbnail: img14
    },
    {
      original: img15,
      thumbnail: img15
    },
    {
      original: img16,
      thumbnail: img16
    }
  ];
  const wpImages = [
    {
      original: img17,
      thumbnail: img17
    },
    {
      original: img18,
      thumbnail: img18
    },
    {
      original: img19,
      thumbnail: img19
    },
    {
      original: img20,
      thumbnail: img20
    },
    {
      original: img21,
      thumbnail: img21
    },
    {
      original: img22,
      thumbnail: img22
    },
    {
      original: img23,
      thumbnail: img23
    },
    {
      original: img24,
      thumbnail: img24
    },
    {
      original: img25,
      thumbnail: img25
    },
    {
      original: img26,
      thumbnail: img26
    }
  ];
  return (
    <div className='row no-gutters'>
      <div className='col-lg-11 col-md-12 col-12'>
        <div className='myworks-view'>
          <div className='col-12'>
            <div className='work-title'>
              <h3>React Native Project</h3>
              <div>
                <ImageGallery items={nativeImages} lazyLoad={true} />
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className='work-title'>
              <div class='border-top my-3'></div>
              <h3>Wordpress Projects</h3>
              <div>
                <ImageGallery items={wpImages} lazyLoad={true} />
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

export default MyWorks;
