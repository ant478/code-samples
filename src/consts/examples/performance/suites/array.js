import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';
import { getListing } from 'src/helpers/strings';

export default [
  {
    id: 'initiating',
    title: 'Initiating',
    type: SUITE_TYPES.benchmark,
    benchmarks: [
      {
        id: 'with-constructor',
        title: 'Create with constructor and assign items',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.array.createArrayWith100ItemsWithConstructor,
        listing: getListing(rawCodeSamples.performance.array.createArrayWith100ItemsWithConstructor),
      },
      {
        id: 'with-push',
        title: 'Create with literal and push items',
        maxTime: 0.5,
        fn: rawCodeSamples.performance.array.createArrayWith100ItemsWithPush,
        listing: getListing(rawCodeSamples.performance.array.createArrayWith100ItemsWithPush),
      },
    ],
  },
];
