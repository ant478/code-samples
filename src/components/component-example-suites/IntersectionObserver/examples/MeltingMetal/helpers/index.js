import { ELEMENT_TYPES_COUNT } from '../constants';

const APPROXIMATE_PIECES_COUNT = 5000;

export function getDistance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

export function calculatePiecesData(viewWidth, viewHeight) {
  const approximateElementWidth = Math.sqrt((viewWidth * viewHeight) / APPROXIMATE_PIECES_COUNT);

  const colsCount = Math.floor(viewWidth / approximateElementWidth);
  const rowsCount = (Math.floor(viewHeight / approximateElementWidth) - Math.floor(viewHeight / approximateElementWidth) % ELEMENT_TYPES_COUNT + 1);
  const colWidth = (viewWidth / colsCount);
  const rowHeight = (viewHeight / rowsCount);

  return {
    colsCount,
    rowsCount,
    colWidth,
    rowHeight,
  };
}

export function getSharableTypedArray(constructor, length, baseArray) {
  const buffer = new SharedArrayBuffer(constructor.BYTES_PER_ELEMENT * length);
  const array = new constructor(buffer);

  if (baseArray) {
    array.set(baseArray.subarray(0, length));
  }

  return array;
}

export function isIndexInRange(index, rangeStart, rangeEnd) {
  if (rangeStart !== undefined && index < rangeStart) {
    return false;
  }

  if (rangeEnd !== undefined && index > rangeEnd) {
    return false;
  }

  return true;
}

export { getMetalColor } from './getMetalColor';
