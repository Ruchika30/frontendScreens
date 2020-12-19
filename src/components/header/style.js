/** @jsx jsx */
import { css, jsx } from '@emotion/core';
export default {

    header: css`
        height: 400px;
        background-image: url('../../assets/icons/banner.jpeg');
        width: 100%;
        background-repeat: no-repeat;
        background-position: right;
        background-color: #b4fbfb;
`,

    menuWrapper: css`
     display: flex;
     margin-bottom: 100px;
    `,

    animationTextBody : css`
        padding: 2% 5%;
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





}

   
