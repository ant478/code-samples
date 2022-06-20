export function getElementOffsets(element, wrapper) {
  let offsetTop = 0;
  let offsetLeft = 0;
  let tmpElement = element;

  while (tmpElement && tmpElement !== wrapper) {
    offsetTop += tmpElement.offsetTop;
    offsetLeft += tmpElement.offsetLeft;
    tmpElement = tmpElement.offsetParent;
  }

  return [offsetLeft, offsetTop];
}
