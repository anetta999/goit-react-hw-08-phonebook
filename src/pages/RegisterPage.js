import { Container } from 'components/Container';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import {
  SectionSecondTitle,
  StyledLoginSection,
} from 'components/Section.styled';

export default function Register() {
  return (
    <StyledLoginSection>
      <Container>
        <SectionSecondTitle>Registration</SectionSecondTitle>
        <RegisterForm />
      </Container>
    </StyledLoginSection>
  );
}
