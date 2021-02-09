/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, useContext, useState } from 'react';
import GoTopComponent from '../components/goToTop';

const GoToTTopNavigationContext = createContext({
  hideGoTop: () => { },
  showGoTop: () => { }
});

export const GoToTopProvider = ({ children }) => {
  const [state, setState] = useState({
    visible: false
  });

  const showGoTop = () => {
    setState({
      visible: true
    });
  };

  const hideGoTop = () => {
    setState({
      visible: false
    });
  };

  return (
    <GoToTTopNavigationContext.Provider value={{ showGoTop, hideGoTop }}>
      {state.visible ? (
        <GoTopComponent />) : null}
      {children}
    </GoToTTopNavigationContext.Provider>
  );
};

export default () => useContext(GoToTTopNavigationContext);
