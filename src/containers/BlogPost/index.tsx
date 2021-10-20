import _ from 'lodash';
import Link from 'next/link';

import { useRef, useState, useEffect, SetStateAction, Dispatch } from 'react';
import { AiFillClockCircle } from 'react-icons/ai';

import { PostData } from '../../domain/posts/post';
import { BlogTableOC, Comments } from '../../components';
import {
  PostContainer,
  PostPresentation,
  PostPresentationData,
  PostPresentationTitle,
  PostPresentationCategory,
  PostPresentationReadingTimeCounter,
  PostPresentationAuthor,
  PostPresentationPhoto,
  PostContentContainer,
  PostContentBox,
  PostContentGuideSidebar,
  PostContentSentry,
  PostContent,
  PostTags,
} from './style';
import { getElementTop, formatDate, readingTimeCalculator } from '../../utils';

export type PostProps = {
  post: PostData;
  setReadingProgress: Dispatch<SetStateAction<number>>;
};

export function Post({ post, setReadingProgress }: PostProps) {
  const postContentRef = useRef<HTMLDivElement>(null);
  const postContentSidebarRef = useRef<HTMLUListElement>(null);
  const postContentSentryRef = useRef<HTMLSpanElement>(null);

  const [userReading, setUserReading] = useState(false);

  const { title, category, author, cover, content, createdAt } = post;
  const formatedCreatedAt = formatDate(createdAt);
  const readingTime = readingTimeCalculator(content);

  //When user pass the sentry show the progressbar on header;
  function toggleProgressBar(intersectionObserverEntries: IntersectionObserverEntry[]) {
    const sentry = intersectionObserverEntries[0];
    const offset = getElementTop(sentry.target) - 39;

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
    setReadingProgress(currentProgress);
  }

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(toggleProgressBar, {
      root: null,
      rootMargin: '-45px',
    });
    const throttledCalculate = _.throttle(calculateReadingProgress, 80);

    window.addEventListener('scroll', throttledCalculate);

    intersectionObserver.observe(postContentSentryRef.current);

    return function cleanUpListeners() {
      window.removeEventListener('scroll', throttledCalculate);
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <PostContainer>
      <PostPresentation>
        <PostPresentationPhoto>
          <img src={cover.format.medium.url} alt="Foto de capa da publicação" />
        </PostPresentationPhoto>
        <PostPresentationData>
          <Link
            href={{ pathname: '/posts/[category]', query: { category: category.name } }}
            passHref
          >
            <PostPresentationCategory>{category.name}</PostPresentationCategory>
          </Link>
          <PostPresentationTitle>{title}</PostPresentationTitle>
          <PostPresentationReadingTimeCounter>
            <AiFillClockCircle /> {readingTime} minutos de leitura
          </PostPresentationReadingTimeCounter>

          <PostPresentationAuthor>
            Publicado por <b>{author.name}</b>, {formatedCreatedAt}
          </PostPresentationAuthor>
        </PostPresentationData>
      </PostPresentation>

      <PostContentSentry ref={postContentSentryRef}></PostContentSentry>

      <PostContentContainer id="post-content" ref={postContentRef}>
        <PostContentGuideSidebar ref={postContentSidebarRef}>
          <BlogTableOC isVisible={userReading} contentRef={postContentRef}></BlogTableOC>
        </PostContentGuideSidebar>

        <PostContentBox>
          <PostContent>{content}</PostContent>

          <PostTags>
            <p>Tópicos:</p>
            {post.tags?.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </PostTags>
        </PostContentBox>
      </PostContentContainer>

      <Comments title={post.title} slug={post.slug} />
    </PostContainer>
  );
}
