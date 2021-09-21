import styled from 'styled-components';

export const EditUserImage = styled.span`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -1px;
  border-radius: 50%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9) 5%,
    rgba(0, 1, 1, 0.75) 15%,
    rgba(0, 8, 10, 0.55) 30%,
    rgba(0, 15, 18, 0) 100%
  );
  cursor: pointer;
`;

export const Container = styled.div`
  position: relative;

  & img,
  svg.icon-image {
    margin: 0;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.alternativeBackground};
    height: 100%;
  }

  &:hover {
    ${EditUserImage} {
      display: inline-block;
    }
  }
`;

export const EditUserImageText = styled.div`
  color: #ffffff;
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  text-align: center;
  font-size: 17px;

  p {
    display: block;
  }
`;
