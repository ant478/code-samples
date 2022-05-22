import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';
import { getListing } from 'src/helpers/strings';

export default [
  {
    id: 'array-queue',
    title: 'Array queue',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.abstractDataTypes.queue.ArrayQueue),
    ],
  },
  {
    id: 'limited-array-queue',
    title: 'Limited array queue',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.abstractDataTypes.queue.LimitedArrayQueue),
    ],
  },
  {
    id: 'doubly-linked-list-queue',
    title: 'Doubly linked list queue',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.abstractDataTypes.queue.DoublyLinkedListQueue),
    ],
  },
];
