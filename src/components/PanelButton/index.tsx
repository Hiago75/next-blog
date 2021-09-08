import { AdminButton } from './style';

interface PanelButtonProps {
  type?: 'submit' | 'button' | 'reset';
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export const PanelButton = ({ type, className, onClick, children }: PanelButtonProps) => {
  return (
    <AdminButton onClick={onClick} type={type} className={className}>
      {children}
    </AdminButton>
  );
};
