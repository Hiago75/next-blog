import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 50%;
  justify-content: center;
  margin: 35px 0;

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 180px;
  transform: scale(0.9);
  transition: transform 350ms ease;

  &:hover {
    transform: scale(1);
  }
`;

export const PostCardCover = styled.div`
  img {
    max-width: 100%;
    max-height: 300px;
  }
`;

export const PostCardHeading = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 0 25px;
    h2 {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.font.colors.primary};
      margin: 10px 0;

      &:after {
        display: block;
        border-bottom: solid 3px white;
        transform: scaleX(0);
        transition: transform 350ms ease-in-out;
        content: '';
        transform-origin: 0% 50%;
      }

      ${Wrapper}:hover &:after {
        transform: scaleX(1);
      }
    }

    div {
      p {
        display: inline-block;
        opacity: 0.5;
        font-size: 13px;
      }
    }
  `}
`;
