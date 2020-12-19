import { css } from '@emotion/core';
import { justifyContentSpaceBet, dFlex } from '../../assets/styles/flexbox'
import { navyBlueColor, seaBlueColor, whiteColor } from '../../assets/styles/colors'
import { mTopBottom4 } from '../../assets/styles/spacing'


export default {

    cardWrapper: css`
      width: 100 %;
     ${navyBlueColor};
    height: 55px;
    padding: 10px 0px;
`,

    homeWrapper: css`
    height: 50px;
    width: 50px;
    background - color: ${seaBlueColor};
    border - radius: 50 %;
    align - items: center;
    margin - left: 150px;
`,

    icon: css`
     height: 50px;
    width: 30px;
    `,

    title: css`
        font-size: 3em;
    `,

    gridStyle: ({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))'

    }),

    sectionContainer: css`
        ${mTopBottom4};
        ${dFlex}
    `

    ,
    numberAnimationContainer: css`
        ${navyBlueColor};
        ${justifyContentSpaceBet};
        ${dFlex};
        ${whiteColor};
        padding: 10px;

`
}




