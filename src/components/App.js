import React, { Component, StrictMode } from "react";
import {
  Provider as ContextProvider,
  Consumer as ContextConsumer
} from "./Context";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const themes = {
  light: {
    foreground: "#ffffff",
    background: "#222222"
  },
  dark: {
    foreground: "#000000",
    background: "#eeeeee"
  }
};

const style = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  transition: "all 0.5s"
};

class App extends Component {
  state = {
    theme: themes.dark
  };

  toggleTheme = () => {
    const isToggle =
      this.state.theme === themes.dark ? themes.light : themes.dark;

    this.setState({
      theme: isToggle
    });
  };

  render() {
    return (
      <ContextProvider value={this.state.theme}>
        <ContextConsumer>
          {theme => (
            <section style={{ background: theme.background, ...style }}>
              <StrictMode>
                <Header handleButtonClicked={this.toggleTheme} />
                <Main />
                <Footer />
              </StrictMode>
            </section>
          )}
        </ContextConsumer>
      </ContextProvider>
    );
  }
}

export default App;
