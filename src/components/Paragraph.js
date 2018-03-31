import React, { Component } from 'react';
import { Consumer as ContextConsumer } from './Context';

class Paragraph extends Component {
  render() {
    return (
      <ContextConsumer>
        {(theme) =>
          <p style={{ color: theme.foreground }}>{this.props.children}</p>
        }
      </ContextConsumer>
    )
  }
};

export default Paragraph;
