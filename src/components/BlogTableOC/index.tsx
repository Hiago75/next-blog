import Link from 'next/link';
import { useState, useEffect, MutableRefObject } from 'react';

import { Container, GuideSidebarLi, GuideSidebarLink } from './style';

interface BlogTableOCRequest {
  isVisible: boolean;
  contentRef: MutableRefObject<HTMLDivElement>;
}

type headingObject = { id: string; active: boolean; offsetTop: number };

export const BlogTableOC = ({ isVisible, contentRef }: BlogTableOCRequest) => {
  const [headingsState, setHeadingsState] = useState<Element[]>();
  const [activeHeadingId, setActiveHeadingId] = useState('');

  function createTOC() {
    const postContent = contentRef.current;
    const headings = postContent?.querySelectorAll('h1');
    const headingsList = [];

    headings?.forEach((heading) => {
      headingsList.push(heading);
    });

    if (headingsList.length < 1) return;

    setHeadingsState(headingsList);
    setActiveHeadingId(headingsList[0].id);
  }

  //TODO: Refactor

  //Component did update
  useEffect(() => {
    const postContent = contentRef.current;
    const headings = postContent?.querySelectorAll('h1, h2, h3');

    const headingsArray = Array.from(headings)?.map((heading) => heading.id);

    const headingStatus = {
      //Heading ID states
      activeHeadingId: headingsArray && headingsArray[0],
      currentHeadingIds: [],
      prevHeadingId: undefined,

      //Set the active heading ID;
      refreshActiveHeadingId: () => {
        headingStatus.activeHeadingId = headingStatus.currentHeadingIds[0];
        setActiveHeadingId(headingStatus.activeHeadingId);
      },

      //set the current element
      setHeadingsId: (headingId: string) => {
        const { refreshActiveHeadingId } = headingStatus;

        const prevItemIndex = headingsArray.indexOf(headingId) - 1;

        if (prevItemIndex !== -1) headingStatus.prevHeadingId = headingsArray[prevItemIndex];
        else headingStatus.prevHeadingId = headingsArray[0];

        !headingStatus.currentHeadingIds?.includes(headingId) &&
          headingStatus.currentHeadingIds.unshift(headingId);

        return refreshActiveHeadingId();
      },

      //Remove the current element
      removeCurrent: (heading: headingObject) => {
        const { refreshActiveHeadingId } = headingStatus;
        const currentHeadingIds = headingStatus.currentHeadingIds;
        const prevHeadingId = headingStatus.prevHeadingId;

        if (!currentHeadingIds?.includes(heading.id)) return;

        if (heading.offsetTop > window.scrollY) {
          currentHeadingIds.splice(currentHeadingIds.indexOf(heading.id));

          headingStatus.setHeadingsId(prevHeadingId);
          return refreshActiveHeadingId();
        }

        if (heading.offsetTop < window.scrollY && currentHeadingIds.length > 1) {
          const nextItemIndex = headingsArray.indexOf(heading.id) + 1;
          currentHeadingIds.splice(currentHeadingIds.indexOf(heading.id));

          return headingStatus.setHeadingsId(headingsArray[nextItemIndex]);
        }

        currentHeadingIds.splice(currentHeadingIds.indexOf(heading.id));
      },
    };

    //Thows each intersected heading into a function that handle this data
    function onIntersect(headingsIntersected: IntersectionObserverEntry[]) {
      headingsIntersected.forEach((interceptedHeading) => {
        if (!headingsArray.includes(interceptedHeading.target.id)) return false;

        const bodyRect = document.body.getBoundingClientRect();
        const elemRect = interceptedHeading.boundingClientRect;
        const offset = elemRect.top - bodyRect.top;

        const heading = {
          id: interceptedHeading.target.id,
          active: interceptedHeading.isIntersecting,
          offsetTop: offset,
        };

        if (heading.active) headingStatus.setHeadingsId(heading.id);
        else headingStatus.removeCurrent(heading);
      });
    }

    //Options to observer
    const observerOptions = { root: null, rootMargin: '0px', threshold: 1 };

    //Create a interseciton observer
    const observer = new IntersectionObserver(onIntersect, observerOptions);

    //Set items to be observed

    headings?.forEach((heading) => {
      observer.observe(heading);
    });

    //Disable the observer
    return () => observer.disconnect();
  }, [setActiveHeadingId]);

  useEffect(() => {
    createTOC();
  }, []);

  return (
    <>
      {headingsState &&
        headingsState.map((heading, index) => {
          const isActive = activeHeadingId === heading.id;

          return (
            <Container key={heading.id} className={isVisible ? 'is-visible' : undefined}>
              <GuideSidebarLi index={index} className={isActive ? 'active' : undefined}>
                <Link href={`#${heading.id}`}>
                  <GuideSidebarLink>{heading.textContent}</GuideSidebarLink>
                </Link>
              </GuideSidebarLi>
            </Container>
          );
        })}
    </>
  );
};
