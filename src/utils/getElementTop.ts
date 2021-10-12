export default function elementTopFactory(element: Element, exact?: boolean) {
  const bodyRect = document.body.getBoundingClientRect();
  const elemRect = element.getBoundingClientRect();

  const elemOffset = exact ? Math.floor(elemRect.top - bodyRect.top) : elemRect.top - bodyRect.top;

  return elemOffset;
}
