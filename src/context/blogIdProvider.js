import React, { useState } from 'react';
import { BlogValueContext } from './index';
// Create Context Object

// Create a provider for components to consume and subscribe to changes
const BlogIdProvider = props => {
  const [categoryId, setCategoryId] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [blogId, setBlogId] = useState('');

  return (
    <BlogValueContext.Provider
      value={{
        categoryId,
        setCategoryId,
        categoryName,
        setCategoryName,
        blogId,
        setBlogId
      }}
    >
      {props.children}
    </BlogValueContext.Provider>
  );
};

export default BlogIdProvider;
