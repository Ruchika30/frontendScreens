
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useState } from 'react';
import style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';

const SearchBar = props => {
  const { labelTxt, placeholder, btnLabel } = props;
  const {
    searchBarStyle, lensContainer, container, icon, iconWrapper
  } = style;

  const handleValue = term => {
    // setValue(term);
    props.searchvalue(term);
  };

  return (

    <React.Fragment>
      <div>{labelTxt}</div>
      <div css={container}>
        <input
          css={searchBarStyle}
          placeholder={placeholder}
          onChange={handleValue}
        />
        {/* <div css={iconWrapper}>
        <FontAwesomeIcon icon={faSearch} css={icon} alt="icon" />
      </div> */}
      </div>
      <Button variant="contained" color="primary" disableElevation>
        {btnLabel}
      </Button>
    </React.Fragment>
  );
};

export default SearchBar;
