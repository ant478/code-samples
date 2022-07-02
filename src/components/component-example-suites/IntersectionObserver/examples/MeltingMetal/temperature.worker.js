/* eslint-disable no-restricted-globals */

import clamp from 'lodash/clamp';
import {
  GLOWING_RANGE,
  MAX_TEMPERATURE,
  MIN_GLOWING_TEMPERATURE,
  MIN_TEMPERATURE,
} from './constants';
import { isIndexInRange } from './helpers';

const ONE_SECOND = 1000;
const FPS_INTERVAL = ONE_SECOND / 10;
const EXPECTED_FRAME_RATE = 144;

let fpsCoef = 1;
let timeMark = performance.now();
let newTact = 0;
let rangeStart;
let rangeEnd;
let isPiecePresentArray = [];
let isLiquidArray = [];
let heatRateArray = [];
let temperatureArray = [];
let glowingRangeArray = [];

function calculateFpsCoef() {
  const time = performance.now();
  newTact += 1;

  if (time - timeMark > FPS_INTERVAL) {
    const fps = (newTact / FPS_INTERVAL * ONE_SECOND);
    fpsCoef = (fps / EXPECTED_FRAME_RATE);
    newTact = 0;
    timeMark = time;
  }
}

function animate() {
  calculateFpsCoef();

  for (const [index, isPresent] of isPiecePresentArray.entries()) {
    if (!isPresent) continue;
    if (isLiquidArray[index]) continue;
    if (!isIndexInRange(index, rangeStart, rangeEnd)) continue;
    if (temperatureArray[index] === 0 && heatRateArray[index] === 0) continue;

    const glowingCoef = temperatureArray[index] > MIN_GLOWING_TEMPERATURE
      ? ((temperatureArray[index] - MIN_GLOWING_TEMPERATURE) / GLOWING_RANGE)
      : 0;

    const decrease = (0.2 + glowingCoef);
    const increase = heatRateArray[index] > 0
      ? (3 + 15 * (1 - glowingCoef)) * (heatRateArray[index])
      : 0;

    const delta = ((increase - decrease) / fpsCoef);

    glowingRangeArray[index] = ~~(glowingCoef * 10);
    temperatureArray[index] = clamp(temperatureArray[index] + delta, MIN_TEMPERATURE, MAX_TEMPERATURE);
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
    case 'setTemperatureArray':
      temperatureArray = data;
      break;
    case 'setGlowingRangeArray':
      glowingRangeArray = data;
      break;
    case 'setHeatRateArray':
      heatRateArray = data;
      break;
    case 'setIsPiecePresentArray':
      isPiecePresentArray = data;
      break;
    case 'setIsLiquidArray':
      isLiquidArray = data;
      break;
    default:
      throw new Error(`temperature-worker: unknown event "${name}"`);
  }
};
