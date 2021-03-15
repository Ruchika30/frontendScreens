/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useEffect, useRef, useState } from 'react';
import style from './style';
import Navbar from '../../components/navbar';
import consumer from '../../context/consumer';
import Overview from '../Overview';
import ScrollIntoView from 'react-scroll-into-view';
import { gear } from '../../assets/icons';
import { alignVerticallyCenter, heading, w100 } from '../../assets/styles/reset';
import { aquaBlue, darkBlue, darkPurple } from '../../assets/styles/colors';
import { useHistory, useParams } from 'react-router';
import Layout from '../../components/layout/index.js';
import styles from '../../assets/styles/base';
import {
  fontSize20, fontSize28, gothic, gothicSemiBold, lato, latoBlack
} from '../../assets/styles/typography';
import Skillset from '../Skillset';
import Responsibility from '../RolesResponsibility';
import VideoLibrary from '../VideoLibrary';
import { careerListMenuItems } from '../../services/careers';
import BreadCrumb from '../../components/breadCrumb';
import GoToTop from '../../components/goToTop';
import LoaderProvider from '../../hooks/use-loader';
import Footer from '../../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import GoToTopProvider from '../../hooks/use-topNavigation';
import AvgSalary from '../AvgSalary';

const CareerPage = ({ idDetailContext }) => {
  const { careerId, setCareerId } = idDetailContext;
  const { id } = useParams();
  const [expandMenu, setExpandMenu] = useState('');
  const [menuItem, setMenuItem] = useState('Video Library');
  // const [menuList, setMenuList] = useState([]);
  const [goToTopIconVisiblity, setGoToTopIconVisiblity] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Career Options');
  const [menuLink, setMenuLink] = useState('');
  const { showGoTop, hideGoTop } = GoToTopProvider();

  const refFromUseRef = useRef(null);
  const history = useHistory();
  const {
    contentContainer, header, courseName, headerContainer, inActive, active, actionBtns, wrapper, imgContainer, menuItemsStyle,
    menuTitle, iconWrapper, menu, itemContainer, icon, contentWrapper, dropDownMenu,
    contentAndMenuWrapper, headingStyle, headerWrapper
  } = style;

  const { show, hide } = LoaderProvider();

  const careerMenu = 'CAREER MENU';

  const panel = css`
  background-color: ${darkBlue};
    padding: 30px;
    position: sticky;
    top: 0;
    width: 20%;
    // margin-top: 1%;

     @media (max-width: 800px) {
            display: none;
        },

 `;

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
    _id: '60127b598387de0017a5350e', value: 'Video Library', link: '#videoLibrary', id: 0, logo: 'fa fa-camera', hidden: false
  }, {
    _id: '60127b598387de0017a5350e', value: 'Overview', link: '#overview', id: 0, logo: 'fa fa-camera', hidden: false
  }, {
    _id: '60127b598387de0017a5350f', value: 'SkillSet', link: '#skillSet', id: 1, logo: 'fa fa-arrow', hidden: false
  }, {
    _id: '60127b598387de0017a53510', value: 'Roles & Reponsibility', link: '#responsibility', id: 2, logo: 'fa fa-box', hidden: true
  }, {
    _id: '60127b598387de0017a5350f', value: 'Avg Salary', link: '#avgSalary', id: 1, logo: 'fa fa-arrow', hidden: false
  }

  ];

  const links = [
    { link: '/', value: 'Home' },
    { link: '/sectors', value: 'CareerSectors' },
    { link: `/careers/${id}`, value: 'CareerList' },
    { link: `/career/${id}`, value: 'CareerDetails' }

  ];

  window.addEventListener('scroll', event => {
    console.log('Scrolling...');
  });

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const handleScroll = () => {
    const textContainer = document.querySelector('#mainContent');
    const rect = textContainer.getBoundingClientRect();
    const scrollPercent = rect.y / window.innerHeight;

    if (scrollPercent < -6.198329) {
      setMenuItem('Avg Salary');
      history.replace('avgSalary');
    } else
    if (scrollPercent < -4.289638) {
      setMenuItem('Roles & Reponsibility');
      history.replace('responsibility');
    } else
    if (scrollPercent < -2.537163) {
      setMenuItem('SkillSet');
      history.replace('skillSet');
    } else
    if (scrollPercent < -0.7934) {
      setMenuItem('Overview');
      history.replace('overview');
    } else {
      setMenuItem('Video Library');
      history.replace('videoLibrary');
    }
  };

  const handleMenuClick = item => {
    history.replace(item.link);
    setMenuItem(item.value);
    setMenuLink(item.link);
    // setSelectedMenu
    toggleMenu();
    if (expandMenu) {
      topFunction();
    }
  };

  const getInitialData = async () => {
    try {
      show();
      const { items } = await careerListMenuItems(id);
      // setMenuList(items);
      hide();
    } catch (error) {
      // handle error
    }
  };

  useEffect(() => {
    // getInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCorrespondingContent = menu => {
    switch (menu) {
      case '#videoLibrary': {
        return <div id="videoLibrary" css={contentContainer}><VideoLibrary /></div>;
      }
      case '#overview': {
        return <div id="overview" css={contentContainer}><Overview careerId={id} /></div>;
      }
      case '#avgSalary': {
        return <div id="avgSalary" css={contentContainer}><AvgSalary /></div>;
      }
      case '#skillSet': {
        return <div id="skillSet" css={contentContainer}><Skillset /></div>;
      }
      case '#responsibility': {
        return <div id="responsibility" css={contentContainer}><Responsibility /></div>;
      }

      default: {
        return <div>ahhhdh</div>;
      }
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
    <div onScroll={handleScroll}>
      <div css={[headerContainer]}>
        <Navbar fixed barColor={aquaBlue} />

        {/* header */}
        <div css={[header]} id="header">
          <div css={[headerWrapper]}>
            <div css={imgContainer}>
              <img src={gear} css={icon} alt="logo" />
            </div>
            <div style={{ marginLeft: '10px' }} css={alignVerticallyCenter}>
              <div css={[fontSize28, lato, heading]}>Software Engineer</div>
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
                      <ScrollIntoView smooth="smooth" selector={item && item.link} style={{ position: 'relative' }} onClick={() => handleMenuClick(item, index)}>
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
                ) : null }

                {/* content */}
                {menuList.length ? (
                  <div css={contentWrapper}>
                    {menuList && menuList.map(menu => (
                      <div id="mainContent">{getCorrespondingContent(menu.link)}</div>
                    ))}
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
export default consumer(CareerPage);
