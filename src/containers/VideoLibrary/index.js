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
import { getOverviewDetails, getVideoLibrary } from '../../services/careers';
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
  const [sectorDetails, setSectorDetails] = useState('');
  const [listOfVideos, setlistOfVideos] = useState([]);
  const [srcLink, setSrcLink] = useState('https://www.youtube.com/embed/E7wJTI-1dvQ');

  const getInitialData = async idValue => {
    try {
      show();
      const { videoList } = await getVideoLibrary('6023ed464db1ad0017feb82a');
      setlistOfVideos(videoList);

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

  const handleCardClick = link => {
    setSrcLink(link);
    console.log('heyys--', link);
  };
  return (
    <div css={ref}>
      <div css={heading}>Video Library</div>
      <section css={style.videoWrapper}>
        <iframe
          src={srcLink}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          css={style.iframeStyle}
          // width="360"
          // height="149"
        />
      </section>

      <section style={{ marginTop: '15px' }}>
        <div css={title}> Clips of popular questions</div>
        <div style={{
          display: 'flex', overflow: 'auto', whiteSpace: 'nowrap', marginTop: '15px'
        }}
        >
          {listOfVideos.map(item => (
            <div onClick={() => handleCardClick(item.link)}>
              <CardComponent cardProps={item} />
            </div>
          ))}

        </div>

      </section>
    </div>
  );
};
export default consumer(VideoLibrary);
