import { useContext } from 'react';

import { RequestContext } from '../../contexts/RequestContext';
import { uploadImage } from '../../services';
import { TextEditor } from './style';

interface PostEditorRequest {
  onChange: (value: () => string) => void;
  defaultValue?: string;
}

export const PostEditor = ({ defaultValue, onChange }: PostEditorRequest) => {
  const { setLoading } = useContext(RequestContext);

  return (
    <TextEditor
      uploadImage={async (fileToUpload) => uploadImage(fileToUpload)}
      onImageUploadStart={() => setLoading(true)}
      onImageUploadStop={() => setLoading(false)}
      placeholder="Escreva algo legal... Se não souber por onde começar aperte '/'"
      dark={true}
      className="edit-text"
      onChange={onChange}
      defaultValue={defaultValue}
    />
  );
};
