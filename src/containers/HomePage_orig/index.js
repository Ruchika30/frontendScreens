
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useState } from 'react';
import style from './style';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Card from '../../components/card';
import Layout from '../../components/layout/index.js';
import { dFlex, justifyContentSpaceBet } from '../../assets/styles/flexbox';
import NumberAnimation from '../../components/numberAnimation';

const HomePage = () => {
  const {
    navbar, iframeStyle, videoWrapper, cardWrapper, sectionContainer, gridStyle, numberAnimationContainer, numberContainer, test, title
  } = style;
  const [isVisible, setisVisible] = useState(true);
  const [value, setValue] = useState(200);

  // base
  const container = css`
      width: 80%;
      margin: auto;
    `;

  const handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  return (
    <React.Fragment>

      <Navbar fixed={isVisible} />
      <header><Header /></header>

    </React.Fragment>
  );
};

export default HomePage;
