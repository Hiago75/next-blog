import { Label } from './style';

interface InputLabelRequest {
  panel?: boolean;
  noMargin?: boolean;
  widthPercentage?: number;
  htmlFor: string;
  id: string;
  children: React.ReactNode;
}

export const InputLabel = ({
  panel,
  noMargin,
  htmlFor,
  id,
  children,
  widthPercentage = 100,
}: InputLabelRequest) => {
  return (
    <Label
      style={{ width: `${widthPercentage}%` }}
      className={panel ? 'onPanel' : '' || noMargin ? 'noMargin' : ''}
      htmlFor={htmlFor}
      id={id}
    >
      {children}
    </Label>
  );
};
