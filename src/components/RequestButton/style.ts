import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.contrastColor};
  color: ${({ theme }) => theme.fonts.contrastFont};
  font-size: 17px;
  border: 0;
  outline: 0;
  padding: 8px 15px;
  border-radius: 20px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bolder;

  min-height: 50px;
  min-width: 170px;

  & a {
    color: ${({ theme }) => theme.fonts.contrastFont};
    text-decoration: none;
  }

  &:hover {
    background-color: rgba(90, 139, 214, 0.8);
  }
`;
