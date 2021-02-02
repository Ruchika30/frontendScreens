
import { css } from '@emotion/core';
import { home, japan, tmpBg } from '../../assets/icons';
import { fontSize28 } from '../../assets/styles/typography';

export default {

  cardWrapper: {
    backgroundColor: 'white',
    margin: '10px 10px',
    backgroundPosition: 'center',
    backgroundImage: `url(${tmpBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '18em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '20rem',
    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 6px 16px 0px',
    '&:hover': {
      // transform: 'scale(1.02)',
      transition: '0.3s',
      transform: 'translate(0, -10px)'
    }
  },

  bgImage: {
    backgroundImage: `url(${tmpBg})`
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
