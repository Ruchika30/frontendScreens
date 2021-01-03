/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import style from './style';
import { getOverviewDetails as overviewService } from '../../services/careers';
import consumer from '../../context/consumer';
import { mTop2 } from '../../assets/styles/spacing';

const Overview = props => {
  const { careerId } = props;
  const { title, description, wrapper } = style;
  const [overviewData, setOverViewData] = useState('');

  const { courseName, overviewText } = overviewData || {};

  const getInitialData = async id => {
    try {
      // show();
      const response = await overviewService(id);
      setOverViewData(response);

      // hide();
    } catch (error) {
      // setErrorFlag(true);
      // handleError(error, setError, '/returnb2c', [getOrderRefundDataB2cService]);
      // hide();
    }
  };

  useEffect(() => {
    getInitialData(careerId);
    // setCareerId(careerId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div css={wrapper}>
      <div css={title}>{courseName}</div>
      <div css={[description, mTop2]}>{overviewText}</div>
    </div>
  );
};

export default consumer(Overview);
