import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 45px 0;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 8px;
  border-radius: 3px;
  margin: 0 8px;
  cursor: pointer;
  transform: scale(0.9);
  transition: transform 350ms ease;

  a {
    font-size: 17px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    transform: scale(1);
    a {
      text-decoration: underline;
    }
  }

  &.inactive {
    border: 1px solid ${({ theme }) => theme.colors.borders.darkGray};
    pointer-events: none;

    a {
      color: ${({ theme }) => theme.colors.borders.darkGray};
    }
  }
`;
