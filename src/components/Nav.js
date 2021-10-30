import React from 'react';
import './NavStyle.css';
const Nav = () => {
  return (
    <div className='nav'>
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
