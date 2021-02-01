/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useEffect, useRef, useState } from 'react';
import Menu from '../../components/menuPanel';
import style from './style';
import Navbar from '../../components/navbar';
import consumer from '../../context/consumer';
import Overview from '../Overview';
import ScrollIntoView from 'react-scroll-into-view';
import {
  arrow, gear, list, space, upwardArrow
} from '../../assets/icons';
import { alignVerticallyCenter, w100 } from '../../assets/styles/reset';
import { darkBlue, lightCyan } from '../../assets/styles/colors';
import {
  m3, mLeft0, mRight2, pLeft6, pTop2
} from '../../assets/styles/spacing';
import { dFlex } from '../../assets/styles/flexbox';
import { useHistory, useParams } from 'react-router';
import Layout from '../../components/layout/index.js';
import styles from '../../assets/styles/base';
import {
  fontSize12, fontSize14, fontSize20, gothic, gothicSemiBold
} from '../../assets/styles/typography';
import Skillset from '../Skillset';
import OnlineCourses from '../Courses';
import Responsibility from '../RolesResponsibility';
import VideoLibrary from '../VideoLibrary';
import { careerListMenuItems } from '../../services/careers';
import BreadCrumb from '../../components/breadCrumb';
import GoToTop from '../../components/goToTop';
import LoaderProvider from '../../hooks/use-loader';

const CareerPage = ({ idDetailContext }) => {
  const [careerId, setCareerId] = idDetailContext;
  const { id } = useParams();
  const [expandMenu, setExpandMenu] = useState('');
  const [menuItem, setMenuItem] = useState('Career Options');
  const [menuList, setMenuList] = useState([]);
  const [goToTopIconVisiblity, setGoToTopIconVisiblity] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Career Options');
  const [menuLink, setMenuLink] = useState('');

  const refFromUseRef = useRef(null);
  const history = useHistory();
  const {
    longDiv, header, courseName, headerContainer, inActive, active, actionBtns, wrapper, imgContainer, menuItemsStyle,
    menuTitle, iconWrapper, menu, itemContainer, icon, contentWrapper, dropDownMenu,
    contentAndMenuWrapper, headingStyle, headerWrapper
  } = style;
  const { show, hide } = LoaderProvider();

  const careerMenu = 'CAREER MENU';

  const container = css`
    width: 80%;
    padding-left: 25%;
    padding-bottom: 5px;
   
 `;

  const panel = css`
  background-color: ${darkBlue};
    padding: 30px;
    position: sticky;
    top: 0;
    width: 20%;
    margin: 1% 0;

     @media (max-width: 800px) {
            display: none;
        },

 `;

  const handleMenu = () => {
    refFromUseRef.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => {
    expandMenu ? setExpandMenu(false) : setExpandMenu(true);
  };

  const links = [
    { link: '/', value: 'Home' },
    { link: '/sectors', value: 'CareerSectors' },
    { link: `/careers/${id}`, value: 'CareerList' },
    { link: `/career/${id}`, value: 'CareerDetails' }

  ];

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

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
      setMenuList(items);
      hide();
    } catch (error) {
      // handle error
    }
  };

  useEffect(() => {
    getInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollFunction = () => {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      setGoToTopIconVisiblity(true);
    } else {
      setGoToTopIconVisiblity(false);
    }
  };

  const getCorrespondingContent = menu => {
    switch (menu) {
      case '#overview': {
        return <div id="overview" css={longDiv}><Overview careerId={id} /></div>;
      }
      case '#skillSet': {
        return <div id="skillSet" css={longDiv}><Skillset /></div>;
      }
      case '#responsibility': {
        return <div id="responsibility" css={longDiv}><Responsibility /></div>;
      }
      case '#videoLibrary': {
        return <div id="videoLibrary" css={longDiv}><VideoLibrary /></div>;
      }

      default: {
        return <div>ahhhdh</div>;
      }
    }
  };

  window.onscroll = () => scrollFunction();

  return (
    <div>
      <div css={headerContainer}>
        {/* <div id="navbar"> */}
        <Navbar fixed barColor={lightCyan} />

        {/* header */}
        <div css={[header]} id="header">
          <div css={[headerWrapper]}>
            <div css={imgContainer}>
              <img src={gear} css={icon} alt="logo" />
            </div>
            <div style={{ marginLeft: '10px' }} css={alignVerticallyCenter}>
              <div css={[gothicSemiBold, fontSize20]}>Software Engineer</div>
              {/* <div css={[dFlex, pTop2]}>
                <div css={[actionBtns]}>Follow</div>
                <div css={[actionBtns]}>Compare</div>
              </div> */}
            </div>
          </div>
          {/* <div style={{ marginTop: '10px' }}>
            <BreadCrumb listOfLinks={links} />
          </div> */}
        </div>
      </div>

      {/* <div style={{ marginTop: '10px', paddingLeft: '24%' }}> */}
      { menuList ? (
        <Layout contentStyle={styles.layoutContainer} style={{ width: '80%' }}>
          <div style={{ marginTop: '10px' }}>
            <BreadCrumb listOfLinks={links} />
          </div>

          {/* dropdown-menu */}
          <div css={dropDownMenu}>
            <h4 onClick={toggleMenu} css={menuTitle}>{menuItem}</h4>
            {expandMenu ? (
              <div css={menuItemsStyle}>
                {menuList.map((item, index) => (
                  <ScrollIntoView selector={item && item.link} style={{ position: 'relative' }} onClick={() => handleMenuClick(item, index)}>
                    <ul css={[gothic, menuItem === item.value ? active : inActive]}>
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
              { menuList ? (
                <div style={{
                  display: 'flex',
                  height: '700px',
                  margin: 'auto'
                }}
                >
                  {menuList.length ? (
                    <div css={panel}>
                      <div>
                        <h4 css={headingStyle}>Career Menu</h4>
                      </div>
                      {menuList.map((item, index) => (
                        <ScrollIntoView smooth="smooth" selector={item && item.link} style={{ position: 'relative' }} onClick={() => handleMenuClick(item, index)}>
                          <div css={itemContainer}>
                            <ul css={[gothic, menuItem === item.value ? active : inActive]}>
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
                        <div>{getCorrespondingContent(menu.link)}</div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          ) : null}

          { goToTopIconVisiblity && <GoToTop goToTopIconVisiblity />}
        </Layout>
      ) : null}

    </div>
  );
};
export default consumer(CareerPage);
