import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  height: 70px;
  position: fixed;
  z-index: 3;
  align-items: center;
  width: calc(100% - 190px);
  background-color: ${({ theme }) => theme.colors.mainBackground};
`;

// User info
export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

// Notifications
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

  p {
    position: relative;
    top: 1px;
  }
`;

export const Notification = styled.div`
  ${({ theme }) => css`
    flex-direction: row;
    margin: 5px 0;
    width: 100%;
    display: none;
    padding: 15px 10px;
    position: relative;

    &:hover {
      background-color: ${theme.fonts.contrastFont};
      cursor: pointer;
      border-radius: 10px;
    }
  `}
`;

export const NotificationBox = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 75px;
    border-radius: 20px;
    right: 50px;
    background-color: ${theme.colors.alternativeBackground};
    height: 0;
    overflow-y: auto;
    width: 300px;
    transition: height 0.2s ease-in-out;

    h1 {
      display: none;
      font-size: 23px;
      margin-bottom: 10px;
      color: ${theme.fonts.primaryFont};
    }

    p {
      font-size: 17px;
      font-weight: normal;
      color: ${theme.fonts.smothFont};
    }

    /* Responsive */
    @media (max-width: 900px) {
      right: unset;
      left: 0;
      top: 70px;
      border-radius: 0;
      width: 100vw;
    }

    &.open {
      height: 400px;
      padding: 15px 10px;
      -webkit-box-shadow: 0px 8px 12px -1px rgba(0, 0, 0, 0.35);
      box-shadow: 0px 8px 12px -1px rgba(0, 0, 0, 0.35);
      h1 {
        display: block;
      }

      @media (max-width: 900px) {
        height: 100vh;

        h1 {
          text-align: center;
        }
      }

      ${Notification} {
        display: flex;
        flex-wrap: wrap;
      }
    }
  `}
`;

export const NotificationText = styled.div`
  ${({ theme }) => css`
    width: 85%;
    color: ${theme.fonts.primaryFont};

    h2 {
      font-size: 17px;
      font-weight: normal;
    }

    & .notification-date {
      font-size: 13px;
      color: ${theme.fonts.smothFont};
    }
  `}
`;

export const NotificationStatus = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 10%;
`;

export const NotificationNotVisualized = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.contrastColor};
  border-radius: 50%;
`;

//Message
export const Message = styled.p`
  padding: 0 30px;
  font-weight: bolder;
  font-size: 26px;
  color: ${({ theme }) => theme.fonts.primaryFont};
`;

// User bar
export const UserBar = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    margin: 0 15px;
  }
`;

export const UserImageBox = styled.div`
  margin-left: 30px;
`;
