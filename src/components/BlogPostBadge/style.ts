import styled from 'styled-components';

export const PostBadge = styled.span`
  color: ${({ theme }) => theme.fonts.contrastFont};
  background-color: ${({ theme }) => theme.colors.contrastColor};

  padding: 4px 15px;
  border-radius: 10px;
  text-decoration: none;

  letter-spacing: 1px;

  font-size: 17px;
  display: inline-block;
  font-weight: bold;

  svg {
    position: relative;
    top: 2px;
  }
`;
