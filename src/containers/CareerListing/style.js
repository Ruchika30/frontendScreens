import { p2, mBottom1, mRight3} from '../../assets/styles/spacing'
import { css } from '@emotion/core';
import { skyBlueColor, } from '../../assets/styles/colors'

export default{
    headings: css`
        border: 1px solid black;
        ${p2};
        background-color:${skyBlueColor};
        ${mBottom1};

    `,

    tag: css`
        ${mRight3};
    
    `
        
    



    
}