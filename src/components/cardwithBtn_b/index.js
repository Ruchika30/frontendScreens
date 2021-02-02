/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
// import { space } from '../../assets/icons';
import style from './style';
import { fontSize30, gothic, oswald } from '../../assets/styles/typography';
import { m3 } from '../../assets/styles/spacing';

const Card = props => {
  const { details, image, text } = props;
  const {
    cardWrapper, innerCardWrapper, title, textStyle, bgImage
  } = style;
  const { name, options, popularity } = details || {};

  return (
    <div css={cardWrapper}>
      {/* <img src={space} css={bgImage}></img> */}
      <div css={innerCardWrapper}>
        <img src={image} alt="kids" style={{ width: '100%', height: '100%' }} />
      </div>
      <div css={textStyle}>{text}</div>

    </div>

  );
};

export default Card;
