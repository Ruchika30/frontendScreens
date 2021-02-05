
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import {
  fontSize14, gothicSemiBold
} from '../../assets/styles/typography';
import { useHistory } from 'react-router-dom';
import style from './style';

const BreadCrumb = props => {
  const { listOfLinks, txtColor } = props;
  debugger;
  const history = useHistory();
  const [screenWidth, setscreenWidth] = useState(900);
  const { container, breadCrumbs } = style;

  useEffect(() => {
    // Get the screen width
    (function () {
      window.onresize = displayWindowSize;
      window.onload = displayWindowSize;

      function displayWindowSize() {
        const myWidth = window.innerWidth;
        setscreenWidth(myWidth);
      }
    }());
  });

  const getLinkValue = (item, index) => {
    if (screenWidth < 450) {
      if (listOfLinks.length > 3 && index !== 0 && index !== listOfLinks.length - 1) return '..';
      return item.value;
    }
    return item.value;
  };

  const handleClick = link => {
    history.push(link);
  };
  return (
    <div css={[container, fontSize14, gothicSemiBold]}>
      <ul css={breadCrumbs}>
        {listOfLinks.map((item, index) => (
          <li onClick={() => handleClick(item.link)} style={{ color: txtColor || 'white' }}>
            {getLinkValue(item, index)}
            {(index === listOfLinks.length - 1) ? null : <span style={{ padding: '0px 10px' }}> / </span> }
          </li>
        ))}

      </ul>
    </div>
  );
};

export default BreadCrumb;
