/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { forwardRef, useEffect, useState } from 'react';
import style from './style';
import { useHistory } from 'react-router-dom';
import CustomCardSlide from '../../components/cardForVideoLibrary';
import { skyBlueColor } from '../../assets/styles/colors';
import { heading, title, w100 } from '../../assets/styles/reset';
import { pLeft6 } from '../../assets/styles/spacing';
import consumer from '../../context/consumer';
import { getOverviewDetails } from '../../services/careers';
import LoaderProvider from '../../hooks/use-loader';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slider
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  Card, Container, Header, Message, Segment
} from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft, faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const headerWrapper = css`
    ${w100};
    height: 200px;
 `;

const header = css`
  background-color: ${skyBlueColor};
   ${pLeft6}
  `;

const arrow = css`
      font-size: 20px;
      background: #B4FBFB;
      height: 40px;
      width: 40px !important;
      padding: 5px;
      border-radius: 50px;
       box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

       &:hover{
          background-color: #1C1542;
          box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
          color: #fff;
          // transform: translateY(-7px);
       }
`;

const btnContainer = css`
 position: absolute;
  top: 120px;
    background-color: transparent;
     border: 0;
`;

const VideoLibrary = ({ ref, idDetailContext }) => {
  const history = useHistory();
  const { careerId } = idDetailContext;
  const { show, hide } = LoaderProvider();
  // const { id } = useParams();

  const [sectorDetails, setSectorDetails] = useState('');

  const getInitialData = async idValue => {
    try {
      show();
      const response = await getOverviewDetails(idValue);
      setSectorDetails(response);
      hide();
    } catch (error) {
      // setErrorFlag(true);
      // handleError(error, setError, '/returnb2c', [getOrderRefundDataB2cService]);
      hide();
    }
  };

  useEffect(() => {
    getInitialData(careerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSectorClick = id => {
    history.push(`/careers/${id}`);
  };

  const arrayOfrows = [
    {
      sectionName: 'section1 ',
      videos: [
        {
          cardId: 1,
          cardDescription: 'this is acrd one'
        },
        {
          cardId: 2,
          cardDescription: 'this is acrd one'
        }
      ]
    },
    {
      sectionName: 'section2 ',
      videos: [
        {
          cardId: 1,
          cardDescription: 'this is acrd one'
        },
        {
          cardId: 2,
          cardDescription: 'this is acrd one'
        }
      ]
    },
    {
      sectionName: 'section1 ',
      videos: [
        {
          cardId: 1,
          cardDescription: 'this is acrd one'
        },
        {
          cardId: 2,
          cardDescription: 'this is acrd one'
        }
      ]
    },
    {
      sectionName: 'section1 ',
      videos: [
        {
          cardId: 1,
          cardDescription: 'this is acrd one'
        },
        {
          cardId: 2,
          cardDescription: 'this is acrd one'
        }
      ]
    },
    {
      sectionName: 'section1 ',
      videos: [
        {
          cardId: 1,
          cardDescription: 'this is acrd one'
        },
        {
          cardId: 2,
          cardDescription: 'this is acrd one'
        }
      ]
    },
    {
      sectionName: 'section1 ',
      videos: [
        {
          cardId: 1,
          cardDescription: 'this is acrd one'
        },
        {
          cardId: 2,
          cardDescription: 'this is acrd one'
        }
      ]
    }
  ];
  return (
    <div css={ref}>
      <div css={heading}>Video Library</div>

      <section css={style.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/E7wJTI-1dvQ"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          css={style.iframeStyle}
          width="560"
          height="349"
        />
      </section>

      <section style={{ marginTop: '15px' }}>
        <div css={title}> Clips of popular questions</div>
        {/* <div style={{
          display: 'flex', overflow: 'auto', whiteSpace: 'nowrap', marginTop: '15px'
        }}
        > */}
        <Container>
          <Segment attached="bottom">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={150}
              totalSlides={2}
              style={{ width: '100%' }}
            >
              <div style={{ position: 'relative' }}>
                <Slider style={{ width: '100%', height: '400px' }}>
                  {arrayOfrows.map((item, index) => (
                    <CustomCardSlide cardProps={item} index={index} />
                  ))}
                </Slider>

                {/* <FontAwesomeIcon icon={faArrowRight} className="iconRight" /> */}

                <ButtonBack css={btnContainer} style={{ left: -10 }}>
                  <FontAwesomeIcon icon={faChevronLeft} css={arrow} />
                </ButtonBack>
                <ButtonNext style={{ right: -20 }} css={btnContainer}>
                  <FontAwesomeIcon icon={faChevronRight} css={arrow} />
                </ButtonNext>
              </div>

            </CarouselProvider>
          </Segment>

        </Container>

        {/* </div> */}
      </section>
    </div>
  );
};
export default consumer(VideoLibrary);

