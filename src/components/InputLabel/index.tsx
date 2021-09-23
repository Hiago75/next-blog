import { Label } from './style';

interface InputLabelRequest {
  panel?: boolean;
  noMargin?: boolean;
  notEditable?: boolean;
  widthPercentage?: number;
  htmlFor: string;
  id: string;
  children: React.ReactNode;
}

export const InputLabel = ({
  panel,
  noMargin,
  htmlFor,
  notEditable,
  id,
  children,
  widthPercentage = 100,
}: InputLabelRequest) => {
  const classList = classListHandler();

  function classListHandler() {
    let classList = '';

    if (panel) classList += ' onPanel';
    if (noMargin) classList += ' noMargin';
    if (notEditable) classList += ' notEditable';

    return classList;
  }

  return (
    <Label style={{ width: `${widthPercentage}%` }} className={classList} htmlFor={htmlFor} id={id}>
      {children}
    </Label>
  );
};
