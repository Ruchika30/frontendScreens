
import { css } from '@emotion/react';
import { logo } from '../../assets/icons';
import { fontSize28 } from '../../assets/styles/typography';
import { aquaBlue, skyBlueColor } from '../../assets/styles/colors';

export default {

  cardWrapper: {
    backgroundColor: aquaBlue,
    margin: '10px 10px',
    backgroundPosition: 'right',
    // backgroundImage: `url(${logo})`,
    height: '18em',
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      transform: 'scale(1.001)',
      transition: '0.3s',
      boxShadow: '0 10px 18px rgba(.10, 0, 0, 0.10), 0 5px 5px rgba(0, 0, 0, 0.12)'

    }
  },

  bgImage: {
    backgroundImage: `url(${logo})`
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
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'

  },

  title: {
    fontSize28

  },

  textStyle: css`
        display: flex;
        font-size: 1.2em;
        padding-top: 10px;
        justify-content: center;
        font-family: gothic;
    `

};
