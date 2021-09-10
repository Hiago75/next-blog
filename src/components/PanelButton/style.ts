import styled from 'styled-components';

export const AdminButton = styled.button`
  background-color: ${({ theme }) => theme.dashboard.dark.lightBlue};
  border: 0;
  outline: 0;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 15px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bolder;
  color: ${({ theme }) => theme.dashboard.dark.font.colors.white};

  & a {
    color: ${({ theme }) => theme.dashboard.dark.font.colors.white};
    text-decoration: none;
  }
`;
