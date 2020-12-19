
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import style from './style';
import { useHistory, useLocation } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Card from '../../components/card';
import Layout from '../../components/layout.js';
import { dFlex } from '../../assets/styles/flexbox'
import styles from '../../assets/styles/base'
import { skyBlueColor } from '../../assets/styles/colors';
import { w100 } from '../../assets/styles/reset';
import { fontSize28, w700 } from '../../assets/styles/typography'
import SearchBar from '../../components/searchBar'
import { m3, mLeft0, pLeft6} from '../../assets/styles/spacing'
import { careerSectors} from '../../services/careers'

const headerWrapper = css`
    ${w100};
    height: 200px;
 `

 const header = css`
  background-color: ${skyBlueColor};
   ${pLeft6}
  `

const CareersPage = () => {
    const history = useHistory();

    const [sectors, setSectors] = useState([])

    const getInitialData = async () => {
        try {
            // show();
            const response = await careerSectors();
            setSectors(response)
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

    const handleSectorClick =(id) =>{
        history.push(`/careers/${id}`)
    }
  

    return (
        <React.Fragment>
            <Navbar fixed={true} />
            {/* Header */}
            <div css={header}>
                <div css={[headerWrapper]}> 
                    <div css={[fontSize28, w700]}>Career Options of India</div>
                    <div css={[m3, mLeft0]}>Ex nostrud sit officia incididunt ut cupidatat duis aliquip reprehenderit occaecat aute velit.
                    Eiusmod in sint eiusmod anim nulla eiusmod
                    reprehenderit magna officia culpa nisi.
                    Ex voluptate anim ut irure qui pariatur dolore fugiat voluptate ex consequat reprehenderit. Minim labore consequat voluptate commodo
                       ipsum elit duis.</div>
                </div>

                <div>Home/Careers In India</div>
               
            </div>
            <Layout contentStyle={styles.layoutContainer}>
                <div css={m3}>
                    <SearchBar />
                </div>
                <section css={styles.gridStyle}>
                    {sectors.map((item) =>{
                        return (
                            <div onClick={() => handleSectorClick(item._id)}>
                                <Card details={item} />
                            </div>
                        )
                       
                    })}
                  
                    {/* <Card details /> */}
                </section>
            </Layout>

        </React.Fragment>
    );
};

export default CareersPage;