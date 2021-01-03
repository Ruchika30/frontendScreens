
import { css } from '@emotion/core';
import { dFlex, justifyContentSpaceBet } from '../../assets/styles/flexbox';
import { navyBlueColor, seaBlueColor, skyBlueColor } from '../../assets/styles/colors';
import { mBottom1, mLeft3 } from '../../assets/styles/spacing';

export default {

  containerStyle: css`
    border: 0.1px solid black;
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    align-items: center;
    

    padding: 10px 10px;
    &:hover{
            transform: scale(1.02);
            box-shadow: 0 10px 18px rgba(.10,0,0,0.10), 0 5px 5px rgba(0,0,0,0.12);
            transition: 0.3s;
            border: 0;
            background-color:${skyBlueColor};
          
        },

`,
  career: css`
    `,
  icon: css`
    width: 30px;
    `,

  imgContainer: css`
    height: 40px;
    width: 40px;
    background-color: pink;
    `,

  headings: css`
         font-size: 0.7rem;
         ${mBottom1}
    `,

  menu: css`
       ${mLeft3};
        @media (max-width: 480px){
            border-bottom: 1px solid black; 
            padding: 5px 0px;
        }

    `,

  gridStyle: ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(11rem, 1fr))',
    marginLeft: '10px'

  })

};
