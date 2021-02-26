/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import styles from './style';
import { dummy } from '../../assets/icons';
import { pagewhite, seaBlueColor } from '../../assets/styles/colors';

const VerticalCard = props => {
  const { details } = props;
  const { name, options, popularity } = details || {};

  return (

    <div css={styles.wrapper}>
      <div css={styles.imageWrapper}>
        <img src={dummy} css={styles.image} alt="sector_icon" />
      </div>
      <div css={styles.text}>
        <h3 css={{ fontWeight: 'bold', padding: '10px 0px' }}>{name}</h3>
        <p css={styles.excerpt}>
          {' '}
          Ruchika has worked for startups like Wingfy, Zerodha
          {' '}
          {options}
        </p>
        <p css={styles.time}>
          Senior devloper | 4 yrs
          {' '}
          {popularity}
        </p>
      </div>
    </div>
  );
};

export default VerticalCard;
