import styled from 'styled-components';
import { SwipeableDrawer } from '@material-ui/core';

const StyledSwipebleDrawer = styled(SwipeableDrawer)`
  background-color: ${props => props.theme.colors.buttonBackground};
`;

export default StyledSwipebleDrawer;
