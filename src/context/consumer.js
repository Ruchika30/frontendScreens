import React from 'react';
import {
  BlogValueContext, IdValueContext
} from './index';

function consumer(Component) {
  return function WrapperComponent(props) {
    return (
      <IdValueContext.Consumer>
        {idDetailContext => (
          <BlogValueContext.Consumer>
            {blogContext => (
              <Component
                {...props}
                idDetailContext={idDetailContext}
                blogContext={blogContext}
              />
            )}
          </BlogValueContext.Consumer>
        )}
      </IdValueContext.Consumer>

    );
  };
}

export default consumer;
