/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useEffect } from 'react';
import { space } from '../../assets/icons';
import style from './style';

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
      boxShadow: '0 10px 18px rgba(.10, 0, 0, 0.10), 0 5px 5px rgba(0, 0, 0, 0.12)'
    }}
    >
      <div style={{ width: '90px' }}>
        <img src={space} alt="banner" style={{ width: '100%' }} />
      </div>
      {/* information */}
      <div style={{ paddingLeft: '10px', flex: 0.5, paddingTop: '5px' }}>
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
