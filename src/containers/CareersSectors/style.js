import { mBottom1, mRight3, p5 } from '../../assets/styles/spacing';
import { css } from '@emotion/core';
import { lightGreyColor, paperColor, skyBlueColor } from '../../assets/styles/colors';

export default {

  srchWrapper: css`
    background-color: ${paperColor};
    padding: 13px;
    margin : 5px 0px;
    box-shadow: 0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15);
    `,

  breadCrumbs: css`
     display: flex; 
      & > li { 
          list-style-type: none;
      }
    `

};
