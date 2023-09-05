import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  margin-bottom: 15px;
  margin-top: 20px;
  width: 130px;
  height: 30px;
  border-radius: 4px;
  background-color: rgb(63, 81, 181);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  border: none;
`;

export const AdditionalInfTitle = styled.h2`
  margin-top: 20px;
`;

export const LinkList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;
