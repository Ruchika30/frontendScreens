import { css } from '@emotion/core';
import { borderRadiusSm, shadowSm } from './reset';
import { pLeftRight3, pTopBottom3 } from './spacing';
import { alignItems, dFlex, justifyContentCenter } from './flexbox';

export const cardWrapper = css`
    ${borderRadiusSm}
    ${pLeftRight3}
    ${pTopBottom3}
    ${shadowSm}
`;

// .........border-bottom..........//
export const borderBottom = {
  borderBottom: '1px solid #D7D7D7'
};

export const zIndexValues = {
  OVERLAY: 1100,
  MODAL: 1200,
  FIXED_BUTTONS: 200,
  SNACKBAR: 300
};

export const centerAlign = css`
 ${dFlex};
  ${justifyContentCenter};
  ${alignItems};
`;

