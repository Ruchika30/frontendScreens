import { css } from '@emotion/core';
const styles = {
  Container: {
    display: 'flex',
    paddingTop: '3',
    paddingBottom: '3'
  },
  textCenter: {
    align: 'center'
  },
  subContainer: {
    flex: '1'
  },
  cardWrapper: {
    display: 'flex',
    boxShadow: ' 0 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
    background: '#FFFFFF',
    padding: '15px 10px 15px 10px'
  },
  layoutContainer: {
    width: '80%',
    margin: 'auto'
  },
  gridStyle: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))'

  },


};

export default styles;
