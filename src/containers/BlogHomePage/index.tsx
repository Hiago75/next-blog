import { PostCategory, PostData } from '../../domain/posts/post';

import { RecentPosts, SectionTitle, CategoryPosts, CategoryPostBox } from './style';
import { Spotlight, BlogHeadingTitle, BlogPostCardBox } from '../../components';

export type HomePageProps = {
  posts: PostData[];
  categories: PostCategory[];
};

export function HomePage({ posts, categories }: HomePageProps) {
  if (posts.length < 1) return <h1>As coisas parecem tão vazias por aqui...</h1>;

  return (
    <>
      <RecentPosts>
        <BlogHeadingTitle linkHref="posts/page/" linkText="Ver todos os posts">
          Posts mais recentes
        </BlogHeadingTitle>
        <Spotlight posts={posts} />
      </RecentPosts>

      <SectionTitle>Fique por dentro das novidades em...</SectionTitle>

      <CategoryPosts>
        {categories.map((category) => {
          const categoryPosts = posts.filter((post) => post.category.name === category.name);
          if (categoryPosts.length < 1) return;

          return (
            <CategoryPostBox key={category.id}>
              <BlogHeadingTitle
                linkHref={`posts/${category.name}`}
                linkText="Ver todos os posts desta categoria"
              >
                {category.name}
              </BlogHeadingTitle>
              <BlogPostCardBox posts={categoryPosts} />
            </CategoryPostBox>
          );
        })}
      </CategoryPosts>
    </>
  );
}
