import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-shrink: 1;
  gap: 20px;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 10px 40px;
`;

export const CategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 13px 0;
`;

export const PanelInput = styled.input`
  background: ${({ theme }) => theme.dashboard.dark.primaryBlack} !important;
  width: 100%;
  margin: 35px 0;
`;
