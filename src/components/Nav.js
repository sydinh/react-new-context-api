import React from 'react';
import withTheme from './withTheme';

const foreground = '#000000';
const darkTheme = 'Dark Theme';
const lightTheme = 'Light Theme';
const style = {
  padding: '0 10px',
  color: '#fff',
  backgroundColor: '#28a745',
  borderColor: '#28a745',
}

const Nav = (props) =>
  <button style={style} onClick={props.handleClick}>
    {(props.foreground) === foreground
      ? darkTheme
      : lightTheme
    }
  </button>

export default withTheme(Nav);
