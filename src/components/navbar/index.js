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
import Menu from '../menu';

const Navbar = props => {
  const history = useHistory();
  const { barColor, fixed, bgColor } = props;
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
      <div
        css={navbar}
        // style={
        //   fixed ? { position: 'fixed', top: '0px', backgroundColor: bgColor || aquaBlue } : { display: 'none' }
        // }
        style={{ backgroundColor: bgColor || aquaBlue }}
      >
        {/* navbar for other devices */}
        <div css={menuWrapper}>
          <div style={{ width: '180px', cursor: 'pointer' }} onClick={onLogoClick}>
            <img src={logoWithTxt} alt="logo" style={{ width: '100%' }} />
          </div>
          <ul css={menu}>
            <li onClick={onClickBlog} css={menuItem}>Blog</li>
            {/* <li onClick={() => handleClick('/career-sectors')} css={menuItem}>Careers</li> */}

          </ul>
        </div>
      </div>
      <div css={hamburger}><Menu pageWrapId="page-wrap" outerContainerId="App" /></div>
    </div>

  );
};

export default Navbar;
