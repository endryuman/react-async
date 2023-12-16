import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationLink = styled(NavLink)`
  color: blue;
  text-decoration: none;

  &.active {
    color: red;
  }
`;
