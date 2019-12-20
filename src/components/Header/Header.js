import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Header = ({ toggleDrawer }) => (
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
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
