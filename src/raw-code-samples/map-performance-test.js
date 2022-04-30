import {
  getNewObjectWith100Items as _getNewObjectWith100Items,
  getNewMapWith100Items as _getNewMapWith100Items,
} from './helpers/dummies';

// putting function to variable to prevent it displaying as 'WEBPACK_IMPORTED_MODULE_...' in .toString()
const getNewObjectWith100Items = _getNewObjectWith100Items;
const getNewMapWith100Items = _getNewMapWith100Items;
const OBJECT_WITH_100_ITEMS = getNewObjectWith100Items();
const MAP_WITH_100_ITEMS = getNewMapWith100Items();

export function readFromObjectByKeyX100() {
  const object = OBJECT_WITH_100_ITEMS;
  const map = MAP_WITH_100_ITEMS;

  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    results.push(object[i.toString()]);
  }

  return [object, map, results];
}

export function readFromMapByKeyX100() {
  const object = OBJECT_WITH_100_ITEMS;
  const map = MAP_WITH_100_ITEMS;

  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    results.push(map.get(i.toString()));
  }

  return [object, map, results];
}

export function setToObjectWithStringKeyX100() {
  const object = {};
  const map = new Map();
  const keys = [];

  for (let i = 1; i <= 100; i += 1) {
    const key = i.toString();
    keys.push(key);

    object[key] = i;
  }

  return [object, map, keys];
}

export function setToMapWithStringKeyX100() {
  const object = {};
  const map = new Map();
  const keys = [];

  for (let i = 1; i <= 100; i += 1) {
    const key = i.toString();
    keys.push(key);

    map.set(key, i);
  }

  return [object, map, keys];
}

export function setToObjectWithNumberKeyX100() {
  const object = {};
  const map = new Map();
  const keys = [];

  for (let i = 1; i <= 100; i += 1) {
    const key = i.toString();
    keys.push(key);

    object[i] = i;
  }

  return [object, map, keys];
}

export function setToMapWithNumberKeyX100() {
  const object = {};
  const map = new Map();
  const keys = [];

  for (let i = 1; i <= 100; i += 1) {
    const key = i.toString();
    keys.push(key);

    map.set(i, i);
  }

  return [object, map, keys];
}

export function removeFromObjectX100() {
  const object = getNewObjectWith100Items();
  const map = getNewMapWith100Items();

  for (let i = 1; i <= 100; i += 1) {
    const key = i.toString();

    delete object[key];
  }

  return [object, map];
}

export function removeFromMapX100() {
  const object = getNewObjectWith100Items();
  const map = getNewMapWith100Items();

  for (let i = 1; i <= 100; i += 1) {
    const key = i.toString();

    map.delete(key);
  }

  return [object, map];
}

export function setAndRemoveFromObjectX100() {
  const object = {};
  const map = new Map();

  for (let i = 1; i <= 100; i += 1) {
    const key = i.toString();

    object[key] = i;
  }

  for (let i = 1; i <= 100; i += 1) {
    const key = i.toString();

    delete object[key];
  }

  return [object, map];
}

export function setAndRemoveFromMapX100() {
  const object = {};
  const map = new Map();

  for (let i = 1; i <= 100; i += 1) {
    const key = i.toString();

    map.set(key, i);
  }

  for (let i = 1; i <= 100; i += 1) {
    const key = i.toString();

    map.delete(key);
  }

  return [object, map];
}

export function checkIfKeyExistsInObjectWithInOperatorX100() {
  const object = OBJECT_WITH_100_ITEMS;
  const map = MAP_WITH_100_ITEMS;

  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    const key = i.toString();

    results.push(key in object);
  }

  return [object, map, results];
}

export function checkIfKeyExistsInObjectWithHasOwnPropertyMethodX100() {
  const object = OBJECT_WITH_100_ITEMS;
  const map = MAP_WITH_100_ITEMS;

  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    const key = i.toString();

    results.push(Object.prototype.hasOwnProperty.call(object, key));
  }

  return [object, map, results];
}

export function checkIfKeyExistsInMapX100() {
  const object = OBJECT_WITH_100_ITEMS;
  const map = MAP_WITH_100_ITEMS;

  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    const key = i.toString();

    map.has(key);
  }

  return [object, map, results];
}

export function checkIfValueExistsInObjectX100() {
  const object = OBJECT_WITH_100_ITEMS;
  const map = MAP_WITH_100_ITEMS;

  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key) && object[key] === 50) {
        results.push(true);
        break;
      }
    }
  }

  return [object, map, results];
}

export function checkIfValueExistsInMapX100() {
  const object = OBJECT_WITH_100_ITEMS;
  const map = MAP_WITH_100_ITEMS;

  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    for (const value of map.values()) {
      if (value === 50) {
        results.push(true);
        break;
      }
    }
  }

  return [object, map, results];
}

export function iterateOverObjectX100() {
  const object = OBJECT_WITH_100_ITEMS;
  const map = MAP_WITH_100_ITEMS;

  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        results.push(object[key]);
      }
    }
  }

  return [object, map, results];
}

export function iterateOverMapX100() {
  const object = OBJECT_WITH_100_ITEMS;
  const map = MAP_WITH_100_ITEMS;

  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    for (const item of map.values()) {
      results.push(item);
    }
  }

  return [object, map, results];
}

export function gettingSizeOfObjectX100() {
  const object = OBJECT_WITH_100_ITEMS;
  const map = MAP_WITH_100_ITEMS;

  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    results.push(Object.keys(object).length);
  }

  return [object, map, results];
}

export function gettingSizeOfMapX100() {
  const object = OBJECT_WITH_100_ITEMS;
  const map = MAP_WITH_100_ITEMS;

  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    results.push(map.size);
  }

  return [object, map, results];
}
