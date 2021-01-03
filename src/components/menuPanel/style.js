import { css } from '@emotion/core';
import { lightGreyColor} from '../../assets/styles/colors'

export default {
    wrapper: css`
        background-color: ${lightGreyColor};
        height: auto;
        padding:0px 15px;
        margin-top: 5%;
        margin-left: 20px;
        position :absolute;
    `,

    iframeStyle: css`
            position: absolute;
            top: 0;
            left: 0;
            width: 90%;
            height: 100%;
    `,


    iconWrapper: css`
        padding: 5px;
    `,


    icon: css`
        height: 20px;
    `,


    itemContainer : css`
            display: flex;
            align-items: center;
    `



}
