import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  transition: background-color 0.3s ease;

  & header {
    margin-left: 190px;

    @media (max-width: 900px) {
      margin-left: 0;
      width: 100%;
    }
  }

  & input {
    background-color: ${({ theme }) => theme.colors.contrastBackground};
    color: ${({ theme }) => theme.fonts.primaryFont};
    padding-left: 10px;
    border: none;
    height: 50px;
    border-radius: 10px;
  }
`;

export const Content = styled.div`
  width: calc(100% - 190px);
  min-height: calc(100vh - 70px);
  margin-left: 190px;
  padding: 10px 3%;
  margin-top: 70px;
  overflow-y: auto;

  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0;
    padding: 0;
    margin: 70px 2% 0 2%;
  }
`;
