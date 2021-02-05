import { css } from '@emotion/react';

export default {

  footer: css`
        justify-content: space-between;
        padding : 1%;
        display: flex;
        width: 90%;
        margin: auto;
        align-items: center;
    `,

  liWrapper: css`
        display: flex;
        list-style-type: none;
        & > div {
             margin-right: 10px;
        }
      `
};
