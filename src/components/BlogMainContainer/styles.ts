import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1180px;
  margin: 95px auto;
  margin-bottom: 0;
  padding: 20px 2%;
  min-height: calc(100% - 146px);

  @media (max-width: 768px) {
    margin: 66px auto;
  }
`;
