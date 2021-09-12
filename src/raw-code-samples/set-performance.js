const ARRAY_WITH_100_ITEMS = [
  1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
];
const SET_WITH_100_ITEMS = new Set(ARRAY_WITH_100_ITEMS);

export function pushToArrayX100() {
  const array = [];
  const set = new Set();

  for (let i = 1; i <= 100; i++) array.push(i);

  return [array, set];
}

export function addToSetX100() {
  const array = [];
  const set = new Set();

  for (let i = 1; i <= 100; i++) set.add(i);

  return [array, set];
}

export function removeFromArrayWithUnknownIndexX100() {
  const array = ARRAY_WITH_100_ITEMS.slice(0);
  const set = new Set(SET_WITH_100_ITEMS);

  for (let i = 1; i <= 100; i++) {
    const index = array.indexOf(i);

    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  return [array, set];
}

export function removeFromArrayWithKnownIndexX100() {
  const array = ARRAY_WITH_100_ITEMS.slice(0);
  const set = new Set(SET_WITH_100_ITEMS);

  for (let i = 1; i <= 100; i++) array.splice(0, 1);

  return [array, set];
}

export function removeFromSetX100() {
  const array = ARRAY_WITH_100_ITEMS.slice(0);
  const set = new Set(SET_WITH_100_ITEMS);

  for (let i = 1; i <= 100; i++) set.delete(i);

  return [array, set];
}

export function pushAndRemoveFromArrayX100() {
  const array = [];
  const set = new Set();

  for (let i = 1; i <= 100; i++) array.push(i);

  for (let i = 1; i <= 100; i++) {
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

  for (let i = 1; i <= 100; i++) set.add(i);
  for (let i = 1; i <= 100; i++) set.delete(i);

  return [array, set];
}

export function readFromArrayX100() {
  const array = ARRAY_WITH_100_ITEMS;
  const set = SET_WITH_100_ITEMS;

  const ar = [];
  for (let i = 1; i <= 100; i++) {
    ar.push(array[19]);
  }

  return [ar, array, set];
}

export function checkIfExistsInArrayX100() {
  const array = ARRAY_WITH_100_ITEMS;
  const set = SET_WITH_100_ITEMS;

  const ar = [];
  for (let i = 1; i <= 100; i++) {
    ar.push(array.indexOf(19) !== -1);
  }

  return [ar, array, set];
}

export function checkIfExistsInSetX100() {
  const array = ARRAY_WITH_100_ITEMS;
  const set = SET_WITH_100_ITEMS;

  const ar = [];
  for (let i = 1; i <= 100; i++) {
    ar.push(set.has(19));
  }

  return [ar, array, set];
}
