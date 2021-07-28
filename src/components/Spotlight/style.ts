import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0;
`;

export const MainSpotlight = styled.div`
  width: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: transform 350ms ease;
  padding: 0 10px;

  &:hover {
    transform: scale(1.1);
  }

  img {
    max-width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  color {
    ${({ theme }) => theme.font.colors.lightest}
  }
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
  color {
    ${({ theme }) => theme.colors.darkGray}
  }
  font-size: 15px;
  p {
    display: inline-block;
  }
`;

export const SpotlightContent = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
