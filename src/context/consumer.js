import React from 'react';
import {
  IdValueContext, blogValueContext
} from './index';

function consumer(Component) {
  return function WrapperComponent(props) {
    return (
      <IdValueContext.Consumer>
        {idDetailContext => (
          <blogValueContext.Consumer>
            {blogContext => (
              <Component
                {...props}
                idDetailContext={idDetailContext}
                blogContext={blogContext}
              />
            )}
          </blogValueContext.Consumer>
        )}
      </IdValueContext.Consumer>

    );
  };
}

export default consumer;
