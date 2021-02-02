/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { darkPurple, seaBlueColor, skyBlueColor } from '../../assets/styles/colors';

export default {

  navbar: css`
     width: 100%;
    padding: 10px 20px;

     @media (max-width: 360px) {
       display: none;
     }

`,

  homeWrapper: css`
    height: 50px;
    width: 50px;
    background-color: red;
    border - radius: 50 %;
    align - items: center;
    margin - left: 150px;

    `,

  bar: css`
      width: 30px;
      height: 3px;
      background-color: black;
      margin: 5px 0px;
    `,

  menuItem: css`
        text-decoration: none;
        color: ${darkPurple} ;
        font-family: refficreeBold;
        padding: 5px 12px;
        font-size: 19px;
        border-radius: 20px;
        border: 2px solid ${seaBlueColor};;

    &:hover{
      background-color: ${seaBlueColor};
    }
  `,

  close: css`
    &:after{
        display: inline-block;
        content: "\00d7"; /* This will render the 'X' */
  }
  `,

  hamburger: css`
      display: none;
    @media (max-width: 450px) {
        display: block;
        
      },
  `,

  icon: css`
     height: 50px;
      width: 30px
    `,

  menuItems: css`
      display: flex;
      margin: auto;
      justify-content: space-between;
      list-style-type: none;

      position: absolute;
      width: 100%;

     @media (max-width: 360px) {
       display: block;
     }
    `,

  navbarMobileStyle: css`
        color: white;
          background-color: black;
          display: block;
          padding:10px;
          position: absolute;
          width: 100%;
          z-index: 200;
          top: 0;
          height: 100%;
          opacity: 0.9;
  `,

  menuItemsWrapper: css`
        width: 60%;
        margin: auto;
        position: relative;
        @media (max-width: 360px) {
          display: none;
      },
    `,

  menu: css`
     display: flex;
          & > li {
            list-style-type: none;
            margin-right: 10px;
     }
    `,
  menuWrapper: css`
        display: flex;
        margin: auto;
        width: 90%;
        padding: 10px 0;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 450px) {
          display: none;
          visibility : none;
         
      },
      `,

  ul: css`
      margin-right: 10px,
      `
};
