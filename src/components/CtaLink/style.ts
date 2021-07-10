import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-bottom: 50px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};

    svg {
      position: relative;
      top: 3px;
      left: 0;
      transition: left 300ms;
    }

    &:hover {
      svg {
        left: 7px;
      }
    }
  }
`;
