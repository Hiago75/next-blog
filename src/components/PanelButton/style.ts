import styled from 'styled-components';

export const AdminButton = styled.button`
  background-color: ${({ theme }) => theme.colors.contrastColor};
  border: 0;
  outline: 0;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 15px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bolder;
  color: ${({ theme }) => theme.fonts.contrastFont};

  & a {
    color: ${({ theme }) => theme.fonts.contrastFont};
    text-decoration: none;
  }

  &:hover {
    background-color: rgba(90, 139, 214, 0.8);
  }
`;
