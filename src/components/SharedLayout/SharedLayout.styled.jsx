import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0px auto;
  padding: 20px;
`;

export const Header = styled.header``;

export const Navigation = styled.nav`
  margin-bottom: 20px;
  margin-top: 10px;

  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Link = styled(NavLink)`
  font-size: 18px;

  &:hover,
  &:focus {
    color: green;
  }

  &.active {
    color: green;
  }
`;

export const LineWrapper = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #000;
`;
