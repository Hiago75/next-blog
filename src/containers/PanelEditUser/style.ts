import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
`;

export const FormWrapper = styled.div`
  width: 600px;
`;

// Preview
export const UserPreview = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 5px 0;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const PreviewProfilePhoto = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 5;
  width: 100%;
  height: 100%;
`;

export const PreviewProfilePhotoBox = styled.div`
  ${({ theme }) => css`
    width: 80%;
    height: 450px;
    background-color: ${theme.colors.alternativeBackground};
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: column wrap;

    p {
      color: ${theme.fonts.primaryFont};
      font-size: 20px;
    }

    img {
      width: 256px;
      height: 256px;
      border-radius: 50%;
      margin: 15px 0;
    }
  `}
`;

export const PreviewProfilePhotoHeader = styled.div`
  padding: 0 15px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;

export const ConfirmText = styled.div`
  border-top: 1px solid white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;

  p,
  button {
    display: inline-block;
  }
`;

export const UserImageBox = styled.label`
  display: block;
  border-radius: 50%;
`;

export const PhotoInput = styled.input`
  display: none;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 50px;
  position: relative;

  span {
    height: 35px;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.contrastColor};
    display: inline-block;
    position: absolute;
    left: -10px;
    bottom: 95px;

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const PreviewName = styled.h2`
  font-weight: normal;
  color: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 26px;
`;

export const UserRole = styled.p`
  padding: 10px 0;
  color: ${({ theme }) => theme.fonts.smothFont};
  font-weight: normal;
  font-size: 17px;
`;

// Form
export const UserDataContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 10px;

  & button[type='submit'] {
    margin-top: 25px;
  }

  @media (max-width: 900px) {
    margin-bottom: 25px;
  }
`;

export const UserDataLabel = styled.label`
  width: 100%;
  margin-top: 25px;
`;

export const LabelTitle = styled.p`
  color: ${({ theme }) => theme.fonts.smothFont};
  padding: 5px 0;
`;

export const UserDataInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    border: 0;
    outline: 0;
    color ${theme.fonts.primaryFont};
    background: ${theme.colors.contrastBackground};
    height: 45px;
    font-size: 18px;
    padding-left: 15px;
  `}

  &.userPassword {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

//Edit password;

export const EditPassword = styled.button`
  background: none;
  border: 0;
  outline: 0;
  color: ${({ theme }) => theme.colors.contrastColor};
  margin: 4px 0;
  cursor: pointer;
  display: block;

  &:hover {
    box-shadow: 0 2px 0 -1px ${({ theme }) => theme.colors.contrastColor};
  }
`;
