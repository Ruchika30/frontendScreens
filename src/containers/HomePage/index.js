
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
      <Layout contentStyle={container}>
        <div css={title}>A glimpse into the future</div>
        <div>An ocean of choices to make, a future to build. Know what your options are</div>

        <section css={gridStyle}>
          <Card />
          <Card />
          <Card />
          <Card />
        </section>

        <div css={numberAnimationContainer}>
          <NumberAnimation
            value="2000"
            text="Careers Options"
          />
          <NumberAnimation
            value="2000"
            text="Discussions"
          />
          <NumberAnimation
            value="2000"
            text="Interviews"
          />
        </div>

        <section css={[sectionContainer, gridStyle]}>
          <div>
            <div css={title}>How does it work?</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, metus at rhoncus scelerisque, lacus sem sollicitudin mauris, in accumsan elit elit nec enim. Maecenas non dolor est. Quisque sit amet dignissim odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum at erat at sapien ullamcorper laoreet at a tortor. Sed et eros mauris. Morbi nulla ipsum, tristique sit amet finibus ac, vestibulum e</div>
          </div>
          <div css={videoWrapper}>
            <iframe
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              // css={iframeStyle}
              width="560"
              height="349"
            />
          </div>
        </section>

        <section css={[sectionContainer, gridStyle]}>

          <div>
            <div css={title}>Why Netflix of Careers?</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, metus at rhoncus scelerisque, lacus sem sollicitudin mauris, in accumsan elit elit nec enim. Maecenas non dolor est. Quisque sit amet dignissim odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum at erat at sapien ullamcorper laoreet at a tortor. Sed et eros mauris. Morbi nulla ipsum, tristique sit amet finibus ac, vestibulum e</div>
          </div>
          {/* <iframe width="420" height="315"
            src="https://www.youtube.com/watch?v=2Ar05F-LnWQ">
          </iframe> */}
        </section>

      </Layout>

    </React.Fragment>
  );
};

export default HomePage;
