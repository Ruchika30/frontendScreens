/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import style from './style';
import { arrow } from '../../assets/icons';
import { useHistory, useLocation } from 'react-router-dom';
import ScrollIntoView from 'react-scroll-into-view';

const Menu = props => {
  const { menus, idvalue } = props;
  const {
    wrapper, iconWrapper, itemContainer, icon
  } = style;
  const history = useHistory();
  // const menuItems = ['overview', 'video library', 'Career path', 'skillset']

  return (
    <div css={wrapper}>
      <div>Career Menu</div>
      {menus.map(item => (
        <ScrollIntoView selector={item.link} style={{ position: 'relative' }}>
          <div css={itemContainer}>
            <div css={iconWrapper}>
              <img src={arrow} css={icon} />
            </div>
          </div>
        </ScrollIntoView>
      ))}

    </div>
  );
};

export default Menu;
