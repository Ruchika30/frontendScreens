
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { forwardRef, useEffect, useState } from 'react';
import style from './style';
import { useHistory, useLocation } from 'react-router-dom';
import { useParams } from 'react-router';

import Navbar from '../../components/navbar';
// import Header from '../../components/header';
import CardWithDataBelow from '../../components/cardWithDetailBelow';
import Layout from '../../components/layout';
// import { dFlex } from '../../assets/styles/flexbox'
import styles from '../../assets/styles/base';
import { skyBlueColor } from '../../assets/styles/colors';
import { heading, w100 } from '../../assets/styles/reset';
import { fontSize28, w700 } from '../../assets/styles/typography';
import SearchBar from '../../components/searchBar';
import { m3, mLeft0, pLeft6 } from '../../assets/styles/spacing';
import { getOverviewDetails } from '../../services/careers';

const headerWrapper = css`
    ${w100};
    height: 200px;
 `;

const header = css`
  background-color: ${skyBlueColor};
   ${pLeft6}
  `;

const VideoLibrary = ({ ref }) => {
  const history = useHistory();
  const { id } = useParams();
  const [sectorDetails, setSectorDetails] = useState('');

  const getInitialData = async idValue => {
    try {
      // show();
      const response = await getOverviewDetails(idValue);
      debugger;
      setSectorDetails(response);
      // hide();
    } catch (error) {
      // setErrorFlag(true);
      // handleError(error, setError, '/returnb2c', [getOrderRefundDataB2cService]);
      // hide();
    }
  };

  useEffect(() => {
    getInitialData(id);
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

      <section>
        <div style={{ display: 'flex', overflow: 'auto', whiteSpace: 'nowrap' }}>
          {arrayOfrows.map(item => (
            <div>
              <CardWithDataBelow data={item} />
            </div>
          ))}

        </div>
      </section>
    </div>
  );
};
export default VideoLibrary;
