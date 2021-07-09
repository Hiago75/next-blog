import { CtaLink } from '../';
import { Container, Center, Title, TitleDivider, Posts } from './style';

type RecentPostsProps = {
  children: React.ReactNode;
};

export const RecentPosts = ({ children }: RecentPostsProps) => {
  return (
    <Container>
      <Center>
        <Title>
          Posts recentes
          <TitleDivider />
        </Title>
      </Center>

      <Posts>{children}</Posts>
      <CtaLink as="/posts/page/1" href="/posts/page/[...param]" />
    </Container>
  );
};
