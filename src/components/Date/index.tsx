import { formatDate } from '../../utils/format-date';
import { Container } from './style';

export type DateProps = {
  date: string;
};

export const Date = ({ date }: DateProps) => {
  return <Container>{formatDate(date)}</Container>;
};
