import { css } from '@emotion/react';
import {
  darkBlue, darkGrayColor, darkPurple, lightGreyColor, navyBlueColor, paperColor, seaBlueColor, skyBlueColor
} from '../../assets/styles/colors';

export default {

  cardWrapper: css`
      width: 100 %;
     ${navyBlueColor};
    height: 55px;
    padding: 10px 0px;
`,

  menuItem: css`
        text-decoration: none;
        color: ${darkPurple} ;
        font-family: refficreeBold;
        padding: 8px 20px;
        font-size: 19px;
        border-radius: 20px;
        border: 2px solid ${seaBlueColor};;

        &:hover{
             background-color: ${seaBlueColor};
        }
    `,

  homeWrapper: css`
    height: 50px;
    width: 50px;
    background - color: ${skyBlueColor};
    border - radius: 50 %;
    align - items: center;
    margin - left: 150px;


`,

  icon: css`
     height: 50px;
    width: 30px;
    `,

  title: css`
        // text-align: center;
            font-size: 3rem;
            font-family: gothic;
            font-weight: 500;
    `,

  gothic: css`
      font-family: gothic;
    `,

  description: css`
        font-size: 1rem;
        text-align: center;
        font-family: gothic;
       
    `,

  headerDescription: css`
     @media (max-width: 750px){
            display: none;
     }
    `,

  gridStyle: ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(17rem, 1fr))',
    minHeight: '400px'

  }),

  iframeStyle: css`
        height: 100%;
        width: 100%;
    `,

  sectionContainer: css`
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
        display: flex;
        // background-color: red;
    `,

  footer: css`
        justify-content: space-between;
        padding : 2%;
        display: flex;
        width: 80%;
        margin: auto;
        align-items: center;
    `,

  html: css`
        scroll - behavior: smooth;
    `,

  numberAnimationContainer: css`
        background-color: ${darkBlue};
       justify-content:space-between;
         display: flex;
       padding: 2% 0px;
        width: 100%;
        color: ${paperColor};

        @media (max-width: 480px){
                display: none;
        }


`,

  nmbrContainer: css`
          justify-content: space-between;
            display: flex;
            width: 80%;
            margin: auto;


        `,

  header: css`
        // height: 400px;
        background-image: url('../../assets/icons/banner.jpeg');
        width: 100%;
        background-position: right;
        background-color: #b4fbfb;

        // background-attachment: fixed;
        // background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
`,

  bannerContextContainer: css`
        display: flex;
        justify-content: space-between;    
        padding : 0px 8%;
    `,

  headerContent: css`
        width: 30%;
        padding-top: 50px; 
        padding-left: 100px;

       @media (max-width: 480px){
            padding-left: 5%;
             width: 90%;
       }
    `,

  actionOptionContainer: css`
        @media (max-width: 480px){
            // display: none;
        }
    `,

  headerImg: css`
        height: 450px;
        @media (max-width: 480px){
            display: none;
        }
    `,

  menuWrapper: css`
        display: flex;
        // background-color: ${lightGreyColor};
        margin: auto;
        padding: 10px 10%;
        align-items: center;
      `,

  liWrapper: css`
        display: flex;
        list-style-type: none;
        & > div {
             margin-right: 10px;
        }
      `,

  menu: css`
     display: flex;
          & > li {
            list-style-type: none;
            margin-right: 10px;
     }
    `,

  actionTextContainer: css`
        flex: 1;
        // margin: auto; 
        padding: 10%;
        width: 50% ; 
        paddingLeft: 10%; 
        display: flex;
        justify- content: center;
    `,

  option: css`
        font-size: 2.5rem;
        color: black;
       
    `,

  animationTextBody: css`
      
    `,

  iconContainer: css`
    width: 70 %;
    `,

  aboutUs: css`
        text-align: left;
        width: 100%;
        margin-left: 80px;
        display: flex;
        justify-content: end;
        align-items: center;
    `,

  transitionsItem: css`
        display: none;
        visibility: hidden;
    `,

  scrollblock: css`
        position: relative;
        margin: 0;
        width: 100%;
        height: 600px;
    `,

  items: css`
        list-style-type: none;
        & > a {
             text-decoration: none;
        }
           
    `

};

