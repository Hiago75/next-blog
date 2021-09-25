import { useEffect, useState, useContext } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';

import { RequestContext } from '../../contexts/RequestContext';
import { ITimer } from '../../interfaces/ITimer';
import { timer } from '../../utils/timer';
import { Container, SuccessBox, ProgressBar, SuccessAdvice, Advice } from './style';

export const Status = () => {
  const theme = useContext(ThemeContext);
  const { responseStatus, requestTimer, transitionTime } = useContext(RequestContext);

  const [classList, setClassList] = useState('');

  const { successful, statusText } = responseStatus;
  const activeTime = transitionTime - 400;

  function handleTimerOver() {
    setClassList('');
  }

  const [animationTimer] = useState<ITimer>(timer(handleTimerOver, activeTime));

  function handleAdviceMouseOver() {
    requestTimer.pause();
    animationTimer.pause();

    setClassList('active paused');
  }

  function handleAdviceMouseLeave() {
    requestTimer.resume();
    animationTimer.resume();

    setClassList('active');
  }

  useEffect(() => {
    setClassList('active');

    requestTimer.resume();
    animationTimer.resume();
  }, []);

  return (
    <Container className={classList}>
      <SuccessAdvice onMouseEnter={handleAdviceMouseOver} onMouseLeave={handleAdviceMouseLeave}>
        <SuccessBox>
          <ProgressBar style={{ animationDuration: `${activeTime}ms` }} />

          <Advice>
            {successful && <FaCheck color={theme.colors.successColor} size={128} />}
            {!successful && <FaTimes color={theme.colors.errorColor} size={128} />}
            <div>
              <h1>{statusText.title}</h1>
              <p>{statusText.message}</p>
            </div>
          </Advice>
        </SuccessBox>
      </SuccessAdvice>
    </Container>
  );
};
