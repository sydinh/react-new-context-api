import React, { Component } from 'react';
import { Consumer as ContextConsumer } from './Context';
import Logo from './Logo';
import Nav from './Nav';

const style={
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  transition: 'all 0.5s',
};

class Header extends Component {
  // componentWillMount() {
  //   console.log('StrictMode would show warning')
  // }

  render() {
    return (
      <ContextConsumer>
        {(theme) =>
          <header style={{ color: theme.foreground , ...style }}>
            <Logo />
            <Nav handleClick={this.props.handleButtonClicked} />
            {this.props.children}
          </header>
        }
      </ContextConsumer>
    )
  }
};

export default Header;
