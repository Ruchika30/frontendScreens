import React, { useState } from 'react';
import { IdValueContext } from './index';
// Create Context Object

// Create a provider for components to consume and subscribe to changes
const CareerIdValueProvider = props => {
  const [careerId, setCareerId] = useState('');
  const [careerName, setCareerName] = useState('');
  const [careerSector, setCareerSector] = useState('');
  const [menuItem, setMenuItem] = useState('Video Library');
  const [careerSectorID, setCareerSectorID] = useState('');

  return (
    <IdValueContext.Provider
      value={{
        careerId,
        setCareerId,
        careerSector,
        setCareerSector,
        careerSectorID,
        setCareerSectorID,
        careerName,
        setCareerName,
        menuItem,
        setMenuItem

      }}
    >
      {props.children}
    </IdValueContext.Provider>
  );
};

export default CareerIdValueProvider;
