import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Switch,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Header = ({ toggleDrawer, isDarkMode, toggleDarkMode }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6">Title</Typography>
      <Switch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        value="checkedB"
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
