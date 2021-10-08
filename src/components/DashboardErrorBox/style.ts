import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const ErrorField = styled.div`
  span {
    margin-top: 20px;
    padding: 10px;
    border-left: 1px solid red;
    background-color: ${({ theme }) => theme.colors.alternativeBackground};
    color: red;
  }
`;
