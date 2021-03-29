import React, { useState } from 'react';
import { IdValueContext } from './index';
// Create Context Object

// Create a provider for components to consume and subscribe to changes
const blogIdProvider = props => {
  const [categoryId, setCategoryId] = useState('');
  const [categoryName, setCategoryName] = useState('');

  return (
    <IdValueContext.Provider
      value={{
        categoryId, setCategoryId, categoryName, setCategoryName
      }}
    >
      {props.children}
    </IdValueContext.Provider>
  );
};

export default blogIdProvider;
