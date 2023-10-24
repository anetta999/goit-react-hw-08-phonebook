import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { Container } from 'components/Container';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { HeaderWrap, StyledHeader } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledHeader>
      <Container>
        <HeaderWrap>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
        </HeaderWrap>
      </Container>
    </StyledHeader>
  );
};
