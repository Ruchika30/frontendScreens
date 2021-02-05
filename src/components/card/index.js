/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import style from './style';
import {
  fontSize30, gothic, lato, oswald
} from '../../assets/styles/typography';
import { m3 } from '../../assets/styles/spacing';

const Card = props => {
  const { details } = props;
  const {
    cardWrapper, innerCardWrapper
  } = style;
  const { name, options, popularity } = details || {};

  return (
    <div css={cardWrapper}>
      {details
        ? (
          <div css={innerCardWrapper}>
            <div css={[fontSize30, oswald]}>{name}</div>
            <div css={[m3, lato]}>
              Career Options:
              {' '}
              {options}
            </div>
            <div css={[lato]}>
              Popularity:
              {' '}
              {popularity}
            </div>
          </div>
        )
        : null}
    </div>

  );
};

export default Card;
