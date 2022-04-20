export function getElementOffsetTop(element, wrapper) {
  let offset = 0;
  let tmpElement = element;

  while (tmpElement && tmpElement !== wrapper) {
    offset += tmpElement.offsetTop;
    tmpElement = tmpElement.offsetParent;
  }

  return offset;
}
