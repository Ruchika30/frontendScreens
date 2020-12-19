import { css } from '@emotion/core';
import {
  m0, space
} from './spacing';
import { fontFace } from './typography';
import {
  paperColor, secondaryColor, primaryColor, bgColor
} from './colors';

// animation duration for components appear / disappear should be consistent
export const animationDuration = '0.3s';

export const animationMacro = keyFrames => (css`-webkit-animation: ${keyFrames} ${animationDuration} ease-in-out;
  -moz-animation: ${keyFrames} ${animationDuration} ease-in-out;
  -o-animation: ${keyFrames} ${animationDuration} ease-in-out;
  animation: ${keyFrames} ${animationDuration} ease-in-out;
  `
);

export const breakpoints = ['(min-width: 1080px)', '(min-width: 768px)', '(min-width: 300px)'];

export const borderRadius = {
  borderRadiusSmaller: '0.15rem',
  borderRadiusSmall: '0.25rem',
  borderRadiusMd: '0.325rem'
};

export const borderRadiusMd = {
  borderRadius: borderRadius.borderRadiusMd
};
export const borderRadiusSm = {
  borderRadius: borderRadius.borderRadiusSmall
};

export const borderRadiusSmaller = {
  borderRadius: borderRadius.borderRadiusSmall
};

export const shadowSm = {
  boxShadow: '0 .125rem .875rem rgba(0,0,0,.075)'
};

export const textWhite = {
  color: paperColor
};

export const textSecondary = {
  color: secondaryColor
};

export const textPrimary = {
  color: primaryColor
};

export const border0 = {
  border: 0
};

export const outline0 = {
  outline: 0
};

export const w100 = {
  width: '100%'
};

export const tranformRotate = {
  transform: 'rotate(180deg)'
};

// export const GlobalStyles = css`
//   ${fontFace}
//     html {
//         -webkit-box-sizing: border-box;
//         -moz-box-sizing: border-box;
//         box-sizing: border-box;
//     }
//     *,
//     *::before,
//     *::after {
//         -webkit-box-sizing: inherit;
//         -moz-box-sizing: inherit;
//         box-sizing: inherit;
//     }
//     p {
//         padding: ${space.space0};
//         margin: ${space.space0}
//     }

//     body {
//         ${m0};
//         background: ${bgColor};
//         font-size: 0.875rem;
//         font-family:JioTypeW04-Medium;
//         line-height:  0.9375rem;
//     }
// `;
