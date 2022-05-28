import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';
import { getListing } from 'src/helpers/strings';

export default [
  {
    id: 'binary-heap-priority-queue',
    title: 'Binary heap priority queue',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.abstractDataTypes.priorityQueue.BinaryHeapPriorityQueue),
    ],
  },
  {
    id: 'sorted-array-priority-queue',
    title: 'Sorted array priority queue',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.abstractDataTypes.priorityQueue.SortedArrayPriorityQueue),
    ],
  },
];
