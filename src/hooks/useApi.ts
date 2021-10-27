import { useContext } from 'react';
import { RequestContext } from '../contexts/RequestContext';

export const useApi = () => {
  const { setRequestOnProgress, responseStatusFactory } = useContext(RequestContext);

  function handleSubmitResponse(success: boolean, message: string) {
    setRequestOnProgress(false);
    responseStatusFactory(success, message);
  }

  //Handle form requests
  async function createNewFormRequest(reqCallback, formValidator) {
    setRequestOnProgress(true);
    const isValid = formValidator();
    if (!isValid) {
      window.scrollTo(0, 0);
      return setRequestOnProgress(false);
    }

    const { error, message } = await reqCallback();
    if (error) {
      window.scrollTo(0, 0);
      setRequestOnProgress(false);
      return handleSubmitResponse(false, message);
    }

    setRequestOnProgress(false);
    window.scrollTo(0, 0);
    return handleSubmitResponse(true, message);
  }

  //Handle normal requests
  async function createNewRequest(reqCallback) {
    setRequestOnProgress(true);

    const { error, message } = await reqCallback();
    if (error) return handleSubmitResponse(false, message);

    setRequestOnProgress(false);
    return handleSubmitResponse(true, message);
  }

  // Just set and remove the loading, don't show errors or anything like that
  async function createSilentRequest(reqCallback) {
    setRequestOnProgress(true);
    await reqCallback();
    setRequestOnProgress(false);
  }

  return { createNewRequest, createSilentRequest, createNewFormRequest };
};
