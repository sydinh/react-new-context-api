import React, { Component } from 'react';
import { Consumer as ContextConsumer } from './Context';

const withTheme = (WrappedComponent) => {
  class themeHoc extends Component {
    render() {
      return (
        <ContextConsumer>
          {(theme) =>
            <WrappedComponent {...theme} {...this.props} />
          }
        </ContextConsumer>
      )
    }
  };
  return themeHoc;
};

export default withTheme;
