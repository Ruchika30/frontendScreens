import { darkGrayColor, navyBlueColor } from '../../assets/styles/colors';

export default {
  tagRoot: {
    '& div': {
      backgroundColor: '#fff',
      border: '1px solid #E5E5E5',
      borderRadius: 20,
      textAlign: 'center',
      padding: '1px 2px',
      overflowX: 'scroll',
      whiteSpace: 'nowrap',
      maxWidth: '150px'

    },
    '& .inactive': {
      overflow: 'hidden',
      '& span': {
        color: darkGrayColor

      }

    },
    '& .active': {
      border: '1px solid #123E94',
      overflow: 'hidden',
      display: 'flex',
      '& span': {
        color: navyBlueColor,
        fontWeight: 500
      }

    },
    '& span': {
      fontSize: 14
    },
    '& .bulletStyle': {
      width: '20px',
      borderRadius: '50%',
      backgroundColor: 'red'
    }

  }
};
