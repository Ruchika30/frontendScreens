import React, { useState } from 'react';
import { IdValueContext } from './index';
// Create Context Object

// Create a provider for components to consume and subscribe to changes
const CareerIdValueProvider = props => {
  const [careerId, setCareerId] = useState('');

  return (
    <IdValueContext.Provider
      value={[careerId,
        setCareerId
      ]}
    >
      {props.children}
    </IdValueContext.Provider>
  );
};

export default CareerIdValueProvider;
