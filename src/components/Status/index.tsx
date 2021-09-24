import { useEffect, useState, useContext } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { RequestContext } from '../../contexts/RequestContext';
import { timer } from '../../utils/timer';

import { Container, SuccessBox, ProgressBar, SuccessAdvice, Advice } from './style';

interface IStatusRequest {
  success?: boolean;
  title: string;
  message: string;
}

export const Status = ({ success, title, message }: IStatusRequest) => {
  const { requestTimer, transitionTime } = useContext(RequestContext);
  const [classList, setClassList] = useState('');

  const activeTime = transitionTime - 400;

  const [animationTimer] = useState(timer(() => setClassList(''), activeTime));

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

    animationTimer.resume();
  }, []);

  return (
    <Container className={classList}>
      <SuccessAdvice onMouseEnter={handleAdviceMouseOver} onMouseLeave={handleAdviceMouseLeave}>
        <SuccessBox>
          <ProgressBar style={{ animationDuration: `${activeTime}ms` }} />

          <Advice>
            {success && <FaCheck color="#22b479" size={128} />}
            {!success && <FaTimes color="#aa2020" size={128} />}
            <div>
              <h1>{title}</h1>
              <p>{message}</p>
            </div>
          </Advice>
        </SuccessBox>
      </SuccessAdvice>
    </Container>
  );
};
