import { css } from '@emotion/core';
import {
  navyBlueColor, paperColor, seaBlueColor, skyBlueColor, whiteColor
} from '../../assets/styles/colors';
import { mRight2 } from '../../assets/styles/spacing';
import { fontSize12 } from '../../assets/styles/typography';

export default {
  videoWrapper: css`
          position: relative;
            padding-bottom: 56.25%;
            height: 0;

    `,

  iframeStyle: css`
            position: absolute;
            top: 0;
            left: 0;
            width: 90%;
            height: 100%;
    `,

  actionBtns: css`  
    padding: 2px 5px;
    background-color:  ${seaBlueColor};
    ${mRight2};
    ${fontSize12};
    `,

  imgContainer: css`
    height: 50px;
    width: 50px;
    background-color: pink;
    `,

  header: css`
    background-color: ${skyBlueColor};
    padding-left: 15%;
    padding-top: 3%;
    padding-bottom: 10px;


    @media (max-width: 1350px ) {
              padding-left: 25%;
        },
  `,

  contentAndMenuWrapper: css`
      display: flex;
      padding-top:40%;
        @media (max-width: 800px) {
            display: block;
        },
  `,

  headerContainer: css`
        overflow: hidden;
        background-color: #333;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
  `,
  // menu: css`
  //       margin-top: 70px;
  //       margin-left: 30px;
  //   `,

  contentWrapper: css`
        margin-left: 15%;
        width: 80%;
        // background-color: pink;
        @media (max-width: 1350px ) {
              margin-left: 25%;
        },
         @media (max-width: 800px) {
              margin-left: 0;
        },
       
    `,

  dropDownMenu: css`
  // position : fixed;
    @media (min-width: 800px) {
            display: none;
        },
        
    `,

  menuTitle: css`
        margin: auto;
        padding: 10px;
        border: 1px solid black;
        width: 90%;
        border-radius: 5px;
    `,

  menuItemsStyle: css`
        margin: auto;
        padding: 10px;
        border: 1px solid black;
        width: 90%;
  `,

  longDiv: css`
       height: 2000px;
    `,

  wrapper: css`
        background-color: ${paperColor};
        border-radius: 10px;
        height: 500px;
        width: 200px;
        padding: 10px 15px;
        margin-top: -3%;
        margin-left: 20px;
        position :fixed;
        box-shadow : 0px 0px 70px 0 rgba(0,0,0,0.12);

         @media (max-width: 800px) {
            display: none;
        },
    `,

  active: css`
  color:red;
        
    `,
  inActive: css`
  color: black;
       
    `,

  iconWrapper: css`
        padding: 5px;
    `,

  icon: css`
        width: 100%;
         border-radius: 5px;
    `,

  itemContainer: css`
            display: flex;
            align-items: center;
    `

};
