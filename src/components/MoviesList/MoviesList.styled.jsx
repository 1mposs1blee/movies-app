import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul``;

export const ListItem = styled.li``;

export const Link = styled(NavLink)`
  margin-bottom: 5px;

  display: inline-flex;
  align-items: center;
  gap: 10px;

  &:hover,
  &:focus {
    color: orange;
  }
`;
