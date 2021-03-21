
import { css } from '@emotion/core';
import {
  darkGrayColor
} from '../../assets/styles/colors';

export default {
  wrapper: css`
  display: flex;
   flex-direction: row;
   width: 100%;
  @media (max-width: 480px){
          flex-direction: column;
  } 
          
  `,

  container: css`
        width: 80%;
        border: 1px solid lightgrey;
        border-radius: 3px;
        padding:  2px;
         display: flex;
        align-items: center;
        flex: 1;
        justify-content: space-between;

        
        @media (max-width: 480px){
            width: 100%;
             display: flex;
             flex: 1;
           
          
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
