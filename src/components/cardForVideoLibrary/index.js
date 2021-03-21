/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styles from './style';
import { dummy } from '../../assets/icons';
import { Slide } from 'pure-react-carousel';
import React from 'react';

const VerticalCard = ({ index, cardProps }) => {
  const {
    experience, link, profile, title
  } = cardProps;

  return (
    <div css={styles.wrapper}>
      <div css={styles.imageWrapper}>
        <img src={dummy} css={styles.image} alt="sector_icon" />
      </div>
      <div css={styles.text}>
        <h3 css={{ fontWeight: 'bold', padding: '10px 0px' }}>
          {title}
        </h3>
        <p css={styles.excerpt} />
        {title && experience && (
          <p>
            {title}
            |
            {experience}
          </p>
        )}
      </div>
    </div>
  );
};
export default VerticalCard;
