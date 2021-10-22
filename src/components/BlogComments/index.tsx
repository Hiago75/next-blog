import { DiscussionEmbed } from 'disqus-react';
import { Container } from './style';

export type CommentsProps = {
  slug: string;
  title: string;
};

export function Comments({ slug, title }: CommentsProps) {
  let APP_URL: string;

  if (typeof window !== 'undefined') {
    APP_URL = window.location.hostname;
  }

  return (
    <Container>
      <DiscussionEmbed
        shortname="blog-colster"
        config={{
          url: `https://${APP_URL}/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
}
