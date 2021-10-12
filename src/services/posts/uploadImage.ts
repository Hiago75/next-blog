import axios from 'axios';

export const uploadImage = async (fileToUpload: File) => {
  const formData = new FormData();

  formData.append('file', fileToUpload);
  formData.append('upload_preset', process.env.CLOUDINARY_CLOUD_PRESET);

  return axios
    .post(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/upload`, formData)
    .then((response) => {
      const responseUrl = response.data.url;

      return responseUrl;
    });
};
