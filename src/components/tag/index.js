import React from 'react';
import injectSheet from 'react-jss';
import style from './style';
import { arrow } from '../../assets/icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSortDown } from '@fortawesome/free-solid-svg-icons';
// import { fontSize10 } from '../../assets/styles/typography';

const Tags = props => {
  const {
    classes, text, selected, value, bullet, dropDown
  } = props;

  const handleTagSelection = () => {

  };
  return (
    <div className={classes.tagRoot}>
      <div className={selected === value ? 'active' : 'inactive'}>
        {/* {bullet ?  <div className={classes.bullet}></div>: } */}
        <div className="bulletStyle" style={{ display: bullet ? 'visible' : 'none' }} />
        <div onClick={() => handleTagSelection()} style={{ border: 0, fontSize: '14px' }}>{text}</div>

        {dropDown && (
          <div style={{ border: 0, margin: 0, display: 'flex' }}>
            <img src={arrow} alt="arrow" style={{ width: '12px' }} />
          </div>
        )}
      </div>

    </div>
  );
};

export default injectSheet(style)(Tags);
