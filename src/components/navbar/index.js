/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import style from './style';
// import Progress from 'react-progressbar';
import { logoWithTxt } from '../../assets/icons';
import { useHistory } from 'react-router-dom';
import { css, jsx } from '@emotion/core';

const Navbar = props => {
  const history = useHistory();
  const { barColor } = props;
  const [toggle, setToggle] = useState(false);
  const {
    navbar, menuWrapper, menu, bar, hamburger, navbarMobileStyle, menuItem
  } = style;

  const handleHamburger = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const handleClick = link => {
    history.push(link);
  };

  const onClickBlog = () => {
    history.push('/blog');
  };

  return (
    <div>
      <div
        css={navbar}
        style={{ backgroundColor: barColor }}
      >
        {/* navbar for other devices */}
        <div css={menuWrapper}>
          <div style={{ width: '200px' }}>
            <img src={logoWithTxt} alt="logo" style={{ width: '100%' }} />
          </div>
          <ul css={menu}>
            <li onClick={() => handleClick('/sectors')} css={menuItem}>Careers</li>
            <li onClick={onClickBlog} css={menuItem}>Blog</li>

          </ul>
        </div>

        {/* Hamburger Menu for mobile */}
        <div css={hamburger} onClick={handleHamburger}>
          <div css={bar} />
          <div css={bar} />
          <div css={bar} />
        </div>
      </div>

      {/* Hamburger Menu Items for mobile */}
      { toggle ? (
        <ul css={navbarMobileStyle}>
          <li onClick={() => handleClick('/sectors')} css={menuItem}>Careers</li>
          <li onClick={onClickBlog} css={menuItem}>Blog</li>

        </ul>
      ) : null}
    </div>
  );
};

export default Navbar;
