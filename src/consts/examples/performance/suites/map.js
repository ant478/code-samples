import { SUITE_TYPES } from 'src/consts/suite-types';
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
} from 'raw/performance/map';

export default [
  {
    id: 'read',
    title: 'Read',
    type: SUITE_TYPES.benchmark,
    benchmarks: [
      {
        id: 'read-from-object-by-key',
        title: 'Read from object by key',
        maxTime: 0.5,
        fn: readFromObjectByKeyX100,
      },
      {
        id: 'read-from-map-by-key',
        title: 'Read from map by key',
        maxTime: 0.5,
        fn: readFromMapByKeyX100,
      },
    ],
  },
  {
    id: 'insert',
    title: 'Insert',
    type: SUITE_TYPES.benchmark,
    benchmarks: [
      {
        id: 'set-to-object-with-string-key',
        title: 'Set to object with string key',
        maxTime: 0.5,
        fn: setToObjectWithStringKeyX100,
      },
      {
        id: 'set-to-object-with-number-key',
        title: 'Set to object with number key',
        maxTime: 0.5,
        fn: setToObjectWithNumberKeyX100,
      },
      {
        id: 'set-to-map-with-string-key',
        title: 'Set to map with string key',
        maxTime: 0.5,
        fn: setToMapWithStringKeyX100,
      },
      {
        id: 'set-to-map-with-number-key',
        title: 'Set to map with number key',
        maxTime: 0.5,
        fn: setToMapWithNumberKeyX100,
      },
    ],
  },
  {
    id: 'remove',
    title: 'Remove',
    type: SUITE_TYPES.benchmark,
    benchmarks: [
      {
        id: 'remove-from-object',
        title: 'Remove from object',
        maxTime: 0.5,
        fn: removeFromObjectX100,
      },
      {
        id: 'remove-from-map',
        title: 'Remove from map',
        maxTime: 0.5,
        fn: removeFromMapX100,
      },
    ],
  },
  {
    id: 'inset-and-remove',
    title: 'Insert and remove',
    type: SUITE_TYPES.benchmark,
    benchmarks: [
      {
        id: 'assign-and-delete-from-object',
        title: 'Assign and delete from object',
        maxTime: 0.5,
        fn: setAndRemoveFromObjectX100,
      },
      {
        id: 'set-and-delete-from-map',
        title: 'Set and remove from object',
        maxTime: 0.5,
        fn: setAndRemoveFromMapX100,
      },
    ],
  },
  {
    id: 'check-if-key-exists',
    title: 'Check if key exists',
    type: SUITE_TYPES.benchmark,
    benchmarks: [
      {
        id: 'check-if-key-exists-in-object-with-in-operator',
        title: 'Check if key exists in object with "in" operator',
        maxTime: 0.5,
        fn: checkIfKeyExistsInObjectWithInOperatorX100,
      },
      {
        id: 'check-if-key-exists-in-object-with-has-own-property-method',
        title: 'Check if key exists in object with "hasOwnProperty" method',
        maxTime: 0.5,
        fn: checkIfKeyExistsInObjectWithHasOwnPropertyMethodX100,
      },
      {
        id: 'check-if-key-exists-in-map',
        title: 'Check if key exists in map',
        maxTime: 0.5,
        fn: checkIfKeyExistsInMapX100,
      },
    ],
  },
  {
    id: 'check-if-value-exists',
    title: 'Check if value exists',
    type: SUITE_TYPES.benchmark,
    benchmarks: [
      {
        id: 'check-if-value-exists-in-object',
        title: 'Check if value exists in object',
        maxTime: 0.5,
        fn: checkIfValueExistsInObjectX100,
      },
      {
        id: 'check-if-value-exists-in-map',
        title: 'Check if value exists in map',
        maxTime: 0.5,
        fn: checkIfValueExistsInMapX100,
      },
    ],
  },
  {
    id: 'iterate',
    title: 'Iterate',
    type: SUITE_TYPES.benchmark,
    benchmarks: [
      {
        id: 'iterate-over-object',
        title: 'iterating over object',
        maxTime: 0.5,
        fn: iterateOverObjectX100,
      },
      {
        id: 'iterate-over-map',
        title: 'Iterate over map',
        maxTime: 0.5,
        fn: iterateOverMapX100,
      },
    ],
  },
  {
    id: 'get-size',
    title: 'Get size',
    type: SUITE_TYPES.benchmark,
    benchmarks: [
      {
        id: 'get-size-of-object',
        title: 'Get size of object',
        maxTime: 0.5,
        fn: gettingSizeOfObjectX100,
      },
      {
        id: 'get-size-of-map',
        title: 'Get size of map',
        maxTime: 0.5,
        fn: gettingSizeOfMapX100,
      },
    ],
  },
];
