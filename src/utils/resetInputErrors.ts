export const resetInputErrors = () => {
  const labels = document.querySelectorAll('label');
  labels.forEach((label) => {
    const errorMessage = label.querySelector('p');
    const input = label.querySelector('input');

    if (errorMessage) errorMessage.remove();
    input.classList.remove('form-error');
  });
};
