import React, { useState } from 'react';
import { IdValueContext } from './index';
// Create Context Object

// Create a provider for components to consume and subscribe to changes
const CareerIdValueProvider = props => {
  const [careerId, setCareerId] = useState('');
  const [careerName, setCareerName] = useState('');
  const [careerSector, setCareerSector] = useState('');
  const [menuItem, setMenuItem] = useState('Video Library');

  return (
    <IdValueContext.Provider
      value={{
        careerId,
        setCareerId,
        careerSector,
        setCareerSector,
        careerName,
        setCareerName,
        setMenuItem,
        menuItem
      }}
    >
      {props.children}
    </IdValueContext.Provider>
  );
};

export default CareerIdValueProvider;
