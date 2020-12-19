
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import style from './style';
import { lens } from '../../assets/icons'

const index = () => {
    const { searchBarStyle, lensContainer, container, icon, iconWrapper} = style

    return (
        <div css={container}>
            <input css={searchBarStyle} placeholder="Search for the career sector" >
            </input>
            <div css={iconWrapper}>
                <img src={lens} css={icon}></img>
            </div>
        </div>
    );
};

export default index;