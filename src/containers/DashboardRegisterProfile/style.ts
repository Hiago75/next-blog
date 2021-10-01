import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  max-width: 600px;
`;

export const RegisterInput = styled.input``;

export const InputDiv = styled.div`
  width: 100%;
  padding: 20px 0;

  input {
    height: auto;
  }

  label {
    color: ${({ theme }) => theme.fonts.primaryFont};
    padding-left: 15px;
  }
`;
