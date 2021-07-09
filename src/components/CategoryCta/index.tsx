import { CtaLink } from '../';
import { CategoryCard, Title } from './style';

type CategoryCtaProps = {
  as: string;
  href: string;
  title: string;
  children: React.ReactNode;
};

export const CategoryCta = ({ as, href, title, children }: CategoryCtaProps) => {
  return (
    <CategoryCard>
      {children}
      <Title>{title}</Title>
      <CtaLink as={as} href={href} />
    </CategoryCard>
  );
};
