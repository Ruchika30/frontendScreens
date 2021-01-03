import React from 'react';
import {
    IdValueContext, 
} from './index';

 function consumer(Component) {
    return function WrapperComponent(props) {
        return (
            <IdValueContext.Consumer>
                {idDetailContext => (
                    <Component
                        {...props}
                        idDetailContext={idDetailContext}
                    />
                )}

            </IdValueContext.Consumer>

        )}
}


export default consumer