import styled from 'styled-components';

export const CategoryCard = styled.div`
  text-align: center;
  flex: 1 0 33.3%;

  @media screen and (max-width: 420px) {
    flex: 1 0 100%;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: normal;
  margin: 10px 0 30px 0;
`;
