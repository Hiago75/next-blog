import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.fonts.primaryFont};
  margin-bottom: 10px;
`;

export const LinkButton = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.contrastColor};
  font-weight: bold;
  margin-right: 5px;

  svg {
    transition: transform 0.3s ease;
    position: relative;
    z-index: 10;
    top: 3px;
  }

  :hover {
    svg {
      transform: translateX(5px);
    }
  }
`;

export const LineDivider = styled.span`
  width: 100%;
  height: 1px;
  display: inline-block;
  background-color: ${({ theme }) => theme.fonts.smothFont};
`;
