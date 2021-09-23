export const showInputError = (fieldName: string, message: string) => {
  const label = document.getElementById(fieldName);
  const input = label.querySelector('input');
  const p = document.createElement('p');

  p.innerText = message;
  p.classList.add('error-message');

  input.classList.add('form-error');
  label.appendChild(p);
};
