import React, { useEffect, useState } from 'react';
import './NavStyle.css';
const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav-black'}`}>
      <img
        className='nav-logo'
        src='https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=35'
        alt='Netflix Logo'
      />
      <img
        className='nav-avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='Netflix Logo'
      />
    </div>
  );
};

export default Nav;
