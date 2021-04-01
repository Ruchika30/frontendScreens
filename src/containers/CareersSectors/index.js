/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-named-as-default */

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Card from '../../components/cardWithDetailsBelow';
// import CardwWithDetailBelow from '../../components/cardWithDetailBelow';
import Layout from '../../components/layout/index.js';
import styles from '../../assets/styles/base';
import {
  aquaBlue, celestialBlue, darkBlue, lightCyan, lightGreyColor, paperColor, skyBlueColor
} from '../../assets/styles/colors';
import { heading } from '../../assets/styles/reset';
import {
  fontSize28, gothicSemiBold, lato, latoBlack, w700
} from '../../assets/styles/typography';
import SearchBar from '../../components/searchBar';
import { m3, mLeft0, pLeft6 } from '../../assets/styles/spacing';
import { careerSectors, searchCareerSectors } from '../../services/careers';
import BreadCrumb from '../../components/breadCrumb';
import LoaderProvider from '../../hooks/use-loader';
import style from './style';
import Footer from '../../components/footer';
import GoToTopProvider from '../../hooks/use-topNavigation';
import consumer from '../../context/consumer';
import { sectorBanner } from '../../assets/icons';
import { Helmet } from 'react-helmet';

const container = css`
    width: 70%;
    /* padding-left: 10%; */
    padding-bottom: 5px;
    margin: auto;
    padding: 20px 0px;
   
 `;

const header = css`
  background-color: ${aquaBlue};
 
      @media (max-width: 450px ) {
          padding-top: 70px;
          width: 100%;
        },
//    ${pLeft6}
  `;

const links = [
  { link: '/', value: 'Home' },
  { link: '/sectors', value: 'CareerSectors' }
];

const CareersPage = ({ idDetailContext }) => {
  const history = useHistory();
  const [sectors, setSectors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { show, hide } = LoaderProvider();
  const { setCareerId, setCareerSector, careerSector } = idDetailContext;
  const {
    srchWrapper, imageWrapper
  } = style;
  const { showGoTop, hideGoTop } = GoToTopProvider();

  const getInitialData = async () => {
    try {
      show();
      const response = await careerSectors();
      setSectors(response);
      // hide();
    } catch (error) {
      // setErrorFlag(true);
      // handleError(error, setError, '/returnb2c', [getOrderRefundDataB2cService]);
      // hide();
    }
  };

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      showGoTop();
    } else {
      hideGoTop();
    }
  };

  window.onscroll = () => scrollFunction();

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    getInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSectorClick = (e, id, name) => {
    if (e.stopPropagation) { e.stopPropagation(); }
    setCareerId(id);
    setCareerSector(name);
    history.push(`/career-sectors/${name}`);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      const body = { name: searchTerm };
      show();
      if (searchTerm) {
        const response = await searchCareerSectors(body);
        setSectors(response);
      } else getInitialData();

      hide();
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <React.Fragment>
      <Helmet>
        <title>career sectors</title>
        <meta name="description" content="this is career sector description" />
      </Helmet>
      <div style={{ position: 'relative', minHeight: '100vh', paddingBottom: '100px' }}>
        {/* <Navbar fixed barColor={aquaBlue} /> */}
        {/* Header */}
        {/* <div css={header}>
          <div css={[container]}>
            <div css={[fontSize28, w700, lato, heading]}>Career Options of India</div>
            <div css={[m3, mLeft0, lato]} style={{ color: darkBlue }}>
              Ex nostrud sit officia incididunt ut cupidatat duis aliquip reprehenderit occaecat aute velit.
              Eiusmod in sint eiusmod anim nulla eiusmod
              reprehenderit magna officia culpa nisi.
              Ex voluptate anim ut irure qui pariatur dolore fugiat voluptate ex consequat reprehenderit. Minim labore consequat voluptate commodo
              ipsum elit duis.
            </div>
          </div>
        </div> */}

        <header css={header}>
          <div>
            <Navbar fixed barColor={aquaBlue} />
            {/* <div css={bannerContextContainer}> */}
            <div css={imageWrapper}>
              <img
                alt="banner"
                src={sectorBanner}
                style={{ width: '100%', maxHeight: '300px' }}
              />
            </div>
            {/* </div> */}
          </div>
        </header>

        <Layout contentStyle={styles.layoutContainer}>
          <div style={{ marginTop: '10px' }}>
            <BreadCrumb listOfLinks={links} txtColor="black" />
          </div>

          {/* {sectors.length && ( */}
          <div style={{ width: '100%' }} css={srchWrapper}>
            <SearchBar
              searchvalue={handleSearch}
              labelTxt="Choose the sector of your interest"
              btnLabel="Search"
              placeholder="Enter career sector"
            />
          </div>
          {/* )} */}
          <section css={style.cardGridStyle}>
            {sectors.map((item, e) => (
              <div onClick={() => handleSectorClick(e, item._id, item.name)}>
                <Card details={item} />
              </div>
            ))}
          </section>
        </Layout>
        <div style={{
          width: '100%', position: 'absolute', bottom: '0px', backgroundColor: 'white'
        }}
        >
          <Footer />
        </div>
      </div>

    </React.Fragment>
  );
};

export default consumer(CareersPage);
