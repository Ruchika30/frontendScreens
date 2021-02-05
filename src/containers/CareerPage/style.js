import { css } from '@emotion/core';
import {
  aquaBlue, darkBlue, darkGrayColor, lighSeaBlue, lightCyan, navyBlueColor, paperColor, seaBlueColor, skyBlueColor
} from '../../assets/styles/colors';
import { mRight2 } from '../../assets/styles/spacing';
import { fontSize12 } from '../../assets/styles/typography';
import { dFlex } from '../../assets/styles/flexbox';

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

  headingStyle: css`
    list-style-type: none;
    color: ${paperColor}
    
  `,

  imgContainer: css`
    height: 50px;
    width: 50px;
    // background-color: pink;
    `,

  header: css`
    background-color: ${aquaBlue};
    // padding-left: 24%;
    padding: 20px 0px;
    @media (max-width: 450px ) {
          padding-top: 10%;
        padding-left: 10%;
        },
  `,

  contentAndMenuWrapper: css`
      display: flex;
      width: 100%;
      margin: auto;
        @media (max-width: 800px) {
            display: block;
        },
   `,

  headerContainer: css`
        overflow: hidden;
        position: relative;
        top: 0;
        width: 100%;
        z-index: 100;
        font-family: latoRegular;
        
  `,
  // menu: css`
  //       margin-top: 70px;
  //       margin-left: 30px;
  //   `,

  contentWrapper: css`
        // padding-top: 50px;
        width: 100%;
        overflow-y: scroll;
        // margin-top: 1%;
        background-color:  ${paperColor};
        &> div {
            padding: 3% 5%;

        }
        // @media (max-width: 1350px ) {
        //       margin-left: 25%;
        // },
         @media (max-width: 800px) {
              margin-left: 0;
                 width: 100%;
        },
          @media (max-width: 450px) {
           width: 100%;
           
        }

   
       
       
    `,

  headerWrapper: css`
      width: 90%;
      ${dFlex};
      margin: auto;
       @media (max-width: 450px) {
            width: 100%;
        },
      
   `,

  menuTitle: css`
        margin: auto;
        padding: 10px;
        border: 1px solid black;
        width: 100%;
        border-radius: 2px;
        color:  ${paperColor};
        background-color: ${darkBlue};

    `,

  menuItemsStyle: css`
        margin: auto;
        padding: 10px;
        border: 1px solid black;
        width: 100%;
        color:  ${paperColor};
        background-color: ${darkBlue};
        position : absolute;
        z-index: 200;
  `,

  contentContainer: css`
       height: 1000px;
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

  dropDownMenu: css`
    // position: absolute;
    border-top: 1px solid ${lighSeaBlue};
    top: 100px;
    z-index: 200;
    margin-top: 10px;
    width: 100%;
    @media (min-width: 800px) {
            display: none;
        }

    `,

  active: css`
    color: ${lighSeaBlue};
    list-style-type: none;
    font-size: 1.3rem;
        
    `,
  inActive: css`
  color: white;
  list-style-type: none;
    font-size: 1.3rem;
       
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
            padding: 5px;
            cursor: pointer;
            padding-left: 20px;
             &:hover{
               border-radius: 3px;
               color:  ${darkBlue};
              background-color: ${seaBlueColor};
              transform: translate(0, -3px);

            }
    `

};
