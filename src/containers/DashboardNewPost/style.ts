import styled, { css } from 'styled-components';
import { PanelBox } from '../../components';

export const Container = styled.section`
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  padding-right: 20px;

  @media (max-width: 900px) {
    padding-right: 0;
  }
`;

export const FormContainer = styled.form`
  display: inherit;
  flex-flow: inherit;
  justify-content: center;

  width: 100%;
  margin: 10px 0;
`;

export const MediaBox = styled.label`
  display: flex;
  position: relative;
  cursor: pointer;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  padding: 25px 0;
  background-color: ${({ theme }) => theme.colors.contrastBackground};
  color: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 25px;
  border-radius: 20px;
  max-height: 450px;

  svg {
    width: 100%;
  }

  div {
    width: 100%;
    text-align: center;
  }

  &.image-cover {
    width: auto;
    padding: 0;

    img {
      margin: 0;
    }
  }
`;

export const CoverPreview = styled.div``;

export const ImagePreview = styled.img`
  width: auto;
  height: auto;
  max-height: 350px;
  border-radius: 20px;
  margin-top: 20px;
  filter: grayscale(0);

  ${CoverPreview}:hover & {
    opacity: 0.5;
  }

  @media (max-width: 900px) {
    width: 95%;
  }
`;

export const MediaEditor = styled.div`
  &.image-cover {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: none;

    ${CoverPreview}:hover & {
      display: flex;
      z-index: 99;
      height: 100%;
      align-items: center;
    }
  }
`;

export const MediaInput = styled.input`
  display: none;
`;

//Post tags

export const PostTagsBox = styled(PanelBox)`
  margin: 30px 0;
`;

export const PostTagsSubTitle = styled.h2`
  display: none;
`;

export const AvaliablePostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  p {
    width: 100%;
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

export const PostTagsUl = styled.ul`
  ${({ theme }) => css`
    color: ${theme.fonts.contrastFont};
    display: flex;
    width: 100%;
    border: 1px solid ${theme.colors.alternativeBackground};
    background-color: ${theme.colors.mainBackground};
    border-radius: 10px;
    padding: 10px;
  `}
`;

export const PostTagsAdvice = styled.p`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 18px;
`;

export const PostTag = styled.li`
  list-style: none;
  margin: 4px 5px;
  background: ${({ theme }) => theme.colors.contrastColor};
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;

  svg {
    margin-left: 5px;
    position: relative;
    top: 3px;
  }
`;

export const PostTagInput = styled.input`
  height: 36px !important;
  background-color: ${({ theme }) => theme.colors.mainBackground} !important;
  flex: 1;
  font-size: 16px;
`;

export const SelectInput = styled.select`
  width: calc(20% - 10px);
  height: 50px;
  margin-left: 10px;

  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0;
  }
`;
