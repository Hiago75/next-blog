import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.panel.colors.quaternary};
`;

export const Content = styled.div`
  width: 100%;
  margin-left: 250px;
  overflow-y: auto;
`;

export const Panels = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  flex: 1 0 70%;
`;
