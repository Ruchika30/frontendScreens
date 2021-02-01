/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useEffect } from 'react';
import { banner } from '../../assets/icons';
import style from './style';
import { lightGreyColor } from '../../assets/styles/colors';
import { m3 } from '../../assets/styles/spacing';

const Card = props => {
  const { skillsData } = props;
  const { name, rating, difficulty } = skillsData || {};

  const {
    cardWrapper, innerCardWrapper, contentContainer, bgImage
  } = style;

  return (
    <div style={{
      width: '100%',
      backgroundImage: `url(${banner})`,
      backgroundPosition: 'right',
      height: '400px',
      position: 'relative',
      border: `1px solid  ${lightGreyColor}`,
      borderRadius: '5px'

    }}
    >
      {/* information */}
      <div style={{ padding: '10px' }} css={contentContainer}>
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
