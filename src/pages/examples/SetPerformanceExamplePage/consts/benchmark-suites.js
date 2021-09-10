import {
  pushToArrayX100,
  addToSetX100,
  removeFromArrayWithUnknownIndexX100,
  removeFromArrayWithKnownIndexX100,
  removeFromSetX100,
  addAndRemoveFromSetX100,
  pushAndRemoveFromArrayX100,
  readFromArrayX100,
  checkIfExistsInArrayX100,
  checkIfExistsInSetX100,
} from 'src/raw-code-samples/set-performance';

export default [
  {
    name: 'Insert',
    benchmarks: [
      {
        name: 'pushing to array (x100)',
        maxTime: 3,
        fn: pushToArrayX100,
      },
      {
        name: 'adding to set (x100)',
        maxTime: 3,
        fn: addToSetX100,
      },
    ],
  },
  {
    name: 'Remove',
    benchmarks: [
      {
        name: 'removing from array with unknown index (x100)',
        maxTime: 3,
        fn: removeFromArrayWithUnknownIndexX100,
      },
      {
        name: 'removing from array with known index (x100)',
        maxTime: 3,
        fn: removeFromArrayWithKnownIndexX100,
      },
      {
        name: 'removing from set (x100)',
        maxTime: 3,
        fn: removeFromSetX100,
      },
    ],
  },
  {
    name: 'Insert + remove',
    benchmarks: [
      {
        name: 'pushing and removing from array (x100)',
        maxTime: 3,
        fn: pushAndRemoveFromArrayX100,
      },
      {
        name: 'adding and removing from set (x100)',
        maxTime: 3,
        fn: addAndRemoveFromSetX100,
      },
    ],
  },
  {
    name: 'Reading',
    benchmarks: [
      {
        name: 'reading from array (x100)',
        maxTime: 3,
        fn: readFromArrayX100,
      },
      {
        name: 'check is exists in array (x100)',
        maxTime: 3,
        fn: checkIfExistsInArrayX100,
      },
      {
        name: 'check is exists in set (x100)',
        maxTime: 3,
        fn: checkIfExistsInSetX100,
      },
    ],
  },
];
