import {
  getNewArrayWith100Items as _getNewArrayWith100Items,
  getNewSetWith100Items as _getNewSetWith100Items,
} from '../helpers/dummies';

const getNewArrayWith100Items = _getNewArrayWith100Items;
const getNewSetWith100Items = _getNewSetWith100Items;
const ARRAY_WITH_100_ITEMS = getNewArrayWith100Items();
const SET_WITH_100_ITEMS = getNewSetWith100Items();

export function pushToArrayX100() {
  const array = [];
  const set = new Set();

  for (let i = 1; i <= 100; i += 1) array.push(i);

  return [array, set];
}

export function unshiftToArrayX100() {
  const array = [];
  const set = new Set();

  for (let i = 1; i <= 100; i += 1) array.unshift(i);

  return [array, set];
}

export function addToSetX100() {
  const array = [];
  const set = new Set();

  for (let i = 1; i <= 100; i += 1) set.add(i);

  return [array, set];
}

export function removeFromArrayWithUnknownIndexX100() {
  const array = getNewArrayWith100Items();
  const set = getNewSetWith100Items();

  for (let i = 1; i <= 100; i += 1) {
    const index = array.indexOf(i);

    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  return [array, set];
}

export function removeFromArrayWithKnownIndexX100() {
  const array = getNewArrayWith100Items();
  const set = getNewSetWith100Items();

  for (let i = 1; i <= 100; i += 1) array.splice(0, 1);

  return [array, set];
}

export function removeFromSetX100() {
  const array = getNewArrayWith100Items();
  const set = getNewSetWith100Items();

  for (let i = 1; i <= 100; i += 1) set.delete(i);

  return [array, set];
}

export function pushAndRemoveFromArrayX100() {
  const array = [];
  const set = new Set();

  for (let i = 1; i <= 100; i += 1) array.push(i);

  for (let i = 1; i <= 100; i += 1) {
    const index = array.indexOf(i);

    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  return [array, set];
}

export function addAndRemoveFromSetX100() {
  const array = [];
  const set = new Set();

  for (let i = 1; i <= 100; i += 1) set.add(i);
  for (let i = 1; i <= 100; i += 1) set.delete(i);

  return [array, set];
}

export function checkIfExistsInArrayX100() {
  const array = ARRAY_WITH_100_ITEMS;
  const set = SET_WITH_100_ITEMS;

  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    results.push(array.indexOf(19) !== -1);
  }

  return [results, array, set];
}

export function checkIfExistsInSetX100() {
  const array = ARRAY_WITH_100_ITEMS;
  const set = SET_WITH_100_ITEMS;

  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    results.push(set.has(19));
  }

  return [results, array, set];
}

export function iterateOverArrayX100() {
  const array = ARRAY_WITH_100_ITEMS;
  const set = SET_WITH_100_ITEMS;

  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    for (const item of array) {
      results.push(item);
    }
  }

  return [results, array, set];
}

export function cycleOverArrayX100() {
  const array = ARRAY_WITH_100_ITEMS;
  const set = SET_WITH_100_ITEMS;

  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    for (let g = 1; g <= array.length - 1; g += 1) {
      results.push(array[g]);
    }
  }

  return [results, array, set];
}

export function iterateOverArrayWithMethodX100() {
  const array = ARRAY_WITH_100_ITEMS;
  const set = SET_WITH_100_ITEMS;

  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    array.forEach((item) => results.push(item));
  }

  return [results, array, set];
}

export function iterateOverSetX100() {
  const array = ARRAY_WITH_100_ITEMS;
  const set = SET_WITH_100_ITEMS;

  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    for (const item of set) {
      results.push(item);
    }
  }

  return [results, array, set];
}

export function getLengthOfArrayX100() {
  const array = ARRAY_WITH_100_ITEMS;
  const set = SET_WITH_100_ITEMS;

  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    results.push(array.length);
  }

  return [results, array, set];
}

export function getSizeOfSetX100() {
  const array = ARRAY_WITH_100_ITEMS;
  const set = SET_WITH_100_ITEMS;

  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    results.push(set.size);
  }

  return [results, array, set];
}
