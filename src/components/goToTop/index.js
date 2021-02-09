import React from 'react';
import { upwardArrow } from '../../assets/icons';
import './style.scss';

const index = props => {
  const { goToTopIconVisiblity } = props;

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* {goToTopIconVisiblity && ( */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 299
        }}
        onClick={scrollTop}
      >
        <div className="goToTopWrapper" onClick={scrollTop}>
          <img src={upwardArrow} alt="goTop" className="home" />
        </div>
      </div>
      {/* )} */}

    </div>
  );
};

export default index;
