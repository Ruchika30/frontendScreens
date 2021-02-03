
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export default {

  container: css`
            width: 80%;
            padding-bottom: 5px;
   
 `,
  breadCrumbs: css`
        display: flex; 
        font-family: latoRegular;
        & > li { 
            list-style-type: none;
                cursor: pointer;
                display: flex;

            &:hover{
                text-decoration: none;
            } 
        }
`
};
