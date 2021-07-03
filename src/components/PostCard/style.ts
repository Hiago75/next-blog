import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 33%;
  justify-content: center;
  margin: 35px 0;

  a {
    text-decoration: none;
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 350px;
    padding: 35px;
    transform: scale(0.9);
    border-left: 1px solid ${theme.colors.borders.darkGray};
    border-right: 1px solid ${theme.colors.borders.darkGray};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.primary};
    }
  `}
`;

export const PostCardCover = styled.div`
  img {
    max-width: 100%;
  }
`;

export const PostCardHeading = styled.div`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;

    h2 {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.font.colors.primary};
      margin: 10px 0;
    }

    div {
      p {
        display: inline-block;
        opacity: 0.5;
      }
    }
  `}
`;
