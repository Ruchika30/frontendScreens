/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, {
  useContext, useEffect, useRef, useState
} from 'react';
import style from '../CareerPage/style';
import Navbar from '../../components/navbar';
import consumer from '../../context/consumer';
import ScrollIntoView from 'react-scroll-into-view';
import { gear } from '../../assets/icons';
import {
  alignVerticallyCenter, heading, title, w100
} from '../../assets/styles/reset';
import { aquaBlue, darkBlue, darkPurple } from '../../assets/styles/colors';
import { useHistory, useParams } from 'react-router';
import Layout from '../../components/layout/index.js';
import styles from '../../assets/styles/base';
import { fontSize28, lato } from '../../assets/styles/typography';
import { getVideoLibrary as getVideoLibrarySrvc } from '../../services/careers';
import BreadCrumb from '../../components/breadCrumb';
import GoToTop from '../../components/goToTop';
import LoaderProvider from '../../hooks/use-loader';
import Footer from '../../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import GoToTopProvider from '../../hooks/use-topNavigation';
import CardComponent from '../../components/cardForVideoLibrary';
import { IdValueContext } from '../../context/index';

const VideoLibrary = ({ idDetailContext, ref }) => {
  const {
    careerId, setCareerId, careerName, careerSector
  } = idDetailContext;
  const [expandMenu, setExpandMenu] = useState('');
  // const [menuItem, setMenuItem] = useState('Video Library');
  const [menuLink, setMenuLink] = useState('');
  const { showGoTop, hideGoTop } = GoToTopProvider();
  const [listOfVideos, setlistOfVideos] = useState([]);
  // const [srcLink, setSrcLink] = useState('https://www.youtube.com/embed/E7wJTI-1dvQ');
  const [srcLink, setSrcLink] = useState('');
  const history = useHistory();
  const {
    header, headerContainer, inActive, active, imgContainer, menuItemsStyle,
    menuTitle, itemContainer, icon, contentWrapper, dropDownMenu,
    contentAndMenuWrapper, headingStyle, headerWrapper
  } = style;

  const { show, hide } = LoaderProvider();
  const { menuItem, setMenuItem } = useContext(IdValueContext);

  const panel = css`
  background-color : #241c4f;
    padding: 30px;
    position: sticky;
    top: 0;
    width: 20%;

     @media (max-width: 800px) {
            display: none;
        },

 `;

  const handleCardClick = link => {
    setSrcLink(link);
  };

  const getInitialData = async id => {
    try {
      show();
      // const response = await getVideoLibrarySrvc('5fc25408edd5611e28402703');
      const response = await getVideoLibrarySrvc(id);
      setlistOfVideos(response);
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

  const toggleMenu = () => {
    expandMenu ? setExpandMenu(false) : setExpandMenu(true);
  };

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      // showGoTop();
    } else {
      hideGoTop();
    }
  };

  const menuList = [{
    _id: '60127b598387de0017a5350e', value: 'Video Library', link: 'video-library', id: 0, logo: 'fa fa-camera', hidden: false
  }, {
    _id: '60127b598387de0017a5350e', value: 'Overview', link: 'overview', id: 0, logo: 'fa fa-camera', hidden: false
  }, {
    _id: '60127b598387de0017a5350f', value: 'SkillSet', link: 'skill-sets', id: 1, logo: 'fa fa-arrow', hidden: false
  }, {
    _id: '60127b598387de0017a53510', value: 'Roles & Reponsibility', link: 'roles-and-responsibility', id: 2, logo: 'fa fa-box', hidden: true
  }, {
    _id: '60127b598387de0017a5350f', value: 'Avg Salary', link: 'avg-salary', id: 1, logo: 'fa fa-arrow', hidden: false
  }

  ];

  const links = [
    { link: '/', value: 'Home' },
    { link: '/career-sectors', value: 'CareerSectors' },
    { link: `/career-sectors/${careerSector}`, value: 'CareerList' },
    { value: 'CareerDetails' }

  ];

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const handleMenuClick = item => {
    history.push(`/career-sectors/${careerSector}/${careerName}/${item.link}`);
    setMenuItem(item.value);
    debugger;
    setMenuLink(item.link);
    // setSelectedMenu
    toggleMenu();
    if (expandMenu) {
      topFunction();
    }
  };

  const getIcon = () => {
    if (expandMenu) {
      return faCaretUp;
    }
    return faCaretDown;
  };

  window.onscroll = () => scrollFunction();

  return (
    <div>
      <div css={[headerContainer]}>
        <Navbar fixed barColor={aquaBlue} />

        {/* header */}
        <div css={[header]} id="header">
          <div css={[headerWrapper]}>
            <div css={imgContainer}>
              <img src={gear} css={icon} alt="logo" />
            </div>
            <div style={{ marginLeft: '10px' }} css={alignVerticallyCenter}>
              <div css={[fontSize28, lato, heading]}>
                {careerName}
              </div>
              {/* <div css={[dFlex, pTop2]}>
                <div css={[actionBtns]}>Follow</div>
                <div css={[actionBtns]}>Compare</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div style={{ marginTop: '10px', paddingLeft: '24%' }}> */}
      <div>
        <Layout contentStyle={{
          width: '100%',
          margin: 'auto'
          // backgroundColor: darkBlue
        }}
        >
          <div style={{
            marginTop: '10px',
            width: '100%',
            margin: 'auto',
            padding: '10px 5%',
            backgroundColor: darkBlue
          }}
          >
            <BreadCrumb listOfLinks={links} />
          </div>

          {/* dropdown-menu */}
          <div css={dropDownMenu}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} onClick={toggleMenu} css={menuTitle}>
              <div css={[lato]}>{menuItem}</div>
              <FontAwesomeIcon icon={getIcon()} css={icon} alt="icon" />
            </div>
            {expandMenu ? (
              <div css={menuItemsStyle}>
                {menuList.map((item, index) => (
                  <ScrollIntoView selector={item && item.link} style={{ position: 'relative' }} onClick={() => handleMenuClick(item, index)}>
                    <ul css={[lato, menuItem === item.value ? active : inActive]}>
                      <li>
                        {item.value}
                      </li>
                    </ul>
                  </ScrollIntoView>
                ))}
              </div>
            ) : null}
          </div>

          {menuList ? (
            <div css={contentAndMenuWrapper}>
              {/* panel menu  */}
              <div style={{
                display: 'flex',
                height: 'calc(100vh - 210px)',
                width: '100%'
              }}
              >
                {menuList.length ? (
                  <div css={panel}>
                    <div style={{ marginBottom: '10px', marginLeft: '20px' }}>
                      <h4 css={[headingStyle, lato]}>CAREER MENU</h4>
                    </div>
                    {menuList.map((item, index) => (
                      <ScrollIntoView
                        smooth="smooth"
                        selector={item && item.link}
                        style={{ position: 'relative' }}
                        onClick={() => handleMenuClick(item, index)}
                      >
                        <div css={[itemContainer]}>
                          <ul css={[lato, menuItem === item.value ? active : inActive]}>
                            <li>
                              {item.value}
                            </li>
                          </ul>
                        </div>
                      </ScrollIntoView>
                    ))}

                  </div>
                ) : null}

                {/* content */}
                {menuList.length ? (
                  <div css={contentWrapper}>
                    {/* {menuList && menuList.map(menu => ( */}
                    {/* <div id="mainContent">{getCorrespondingContent(menu.link)}</div> */}
                    <div id="mainContent">
                      <div css={ref}>
                        <div css={heading}>Video Library</div>
                        <section css={style.videoWrapper}>
                          <iframe
                            src={srcLink}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="video"
                            css={style.iframeStyle}
                            // width="360"
                            // height="149"
                          />
                        </section>

                        <section style={{ marginTop: '15px' }}>
                          <div css={title}> Clips of popular questions</div>
                          <div style={{
                            display: 'flex', overflow: 'auto', whiteSpace: 'nowrap', marginTop: '15px'
                          }}
                          >
                            {listOfVideos?.map(item => (
                              <div onClick={() => handleCardClick(item.link)}>
                                <CardComponent cardProps={item} />
                              </div>
                            ))}

                          </div>

                        </section>
                      </div>

                    </div>

                    {/* ))} */}
                    <div style={{
                      bottom: '0px',
                      width: '100%',
                      marginTop: '5%'
                    }}
                    >
                      <Footer />
                    </div>
                  </div>
                ) : null}
              </div>

            </div>
          ) : null}

          {/* { goToTopIconVisiblity && <GoToTop goToTopIconVisiblity />} */}

        </Layout>

      </div>

    </div>
  );
};
export default consumer(VideoLibrary);
