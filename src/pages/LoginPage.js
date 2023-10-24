import { Container } from 'components/Container';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginTitle, StyledLoginSection } from 'components/Section.styled';

export default function Login() {
  return (
    <StyledLoginSection>
      <Container>
        <LoginTitle>Log in</LoginTitle>
        <LoginForm />
      </Container>
    </StyledLoginSection>
  );
}
