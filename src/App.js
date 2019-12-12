import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import './App.css';

function App() {
  const [isDrawerOpen, toggleDrawer] = useState(false);
  const toggleDrawerHandler = () => toggleDrawer(!isDrawerOpen);

  return (
    <Router>
      <Header toggleDrawer={toggleDrawerHandler} />
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
