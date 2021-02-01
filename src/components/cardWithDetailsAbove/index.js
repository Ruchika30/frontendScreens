/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useEffect } from 'react';
import { banner, space } from '../../assets/icons';
import style from './style';
import { fontSize30, gothic, oswald } from '../../assets/styles/typography';
import { m3 } from '../../assets/styles/spacing';
import { gridStyle } from '../../assets/styles/base';

const Card = props => {
  const { details } = props;
  const { name, rating, difficulty } = details || {};

  const {
    cardWrapper, imageWrapper, innerCardWrapper, title, bgImage
  } = style;

  return (
    <React.Fragment>
      {
        details ? (
          <div css={cardWrapper}>
            {/* information */}
            <div style={{
              padding: '10px', flex: 1, display: 'flex', backgroundColor: 'pink'
            }}
            >
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

            <div css={imageWrapper}>

              This is div
            </div>

            {/* <div style={{ width: '100%', flex: 1, display: 'flex' }}>
              <img src={space} alt="banner" style={{ width: '100%' }} />
            </div> */}

          </div>
        ) : null
      }
    </React.Fragment>

  );
};

export default Card;
