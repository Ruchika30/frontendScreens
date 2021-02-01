/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import style from './style';
import { fontSize30, gothic, oswald } from '../../assets/styles/typography';
import { m3 } from '../../assets/styles/spacing';

const Card = props => {
  const { details } = props;
  const {
    cardWrapper, innerCardWrapper, title, bgImage
  } = style;
  const { name, options, popularity } = details || {};

  return (
    <div css={cardWrapper}>
      {/* <img src={space} css={bgImage}></img> */}

      {details
        ? (
          <div css={innerCardWrapper}>
            <div css={[fontSize30, oswald]}>{name}</div>
            <div css={[m3, gothic]}>
              Career Options:
              {' '}
              {options}
            </div>
            <div css={[gothic]}>
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
