import { DiscussionEmbed } from 'disqus-react';
import { APP_URL } from '../../config/app-config';
import { Container } from './style';

export type CommentsProps = {
  slug: string;
  title: string;
};

export function Comments({ slug, title }: CommentsProps) {
  return (
    <Container>
      <DiscussionEmbed
        shortname="nextblog-6"
        config={{
          url: `${APP_URL}/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
}
