import { css } from '@emotion/core';
// import { darkGrayColor, navyBlueColor } from '../../../styles/colors';

export default {

  inputLabel: css`
        position: absolute;
        font-size:  12px;
        color: black;
        opacity: 0.6;
    `,
  isFocusedStyle: css`
        left: 10px; 
        top: -26px;
`,

  unFocusedStyle: css`
        left: 35px; 
        top: px;
`,

  inputStyle: css`
    border: 0;
     width: 100%;
     font-size:  20px;
    `,
  closeIcon: {
    position: 'absolute',
    right: '0px',
    color: '#0E4194',
    borderRadius: '10px',
    width: '25px',
    height: '25px',
    alignSelf: 'center'
  },
  inputContainer: css`
    display: flex ;
    border-bottom: 2px solid  black;
    font-size:  20px;
  `

};

