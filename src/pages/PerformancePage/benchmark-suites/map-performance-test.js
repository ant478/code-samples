import uniqueId from 'lodash/uniqueId';
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
    id: uniqueId('read'),
    title: 'read',
    benchmarks: [
      {
        id: uniqueId('readFromObjectByKey'),
        title: 'read from object by key (x100)',
        maxTime: 0.5,
        fn: readFromObjectByKeyX100,
      },
      {
        id: uniqueId('readFromMapByKey'),
        title: 'read from map by key (x100)',
        maxTime: 0.5,
        fn: readFromMapByKeyX100,
      },
    ],
  },
  {
    id: uniqueId('insert'),
    title: 'Insert',
    benchmarks: [
      {
        id: uniqueId('setToObjectWithStringKey'),
        title: 'set to object with string key (x100)',
        maxTime: 0.5,
        fn: setToObjectWithStringKeyX100,
      },
      {
        id: uniqueId('setToObjectWithNumberKey'),
        title: 'set to object with number key (x100)',
        maxTime: 0.5,
        fn: setToObjectWithNumberKeyX100,
      },
      {
        id: uniqueId('setToMapWithStringKey'),
        title: 'set to map with string key (x100)',
        maxTime: 0.5,
        fn: setToMapWithStringKeyX100,
      },
      {
        id: uniqueId('setToMapWithNumberKey'),
        title: 'set to map with number key (x100)',
        maxTime: 0.5,
        fn: setToMapWithNumberKeyX100,
      },
    ],
  },
  {
    id: uniqueId('remove'),
    title: 'Remove',
    benchmarks: [
      {
        id: uniqueId('removeFromObject'),
        title: 'remove from object (x100)',
        maxTime: 0.5,
        fn: removeFromObjectX100,
      },
      {
        id: uniqueId('removeFromMap'),
        title: 'remove from map (x100)',
        maxTime: 0.5,
        fn: removeFromMapX100,
      },
    ],
  },
  {
    id: uniqueId('insertAndRemove'),
    title: 'Insert + remove',
    benchmarks: [
      {
        id: uniqueId('setAndRemoveFromObject'),
        title: 'insert and remove from object (x100)',
        maxTime: 0.5,
        fn: setAndRemoveFromObjectX100,
      },
      {
        id: uniqueId('setAndRemoveFromMap'),
        title: 'insert and remove from map (x100)',
        maxTime: 0.5,
        fn: setAndRemoveFromMapX100,
      },
    ],
  },
  {
    id: uniqueId('checkIfKeyExists'),
    title: 'Checking if key exists',
    benchmarks: [
      {
        id: uniqueId('checkIfKeyExistsInObjectWithInOperator'),
        title: 'check if key exists in object with "in" operator (x100)',
        maxTime: 0.5,
        fn: checkIfKeyExistsInObjectWithInOperatorX100,
      },
      {
        id: uniqueId('checkIfKeyExistsInObjectWithHasOwnPropertyMethod'),
        title: 'check if key exists in object with "hasOwnProperty" method (x100)',
        maxTime: 0.5,
        fn: checkIfKeyExistsInObjectWithHasOwnPropertyMethodX100,
      },
      {
        id: uniqueId('checkIfKeyExistsInMap'),
        title: 'check if key exists in map (x100)',
        maxTime: 0.5,
        fn: checkIfKeyExistsInMapX100,
      },
    ],
  },
  {
    id: uniqueId('checkIfValueExists'),
    title: 'Checking if value exists',
    benchmarks: [
      {
        id: uniqueId('checkIfValueExistsInObject'),
        title: 'check if value exists in object (x100)',
        maxTime: 0.5,
        fn: checkIfValueExistsInObjectX100,
      },
      {
        id: uniqueId('checkIfValueExistsInMap'),
        title: 'check if value exists in map (x100)',
        maxTime: 0.5,
        fn: checkIfValueExistsInMapX100,
      },
    ],
  },
  {
    id: uniqueId('iterating'),
    title: 'Iterating',
    benchmarks: [
      {
        id: uniqueId('iterateOverObject'),
        title: 'iterating over object (x100)',
        maxTime: 0.5,
        fn: iterateOverObjectX100,
      },
      {
        id: uniqueId('iterateOverMap'),
        title: 'iterating over map (x100)',
        maxTime: 0.5,
        fn: iterateOverMapX100,
      },
    ],
  },
  {
    id: uniqueId('gettingSize'),
    title: 'Getting size',
    benchmarks: [
      {
        id: uniqueId('gettingSizeOfObject'),
        title: 'getting size on object (x100)',
        maxTime: 0.5,
        fn: gettingSizeOfObjectX100,
      },
      {
        id: uniqueId('gettingSizeOfMap'),
        title: 'getting size of map (x100)',
        maxTime: 0.5,
        fn: gettingSizeOfMapX100,
      },
    ],
  },
];
