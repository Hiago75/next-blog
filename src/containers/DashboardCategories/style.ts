import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

export const Container = styled.section`
  display: flex;
  flex-shrink: 1;
  gap: 20px;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const CategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 13px 0;
`;

export const Trashcan = styled(FaTrash)`
  cursor: pointer;
`;
