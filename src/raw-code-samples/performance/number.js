import {
  getNewArrayWith100FloatNumbers as _getNewArrayWith100FloatNumbers,
} from '../helpers/dummies';

const getNewArrayWith100FloatNumbers = _getNewArrayWith100FloatNumbers;

const ARRAY_WITH_100_FLOAT_NUMBERS = getNewArrayWith100FloatNumbers();

export function mathFloorX100() {
  const results = [];

  for (let i = 0; i <= 99; i += 1) {
    const r = ARRAY_WITH_100_FLOAT_NUMBERS[i];
    results.push(Math.floor(r));
  }

  return [results];
}

export function mathTruncX100() {
  const results = [];

  for (let i = 0; i <= 99; i += 1) {
    const r = ARRAY_WITH_100_FLOAT_NUMBERS[i];
    results.push(Math.trunc(r));
  }

  return [results];
}

export function doubleBitwiseNegationX100() {
  const results = [];

  for (let i = 0; i <= 99; i += 1) {
    const r = ARRAY_WITH_100_FLOAT_NUMBERS[i];
    results.push(~~r);
  }

  return [results];
}

export function selfBitwiseOrX100() {
  const results = [];

  for (let i = 0; i <= 99; i += 1) {
    const r = ARRAY_WITH_100_FLOAT_NUMBERS[i];
    results.push(r|r);
  }

  return [results];
}

export function selfBitwiseAndX100() {
  const results = [];

  for (let i = 0; i <= 99; i += 1) {
    const r = ARRAY_WITH_100_FLOAT_NUMBERS[i];
    results.push(r&r);
  }

  return [results];
}
