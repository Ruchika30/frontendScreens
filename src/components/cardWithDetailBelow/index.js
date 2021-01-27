/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useEffect } from 'react';
import { banner, space } from '../../assets/icons';
import style from './style';
import { fontSize30, gothic, oswald } from '../../assets/styles/typography';
import { m3 } from '../../assets/styles/spacing';

const Card = props => {
  const { data } = props;
  const { name, rating, difficulty } = data || {};

  const {
    cardWrapper, innerCardWrapper, title, bgImage
  } = style;

  return (
    <div css={cardWrapper}>
      <div style={{ width: '100%' }}>
        <img src={banner} alt="banner" style={{ width: '100%' }} />
      </div>
      {/* information */}
      <div style={{ padding: '10px' }}>
        <div>{name}</div>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '20px' }}>
            Rating :
            {rating}
          </div>
          <div>
            Difficulty:
            {' '}
            {difficulty}
          </div>
        </div>
      </div>

    </div>

  );
};

export default Card;
