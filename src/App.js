import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import darkTheme from './themes/dark';
import lightTheme from './themes/light';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%
  }
  body {
    background-color: ${props => props.theme.colors.background};
  }
`;

function App() {
  const [isDrawerOpen, toggleDrawer] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDrawerHandler = () => toggleDrawer(!isDrawerOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header
          toggleDrawer={toggleDrawerHandler}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
        <Drawer
          isOpen={isDrawerOpen}
          onClose={toggleDrawerHandler}
          onOpen={toggleDrawerHandler}
        />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
