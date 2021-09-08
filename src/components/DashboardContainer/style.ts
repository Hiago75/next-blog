import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.dashboard.dark.primaryBlack};

  & header {
    margin-left: 250px;
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  margin-top: 70px;
  margin-left: 250px;
  overflow-y: auto;
`;
