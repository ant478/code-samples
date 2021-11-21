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
  iterateOverArrayX100,
  iterateOverSetX100,
  getLengthOfArrayX100,
  getSizeOfSetX100,
} from 'src/raw-code-samples/set-performance';

export default {
  insert: {
    name: 'Insert',
    benchmarks: {
      pushToArrayX100: {
        name: 'pushing to array (x100)',
        maxTime: 3,
        fn: pushToArrayX100,
      },
      addToSetX100: {
        name: 'adding to set (x100)',
        maxTime: 3,
        fn: addToSetX100,
      },
    },
  },
  remove: {
    name: 'Remove',
    benchmarks: {
      removeFromArrayWithUnknownIndexX100: {
        name: 'removing from array with unknown index (x100)',
        maxTime: 3,
        fn: removeFromArrayWithUnknownIndexX100,
      },
      removeFromArrayWithKnownIndexX100: {
        name: 'removing from array with known index (x100)',
        maxTime: 3,
        fn: removeFromArrayWithKnownIndexX100,
      },
      removeFromSetX100: {
        name: 'removing from set (x100)',
        maxTime: 3,
        fn: removeFromSetX100,
      },
    },
  },
  insertAndRemove: {
    name: 'Insert + remove',
    benchmarks: {
      pushAndRemoveFromArrayX100: {
        name: 'pushing and removing from array (x100)',
        maxTime: 3,
        fn: pushAndRemoveFromArrayX100,
      },
      addAndRemoveFromSetX100: {
        name: 'adding and removing from set (x100)',
        maxTime: 3,
        fn: addAndRemoveFromSetX100,
      },
    },
  },
  reading: {
    name: 'Reading',
    benchmarks: {
      readFromArrayX100: {
        name: 'reading from array (x100)',
        maxTime: 3,
        fn: readFromArrayX100,
      },
      checkIfExistsInArrayX100: {
        name: 'check is exists in array (x100)',
        maxTime: 3,
        fn: checkIfExistsInArrayX100,
      },
      checkIfExistsInSetX100: {
        name: 'check is exists in set (x100)',
        maxTime: 3,
        fn: checkIfExistsInSetX100,
      },
    },
  },
  iterating: {
    name: 'Iterating',
    benchmarks: {
      iterateOverArrayX100: {
        name: 'iterating over array (x100)',
        maxTime: 3,
        fn: iterateOverArrayX100,
      },
      iterateOverSetX100: {
        name: 'iterating over set (x100)',
        maxTime: 3,
        fn: iterateOverSetX100,
      },
    },
  },
  gettingLength: {
    name: 'Getting length',
    benchmarks: {
      getLengthOfArrayX100: {
        name: 'getting length of array (x100)',
        maxTime: 3,
        fn: getLengthOfArrayX100,
      },
      getSizeOfSetX100: {
        name: 'getting size of set set (x100)',
        maxTime: 3,
        fn: getSizeOfSetX100,
      },
    },
  },
};
