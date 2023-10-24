import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;

  color: rgb(243, 243, 243);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.18px;
  text-transform: uppercase;

  &:hover {
    color: #eac645;
  }

  &.active {
    color: #eac645;
  }

  &.active::after {
    position: absolute;
    bottom: 0;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    background-color: rgb(243, 243, 243);
    border-radius: 2px;
  }
`;

export const AuthNavWrap = styled.div`
  display: flex;
  gap: 50px;
`;

export const NavWrap = styled.nav`
  display: flex;
  gap: 30px;
`;
