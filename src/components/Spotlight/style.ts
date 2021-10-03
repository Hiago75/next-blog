import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const MainSpotlight = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 10px;

  img {
    max-width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 38px;
  font-weight: normal;
  padding: 10px 0;

  &:after {
    display: block;
    border-bottom: solid 3px white;
    transform: scaleX(0);
    transition: transform 350ms ease-in-out;
    content: '';
    transform-origin: 0% 50%;
  }

  ${MainSpotlight}:hover &:after {
    transform: scaleX(1);
  }
`;

export const Details = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.alternativeBackground};
    font-size: 15px;

    p {
      color: ${theme.fonts.primaryFont}
      display: inline-block;
    }
  `}
`;

export const SpotlightContent = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
