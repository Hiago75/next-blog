import styled, { css } from 'styled-components';

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: 4rem;
    margin: 10px 0;
    text-align: center;
    color: ${theme.colors.secondary};
  `}
`;

export const PostCover = styled.img`
  max-width: 100%;
  margin-bottom: 20px;
`;

export const PostDetails = styled.div`
  text-align: center;

  p,
  h5 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.font.colors.secondary};
    padding: 10px 0;
    font-size: 16px;
  }

  p {
    display: inline-block;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LineDivider = styled.span`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.borders.darkGray};
  display: inline-block;
  margin: 15px 0;
`;
