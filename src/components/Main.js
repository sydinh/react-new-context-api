import React, { Component } from 'react';
import Paragraph from './Paragraph';

class Main extends Component {
  constructor() {
    super();
    this.buttonRef = React.createRef();
  }

  componentDidMount() {
    this.buttonRef.current.focus();
  }

  render() {
    return (
      <main>
        <Paragraph>Main Content</Paragraph>
        <button
          type="submit"
          ref={this.buttonRef}
          // autoFocus also is an other approach
        >
          Auto Focus
        </button>
      </main>
    )
  }
}

export default Main;
