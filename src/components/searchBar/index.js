
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useState } from 'react';
import style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
        <FontAwesomeIcon icon={faSearch} css={icon} alt="icon" />
      </div>
    </div>
  );
};

export default SearchBar;
