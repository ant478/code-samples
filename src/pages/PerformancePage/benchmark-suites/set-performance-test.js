import uniqueId from 'lodash/uniqueId';
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
} from 'src/raw-code-samples/set-performance-test';

export default [
  {
    id: uniqueId('insert'),
    title: 'Insert',
    benchmarks: [
      {
        id: uniqueId('pushToArray'),
        title: 'pushing to array (x100)',
        maxTime: 0.5,
        fn: pushToArrayX100,
      },
      {
        id: uniqueId('unshiftToArray'),
        title: 'unshifting to array (x100)',
        maxTime: 0.5,
        fn: unshiftToArrayX100,
      },
      {
        id: uniqueId('addToSet'),
        title: 'adding to set (x100)',
        maxTime: 0.5,
        fn: addToSetX100,
      },
    ],
  },
  {
    id: uniqueId('remove'),
    title: 'Remove',
    benchmarks: [
      {
        id: uniqueId('removeFromArrayWithUnknownIndex'),
        title: 'removing from array with unknown index (x100)',
        maxTime: 0.5,
        fn: removeFromArrayWithUnknownIndexX100,
      },
      {
        id: uniqueId('removeFromArrayWithKnownIndex'),
        title: 'removing from array with known index (x100)',
        maxTime: 0.5,
        fn: removeFromArrayWithKnownIndexX100,
      },
      {
        id: uniqueId('removeFromSet'),
        title: 'removing from set (x100)',
        maxTime: 0.5,
        fn: removeFromSetX100,
      },
    ],
  },
  {
    id: uniqueId('insertAndRemove'),
    title: 'Insert + remove',
    benchmarks: [
      {
        id: uniqueId('pushAndRemoveFromArray'),
        title: 'pushing and removing from array (x100)',
        maxTime: 0.5,
        fn: pushAndRemoveFromArrayX100,
      },
      {
        id: uniqueId('addAndRemoveFromSet'),
        title: 'adding and removing from set (x100)',
        maxTime: 0.5,
        fn: addAndRemoveFromSetX100,
      },
    ],
  },
  {
    id: uniqueId('checkIfExists'),
    title: 'Checking if exists',
    benchmarks: [
      {
        id: uniqueId('checkIfExistsInArray'),
        title: 'check if exists in array (x100)',
        maxTime: 0.5,
        fn: checkIfExistsInArrayX100,
      },
      {
        id: uniqueId('checkIfExistsInSet'),
        title: 'check if exists in set (x100)',
        maxTime: 0.5,
        fn: checkIfExistsInSetX100,
      },
    ],
  },
  {
    id: uniqueId('iterating'),
    title: 'Iterating',
    benchmarks: [
      {
        id: uniqueId('iterateOverArray'),
        title: 'iterating over array (x100)',
        maxTime: 0.5,
        fn: iterateOverArrayX100,
      },
      {
        id: uniqueId('iterateOverSet'),
        title: 'iterating over set (x100)',
        maxTime: 0.5,
        fn: iterateOverSetX100,
      },
    ],
  },
  {
    id: uniqueId('gettingLength'),
    title: 'Getting length',
    benchmarks: [
      {
        id: uniqueId('getLengthOfArray'),
        title: 'getting length of array (x100)',
        maxTime: 0.5,
        fn: getLengthOfArrayX100,
      },
      {
        id: uniqueId('getSizeOfSet'),
        title: 'getting size of set set (x100)',
        maxTime: 0.5,
        fn: getSizeOfSetX100,
      },
    ],
  },
];
