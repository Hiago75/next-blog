import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  height: 70px;
  position: fixed;
  align-items: center;
  width: calc(100% - 190px);
  background-color: ${({ theme }) => theme.colors.mainBackground};
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const Notifications = styled.span`
  position: relative;
`;

export const NotificationBall = styled.span`
  background-color: ${({ theme }) => theme.colors.alternativeBackground};
  color: ${({ theme }) => theme.fonts.primaryFont};
  display: inline-block;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  position: absolute;
  right: 13px;
  font-size: 11px;
  text-align: center;
`;

export const Message = styled.p`
  padding: 0 30px;
  font-weight: bolder;
  font-size: 26px;
  color: ${({ theme }) => theme.fonts.primaryFont};
`;

export const UserBar = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    margin: 0 15px;
  }
`;
