
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import {
  fontSize14, gothicSemiBold
} from '../../assets/styles/typography';
import { useHistory } from 'react-router-dom';

const BreadCrumb = props => {
  const { listOfLinks } = props;
  const history = useHistory();

  const [screenWidth, setscreenWidth] = useState('');
  const container = css`
    width: 80%;
    padding-bottom: 5px;
   
 `;
  const breadCrumbs = css`
     display: flex; 
      & > li { 
          list-style-type: none;
            cursor: pointer;
            display: flex;

        &:hover{
            text-decoration: none;
           } 
      }
    
    `;

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
  }, []);

  const getLinkValue = (item, index) => {
    if (screenWidth < 450) {
      if (listOfLinks.length > 2 && index !== 0 && index !== listOfLinks.length - 1) return '..';
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
          <li onClick={() => handleClick(item.link)}>
            {/* {item.value} */}
            {getLinkValue(item, index)}
            {(index === listOfLinks.length - 1) ? null : <span style={{ padding: '0px 10px' }}> / </span> }
          </li>
        ))}

      </ul>
    </div>
  );
};

export default BreadCrumb;
