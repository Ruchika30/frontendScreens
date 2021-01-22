import { css } from '@emotion/core';
import { lightGreyColor, skyBlueColor } from '../../assets/styles/colors';

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

  contentWrapper: css`
        padding: 1rem;
        // border: 1px solid black;
        box-shadow: 0 10px 18px rgba(.10,0,0,0.10), 0 5px 5px rgba(0,0,0,0.12);

    `

};
