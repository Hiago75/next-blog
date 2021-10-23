import { useContext } from 'react';
import { LoadingWheel } from '..';

import { RequestContext } from '../../contexts/RequestContext';
import { Button } from './style';

interface IRequestButton {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'button' | 'reset';
}

export const RequestButton = ({ children, onClick, type, className }: IRequestButton) => {
  const { requestOnProgress } = useContext(RequestContext);

  return (
    <Button className={className} type={type} onClick={onClick}>
      {requestOnProgress ? <LoadingWheel /> : children}
    </Button>
  );
};
