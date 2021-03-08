
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { forwardRef, useEffect, useState } from 'react';
import style from './style';
import { useHistory } from 'react-router-dom';
import CardComponent from '../../components/cardForVideoLibrary';
import { skyBlueColor } from '../../assets/styles/colors';
import { heading, title, w100 } from '../../assets/styles/reset';
import { pLeft6 } from '../../assets/styles/spacing';
import consumer from '../../context/consumer';
import { getOverviewDetails } from '../../services/careers';
import LoaderProvider from '../../hooks/use-loader';

const headerWrapper = css`
    ${w100};
    height: 200px;
 `;

const header = css`
  background-color: ${skyBlueColor};
   ${pLeft6}
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
        <div style={{
          display: 'flex', overflow: 'auto', whiteSpace: 'nowrap', marginTop: '15px'
        }}
        >
          {arrayOfrows.map(item => (
            <div>
              <div>
                <CardComponent data={item} />
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
};
export default consumer(VideoLibrary);
