import styled, { css } from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const PageTitle = styled.h1`
  margin: 20px 30px;
`;

export const UserDataContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70%;
`;

export const BaseButton = styled.button`
  ${({ theme }) => css`
    padding: 15px 0;
    width: calc(50% - 20px);
    margin: 0 10px;
    background-color: ${theme.dashboard.colors.darkGray};
    color: ${theme.colors.mediumBlue};
    font-size: ${theme.dashboard.font.sizes.small};
    border: 1px solid ${theme.colors.mediumBlue};
    border-radius: 10px;
    cursor: pointer;

    svg {
      position: relative;
      top: 3px;
      margin: 0 3px;
    }
  `}
`;

export const UserPreview = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
  height: 30%;
`;

export const PreviewData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 50px;
`;

export const PreviewName = styled.h2`
  font-weight: normal;
`;

export const UserRole = styled.p`
  padding: 10px 0;
  color: ${({ theme }) => theme.font.colors.lightGray};
  font-weight: normal;
  font-size: 15px;
`;

export const UserPhoto = styled.div`
  svg,
  img {
    border-radius: 50%;
    max-width: 240px;
    width: 100%;
  }
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0 2%;
`;

export const UserDataForm = styled.form`
  width: 100%;
  padding: 0 2%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const DataField = styled.div`
  margin: 15px 0;

  &.full-size {
    display: flex;
    text-align: center;
  }

  &.not-editable {
    cursor: not-allowed;
  }
`;

export const Title = styled.h2`
  font-size: 17px;
  font-weight: normal;
  color: ${({ theme }) => theme.font.colors.lightGray};
`;

export const Content = styled.p`
  margin: 8px 15px;
  color: ${({ theme }) => theme.font.colors.light};

  &.full-size {
    margin: 0;
  }
`;

export const FormDataField = styled.div`
  width: 45%;
  margin: 8px 2%;
`;

export const ButtonBox = styled.div`
  width: 100%;
  text-align: center;
`;

export const FilledButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.dashboard.colors.lightBlue};
  color: ${({ theme }) => theme.font.colors.light};
`;

export const EditInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 45px;
    padding-left: 15px;
    background-color: ${theme.dashboard.colors.darkGray};
    color: ${theme.font.colors.light};
    border: 0;
    border-bottom: 2px solid ${theme.dashboard.colors.lightBlue};
    text-align: center;
    font-size: 19px;
  `}
`;
