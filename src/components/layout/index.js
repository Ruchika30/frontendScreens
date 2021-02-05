/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import Footer from '../footer';

const Layout = props => {
  const { contentStyle } = props;

  return (
    <div css={contentStyle}>
      {props.children}

    </div>
  );
};

export default Layout;
