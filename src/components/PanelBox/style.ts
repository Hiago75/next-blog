import styled from 'styled-components';
import { BasePanel } from '..';

export const PanelTitle = styled.h2`
  font-size: 19px;
  color: ${({ theme }) => theme.fonts.primaryFont};
`;

export const ContentPanel = styled(BasePanel)`
  &.w80 {
    width: calc(80% - 20px);
  }
  &.w50 {
    width: 50%;
  }
  &.w40 {
    width: 40%;
  }
  &.w20 {
    width: 20%;
  }
  &.w30 {
    width: 30%;
  }

  &.center {
    text-align: center;
  }

  @media (max-width: 900px) {
    width: 100% !important;
    margin: 0;
  }
`;

export const Content = styled.div`
  padding: 15px 0;

  h2 {
    color: ${({ theme }) => theme.fonts.primaryFont};
  }

  h1 {
    color: ${({ theme }) => theme.fonts.primaryFont};
    font-size: 55px;
  }

  p {
    color: ${({ theme }) => theme.fonts.smothFont};
  }

  &.flexContent {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
