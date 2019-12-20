import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import darkTheme from './themes/dark';
import lightTheme from './themes/light';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import './App.css';

function App() {
  const [isDrawerOpen, toggleDrawer] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDrawerHandler = () => toggleDrawer(!isDrawerOpen);

  return (
    <Router>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Header toggleDrawer={toggleDrawerHandler} />
        <Drawer
          isOpen={isDrawerOpen}
          onClose={toggleDrawerHandler}
          onOpen={toggleDrawerHandler}
        />
        <Button
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
        >
          Toggle Dark Mode
        </Button>
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
