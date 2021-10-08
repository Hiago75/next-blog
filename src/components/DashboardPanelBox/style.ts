import styled from 'styled-components';

export const PanelTitle = styled.h2`
  font-size: 19px;
  color: ${({ theme }) => theme.fonts.primaryFont};
`;

export const ContentPanel = styled.div`
  background-color: ${({ theme }) => theme.colors.contrastBackground};
  width: 100%;
  border-radius: 20px;
  padding: 15px 25px;

  &.center {
    text-align: center;
  }

  @media (max-width: 900px) {
    width: 100% !important;
    margin: 0;
  }
`;

export const Content = styled.div`
  padding: 15px 0;

  h2 {
    color: ${({ theme }) => theme.fonts.primaryFont};
  }

  h1 {
    color: ${({ theme }) => theme.fonts.primaryFont};
    font-size: 55px;
  }

  p {
    color: ${({ theme }) => theme.fonts.smothFont};
  }

  &.flexContent {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
