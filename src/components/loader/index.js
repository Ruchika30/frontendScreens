import React from 'react';
import { logoWithTxt } from '../../assets/icons';

const Loader = () => (
  <div className="overlay">
    <div className="loader centerLoader" />
    {/* <img src={logoWithTxt} alt="logo" style={{ width: '100%' }} /> */}
    <div>Quote is here...</div>
  </div>

);

export default Loader;
