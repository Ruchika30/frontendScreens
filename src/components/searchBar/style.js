
import { css } from '@emotion/core';

export default {

    container: css`
        width: 100%;
        border: 1px solid black;
        border-radius: 20px;
        padding: 0px 10px;
         display:flex;
        align-items: center;
        justify-content: space-between;
    `,


    icon: css`
        height: 20px;
    `,

    iconWrapper: css`
        padding: 5px;
    `,


    searchBarStyle:css` 
        width: 100%;
        border: 0;
        &:focus { 
            outline: none;
            border-shadow: none;

        }
    `   ,






}