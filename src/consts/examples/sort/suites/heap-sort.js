import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';
import { getListing } from 'src/helpers/strings';

export default [
  {
    id: 'heap-sort',
    title: 'Heap sort',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.sort.heapSort),
    ],
  },
];
