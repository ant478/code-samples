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
    id: 'insert',
    title: 'Insert',
    benchmarks: [
      {
        id: 'pushToArray',
        title: 'pushing to array (x100)',
        maxTime: 0.5,
        fn: pushToArrayX100,
      },
      {
        id: 'unshiftToArray',
        title: 'unshifting to array (x100)',
        maxTime: 0.5,
        fn: unshiftToArrayX100,
      },
      {
        id: 'addToSet',
        title: 'adding to set (x100)',
        maxTime: 0.5,
        fn: addToSetX100,
      },
    ],
  },
  {
    id: 'remove',
    title: 'Remove',
    benchmarks: [
      {
        id: 'removeFromArrayWithUnknownIndex',
        title: 'removing from array with unknown index (x100)',
        maxTime: 0.5,
        fn: removeFromArrayWithUnknownIndexX100,
      },
      {
        id: 'removeFromArrayWithKnownIndex',
        title: 'removing from array with known index (x100)',
        maxTime: 0.5,
        fn: removeFromArrayWithKnownIndexX100,
      },
      {
        id: 'removeFromSet',
        title: 'removing from set (x100)',
        maxTime: 0.5,
        fn: removeFromSetX100,
      },
    ],
  },
  {
    id: 'insertAndRemove',
    title: 'Insert + remove',
    benchmarks: [
      {
        id: 'pushAndRemoveFromArray',
        title: 'pushing and removing from array (x100)',
        maxTime: 0.5,
        fn: pushAndRemoveFromArrayX100,
      },
      {
        id: 'addAndRemoveFromSet',
        title: 'adding and removing from set (x100)',
        maxTime: 0.5,
        fn: addAndRemoveFromSetX100,
      },
    ],
  },
  {
    id: 'checkIfExists',
    title: 'Checking if exists',
    benchmarks: [
      {
        id: 'checkIfExistsInArray',
        title: 'check if exists in array (x100)',
        maxTime: 0.5,
        fn: checkIfExistsInArrayX100,
      },
      {
        id: 'checkIfExistsInSet',
        title: 'check if exists in set (x100)',
        maxTime: 0.5,
        fn: checkIfExistsInSetX100,
      },
    ],
  },
  {
    id: 'iterating',
    title: 'Iterating',
    benchmarks: [
      {
        id: 'iterateOverArray',
        title: 'iterating over array (x100)',
        maxTime: 0.5,
        fn: iterateOverArrayX100,
      },
      {
        id: 'iterateOverSet',
        title: 'iterating over set (x100)',
        maxTime: 0.5,
        fn: iterateOverSetX100,
      },
    ],
  },
  {
    id: 'gettingLength',
    title: 'Getting length',
    benchmarks: [
      {
        id: 'getLengthOfArray',
        title: 'getting length of array (x100)',
        maxTime: 0.5,
        fn: getLengthOfArrayX100,
      },
      {
        id: 'getSizeOfSet',
        title: 'getting size of set set (x100)',
        maxTime: 0.5,
        fn: getSizeOfSetX100,
      },
    ],
  },
];
