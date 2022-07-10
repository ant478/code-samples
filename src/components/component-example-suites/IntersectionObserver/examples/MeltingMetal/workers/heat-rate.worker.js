/* eslint-disable no-restricted-globals */

import {
  getDistance,
  isIndexInRange,
} from '../helpers';

let isMouseDown = false;
let rangeStart;
let rangeEnd;
let isIntersectingArray = [];
let isPiecePresentArray = [];
let isLiquidArray = [];
let heatRateArray = [];
let offsetTopArray = [];
let offsetLeftArray = [];
let offsetWidthArray = [];
let offsetHeightArray = [];
let brushData = [0, 0, 1];

function animate() {
  for (const [index, isPresent] of isPiecePresentArray.entries()) {
    if (!isPresent) continue;
    if (!isIndexInRange(index, rangeStart, rangeEnd)) continue;
    if (isLiquidArray[index] || !isIntersectingArray[index] || !isMouseDown) {
      heatRateArray[index] = 0;
      continue;
    }

    const [brushPositionX, brushPositionY, brushSize] = brushData;

    const distance = getDistance(
      (offsetLeftArray[index] + (offsetWidthArray[index] >> 1)),
      (offsetTopArray[index] + (offsetHeightArray[index] >> 1)),
      (brushPositionX + brushSize),
      (brushPositionY + brushSize),
    );
    heatRateArray[index] = 3 * Math.max(0, (1.1 - distance / brushSize));
  }

  self.requestAnimationFrame(animate);
}

self.onmessage = function onmessage({ data: { name, data } }) {
  switch (name) {
    case 'run':
      self.requestAnimationFrame(animate);
      break;
    case 'setRangeStart':
      rangeStart = data;
      break;
    case 'setRangeEnd':
      rangeEnd = data;
      break;
    case 'setOffsetTopArray':
      offsetTopArray = data;
      break;
    case 'setOffsetLeftArray':
      offsetLeftArray = data;
      break;
    case 'setOffsetWidthArray':
      offsetWidthArray = data;
      break;
    case 'setOffsetHeightArray':
      offsetHeightArray = data;
      break;
    case 'setBrushData':
      brushData = data;
      break;
    case 'setHeatRateArray':
      heatRateArray = data;
      break;
    case 'setIsIntersectingArray':
      isIntersectingArray = data;
      break;
    case 'setIsPiecePresentArray':
      isPiecePresentArray = data;
      break;
    case 'setIsLiquidArray':
      isLiquidArray = data;
      break;
    case 'setIsMouseDown':
      isMouseDown = data;
      break;
    default:
      throw new Error(`temperature-worker: unknown event "${name}"`);
  }
};
