import Head from 'next/head';

import { useRef } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';

import { PostData } from '../../domain/posts/post';
import { Header, MainContainer, BlogTableOC, Comments, Footer } from '../../components/';
import {
  PostPresentation,
  PostPresentationData,
  PostPresentationTitle,
  PostPresentationCategory,
  PostPresentationAuthor,
  PostPresentationPhoto,
  PostContentContainer,
  PostContentGuideSidebar,
  PostContent,
} from './style';
import { APP_NAME } from '../../config';
import { formatDate } from '../../utils/format-date';
import readingTimeCalculator from '../../utils/readingTimeCalculator';

export type PostProps = {
  post: PostData;
};

export function Post({ post }: PostProps) {
  const postContentRef = useRef<HTMLDivElement>(null);
  const postContentSidebarRef = useRef<HTMLUListElement>(null);

  const { title, category, author, cover, content, createdAt } = post;
  const formatedCreatedAt = formatDate(createdAt);
  const readingTime = readingTimeCalculator(content);

  return (
    <>
      <Head>
        <title>
          {title} - {APP_NAME}
        </title>
      </Head>
      <Header />

      <MainContainer>
        <span id="bosts" style={{ display: 'inline-block', height: '50px', width: '150px' }}></span>
        <PostPresentation>
          <PostPresentationData>
            <div>
              <PostPresentationCategory>
                <b>{category.name}</b> | <AiOutlineClockCircle /> {readingTime} min de leitura
              </PostPresentationCategory>

              <PostPresentationTitle>{title}</PostPresentationTitle>
            </div>

            <PostPresentationAuthor>
              Escrito por <b>{author.name}</b>, {formatedCreatedAt}
            </PostPresentationAuthor>
          </PostPresentationData>
          <PostPresentationPhoto>
            <img src={cover.format.medium.url} alt="Foto de capa da publicação" />
          </PostPresentationPhoto>
        </PostPresentation>

        <PostContentContainer id="post-content" ref={postContentRef}>
          <PostContentGuideSidebar ref={postContentSidebarRef}>
            <BlogTableOC contentRef={postContentRef}></BlogTableOC>
          </PostContentGuideSidebar>
          <PostContent>{content}</PostContent>
        </PostContentContainer>

        <Comments title={post.title} slug={post.slug} />
      </MainContainer>
      <Footer />
    </>
  );
}
