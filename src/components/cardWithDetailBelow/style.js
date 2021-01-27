
import { css } from '@emotion/core';
import { japan } from '../../assets/icons';
import { fontSize28 } from '../../assets/styles/typography';

export default {

  cardWrapper: css`
    border: 1px solid black;
    margin: 10px 10px;
    min-width: 400px;
     @media (max-width: 800px){
      min-width: 100px;
     }
  `

};
