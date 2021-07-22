import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.panel.colors.quaternary};
`;

export const Content = styled.div`
  width: calc(100% - 250px);
`;
