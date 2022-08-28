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

export function getUniqId(prefix, length = 16) {
  let id;

  do id = `${prefix}-${Math.random().toString(16).slice(2, length + 2)}`;
  while (document.getElementById(id));

  return id;
}
