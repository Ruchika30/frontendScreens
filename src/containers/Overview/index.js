/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import style from './style';
import { getOverviewDetails as overviewService } from '../../services/careers';
import consumer from '../../context/consumer';
import { mTop2 } from '../../assets/styles/spacing';
import { heading, title } from '../../assets/styles/reset';
import { lato } from '../../assets/styles/typography';
import LoaderProvider from '../../hooks/use-loader';

const Overview = ({ idDetailContext }) => {
  const { careerId } = idDetailContext;
  const {
    description, wrapper
  } = style;
  const [overviewData, setOverViewData] = useState('');
  const { show, hide } = LoaderProvider();
  const { courseName, overviewText } = overviewData || {};

  const getInitialData = async id => {
    try {
      show();
      const response = await overviewService('5fc25408edd5611e28402703');
      setOverViewData(response);

      hide();
    } catch (error) {
      // setErrorFlag(true);
      // handleError(error, setError, '/returnb2c', [getOrderRefundDataB2cService]);
      hide();
    }
  };

  useEffect(() => {
    getInitialData(careerId);
    // setCareerId(careerId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div css={wrapper}>
      <h1 css={[lato]}>Overview</h1>
      <div css={[title, lato]}>{courseName}</div>
      <div css={[description, mTop2, lato]}>{overviewText}</div>
    </div>
  );
};

export default consumer(Overview);
