/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import CardWithDetailOnSide from '../../components/CardWithDetailOnSide';
import style from './style.js';
import { getSkillset as getSkillsetService } from '../../services/careers';
import { useHistory, useParams } from 'react-router';
import { mTop3 } from '../../assets/styles/spacing';
import { heading } from '../../assets/styles/reset';
import { lato } from '../../assets/styles/typography';
import consumer from '../../context/consumer';
import LoaderProvider from '../../hooks/use-loader';

const Skillset = ({ idDetailContext }) => {
  const { gridStyle } = style;
  const { careerId } = idDetailContext;
  const [skillList, setSkills] = useState([]);
  const { show, hide } = LoaderProvider();

  const getInitialData = async () => {
    try {
      show();
      const response = await getSkillsetService(careerId);
      const { skills } = response;
      setSkills(skills);
      hide();
    } catch (error) {
      hide();
      // handle error
    }
  };

  useEffect(() => {
    getInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div css={[heading, lato]}>Required Skills for this career</div>
      <div css={[gridStyle]}>
        {skillList.map(item => (
          // <div style={{ marginRight: '50px' }}>
          <div>
            <CardWithDetailOnSide data={item} />
          </div>
        ))}

      </div>

    </div>
  );
};

export default consumer(Skillset);
