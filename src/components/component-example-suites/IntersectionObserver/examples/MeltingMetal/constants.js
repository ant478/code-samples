import { getRgbColor } from 'src/helpers/css';
import range from 'lodash/range';

export const MIN_TEMPERATURE = 0;
export const MIN_GLOWING_TEMPERATURE = 500;
export const MAX_TEMPERATURE = 1500;
export const MIN_LIQUID_TEMPERATURE = 1350;
export const GLOWING_RANGE = (MAX_TEMPERATURE - MIN_GLOWING_TEMPERATURE);

export const ELEMENT_TYPES_COUNT = 2;
export const METAL_COLOR_START = 45;
export const METAL_COLOR_REST = (255 - METAL_COLOR_START);
export const METAL_COLOR_COLD_BY_TYPE = range(ELEMENT_TYPES_COUNT)
  .map((type) => getRgbColor(METAL_COLOR_START - type, METAL_COLOR_START - type, METAL_COLOR_START - type));
