import { useAuth } from 'hooks';
import {
  NavWrap,
  StyledNavLink,
} from 'components/AuthNavigation/AuthNavigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavWrap>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </NavWrap>
  );
};
