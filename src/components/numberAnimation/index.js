

import AnimatedNumber from "animated-number-react";
import React, { useState } from 'react';
import style from './style';
 

const NumberAnimation = (props) => {

    const { value, text } = props
    const { textStyle} = style

    return (
        <div style={{ textAlign: "center", fontSize: '20px', fontWeight: '600'}}>
            <AnimatedNumber
                duration={2000}
                value={value}
            />
            <div css={textStyle}>{text}</div>
        </div>


    );
};

export default NumberAnimation;