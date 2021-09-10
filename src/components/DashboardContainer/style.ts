import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.dashboard.dark.primaryBlack};

  & header {
    margin-left: 190px;

    @media (max-width: 900px) {
      margin-left: 0;
      width: 100%;
    }
  }

  & input {
    background-color: ${({ theme }) => theme.dashboard.dark.darkBlue};
    color: ${({ theme }) => theme.dashboard.dark.font.colors.white};
    padding-left: 10px;
    border: none;
    height: 50px;
    border-radius: 10px;
  }
`;

export const Content = styled.div`
  width: calc(100% - 250px);
  min-height: calc(100vh - 70px);
  margin-left: 190px;
  margin-top: 70px;
  overflow-y: auto;

  @media (max-width: 900px) {
    margin-left: 0;
  }
`;
