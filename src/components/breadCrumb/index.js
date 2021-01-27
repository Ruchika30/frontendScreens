
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import {
  fontSize14, fontSize28, gothicSemiBold, w700
} from '../../assets/styles/typography';
import { useHistory } from 'react-router-dom';

const BreadCrumb = props => {
  const { listOfLinks } = props;
  const history = useHistory();

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
            text-decoration: underline;
           } 
      }
    
    `;

  const handleClick = link => {
    history.push(link);
  };
  return (
    <div>
      {/* Breadcrumb */ }
      <div css={[container, fontSize14, gothicSemiBold]}>
        <ul css={breadCrumbs}>
          {listOfLinks.map(item => (
            <li onClick={() => handleClick(item.link)}>
              {item.value}
              <span style={{ padding: '0px 10px' }}> / </span>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default BreadCrumb;
