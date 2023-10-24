import styled from 'styled-components';

export const UserMenuWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const GreetingText = styled.p`
  color: rgb(243, 243, 243);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.18px;
  text-transform: uppercase;
`;

export const LogoutBtn = styled.button`
  padding: 10px 20px;
  border: transparent;
  border-radius: 40px;
  background-color: #eac645;
  color: rgb(243, 243, 243);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.18px;
  text-transform: uppercase;
  transition: color 250ms ease-in 0s;

  &:hover {
    color: #303030;
  }
`;
