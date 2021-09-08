import styled from 'styled-components';

export const AdminButton = styled.button`
  background-color: #6e9adb;
  border: 0;
  outline: 0;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 15px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bolder;
  color: ${({ theme }) => theme.dashboard.dark.font.colors.white};
`;
