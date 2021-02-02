
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import style from './style.scss';
import { home } from '../../assets/icons';
import { useHistory } from 'react-router-dom';

const Navbar = props => {
  const history = useHistory();
  const { fixed, progressValue } = props;

  const { goToTopWrapper } = style;
  const gotoHome = () => {
    history.push('/');
  };

  // const wrapper = css`
  // position: 'fixed',
  // bottom: '20px',
  // right: '30px',
  // zIndex: 299,
  // marginLeft: 5%
  //       `
  return (
    <div>
      <div
        className="navbarStyle"
        style={
          fixed ? { position: 'fixed', top: '0px' } : { display: 'none' }
        }
      >
        <div css="wrapperStyle" onClick={gotoHome}>
          <div className="goToTopWrapperStyle">
            <img src={home} alt="goTop" className="homeStyle" />
          </div>
        </div>

        {/* <Progress completed={() => getPercent(window.scrollY)} color="pink" /> */}

        {/* progress bar */}
        {/* <div
            style={{
              width: "100%",
              backgroundColor: "thistle",
              height: "7px",
            }}
          >

            <div
              style={{
                backgroundColor: "red",
                width: {progressValue},
              }}
            >

            </div>
          </div> */}
      </div>
    </div>
  );
};

export default Navbar;
