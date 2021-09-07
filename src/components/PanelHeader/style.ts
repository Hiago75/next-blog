import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  position: relative;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Notifications = styled.span`
  position: relative;
`;

export const NotificationBall = styled.span`
  background-color: ${({ theme }) => theme.dashboard.dark.background};
  color: ${({ theme }) => theme.dashboard.dark.font.colors.white};
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
  color: ${({ theme }) => theme.dashboard.dark.font.colors.white};
`;

export const UserBar = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    margin: 0 15px;
  }
`;
