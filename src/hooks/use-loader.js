/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, useContext, useState } from 'react';
import Loader from '../components/loader';

const LoaderContext = createContext({
  hide: () => { },
  show: () => { }
});

export const LoaderProvider = ({ children }) => {
  const [state, setState] = useState({
    visible: false
  });

  const show = () => {
    setState({
      visible: true
    });
  };

  const hide = () => {
    setState({
      visible: false
    });
  };

  return (
    <LoaderContext.Provider value={{ show, hide }}>
      {state.visible ? (
        <Loader />) : null}
      {children}
    </LoaderContext.Provider>
  );
};

export default () => useContext(LoaderContext);
