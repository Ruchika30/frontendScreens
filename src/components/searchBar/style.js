
import { css } from '@emotion/core';
import {
  darkGrayColor
} from '../../assets/styles/colors';

export default {

  container: css`
        width: 50%;
        border: 1px solid lightgrey;
        border-radius: 3px;
        padding:  7px;
         display:flex;
        align-items: center;
        justify-content: space-between;
        
        @media (max-width: 480px){
            width: 100%;
          
        }
    `,

  icon: css`
        height: 20px;
        color: ${darkGrayColor};
    `,

  iconWrapper: css`
        padding: 5px;
    `,

  searchBarStyle: css` 
        width: 100%;
        border: 0;
        padding: 8px;
        // margin-left: 10px;
        &:focus { 
            outline: none;
            border-shadow: none;

        }
    `

};
