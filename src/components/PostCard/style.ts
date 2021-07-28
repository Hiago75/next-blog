import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 50%;
  justify-content: center;
  margin: 10px 0;

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 768px) {
    flex: 1 0 100%;
  }
`;

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 150px;
  transform: scale(0.9);
  transition: transform 350ms ease;

  &:hover {
    transform: scale(1);
  }
`;

export const PostCardCover = styled.div`
  img {
    max-width: 100%;
    max-height: 250px;
  }
`;

export const PostCardHeading = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 0 25px;
    h2 {
      font-size: ${theme.font.sizes.regular};
      color: ${theme.font.colors.lightest};
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
