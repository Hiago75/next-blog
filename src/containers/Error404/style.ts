import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: calc(100vh - 163px);
    color: ${theme.fonts.primaryFont};

    h1 {
      font-size: 120px;
    }

    h2 {
      font-size: 40px;
      margin: 30px;
    }

    @media screen and (max-width: 768px) {
      padding-top: 66px;
    }
  `}
`;

export const IllustrationBox = styled.div`
  flex: 1 0 50%;
  align-items: center;
  padding: 0 65px;

  img {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Cta = styled.div`
  flex: 1 0 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
