import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.panel.colors.quaternary};
`;

export const Content = styled.div`
  width: calc(100% - 250px);
`;

export const Panels = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  flex: 1 0 70%;
`;
