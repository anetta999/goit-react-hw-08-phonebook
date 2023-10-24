import { Container } from 'components/Container';
import {
  SectionText,
  SectionTitle,
  StyledSection,
} from 'components/Section.styled';
import image from 'img/phone.png';
import { StyledHomeImg } from './HomePage.styled';

export default function Home() {
  return (
    <StyledSection>
      <Container>
        <SectionTitle>Phonebook</SectionTitle>
        <SectionText>
          Please, register or sign in to create and manage your own list of
          contacts
        </SectionText>
        <StyledHomeImg src={image} alt="phonebook" width={380} height={380} />
      </Container>
    </StyledSection>
  );
}
