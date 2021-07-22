import styled from 'styled-components';

export const Panel = styled.div`
  background-color: ${({ theme }) => theme.panel.colors.primary};
  width: 100%;
  border-radius: 20px;
  padding: 10px 25px;
`;
