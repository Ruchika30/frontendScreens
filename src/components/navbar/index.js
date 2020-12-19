/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import style from './style';
// import Progress from 'react-progressbar';
// import { home } from '../../assets/icons';
import { useHistory} from 'react-router-dom';
import { jsx, css } from '@emotion/core';

const Navbar = props => {
  const history = useHistory();
  const { fixed,  } = props;
  const [toggle, setToggle] = useState(false)
  const { navbar, bar, hamburger, navbarMobileStyle, menuItems,  homeWrapper,  menuItemsWrapper } = style

  const gotoHome = () => {
    history.push('/');
  };

  const handleHamburger =() =>{
    toggle ? setToggle(false): setToggle(true)
  }



  return (
    <div>
      <div
        css={navbar}
       >
        <div css={menuItemsWrapper}>
          <ul css={menuItems}>
            <li>Careers</li>
            <li>Careers</li>
            <li>Careers</li>
            <li>Careers</li>
          </ul>
        </div>

        <div css={hamburger} onClick={handleHamburger}>
            <div css={bar}></div> 
            <div css={bar}></div> 
            <div css={bar}></div>               
        </div>
      </div>

      { toggle ? <div css={navbarMobileStyle}>
            <div>Careers</div>
            <div>Careers</div>
            <div>Careers</div>
        </div>: null
      }
    </div>
  );
};

export default Navbar;
