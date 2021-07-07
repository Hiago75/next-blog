import { AllPostsLink } from '../';
import { PaginationData } from '../../domain/posts/pagination';
import { Container, Center, Title, TitleDivider, Posts } from './style';

type RecentPostsProps = {
  children: React.ReactNode;
  pagination?: PaginationData;
};

export const RecentPosts = ({ children, pagination }: RecentPostsProps) => {
  return (
    <Container>
      <Center>
        <Title>
          Posts recentes
          <TitleDivider />
        </Title>
      </Center>

      <Posts>{children}</Posts>
      <AllPostsLink pagination={pagination} />
    </Container>
  );
};
