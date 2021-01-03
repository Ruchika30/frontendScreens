
/** @jsx jsx */
import { css } from '@emotion/core';
import { banner } from '../../assets/icons';
import { fontSize28, gothic } from '../../assets/styles/typography';

export default {

  cardWrapper: {
    margin: '10px 10px',
    backgroundPosition: 'right',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      transform: 'scale(1.05)',
      transition: '0.3s'
    }
  },

  contentContainer: css`
    // background-color: grey;
    background-image: linear-gradient(to top ,grey, white);
    position: absolute;
    bottom:0;
    opacity: 0.7;
    width: 100%;
    color: black;
    font-size: 1.5rem;
    ${gothic};
  `,

  container: {
    backgroundImage: `url(${banner})`

  },
  bgImage: {
    // backgroundImage: `url(${japan})`
  },

  imageWrapper: {
    width: '100%',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: '0.3s'
    }
  },

  innerCardWrapper: {
    height: '80%',
    width: '80%',
    backgroundColor: 'white',
    opacity: '0.7',

    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

  },

  title: {
    fontSize28

  }

};
