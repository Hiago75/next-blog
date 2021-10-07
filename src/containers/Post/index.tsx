import Head from 'next/head';
import _ from 'lodash';

import { useRef, useState, useEffect } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';

import { PostData } from '../../domain/posts/post';
import { Header, MainContainer, BlogTableOC, Comments, Footer } from '../../components/';
import {
  PostPresentation,
  PostPresentationData,
  PostPresentationTitle,
  PostPresentationCategory,
  PostPresentationReadingTimeCounter,
  PostPresentationAuthor,
  PostPresentationPhoto,
  PostContentContainer,
  PostContentGuideSidebar,
  PostContentSentry,
  PostContent,
} from './style';
import { APP_NAME } from '../../config';
import { getElementTop, formatDate, readingTimeCalculator } from '../../utils';

export type PostProps = {
  post: PostData;
};

export function Post({ post }: PostProps) {
  const postContentRef = useRef<HTMLDivElement>(null);
  const postContentSidebarRef = useRef<HTMLUListElement>(null);
  const postContentSentryRef = useRef<HTMLSpanElement>(null);

  const [userReading, setUserReading] = useState(false);
  const [readingProgress, setReadingsProgress] = useState(0);

  const { title, category, author, cover, content, createdAt } = post;
  const formatedCreatedAt = formatDate(createdAt);
  const readingTime = readingTimeCalculator(content);

  //When user pass the sentry show the progressbar on header;
  function toggleProgressBar(intersectionObserverEntries: IntersectionObserverEntry[]) {
    const sentry = intersectionObserverEntries[0];
    const offset = getElementTop(sentry.target);

    if (!sentry.isIntersecting && window.scrollY > offset) {
      return setUserReading(true);
    }

    setUserReading(false);
  }

  function calculateReadingProgress() {
    const postContentEl = postContentRef.current;
    const sentryEl = postContentSentryRef.current;

    const contentOffset = getElementTop(postContentEl);
    const sentryOffset = getElementTop(sentryEl);

    if (this.scrollY < sentryOffset) return;

    const docHeight = postContentEl.clientHeight + 95;
    const windowOffset = this.scrollY - contentOffset;

    const totalDocScrollHeight = docHeight - window.innerHeight;

    const currentProgress = Math.floor((windowOffset / totalDocScrollHeight) * 100);

    if (currentProgress > 110) return;
    setReadingsProgress(currentProgress);
  }

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(toggleProgressBar, {
      root: null,
      rootMargin: '-45px',
    });
    const throttledCalculate = _.throttle(calculateReadingProgress, 65);

    window.addEventListener('scroll', throttledCalculate);

    intersectionObserver.observe(postContentSentryRef.current);

    return function cleanUpListeners() {
      window.removeEventListener('scroll', throttledCalculate);
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>
          {title} - {APP_NAME}
        </title>
      </Head>
      <Header progressBar={userReading} currentProgress={readingProgress} />

      <MainContainer>
        <PostPresentation>
          <PostPresentationPhoto>
            <img src={cover.format.medium.url} alt="Foto de capa da publicação" />
          </PostPresentationPhoto>
          <PostPresentationData>
            <div>
              <PostPresentationCategory>{category.name}</PostPresentationCategory>

              <PostPresentationTitle>{title}</PostPresentationTitle>
              <PostPresentationReadingTimeCounter>
                <AiOutlineClockCircle /> {readingTime} min de leitura
              </PostPresentationReadingTimeCounter>
            </div>

            <PostPresentationAuthor>
              Escrito por <b>{author.name}</b>, {formatedCreatedAt}
            </PostPresentationAuthor>
          </PostPresentationData>
        </PostPresentation>

        <PostContentSentry ref={postContentSentryRef}></PostContentSentry>

        <PostContentContainer id="post-content" ref={postContentRef}>
          <PostContentGuideSidebar ref={postContentSidebarRef}>
            <span>Conteúdo</span>
            <BlogTableOC isVisible={userReading} contentRef={postContentRef}></BlogTableOC>
          </PostContentGuideSidebar>

          <PostContent>{content}</PostContent>
        </PostContentContainer>

        <Comments title={post.title} slug={post.slug} />
      </MainContainer>
      <Footer />
    </>
  );
}
