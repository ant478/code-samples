import { SUITE_TYPES } from 'src/consts/suite-types';
import {
  pushToArrayX100,
  unshiftToArrayX100,
  addToSetX100,
  removeFromArrayWithUnknownIndexX100,
  removeFromArrayWithKnownIndexX100,
  removeFromSetX100,
  addAndRemoveFromSetX100,
  pushAndRemoveFromArrayX100,
  checkIfExistsInArrayX100,
  checkIfExistsInSetX100,
  iterateOverArrayX100,
  iterateOverSetX100,
  getLengthOfArrayX100,
  getSizeOfSetX100,
  cycleOverArrayX100,
  iterateOverArrayWithMethodX100,
} from 'raw/performance/set';

export default [
  {
    id: 'insert',
    title: 'Insert',
    type: SUITE_TYPES.benchmark,
    benchmarks: [
      {
        id: 'push-to-array',
        title: 'Push to array',
        maxTime: 0.5,
        fn: pushToArrayX100,
      },
      {
        id: 'unshift-to-array',
        title: 'Unshift to array',
        maxTime: 0.5,
        fn: unshiftToArrayX100,
      },
      {
        id: 'add-to-set',
        title: 'Add to set',
        maxTime: 0.5,
        fn: addToSetX100,
      },
    ],
  },
  {
    id: 'remove',
    title: 'Remove',
    type: SUITE_TYPES.benchmark,
    benchmarks: [
      {
        id: 'remove-from-array-with-unknown-index',
        title: 'Remove from array with unknown index',
        maxTime: 0.5,
        fn: removeFromArrayWithUnknownIndexX100,
      },
      {
        id: 'remove-from-array-with-known-index',
        title: 'Remove from array with known index',
        maxTime: 0.5,
        fn: removeFromArrayWithKnownIndexX100,
      },
      {
        id: 'remove-from-set',
        title: 'Remove from set',
        maxTime: 0.5,
        fn: removeFromSetX100,
      },
    ],
  },
  {
    id: 'inset-and-remove',
    title: 'Insert and remove',
    type: SUITE_TYPES.benchmark,
    benchmarks: [
      {
        id: 'push-and-remove-from-array',
        title: 'Push and remove from array',
        maxTime: 0.5,
        fn: pushAndRemoveFromArrayX100,
      },
      {
        id: 'add-and-delete-from-set',
        title: 'Add and delete from set',
        maxTime: 0.5,
        fn: addAndRemoveFromSetX100,
      },
    ],
  },
  {
    id: 'check-if-exists',
    title: 'Check if exists',
    type: SUITE_TYPES.benchmark,
    benchmarks: [
      {
        id: 'check-if-exists-in-array',
        title: 'Check if exists in array',
        maxTime: 0.5,
        fn: checkIfExistsInArrayX100,
      },
      {
        id: 'check-if-exists-in-set',
        title: 'Check if exists in set',
        maxTime: 0.5,
        fn: checkIfExistsInSetX100,
      },
    ],
  },
  {
    id: 'iterating',
    title: 'Iterating',
    type: SUITE_TYPES.benchmark,
    benchmarks: [
      {
        id: 'cycle-over-array',
        title: 'Cycle over array',
        maxTime: 0.5,
        fn: cycleOverArrayX100,
      },
      {
        id: 'iterate-over-array-with-method',
        title: 'Iterate over array with method',
        maxTime: 0.5,
        fn: iterateOverArrayWithMethodX100,
      },
      {
        id: 'iterate-over-array',
        title: 'Iterate over array',
        maxTime: 0.5,
        fn: iterateOverArrayX100,
      },
      {
        id: 'iterate-over-set',
        title: 'Iterate over set',
        maxTime: 0.5,
        fn: iterateOverSetX100,
      },
    ],
  },
  {
    id: 'get-length',
    title: 'Get length',
    type: SUITE_TYPES.benchmark,
    benchmarks: [
      {
        id: 'get-length-of-array',
        title: 'Get length of array',
        maxTime: 0.5,
        fn: getLengthOfArrayX100,
      },
      {
        id: 'get-size-of-set',
        title: 'Get size of set',
        maxTime: 0.5,
        fn: getSizeOfSetX100,
      },
    ],
  },
];
