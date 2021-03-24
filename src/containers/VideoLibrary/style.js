import { css } from '@emotion/core';
import { lightGreyColor, skyBlueColor } from '../../assets/styles/colors';

export default {
  videoWrapper: css`
          position: relative;
            padding-bottom: 46.25%;
            height: 0;
            margin-top: 15px;

    `,

  iframeStyle: css`
            position: absolute;
            top: 0;
            left: 0;
            width: 70%;
            height: 85%;
        @media(max-width:450px){
            width: 100%;
            height: 100%;
        }
            `,

  arrow: css`
        // padding: 5px;
        // border-radius: 50%;
        // height: 40px;
        // width: 40px;
    
    `

};
