/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import style from './style';
// import Progress from 'react-progressbar';
// import { home } from '../../assets/icons';
import { useHistory } from 'react-router-dom';
import { css, jsx } from '@emotion/core';

const Navbar = props => {
  const history = useHistory();
  const { fixed } = props;
  const [toggle, setToggle] = useState(false);
  const {
    navbar, bar, hamburger, navbarMobileStyle, menuItems, menuItem, homeWrapper, menuItemsWrapper
  } = style;

  const gotoHome = () => {
    history.push('/');
  };

  const handleHamburger = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const handleClick = link => {
    history.push(link);
  };

  return (
    <div>
      <div
        css={navbar}
      >
        <div css={menuItemsWrapper}>
          <ul css={menuItems}>
            <li onClick={() => handleClick('/')} css={menuItem}>Home</li>
            <li onClick={() => handleClick('/sectors')} css={menuItem}>Careers</li>
            <li css={menuItem}>Link2</li>
            <li css={menuItem}>Link3</li>
            <li css={menuItem}>Link4</li>
          </ul>
        </div>

        <div css={hamburger} onClick={handleHamburger}>
          <div css={bar} />
          <div css={bar} />
          <div css={bar} />
        </div>
      </div>

      { toggle ? (
        <div css={navbarMobileStyle}>
          <div>Careers</div>
          <div>Careers</div>
          <div>Careers</div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
