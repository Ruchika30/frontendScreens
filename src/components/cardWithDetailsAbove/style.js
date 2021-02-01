
import { css } from '@emotion/core';
import { space } from '../../assets/icons';
import { fontSize28 } from '../../assets/styles/typography';

export default {

  cardWrapper: css`
      border: 1px solid black;
      margin: 10px 10px;
      max-width: 600px;
      display: flex;
      flex-direction :column;
       @media (max-width: 800px){
        min-width: 100px;
       },

       &:hover: {
            transform: scale(1.02);
            transition: 0.3s;
        }
       `,

  imageWrapper: {
    backgroundColor: 'red',
    // margin: '10px 10px',
    backgroundPosition: 'center',
    backgroundImage: `url(${space})`,
    minHeight: '10rem',
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'left',
    maxWidth: '20rem',
    textAlign: 'left'

  }

};
