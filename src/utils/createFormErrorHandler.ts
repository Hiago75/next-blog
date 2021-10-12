export default function createFormErrorHandler() {
  let error = false;

  function createInputError(fieldId: string, message: string) {
    const errors = [];
    const label = document.getElementById(fieldId);
    const input = label.querySelector('input');
    const p = document.createElement('p');

    p.innerText = message;
    p.classList.add('error-message');

    input.classList.add('form-error');
    label.appendChild(p);

    errors.push(message);
    if (errors.length > 0) error = true;
  }

  function resetInputErrors() {
    const labels = document.querySelectorAll('label');
    labels.forEach((label) => {
      const errorMessage = label.querySelector('p');
      const input = label.querySelector('input');

      if (errorMessage) errorMessage.remove();
      if (input) input.classList.remove('form-error');
    });
  }

  return { createInputError, resetInputErrors, error };
}
