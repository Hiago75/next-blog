import { useContext } from 'react';
import { RequestContext } from '../contexts/RequestContext';

export const useApi = () => {
  const { setRequestOnProgress, responseStatusFactory } = useContext(RequestContext);

  function handleSubmitResponse(success: boolean, title: string, message: string) {
    setRequestOnProgress(false);
    responseStatusFactory(success, title, message);
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
      return handleSubmitResponse(false, 'Opa, algo não está certo', message);
    }

    setRequestOnProgress(false);
    window.scrollTo(0, 0);
    return handleSubmitResponse(true, 'Tudo certo', message);
  }

  //Handle normal requests
  async function createNewRequest(reqCallback) {
    setRequestOnProgress(true);

    const { error, message } = await reqCallback();
    if (error) return handleSubmitResponse(false, 'Opa, algo não está certo', message);

    setRequestOnProgress(false);
    return handleSubmitResponse(true, 'Tudo certo', message);
  }

  // Just set and remove the loading, don't show errors or anything like that
  async function createSilentRequest(reqCallback) {
    setRequestOnProgress(true);
    await reqCallback();
    setRequestOnProgress(false);
  }

  return { createNewRequest, createSilentRequest, createNewFormRequest };
};
