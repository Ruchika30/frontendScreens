/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useEffect } from 'react';
import { gear } from '../../assets/icons';
import style from './style';
import { lato } from '../../assets/styles/typography';

const Card = props => {
  const { data } = props;
  const { name, rating, difficulty } = data || {};

  const {
    cardWrapper, innerCardWrapper, title, bgImage
  } = style;

  return (
    <div style={{
      margin: '10px 10px',
      display: 'flex',
      boxShadow: 'rgba(0, 0, 0, 0.08) 0px 6px 16px 0px'
    }}
    >
      <div style={{ width: '90px' }}>
        <img src={gear} alt="banner" style={{ width: '100%' }} />
      </div>
      {/* information */}
      <div style={{ paddingLeft: '10px', flex: 0.5, paddingTop: '5px' }} css={lato}>
        <div>{name}</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
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
