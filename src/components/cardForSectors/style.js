
import { css } from '@emotion/core';
import { space } from '../../assets/icons';
import { fontSize28 } from '../../assets/styles/typography';

export default {

  wrapper: {
    textDecoration: 'none',
    margin: '0px 10px',
    marginBottom: '25px',
    paddingBottom: '10px',
    borderRadius: '5px',
    maxWidth: '360px',
    // minHeight: '250px',
    fontFamily: 'latoRegular',
    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 6px 16px 0px',
    '&:hover': {
      transition: '0.3s',
      // transform: 'scale(1.05)'
      transform: 'translate(0, -10px)'
    }
  },
  imageWrapper: {
    maxHeight: '200px',
    objectFit: 'contain'
  },

  text: {
    padding: '0px 15px',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px'
  },

  image: {
    width: '100%',
    maxHeight: '200px',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  },
  excerpt: {
    color: 'black',
    fontSize: '14px'
  },
  time: {
    color: '#222831',
    fontSize: '14px'
  }

};
