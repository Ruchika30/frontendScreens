
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useState } from 'react';
import style from './style';
import { lens } from '../../assets/icons';

const SearchBar = props => {
  const {
    searchBarStyle, lensContainer, container, icon, iconWrapper
  } = style;

  const [value, setValue] = useState('');

  const handleValue = term => {
    // setValue(term);
    props.searchvalue(term);
  };

  return (
    <div css={container}>
      <input css={searchBarStyle} placeholder="Search for the career sector" onChange={handleValue} />
      <div css={iconWrapper}>
        <img src={lens} css={icon} alt="icon" />
      </div>
    </div>
  );
};

export default SearchBar;
