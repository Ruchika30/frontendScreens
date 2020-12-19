/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

const Layout = (props) => {
    const { contentStyle } = props

    return (
        <div css={contentStyle}>
            {props.children}
        </div>
    );
};

export default Layout;