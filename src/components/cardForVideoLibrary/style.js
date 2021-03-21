
/** @jsx jsx */
import { css } from '@emotion/core';
import { darkBlue, paperColor } from '../../assets/styles/colors';

export default {

  wrapper: {
    textDecoration: 'none',
    margin: '0px 10px',
    // marginBottom: '25px',
    paddingBottom: '10px',
    borderRadius: '5px',
    minWidth: '360px',
    fontFamily: 'latoRegular',
    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 6px 16px 0px',
    '&:hover': {
      transition: '0.3s',
      transform: 'translate(0, -10px)',
      backgroundColor: darkBlue,
      color: 'white'

    }
  },
  imageWrapper: {
    maxHeight: '200px',
    objectFit: 'contain'
  },

  text: css`
    padding: 0px 15px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    white-space: initial;
   
    `,

  image: {
    width: '100%',
    maxHeight: '200px',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  },
  excerpt: {
    fontSize: '14px'
  },
  time: {
    fontSize: '14px'
  }

};
