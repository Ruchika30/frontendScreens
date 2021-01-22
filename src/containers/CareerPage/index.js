/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useRef, useState } from 'react';
import Menu from '../../components/menuPanel';
import style from './style';
import Navbar from '../../components/navbar';
import consumer from '../../context/consumer';
import Overview from '../Overview';
import ScrollIntoView from 'react-scroll-into-view';
import { arrow, list, space } from '../../assets/icons';
import { w100 } from '../../assets/styles/reset';
import { skyBlueColor } from '../../assets/styles/colors';
import {
  m3, mLeft0, mRight2, pLeft6, pTop2
} from '../../assets/styles/spacing';
import { dFlex } from '../../assets/styles/flexbox';
import { useHistory, useParams } from 'react-router';
import {
  fontSize12, fontSize14, gothic, gothicSemiBold
} from '../../assets/styles/typography';
import Skillset from '../Skillset';
import OnlineCourses from '../Courses';
import Responsibility from '../RolesResponsibility';
import VideoLibrary from '../VideoLibrary';

const headerWrapper = css`
    ${w100};
    ${dFlex};
    
 `;

const CareerPage = ({ idDetailContext }) => {
  const [careerId, setCareerId] = idDetailContext;
  const { id } = useParams();
  const [expandMenu, setExpandMenu] = useState('');
  const [selectedMenu, setSelectedMenu] = useState('');

  const refFromUseRef = useRef(null);
  const history = useHistory();
  const {
    longDiv, header, courseName, inActive, active, actionBtns, wrapper, imgContainer, menuItemsStyle,
    menuTitle, iconWrapper, menu, itemContainer, icon, contentWrapper, dropDownMenu,
    contentAndMenuWrapper
  } = style;

  const container = css`
    width: 80%;
    padding-left: 25%;
    padding-bottom: 5px;
   
 `;

  const handleMenu = () => {
    refFromUseRef.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => {
    expandMenu ? setExpandMenu(false) : setExpandMenu(true);
  };

  const handleMenuClick = item => {
    setSelectedMenu(item.value);
    history.replace(item.link);
  };

  const menuItems = [
    { value: 'videoLibrary', link: '#video', id: 0 },
    { value: 'overview', link: '#navbar', id: 1 },
    { value: 'skillSet', link: '#skillSet', id: 2 },
    { value: 'Roles & Reponsibility', link: '#responsibility', id: 3 }
  ];
  return (
    <div>
      <div id="navbar">
        <Navbar fixed />
      </div>
      {/* header */}
      <div css={header} id="header">
        <div css={[headerWrapper]}>
          <div css={imgContainer}>
            <img src={space} css={icon} alt="logo" />
          </div>
          <div style={{ marginLeft: '10px' }}>
            <div css={[gothicSemiBold]}>Software Engineer</div>
            <div css={[dFlex, pTop2]}>
              <div css={[actionBtns]}>Follow</div>
              <div css={[actionBtns]}>Compare</div>
            </div>
          </div>
        </div>
      </div>

      <div css={[contentWrapper, fontSize14, gothic]}>Home/Careers In India</div>

      {/* panel menu  */}
      <div css={contentAndMenuWrapper}>
        <div css={wrapper}>
          <div style={{ display: 'flex' }}>

            <div style={{ width: '20px' }}>
              <img src={list} alt="list" css={icon} />
            </div>
            <div style={{ marginLeft: '5px' }} css={[gothic]}>Career Menu</div>
          </div>

          {menuItems.map((item, index) => (
            <ScrollIntoView selector={item.link} style={{ position: 'relative' }} onClick={() => handleMenuClick(item, index)}>
              {/* <Menu menus={menuItems} idvalue={careerId} /> */}
              <div css={itemContainer}>
                <div css={iconWrapper}>
                  <img src={arrow} css={icon} alt="icon" style={{ width: '20px' }} />
                </div>
                <div css={[gothic, selectedMenu === item.value ? active : inActive]}>
                  {item.value}

                </div>
              </div>
            </ScrollIntoView>
          ))}
        </div>

        {/* dropdown-menu */}
        <div css={dropDownMenu}>
          <div onClick={toggleMenu} css={menuTitle}>career Options</div>
          {expandMenu ? (
            <div css={menuItemsStyle}>
              {menuItems.map(item => (
                <ScrollIntoView selector={item.link} style={{ position: 'relative' }} onClick={handleMenuClick}>
                  <div css={gothic}>{item.value}</div>
                </ScrollIntoView>
              ))}
            </div>
          ) : null}
        </div>

        {/* content */}
        <div css={contentWrapper}>
          <div id="video" css={longDiv}><VideoLibrary /></div>
          <div id="overview" css={longDiv}><Overview careerId={id} /></div>
          <div id="skillSet" css={longDiv}><Skillset /></div>
          <div id="responsibility" css={longDiv}><Responsibility /></div>
        </div>

      </div>

    </div>
  );
};
export default consumer(CareerPage);
