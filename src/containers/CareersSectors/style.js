import { mBottom1, mRight3, p5 } from '../../assets/styles/spacing';
import { css } from '@emotion/core';
import { lightPurple, paperColor, skyBlueColor } from '../../assets/styles/colors';

export default {

  srchWrapper: css`
    background-color: ${paperColor};
    padding: 13px;
    margin : 10px 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15);
    `,

  breadCrumbs: css`
     display: flex; 
      & > li { 
          list-style-type: none;
      }
    `,

  bannerContextContainer: css`
        display: flex;
        justify-content: space-between;    
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
  title: css`
        // text-align: center;
            font-size: 3rem;
            font-family: gothic;
            font-weight: 500;
    `,
  headerDescription: css`
     @media (max-width: 750px){
            display: none;
     }
    `,
  headerImg: css`
        height: 450px;
        @media (max-width: 480px){
            display: none;
        }
        
    `,

  imageWrapper: css`
    // max-height: 200px;
      object-fit: contain;
      display: flex;
    justify-content: center;
    background-color: ${lightPurple};
  `,

  cardGridStyle: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))',
    marginTop: '20px',
    cursor: 'pointer'

  }

};
