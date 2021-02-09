
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import style from './style';
import Layout from '../../components/layout';
import NumberAnimation from '../../components/numberAnimation';
import CardWithBtn from '../../components/cardForStages';
import { useHistory } from 'react-router-dom';
import {
  HomePgBanner, careerChangers, choose, decide, explore, grads, highSchool, home, kids, logoIcon, logoWithTxt, school, whyUs
} from '../../assets/icons';
import { mBottom3 } from '../../assets/styles/spacing';
import { aquaBlue, paperColor } from '../../assets/styles/colors';
import { SocialIcon } from 'react-social-icons';
import Footer from '../../components/footer';
import GoToTopProvider from '../../hooks/use-topNavigation';
import consumer from '../../context/consumer';
import Navbar from '../../components/navbar';

const HomePage = () => {
  const {
    navbar, menuItem, sectionContainer, liWrapper, actionOptionContainer, description, headerDescription, iframeStyle, gridStyle, header, menu, menuWrapper, animationTextBody, iconContainer, aboutUs,
    transitionsItem, headerContent, footer, headerImg, bannerContextContainer, actionTextContainer, option, items, gothic, nmbrContainer, numberAnimationContainer, numberContainer, test, title
  } = style;
  const [isVisible, setisVisible] = useState(true);
  const [value, setValue] = useState(200);
  const [activateNumberAnimation, setNmbrAnimation] = useState(false);
  const history = useHistory();
  const [overviewActive, setOverviewActive] = useState(true);
  const [skillsActive, setskillsActive] = useState(false);
  const [chooseOptionActive, setChooseOptionActive] = useState(false);

  const { showGoTop, hideGoTop } = GoToTopProvider();
  const [goToTopIconVisiblity, setGoToTopIconVisiblity] = useState(false);

  // base
  const container = css`
      width: 80%;
      margin: auto;
    `;

  const handleAbout = () => {
    history.push('/about');
  };

  const onHoverOverview = css`
        display: block;
         color: darkslategrey;
        //   font-size: 2rem;
       
    `;

  const onHoverSkillset = css`
       display: block;
        color: darkslategrey;
         @media (max-width: 450px){
            display: block;
        }
    `;

  const onHoverChoose = css`
        //  display: block;
          color: darkslategrey;
           @media (max-width: 450px){
            display: block;
        }
    `;

  const displayNone = css`
            display: none;
            visibility: hidden;
            font-size: 1vw;
    `;

  function updateTextPathOffset(offset) {
    const textPath = document.querySelector('#text-path');
    textPath.setAttribute('startOffset', offset);
  }

  const onScroll = () => {
    const textContainer = document.querySelector('#text-container');
    const textPath = document.querySelector('#text-path');
    const path = document.querySelector(textPath.getAttribute('href'));
    const pathLength = path.getTotalLength();
    console.log('pathLength', pathLength);
    requestAnimationFrame(() => {
      const rect = textContainer.getBoundingClientRect();
      const scrollPercent = rect.y / window.innerHeight;
      console.log('scrollPercent', scrollPercent);
      updateTextPathOffset(scrollPercent * 1 * 500);
    });
  };

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      showGoTop();
    } else {
      hideGoTop();
    }
  };

  const setToActive = stateName => {
    stateName(true);
  };

  const setToInActive = stateName => {
    stateName(false);
  };

  const showExplore = () => {
    setToActive(setOverviewActive);
    setToInActive(setskillsActive);
    setToInActive(setChooseOptionActive);
  };

  const showDecide = () => {
    setToActive(setskillsActive);
    setToInActive(setOverviewActive);
    setToInActive(setChooseOptionActive);
  };

  const showChoose = () => {
    setToActive(setChooseOptionActive);
    setToInActive(setOverviewActive);
    setToInActive(setskillsActive);
  };

  window.onscroll = () => scrollFunction();

  return (
    <React.Fragment onScroll={onScroll}>
      <div style={{ backgroundColor: paperColor }}>
        <header css={header}>
          <div css={animationTextBody}>
            <Navbar fixed barColor={aquaBlue} />
            <div css={bannerContextContainer}>
              <div css={headerContent}>
                <div css={title}>
                  Build Careers By Choice
                </div>
                <span css={headerDescription}>
                  Don't just land up in any random job. Decide for yourself.
                  Be well-prepared and do not let any Anu Aunty take over your choices. Align your goals, vision, passion
                  {' '}

                </span>
              </div>
              <div css={headerImg}>
                <img src={HomePgBanner} style={{ height: '100%' }} />
              </div>
            </div>
          </div>
        </header>

        {/* d="M0 100s269.931 86.612 520 0c250.069-86.612 480 0 480 0"  -- curved apth */}
        <section>
          <svg id="text-container" viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
            <path id="text-curve" d="M 0 100 s 109.931 0 520 0 c 250.069 0 480 0 480 0" fill="none" />

            <text x="50%" y="50%" fontSize="40" fontFamily="gothic" textAnchor="middle" alignmentBaseline="central">
              <textPath id="text-path" href="#text-curve" fontSize="2rem">
                We want to help millions choose the right career
              </textPath>
            </text>
          </svg>
        </section>

        <Layout contentStyle={container}>
          <div>
            <div style={{ margin: '10px 0px' }}>
              <div css={title} style={{ textAlign: 'center' }}>A glimpse into the future</div>
              <div css={description}>An ocean of choices to make, a future to build. Know what your options are</div>
            </div>
            <section css={gridStyle}>
              <CardWithBtn image={school} text="School Student" />
              <CardWithBtn image={highSchool} text="High School Student" />
              <CardWithBtn image={grads} text="Under Graduates" />
              <CardWithBtn image={careerChangers} text="Career Changers" />
            </section>
          </div>

          {/* Parent Scroll */}
          {/* <section style={{ backgroundColor: "red", height: '800px', flex: 1, overflowY: 'scroll' }}>
                <div id="overview" style={{ height: '700px' }} >explore
                        <img src={logoIcon} width="200px" height="200px" />
                </div>
                <div id="skillSet" style={{ height: '700px' }}>
                    Decide
                         <img src={logoIcon} width="200px" height="200px" />
                </div>
                <div id="choose" style={{ height: '700px' }}>
                    Choose
                          <img src={logoIcon} width="200px" height="200px" />
                </div>
            </section> */}

          {/* How does this worl */}
          {/* <div css={title} style={{ textAlign: 'center' }}>How does it work?</div>
            <div css={[gridStyle]} id="section" >
                    <div style={{ flex: 1, height: '500px', padding: '20px', alignItems: 'center'}}>
                        <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                            css={iframeStyle}
                        />
                    </div>

                    <div style={{ backgroundColor: "red", flex: 1,}}>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, esse! Reprehenderit tenetur labore magni odio quo inventore obcaecati temporibus facilis similique aliquid aliquam beatae voluptates, adipisci vitae delectus explicabo corporis?</div>

                    </div>

            </div> */}
        </Layout>

        {/* Image on hover */}
        <section css={actionOptionContainer}>
          <div css={gridStyle}>
            <div style={{
              flex: 1, alignSelf: 'center', margin: 'auto', width: '50%', display: 'flex', justifyContent: 'center'
            }}
            >
              <img src={explore} width="300px" height="300px" css={overviewActive ? onHoverOverview : displayNone} />
              <img src={decide} width="300px" height="300px" css={skillsActive ? onHoverSkillset : displayNone} />
              <img src={choose} width="400px" height="300px" css={chooseOptionActive ? onHoverChoose : displayNone} />
            </div>
            <div css={actionTextContainer}>
              <ul style={{ textAlign: 'left', textDecoration: 'none' }}>
                <li css={items}><a href="#overview" onMouseEnter={showExplore} css={option}>Explore</a></li>
                <div css={[overviewActive ? onHoverOverview : displayNone, mBottom3]}>Explore the various options around from professionals themselves</div>
                <li css={items}><a href="#skillSet" onMouseEnter={showDecide} css={option}>Decide</a></li>
                <div css={[skillsActive ? onHoverSkillset : displayNone, mBottom3]}>Decide which fits the best for you</div>
                <li css={items}><a href="#choose" onMouseEnter={showChoose} css={option}>Choose</a></li>
                <div css={[chooseOptionActive ? onHoverChoose : displayNone, mBottom3]}>Choose the right career for yourself</div>
              </ul>
            </div>

          </div>
        </section>

        <Layout contentStyle={container}>
          {/* <section css={[sectionContainer, gridStyle]} id="section">
                    <div>
                        <div css={title}>How does it work?</div>
                        <div style={{ width: '70%' }} css={gothic}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, metus at rhoncus scelerisque, lacus sem sollicitudin mauris, in accumsan elit elit nec enim. Maecenas non dolor est. Quisque sit amet dignissim odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum at erat at sapien ullamcorper laoreet at a tortor. Sed et eros mauris. Morbi nulla ipsum, tristique sit amet finibus ac, vestibulum e</div>
                    </div>
                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                        css={iframeStyle}
                    />
                </section> */}

          <section css={[sectionContainer, gridStyle]}>

            <div>
              <div css={title}>Why Careeristic?</div>
              <div css={gothic}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, metus at rhoncus scelerisque, lacus sem sollicitudin mauris, in accumsan elit elit nec enim. Maecenas non dolor est. Quisque sit amet dignissim odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum at erat at sapien ullamcorper laoreet at a tortor. Sed et eros mauris. Morbi nulla ipsum, tristique sit amet finibus ac, vestibulum e</div>
            </div>
            <div>
              <img src={whyUs} alt="logo" style={{ width: '100%' }} />
            </div>

          </section>
        </Layout>

        {/* Nmbr animation */}
        {activateNumberAnimation
                && (
                  <div css={numberAnimationContainer}>
                    <div css={nmbrContainer}>
                      <NumberAnimation
                        value="2000"
                        text="Careers Options"
                      />
                      <NumberAnimation
                        value="2000"
                        text="Minutes of Discussions"
                      />
                      <NumberAnimation
                        value="200"
                        text="Cups of coffee"
                      />
                    </div>
                  </div>
                )}

        <Footer />
      </div>

    </React.Fragment>
  );
};

export default consumer(HomePage);
