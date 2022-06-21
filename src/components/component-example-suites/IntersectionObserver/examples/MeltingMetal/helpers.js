import clamp from 'lodash/clamp';
import range from 'lodash/range';
import { getRgbColor } from 'src/helpers/css';
import {
  MIN_GLOWING_TEMPERATURE,
  MAX_TEMPERATURE,
  METAL_COLOR_COLD_BY_TYPE,
  GLOWING_RANGE,
  METAL_COLOR_START,
  METAL_COLOR_REST,
  ELEMENT_TYPES_COUNT,
} from './constants';

export function getDistance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

function _getMetalColorChannels(temperature) {
  const rangedTemperature = (temperature - MIN_GLOWING_TEMPERATURE);
  const rangedR = clamp(rangedTemperature, 0, 0.4 * GLOWING_RANGE);
  const rangedG = (clamp(rangedTemperature, 0.33 * GLOWING_RANGE, 0.75 * GLOWING_RANGE) - 0.33 * GLOWING_RANGE);
  const rangedB = (clamp(rangedTemperature, 0.5 * GLOWING_RANGE, GLOWING_RANGE) - 0.5 * GLOWING_RANGE);

  const coefR = (rangedR / 0.4 / GLOWING_RANGE);
  const coefG = (rangedG / 0.42 / GLOWING_RANGE);
  const coefB = (rangedB / 0.5 / GLOWING_RANGE);

  const r = Math.floor(METAL_COLOR_START + coefR * METAL_COLOR_REST);
  const g = Math.floor(METAL_COLOR_START + coefG * METAL_COLOR_REST * 0.9);
  const b = Math.floor(METAL_COLOR_START + coefB * METAL_COLOR_REST * 0.7);

  return [r - r % 2, g - g % 2, b - b % 2];
}

const precalculatedMetalColors = new Array(GLOWING_RANGE + 1);
for (let temperature = MIN_GLOWING_TEMPERATURE; temperature <= MAX_TEMPERATURE; temperature++) {
  const channels = _getMetalColorChannels(temperature);

  precalculatedMetalColors[temperature - MIN_GLOWING_TEMPERATURE] = range(ELEMENT_TYPES_COUNT)
    .map((type) => getRgbColor(channels[0] - type, channels[1] - type, channels[2] - type, channels[3]));
}

export function getMetalColor(temperature, type) {
  if (temperature <= MIN_GLOWING_TEMPERATURE) {
    return METAL_COLOR_COLD_BY_TYPE[type];
  }

  return precalculatedMetalColors[~~(temperature) - MIN_GLOWING_TEMPERATURE][type];
}
