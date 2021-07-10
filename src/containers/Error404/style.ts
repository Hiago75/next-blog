import styled, { css } from 'styled-components';
import { GiTreasureMap } from 'react-icons/gi';

export const Container = styled.section`
  ${({ theme }) => css`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
    margin: 50px 0;
    color: ${theme.font.colors.primary};

    h1 {
      font-size: 120px;
      color: ${theme.colors.secondary};
    }

    h2 {
      font-size: 40px;
      margin: 30px;
    }

    p {
      margin: 30px;
      font-size: 17px;
    }

    button {
      background: ${theme.colors.secondary};
      border: 0;
      border-radius: 10px;
      padding: 7px 30px;
      transition: transform 300ms ease;

      a {
        color: ${theme.font.colors.primary};
        text-decoration: none;
        font-size: 20px;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  `}
`;

export const IllustrationBox = styled.div`
  flex: 1 0 50%;
`;

export const Illustration = styled(GiTreasureMap)`
  font-size: 30rem;

  @media screen and (max-width: 625px) {
    font-size: 12rem;
  }
`;

export const Cta = styled.div`
  flex: 1 0 50%;
`;
