import styled from 'styled-components';

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
  max-height: 450px;
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
    }
  }
`;

export const MediaInput = styled.input`
  display: none;
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
