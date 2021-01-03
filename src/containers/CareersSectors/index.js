
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import style from './style';
import { useHistory, useLocation } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Card from '../../components/card';
import Layout from '../../components/layout/index.js';
import { dFlex } from '../../assets/styles/flexbox';
import styles from '../../assets/styles/base';
import { lightGreyColor, skyBlueColor } from '../../assets/styles/colors';
import { w100 } from '../../assets/styles/reset';
import { fontSize14, fontSize28, w700 } from '../../assets/styles/typography';
import SearchBar from '../../components/searchBar';
import { m3, mLeft0, pLeft6 } from '../../assets/styles/spacing';
import { careerSectors } from '../../services/careers';

const container = css`
    width: 80%;
    padding-left: 10%;
    padding-bottom: 5px;
   
 `;

const srchWrapper = css`
    background-color: ${lightGreyColor};
    padding: 10px;
    margin : 5px 0px;
    `;

const header = css`
  background-color: ${skyBlueColor};
//    ${pLeft6}
  `;

const CareersPage = () => {
  const history = useHistory();
  const [sectors, setSectors] = useState([]);

  const getInitialData = async () => {
    try {
      // show();
      const response = await careerSectors();
      setSectors(response);
      // hide();
    } catch (error) {
      // setErrorFlag(true);
      // handleError(error, setError, '/returnb2c', [getOrderRefundDataB2cService]);
      // hide();
    }
  };

  useEffect(() => {
    getInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSectorClick = id => {
    history.push(`/careers/${id}`);
  };

  return (
    <React.Fragment>
      <Navbar fixed />
      {/* Header */}
      <div css={header}>
        <div css={[container]}>
          <div css={[fontSize28, w700]}>Career Options of India</div>
          <div css={[m3, mLeft0]}>
            Ex nostrud sit officia incididunt ut cupidatat duis aliquip reprehenderit occaecat aute velit.
            Eiusmod in sint eiusmod anim nulla eiusmod
            reprehenderit magna officia culpa nisi.
            Ex voluptate anim ut irure qui pariatur dolore fugiat voluptate ex consequat reprehenderit. Minim labore consequat voluptate commodo
            ipsum elit duis.

          </div>

        </div>

      </div>
      <div css={[container, fontSize14]}>Home/Careers In India</div>
      <Layout contentStyle={styles.layoutContainer}>
        <div style={{ width: '100%' }} css={srchWrapper}>
          <SearchBar />
        </div>
        <section css={styles.gridStyle}>
          {sectors.map(item => (
            <div onClick={() => handleSectorClick(item._id)}>
              <Card details={item} />
            </div>
          ))}

          {/* <Card details /> */}
        </section>
      </Layout>

    </React.Fragment>
  );
};

export default CareersPage;
