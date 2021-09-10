import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.dashboard.dark.primaryBlack};

  & header {
    margin-left: 250px;
  }

  & input {
    background-color: ${({ theme }) => theme.dashboard.dark.darkBlue};
    color: ${({ theme }) => theme.dashboard.dark.font.colors.white};
    padding-left: 10px;
    border: none;
    height: 35px;
    border-radius: 10px;
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  margin-top: 70px;
  margin-left: 250px;
  overflow-y: auto;
`;
