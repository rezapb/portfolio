import React from 'react';
import { useSelector } from 'react-redux';

// Css
import './../../App.scss';
import './blog.scss';

// Components
import NavBar from './../../components/NavBar/NavBar';

const Blog = () => {
  const isOpen = useSelector(state => state.menuReducer.isOpen);
  return (
    <div className='row no-gutters'>
      <div className='col-lg-11 col-md-12 col-12'>
        <p>Hi BB this is Blog Page</p>
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

export default Blog;
