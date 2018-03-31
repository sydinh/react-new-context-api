import React from 'react';
import { Consumer as ContextConsumer } from './Context';

const Logo = () =>
  <ContextConsumer>
    {(theme) =>
      <h1 style={{ color: theme.foreground }}>Logo</h1>
    }
  </ContextConsumer>

export default Logo;
