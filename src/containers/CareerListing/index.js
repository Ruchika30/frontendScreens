/* eslint-disable react-hooks/exhaustive-deps */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import style from './style';
import Navbar from '../../components/navbar';
import Layout from '../../components/layout/index.js';
import styles from '../../assets/styles/base';
import { lightCyan } from '../../assets/styles/colors';
import SearchBar from '../../components/searchBar';
import {
  m3, mLeft0
} from '../../assets/styles/spacing';
import CarouselComponent from '../../components/carousel';
import {
  careerListsById as careerListsByIdService,
  overview as overviewService, searchCareer
} from '../../services/careers';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import consumer from '../../context/consumer';
import Table from '../../components/table';
import BreadCrumb from '../../components/breadCrumb';
import LoaderProvider from '../../hooks/use-loader';
import Footer from '../../components/footer';

const CareerList = ({ idDetailContext }) => {
  const [carrerList, setCareerList] = useState([]);
  const { headings, tag, srchWrapper } = style;
  const { id } = useParams();
  const history = useHistory();
  const [careerId, setCareerId] = idDetailContext;
  const [searchTerm, setSearchTerm] = useState(null);
  const { show, hide } = LoaderProvider();

  const getInitialData = async (id, pageNo) => {
    try {
      show();
      const { careers } = await careerListsByIdService(id, pageNo);
      setCareerList(careers);

      hide();
    } catch (error) {
      // setErrorFlag(true);
      // handleError(error, setError, '/returnb2c', [getOrderRefundDataB2cService]);
      // hide();
    }
  };

  const header = css`
  background-color: ${lightCyan};
      @media (max-width: 450px ) {
          padding-top: 60px;
          width: 100%;
        },
  `;

  const layoutStyle = css`
   font-family: latoRegular;
    width: 70%;
    margin: auto;
    min-height: 100vh;
    '@media(max-width: 450px)': {
      width: '90%'
    }
  `;
  const handleCareerClick = () => {
    history.push(`/career/${id}`);
  };

  const handleCareerSearch = e => {
    setSearchTerm(e.target.value);
  };

  const links = [
    { link: '/', value: 'Home' },
    { link: '/sectors', value: 'CareerSectors' },
    { link: `/careers/${id}`, value: 'CareerList' }
  ];

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm) {
        const body = { career_name: searchTerm, career_sector_id: id };
        show();
        const { career_list } = await searchCareer(body);
        setCareerList(career_list);
        hide();
      }
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  useEffect(() => {
    getInitialData(id);
    setCareerId(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <div style={{ minHeight: '200px' }}>
        <Navbar fixed barColor={lightCyan} />
        {/* banner */}
        <div css={header}>
          <CarouselComponent />
        </div>
        <Layout contentStyle={[layoutStyle]}>
          <div style={{ marginTop: '10px' }}>
            <BreadCrumb listOfLinks={links} txtColor="black" />
          </div>
          <div css={[m3, mLeft0]}>Career Options</div>
          <div style={{ width: '100%' }} css={srchWrapper}>
            <SearchBar
              searchvalue={handleCareerSearch}
              labelTxt="Choose the career of your interest"
              btnLabel="Search"
              placeholder="Enter career "
            />
          </div>
          {/* tags */}
          {/* <div css={[dFlex, m3, mLeft0]}>
          <div css={[mRight3]}><Tag dropDown text="Industry" css={tag} /></div>
          <div css={mRight3}><Tag dropDown text="Avg Salary" css={tag} /></div>
          <div css={mRight3}><Tag dropDown text="Popularity" css={tag} /></div>
        </div> */}

          {/* {carrerList && carrerList.map(item => (
          <div onClick={handleCareerClick}>
            <CareerDetailCard careerData={item} />
            <hr />
          </div>
        ))} */}
          <div onClick={handleCareerClick} style={{ marginTop: '20px' }}>
            <Table careerData={carrerList} />
          </div>

        </Layout>

      </div>
      <div style={{ width: '100%', position: 'absolute' }}>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default consumer(CareerList);
