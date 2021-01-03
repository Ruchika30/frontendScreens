/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { seaBlueColor } from '../../assets/styles/colors';

export default {

  navbar: css`
     width: 100%;
     background-color: #E5F8F9;
    height: 55px;
    padding: 10px 20px;
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
    padding: 10px;
    &:hover{
      background-color: ${seaBlueColor};
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
          opacity:0.7;
  `,

  menuItemsWrapper: css`
        width: 60%;
        margin: auto;
        position: relative;
        @media (max-width: 360px) {
        display: none;
      },
    `,

  ul: css`
      margin-right: 10px,
      `
};
