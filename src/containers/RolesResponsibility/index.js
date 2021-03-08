/* eslint-disable camelcase */

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import style from './style';
import { useHistory, useLocation } from 'react-router-dom';
import consumer from '../../context/consumer';
import Navbar from '../../components/navbar';
// import Header from '../../components/header';
import Layout from '../../components/layout';
// import { dFlex } from '../../assets/styles/flexbox'
import { skyBlueColor } from '../../assets/styles/colors';
import { heading, title, w100 } from '../../assets/styles/reset';
import { fontSize28, lato, w700 } from '../../assets/styles/typography';
import { mTop2, pLeft6, pTop3 } from '../../assets/styles/spacing';
import { getRolesAndResponsibilities as getResponsibilitiesService } from '../../services/careers';
import LoaderProvider from '../../hooks/use-loader';

const headerWrapper = css`
    ${w100};
    height: 200px;
 `;

const header = css`
  background-color: ${skyBlueColor};
   ${pLeft6}
  `;

const Responsibilty = ({ ref, idDetailContext }) => {
  const history = useHistory();
  const { careerId } = idDetailContext;
  // const { id } = useParams();
  const { contentWrapper, videoWrapper } = style;
  const [responsibilities, setResponsibilities] = useState([]);
  const { show, hide } = LoaderProvider();

  const getInitialData = async idValue => {
    try {
      show();
      const response = await getResponsibilitiesService(idValue);
      const { responsibility_list } = response;
      setResponsibilities(responsibility_list);
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

  const data = [
    {
      careername: ' communicxati',
      description: 'loreme ipusmbhggg loreme ipusmbhgggloreme ipusmbhggg'

    },
    {
      careername: ' Business',
      description: 'loreme ipusmbhggg loreme ipusmbhgggloreme ipusmbhggg'

    }
  ];

  return (
    <div css={ref}>
      <div>
        <div css={[heading, lato]}>Roles and Responsibilties</div>

        <section css={[videoWrapper, mTop2]}>
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

        {/* cards */}
        <section style={{ marginTop: '20px' }}>
          {responsibilities.map(item => (
            <div css={[contentWrapper, lato]}>
              <div css={pTop3}>
                <div>{item.name}</div>
                <div css={pTop3}>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </section>

      </div>
    </div>
  );
};
export default consumer(Responsibilty);
