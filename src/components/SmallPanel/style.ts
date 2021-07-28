import styled from 'styled-components';
import { BasePanel } from '../BasePanel';

export const Container = styled.div`
  width: 30%;
  border-radius: 20px;
  padding: 15px;
`;

export const PanelContent = styled(BasePanel)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;

  h1,
  h2,
  span {
    color: ${({ theme }) => theme.dashboard.font.colors.lightBlue};
    padding: 10px 0;
  }

  h1 {
    font-size: 60px;
  }

  h2 {
    font-size: 17px;
  }

  span {
    color: ${({ theme }) => theme.dashboard.font.colors.gray};
  }
`;
