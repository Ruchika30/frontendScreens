/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useState, useEffect, useLayoutEffect} from 'react';
import style from './style';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Card from '../../components/card';
import Layout from '../../components/layout.js';
import { dFlex, justifyContentSpaceEven} from '../../assets/styles/flexbox'
import NumberAnimation from '../../components/numberAnimation';
import styles from '../../assets/styles/base'
import { skyBlueColor } from '../../assets/styles/colors';
import { w100 } from '../../assets/styles/reset';
import { fontSize28, w700 } from '../../assets/styles/typography'
import SearchBar from '../../components/searchBar'
import { m3, mLeft0, mRight3} from '../../assets/styles/spacing'
import Tag from '../../components/tag';
import CareerDetailCard from '../../components/careerDetailCard'
import CarouselComponent from '../../components/carousel'
import { careerListsById as careerListsByIdService, overview as overviewService } from '../../services/careers'
import { useParams } from 'react-router';

const CareerList = () => {
    const [carrerList, setCareerList] = useState([])
    const { headings, tag} = style
    const { id } = useParams()

    const getInitialData = async (id) => {
        try {

            // show();
            const { careers} = await careerListsByIdService(id);
            debugger;
            // const response = await overviewService(id)
            setCareerList(careers)

            // hide();
        } catch (error) {
            // setErrorFlag(true);
            // handleError(error, setError, '/returnb2c', [getOrderRefundDataB2cService]);
            // hide();
        }
    };

    useEffect(() => {
        getInitialData(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carrerList]);

    return (
        <React.Fragment>
            <Navbar fixed={true} />
            {/* banner */}
            <div>
                <CarouselComponent/>
            </div>
            <Layout contentStyle={styles.layoutContainer}>

                <div css={[m3, mLeft0]}>Career Options</div>
                {/* <SearchBar /> */}
                <div css={[dFlex, m3, mLeft0]}>
                    <div css={[mRight3]}><Tag text="Industry" css={tag}/></div>
                    <div css={mRight3}><Tag  text="Avg Salary" css={tag} /></div>
                    <div css={mRight3}><Tag  text="Popularity" css={tag} /></div>
                </div>

                {/* meanu */}
                {/* <div css={[dFlex, justifyContentSpaceEven, headings ]}>
                    <div>Careers</div>
                    <div>Industry</div>
                    <div>Avg Salary</div>
                    <div>Popularity</div>
                </div> */}
                <CareerDetailCard careerData={carrerList} />
                
            </Layout>
        </React.Fragment>
    );
};

export default CareerList;