import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';
import { getListing } from 'src/helpers/strings';

export default [
  {
    id: 'number-truncation',
    title: 'Number truncation',
    type: SUITE_TYPES.benchmark,
    benchmarks: [
      {
        id: 'math-floor',
        title: 'Math.floor',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.number.mathFloorX100,
        listing: getListing(rawCodeSamples.performance.number.mathFloorX100),
      },
      {
        id: 'math-trunk',
        title: 'Math.trunk',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.number.mathTruncX100,
        listing: getListing(rawCodeSamples.performance.number.mathTruncX100),
      },
      {
        id: 'double-bitwise-negation',
        title: 'Double bitwise negation',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.number.doubleBitwiseNegationX100,
        listing: getListing(rawCodeSamples.performance.number.doubleBitwiseNegationX100),
      },
      {
        id: 'self-bitwise-or',
        title: 'Self bitwise OR',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.number.selfBitwiseOrX100,
        listing: getListing(rawCodeSamples.performance.number.selfBitwiseOrX100),
      },
      {
        id: 'self-bitwise-and',
        title: 'Self bitwise AND',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.number.selfBitwiseAndX100,
        listing: getListing(rawCodeSamples.performance.number.selfBitwiseAndX100),
      },
    ],
  },
];
