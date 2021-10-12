import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
`;

export const FormWrapper = styled.div`
  width: 800px;
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
