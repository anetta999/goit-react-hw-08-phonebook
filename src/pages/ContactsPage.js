import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import { Container } from 'components/Container';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactList } from 'components/ContactList/ContactList';
import {
  SectionSecondTitle,
  StyledContactsSection,
} from 'components/Section.styled';
import { ContactsWrap } from './ContactsPage.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <StyledContactsSection>
        <Container>
          {isLoading && !error && <p>LOADING...</p>}
          {error && <p>Something went wrong, please try reloading the page</p>}
          <SectionSecondTitle>Contacts</SectionSecondTitle>
          <ContactsWrap>
            <ContactForm />
            <div>
              <ContactFilter />
              <ContactList />
            </div>
          </ContactsWrap>
        </Container>
      </StyledContactsSection>
    </>
  );
}
