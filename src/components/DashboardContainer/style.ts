import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.dashboard.dark.primaryBlack};
`;

export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-left: 250px;
  overflow-y: auto;
`;
