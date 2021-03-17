/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styles from './style';
import { dummy } from '../../assets/icons';
import { Slide } from 'pure-react-carousel';
import React from 'react';

const VerticalCard = ({ index, ...cardProps }) => (
  <Slide index={index} style={{ width: '400px' }}>
    <div css={styles.wrapper}>
      <div css={styles.imageWrapper}>
        <img src={dummy} css={styles.image} alt="sector_icon" />
      </div>
      <div css={styles.text}>
        <h3 css={{ fontWeight: 'bold', padding: '10px 0px' }}>nananm</h3>
        <p css={styles.excerpt}>
          {' '}
          Ruchika has worked for startups like Wingfy, Zerodha
          {' '}
          {/* {options} */}
        </p>
        <p css={styles.time}>
          Senior devloper | 4 yrs
          {' '}
          {/* {popularity} */}
        </p>
      </div>
    </div>
  </Slide>

);
export default VerticalCard;
