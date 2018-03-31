import React from 'react';
import withTheme from './withTheme';

const Footer = (props) =>
  <footer style={{ color: props.foreground }}>
    Made by
    <a
      style={{ color: props.foreground }}
      href="https://sydinh.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      &nbsp;Sy Dinh
    </a>
    &nbsp;with all love
  </footer>

export default withTheme(Footer);
