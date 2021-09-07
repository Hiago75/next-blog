import styled from 'styled-components';
import { BasePanel } from '../../components';

export const Panels = styled.div`
  display: flex;
  flex-shrink: 1;
  gap: 20px;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 10px 40px;
`;

export const PanelTitle = styled.h2`
  font-size: 19px;
`;

export const ContentPanel = styled(BasePanel)`
  &.w80 {
    width: calc(80% - 20px);
  }
  &.w40 {
    width: 40%;
  }
  &.w20 {
    width: 20%;
    text-align: center;
  }
`;

export const Content = styled.div`
  padding: 15px 0;

  h1 {
    font-size: 55px;
  }

  p {
    color: ${({ theme }) => theme.dashboard.dark.font.colors.lightGray};
  }

  &.flexContent {
    display: flex;
    justify-content: space-between;
  }
`;

export const ContentField = styled.div`
  p {
    padding: 10px 0;
  }
  h3 {
    font-weight: normal;
    font-size: 18px;
    color: ${({ theme }) => theme.dashboard.dark.font.colors.white};
  }
`;

export const PanelButton = styled.button`
  background-color: #6e9adb;
  border: 0;
  outline: 0;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 15px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bolder;
  color: ${({ theme }) => theme.dashboard.dark.darkBlue};
`;