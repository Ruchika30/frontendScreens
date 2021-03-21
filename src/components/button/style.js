
import { css } from '@emotion/core';

export const baseButton = css`
      width: 100%;
      background-color: white;
      font-weight: bold;
      margin: auto;
      border-color: none;
    `;

export const txtBaseStyle = css`
  font-size: 16px;
     color: #F9F9F9;
`;

export const buttonTypeStyles = {

  contained: css`
    border: 0px;
    border-radius: 3px;
      background-color: #0E4194;
        &:disabled {
          background-color: #AAAAAA;
   }
   
`,
  outlined: css`
      background-color: transparent;
      border-radius: 3px;
      color: #0E4194;
      border: 1px solid #0E4194;
        &:disabled {
          background-color: #AAAAAA;
   }`

};
