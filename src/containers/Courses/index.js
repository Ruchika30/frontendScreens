/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import CardWithDetailBelow from '../../components/cardWithDetailBelow';
import style from './style.js';
import { getSkillset as getSkillsetService } from '../../services/careers';
import { useHistory, useParams } from 'react-router';
import { mTop2 } from '../../assets/styles/spacing';

const Courses = () => {
  const { gridStyle, title } = style;
  const { id } = useParams();
  const [skillList, setSkills] = useState([]);

  const getInitialData = async () => {
    try {
      // show();
      const response = await getSkillsetService(id);
      const { skills } = response;
      setSkills(skills);
    } catch (error) {
      // handle error
    }
  };

  useEffect(() => {
    getInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div css={title}>Courses advised for this career</div>
      <div css={[gridStyle, mTop2]}>
        {skillList.map(item => (
          <div style={{ marginRight: '50px' }}>
            <CardWithDetailBelow skillsData={item} />
          </div>
        ))}

      </div>

    </div>
  );
};

export default Courses;
