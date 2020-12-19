/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import { dFlex } from '../../assets/styles/flexbox'
import style from './style'
import { gear } from '../../assets/icons'
import { centerAlign } from '../../assets/styles/common'
import { fontSize15, w700} from '../../assets/styles/typography'
import { mLeft2} from '../../assets/styles/spacing'
import Tag from '../../components/tag'

const index = (props) => {
    const { careerData } = props
    const { containerStyle, icon, menu,  imgContainer, headings, gridStyle} = style

    // const { career_name, category, popularity, salary } = data
    debugger;
    return (
        <div>
            {careerData.map((item) =>{
                return (
                <div css={[containerStyle, gridStyle]}>
                    <div css={[dFlex,]}>
                        <div css={[centerAlign, imgContainer]}>
                            {/* <img src={gear} css={icon}></img> */}
                        </div>
                        <div css={mLeft2}>
                            <div css={[fontSize15, w700]}>
                                    {item.career_name}
                            </div>
                            <div css={[fontSize15]}>
                                Requires Bachelor Degree
                    </div>
                        </div>
                    </div>

                    <div css={menu}>
                            <div css={headings}>{item.category}</div>
                        <Tag bullet text="development" />
                    </div>
                    <div css={menu}>
                        <div css={headings}>SALARY</div>
                            <div>{item.salary} pm</div>
                    </div>
                    <div css={menu}>
                        <div css={headings}>POPULARITY</div>
                            <div>{item.popularity}</div>
                    </div>

                </div>
     )

            })}
     
        </div>
    );
};

export default index;