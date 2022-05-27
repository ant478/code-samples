import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';
import { getListing } from 'src/helpers/strings';

export default [
  {
    id: 'binary-heap',
    title: 'Binary heap',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.dataStructures.heap.BinaryHeap),
    ],
  },
];
