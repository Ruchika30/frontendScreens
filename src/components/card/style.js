
import { css } from '@emotion/core';
import { japan } from '../../assets/icons';
import { fontSize28 } from '../../assets/styles/typography';

export default {

  cardWrapper: {
    backgroundColor: 'red',
    margin: '10px 10px',
    backgroundPosition: 'right',
    backgroundImage: `url(${japan})`,
    height: '18em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '20rem',
    '&:hover': {
      transform: 'scale(1.02)',
      transition: '0.3s'
    }
  },

  bgImage: {
    backgroundImage: `url(${japan})`
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
