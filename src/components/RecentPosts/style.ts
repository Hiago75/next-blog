import styled from 'styled-components';
import { LineDivider } from '../../containers/Post/style';

export const Container = styled.section``;

export const Center = styled.div`
  text-align: center;
`;

export const Title = styled.h5`
  display: inline-block;
  font-size: 32px;
  font-weight: normal;
`;

export const TitleDivider = styled(LineDivider)`
  max-width: 35%;
  height: 4px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: max-width 300ms ease;
`;

export const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 50%;
  justify-content: center;
`;
