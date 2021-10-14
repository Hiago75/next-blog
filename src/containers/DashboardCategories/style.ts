import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

export const Container = styled.section`
  display: flex;
  flex-shrink: 1;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
`;

export const CategoriesContainer = styled.div`
  width: calc(50% - 20px);
  display: flex;
  flex-flow: column wrap;
  gap: 20px;

  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

export const TagsContainer = styled.div`
  width: calc(50% - 20px);
  display: flex;
  flex-flow: column wrap;
  gap: 20px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const CategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 13px 0;
`;

export const Trashcan = styled(FaTrash)`
  cursor: pointer;
`;
