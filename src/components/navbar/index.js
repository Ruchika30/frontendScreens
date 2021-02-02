/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import style from './style';
// import Progress from 'react-progressbar';
import { logoWithTxt } from '../../assets/icons';
import { useHistory } from 'react-router-dom';
import { css, jsx } from '@emotion/core';
import { aquaBlue } from '../../assets/styles/colors';
import './style.css';

// import { slide as Menu } from 'react-burger-menu';
import $ from 'jquery';
import Menu from '../menu';

const Navbar = props => {
  const history = useHistory();
  const { barColor } = props;
  const [toggle, setToggle] = useState(false);
  const [setClose, setCloseIcon] = useState(false);

  const {
    navbar, menuWrapper, menu, bar, hamburger, navbarMobileStyle, menuItem
  } = style;

  const onHamburgerClick = () => {
    toggle ? setToggle(false) : setToggle(true);
    // setClose ? setCloseIcon(false) : setCloseIcon(true);
  };

  const handleClick = link => {
    history.push(link);
  };

  const onClickBlog = () => {
    history.push('/blog');
  };

  const onLogoClick = () => {
    history.push('/');
  };

  const handleOpen = event => {
    if (event.stopPropagation) { event.stopPropagation(); }
    // toggle ? setToggle(false) : setToggle(true);
  };

  return (

    <div>
      {/* <div css={hamburger}>
        <Menu pageWrapId="page-wrap" outerContainerId="App" />
      </div> */}
      <div
        css={navbar}
        style={{ backgroundColor: aquaBlue }}
      >
        {/* navbar for other devices */}
        <div css={menuWrapper}>
          <div style={{ width: '180px' }} onClick={onLogoClick}>
            <img src={logoWithTxt} alt="logo" style={{ width: '100%' }} />
          </div>
          <ul css={menu}>
            <li onClick={() => handleClick('/sectors')} css={menuItem}>Careers</li>
            <li onClick={onClickBlog} css={menuItem}>Blog</li>

          </ul>
        </div>

        {/* {!toggle ? (
          <div css={hamburger} onClick={onHamburgerClick} id="hamburgerMenu">
            <div css={bar} />
            <div css={bar} />
            <div css={bar} />
          </div>
        )
          : <img src={cancel} alt="logo" onClick={onHamburgerClick} style={{ width: '20px' }} />} */}

      </div>
      <div css={hamburger}><Menu pageWrapId="page-wrap" outerContainerId="App" /></div>

      {/* <div css={hamburger} /> */}

      {/* {toggle && (
        <Menu onStateChange={handleOpen}>
          <div style={{ zIndex: 200 }}>
            <ul css={[navbarMobileStyle]} id="navbarMobileStyle">
              <li onClick={() => handleClick('/sectors')} css={[menuItem]}>Careers</li>
              <li onClick={onClickBlog} css={menuItem}>Blog</li>
            </ul>
          </div>
        </Menu>
      )} */}

      {/* Hamburger Menu for mobile */}

    </div>

  );
};

export default Navbar;
