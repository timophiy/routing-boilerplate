import React from 'react';
import { SwipeableDrawer } from '@material-ui/core';

const Drawer = ({ isOpen, onClose, onOpen }) => {
  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}
    >
      <div style={{ width: 100, backgroundColor: '#000', height: 100 }} />
    </SwipeableDrawer>
  );
};

export default Drawer;
