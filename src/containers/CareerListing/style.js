import { mBottom1, mRight3, p2 } from '../../assets/styles/spacing';
import { css } from '@emotion/core';
import { lightGreyColor, skyBlueColor } from '../../assets/styles/colors';

export default {
  headings: css`
        border: 1px solid black;
        ${p2};
        background-color:${skyBlueColor};
        ${mBottom1};

    `,

  tag: css`
        ${mRight3};
    
    `,
  srchWrapper: css`
    background-color: ${lightGreyColor};
    padding: 10px;
    margin : 5px 0px;
    `

};
