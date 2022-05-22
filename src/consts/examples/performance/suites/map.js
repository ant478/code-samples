import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';
import { getListing } from 'src/helpers/strings';

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
        fn: rawCodeSamples.performance.map.readFromObjectByKeyX100,
        listing: getListing(rawCodeSamples.performance.map.readFromObjectByKeyX100),
      },
      {
        id: 'read-from-map-by-key',
        title: 'Read from map by key',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.map.readFromMapByKeyX100,
        listing: getListing(rawCodeSamples.performance.map.readFromMapByKeyX100),
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
        fn: rawCodeSamples.performance.map.setToObjectWithStringKeyX100,
        listing: getListing(rawCodeSamples.performance.map.setToObjectWithStringKeyX100),
      },
      {
        id: 'set-to-object-with-number-key',
        title: 'Set to object with number key',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.map.setToObjectWithNumberKeyX100,
        listing: getListing(rawCodeSamples.performance.map.setToObjectWithNumberKeyX100),
      },
      {
        id: 'set-to-map-with-string-key',
        title: 'Set to map with string key',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.map.setToMapWithStringKeyX100,
        listing: getListing(rawCodeSamples.performance.map.setToMapWithStringKeyX100),
      },
      {
        id: 'set-to-map-with-number-key',
        title: 'Set to map with number key',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.map.setToMapWithNumberKeyX100,
        listing: getListing(rawCodeSamples.performance.map.setToMapWithNumberKeyX100),
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
        fn: rawCodeSamples.performance.map.removeFromObjectX100,
        listing: getListing(rawCodeSamples.performance.map.removeFromObjectX100),
      },
      {
        id: 'remove-from-map',
        title: 'Remove from map',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.map.removeFromMapX100,
        listing: getListing(rawCodeSamples.performance.map.removeFromMapX100),
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
        fn: rawCodeSamples.performance.map.setAndRemoveFromObjectX100,
        listing: getListing(rawCodeSamples.performance.map.setAndRemoveFromObjectX100),
      },
      {
        id: 'set-and-delete-from-map',
        title: 'Set and remove from object',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.map.setAndRemoveFromMapX100,
        listing: getListing(rawCodeSamples.performance.map.setAndRemoveFromMapX100),
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
        fn: rawCodeSamples.performance.map.checkIfKeyExistsInObjectWithInOperatorX100,
        listing: getListing(rawCodeSamples.performance.map.checkIfKeyExistsInObjectWithInOperatorX100),
      },
      {
        id: 'check-if-key-exists-in-object-with-has-own-property-method',
        title: 'Check if key exists in object with "hasOwnProperty" method',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.map.checkIfKeyExistsInObjectWithHasOwnPropertyMethodX100,
        listing: getListing(rawCodeSamples.performance.map.checkIfKeyExistsInObjectWithHasOwnPropertyMethodX100),
      },
      {
        id: 'check-if-key-exists-in-map',
        title: 'Check if key exists in map',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.map.checkIfKeyExistsInMapX100,
        listing: getListing(rawCodeSamples.performance.map.checkIfKeyExistsInMapX100),
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
        fn: rawCodeSamples.performance.map.checkIfValueExistsInObjectX100,
        listing: getListing(rawCodeSamples.performance.map.checkIfValueExistsInObjectX100),
      },
      {
        id: 'check-if-value-exists-in-map',
        title: 'Check if value exists in map',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.map.checkIfValueExistsInMapX100,
        listing: getListing(rawCodeSamples.performance.map.checkIfValueExistsInMapX100),
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
        fn: rawCodeSamples.performance.map.iterateOverObjectX100,
        listing: getListing(rawCodeSamples.performance.map.iterateOverObjectX100),
      },
      {
        id: 'iterate-over-map',
        title: 'Iterate over map',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.map.iterateOverMapX100,
        listing: getListing(rawCodeSamples.performance.map.iterateOverMapX100),
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
        fn: rawCodeSamples.performance.map.gettingSizeOfObjectX100,
        listing: getListing(rawCodeSamples.performance.map.gettingSizeOfObjectX100),
      },
      {
        id: 'get-size-of-map',
        title: 'Get size of map',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.map.gettingSizeOfMapX100,
        listing: getListing(rawCodeSamples.performance.map.gettingSizeOfMapX100),
      },
    ],
  },
];
