import React from 'react';
import StyledSwipebleDrawer from './styles';

const Drawer = ({ isOpen, onClose, onOpen }) => {
  return (
    <StyledSwipebleDrawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}
    >
      <div style={{ width: 100, backgroundColor: '#000', height: 100 }} />
    </StyledSwipebleDrawer>
  );
};

export default Drawer;
