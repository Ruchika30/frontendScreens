

import AnimatedNumber from "animated-number-react";
import React, { useState } from 'react';


const NumberAnimation = (props) => {

    const { value , text} = props

    return (
      <div style={{ textAlign: "center"}}>
                    <AnimatedNumber
                        duration ={7000}
                        value={value}
                    />
                    <div>{text}</div>
            </div>
        

    );
};

export default NumberAnimation;