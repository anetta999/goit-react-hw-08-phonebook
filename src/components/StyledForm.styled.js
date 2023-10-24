import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 579px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  border-radius: 18px;
  border: 2px solid #111;
  background-color: #f6f6f6;
`;

export const FormInput = styled.input`
  width: 499px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 40px;
  border: 2px solid #111;
  outline: none;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.18px;
  text-transform: uppercase;

  &:focus {
    border: 2px solid #4f2ee8;
  }
`;

export const FormBtn = styled.button`
  width: 499px;
  height: 64px;
  padding: 0;
  border: transparent;
  border-radius: 40px;
  background-color: #111;

  color: #f3f3f3;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.18px;
  text-transform: uppercase;

  transition: background-color 250ms ease-in;

  &:is(:hover, :focus) {
    background-color: #4f2ee8;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #111;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.18px;
  text-transform: uppercase;
`;
