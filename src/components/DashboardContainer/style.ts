import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.dashboard.colors.darkGray};
`;

export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-left: 250px;
  overflow-y: auto;
`;
