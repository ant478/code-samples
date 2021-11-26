import {
  readFromObjectByKeyX100,
  readFromMapByKeyX100,
  setToMapWithStringKeyX100,
  setToObjectWithStringKeyX100,
  setToMapWithNumberKeyX100,
  setToObjectWithNumberKeyX100,
  removeFromObjectX100,
  removeFromMapX100,
  setAndRemoveFromObjectX100,
  setAndRemoveFromMapX100,
  checkIfKeyExistsInObjectWithInOperatorX100,
  checkIfKeyExistsInObjectWithHasOwnPropertyMethodX100,
  checkIfKeyExistsInMapX100,
  checkIfValueExistsInObjectX100,
  checkIfValueExistsInMapX100,
  iterateOverObjectX100,
  iterateOverMapX100,
  gettingSizeOfObjectX100,
  gettingSizeOfMapX100,
} from 'src/raw-code-samples/map-performance-test';

export default [
  {
    id: 'read',
    title: 'read',
    benchmarks: [
      {
        id: 'readFromObjectByKey',
        title: 'read from object by key (x100)',
        maxTime: 0.5,
        fn: readFromObjectByKeyX100,
      },
      {
        id: 'readFromMapByKey',
        title: 'read from map by key (x100)',
        maxTime: 0.5,
        fn: readFromMapByKeyX100,
      },
    ],
  },
  {
    id: 'insert',
    title: 'Insert',
    benchmarks: [
      {
        id: 'setToObjectWithStringKey',
        title: 'set to object with string key (x100)',
        maxTime: 0.5,
        fn: setToObjectWithStringKeyX100,
      },
      {
        id: 'setToObjectWithNumberKey',
        title: 'set to object with number key (x100)',
        maxTime: 0.5,
        fn: setToObjectWithNumberKeyX100,
      },
      {
        id: 'setToMapWithStringKey',
        title: 'set to map with string key (x100)',
        maxTime: 0.5,
        fn: setToMapWithStringKeyX100,
      },
      {
        id: 'setToMapWithNumberKey',
        title: 'set to map with number key (x100)',
        maxTime: 0.5,
        fn: setToMapWithNumberKeyX100,
      },
    ],
  },
  {
    id: 'remove',
    title: 'Remove',
    benchmarks: [
      {
        id: 'removeFromObject',
        title: 'remove from object (x100)',
        maxTime: 0.5,
        fn: removeFromObjectX100,
      },
      {
        id: 'removeFromMap',
        title: 'remove from map (x100)',
        maxTime: 0.5,
        fn: removeFromMapX100,
      },
    ],
  },
  {
    id: 'insertAndRemove',
    title: 'Insert + remove',
    benchmarks: [
      {
        id: 'setAndRemoveFromObject',
        title: 'insert and remove from object (x100)',
        maxTime: 0.5,
        fn: setAndRemoveFromObjectX100,
      },
      {
        id: 'setAndRemoveFromMap',
        title: 'insert and remove from map (x100)',
        maxTime: 0.5,
        fn: setAndRemoveFromMapX100,
      },
    ],
  },
  {
    id: 'checkIfKeyExists',
    title: 'Checking if key exists',
    benchmarks: [
      {
        id: 'checkIfKeyExistsInObjectWithInOperator',
        title: 'check if key exists in object with "in" operator (x100)',
        maxTime: 0.5,
        fn: checkIfKeyExistsInObjectWithInOperatorX100,
      },
      {
        id: 'checkIfKeyExistsInObjectWithHasOwnPropertyMethod',
        title: 'check if key exists in object with "hasOwnProperty" method (x100)',
        maxTime: 0.5,
        fn: checkIfKeyExistsInObjectWithHasOwnPropertyMethodX100,
      },
      {
        id: 'checkIfKeyExistsInMap',
        title: 'check if key exists in map (x100)',
        maxTime: 0.5,
        fn: checkIfKeyExistsInMapX100,
      },
    ],
  },
  {
    id: 'checkIfValueExists',
    title: 'Checking if value exists',
    benchmarks: [
      {
        id: 'checkIfValueExistsInObject',
        title: 'check if value exists in object (x100)',
        maxTime: 0.5,
        fn: checkIfValueExistsInObjectX100,
      },
      {
        id: 'checkIfValueExistsInMap',
        title: 'check if value exists in map (x100)',
        maxTime: 0.5,
        fn: checkIfValueExistsInMapX100,
      },
    ],
  },
  {
    id: 'iterating',
    title: 'Iterating',
    benchmarks: [
      {
        id: 'iterateOverObject',
        title: 'iterating over object (x100)',
        maxTime: 0.5,
        fn: iterateOverObjectX100,
      },
      {
        id: 'iterateOverMap',
        title: 'iterating over map (x100)',
        maxTime: 0.5,
        fn: iterateOverMapX100,
      },
    ],
  },
  {
    id: 'gettingSize',
    title: 'Getting size',
    benchmarks: [
      {
        id: 'gettingSizeOfObject',
        title: 'getting size on object (x100)',
        maxTime: 0.5,
        fn: gettingSizeOfObjectX100,
      },
      {
        id: 'gettingSizeOfMap',
        title: 'getting size of map (x100)',
        maxTime: 0.5,
        fn: gettingSizeOfMapX100,
      },
    ],
  },
];
