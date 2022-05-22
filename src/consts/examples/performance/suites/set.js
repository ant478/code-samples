import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';
import { getListing } from 'src/helpers/strings';

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
        fn: rawCodeSamples.performance.set.pushToArrayX100,
        listing: getListing(rawCodeSamples.performance.set.pushToArrayX100),
      },
      {
        id: 'unshift-to-array',
        title: 'Unshift to array',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.set.unshiftToArrayX100,
        listing: getListing(rawCodeSamples.performance.set.unshiftToArrayX100),
      },
      {
        id: 'add-to-set',
        title: 'Add to set',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.set.addToSetX100,
        listing: getListing(rawCodeSamples.performance.set.addToSetX100),
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
        fn: rawCodeSamples.performance.set.removeFromArrayWithUnknownIndexX100,
        listing: getListing(rawCodeSamples.performance.set.removeFromArrayWithUnknownIndexX100),
      },
      {
        id: 'remove-from-array-with-known-index',
        title: 'Remove from array with known index',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.set.removeFromArrayWithKnownIndexX100,
        listing: getListing(rawCodeSamples.performance.set.removeFromArrayWithKnownIndexX100),
      },
      {
        id: 'remove-from-set',
        title: 'Remove from set',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.set.removeFromSetX100,
        listing: getListing(rawCodeSamples.performance.set.removeFromSetX100),
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
        fn: rawCodeSamples.performance.set.pushAndRemoveFromArrayX100,
        listing: getListing(rawCodeSamples.performance.set.pushAndRemoveFromArrayX100),
      },
      {
        id: 'add-and-delete-from-set',
        title: 'Add and delete from set',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.set.addAndRemoveFromSetX100,
        listing: getListing(rawCodeSamples.performance.set.addAndRemoveFromSetX100),
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
        fn: rawCodeSamples.performance.set.checkIfExistsInArrayX100,
        listing: getListing(rawCodeSamples.performance.set.checkIfExistsInArrayX100),
      },
      {
        id: 'check-if-exists-in-set',
        title: 'Check if exists in set',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.set.checkIfExistsInSetX100,
        listing: getListing(rawCodeSamples.performance.set.checkIfExistsInSetX100),
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
        fn: rawCodeSamples.performance.set.cycleOverArrayX100,
        listing: getListing(rawCodeSamples.performance.set.cycleOverArrayX100),
      },
      {
        id: 'iterate-over-array-with-method',
        title: 'Iterate over array with method',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.set.iterateOverArrayWithMethodX100,
        listing: getListing(rawCodeSamples.performance.set.iterateOverArrayWithMethodX100),
      },
      {
        id: 'iterate-over-array',
        title: 'Iterate over array',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.set.iterateOverArrayX100,
        listing: getListing(rawCodeSamples.performance.set.iterateOverArrayX100),
      },
      {
        id: 'iterate-over-set',
        title: 'Iterate over set',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.set.iterateOverSetX100,
        listing: getListing(rawCodeSamples.performance.set.iterateOverSetX100),
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
        fn: rawCodeSamples.performance.set.getLengthOfArrayX100,
        listing: getListing(rawCodeSamples.performance.set.getLengthOfArrayX100),
      },
      {
        id: 'get-size-of-set',
        title: 'Get size of set',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.set.getSizeOfSetX100,
        listing: getListing(rawCodeSamples.performance.set.getSizeOfSetX100),
      },
    ],
  },
];
