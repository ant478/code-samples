import { SUITE_TYPES } from 'src/consts/suite-types';
import UnlimitedArrayQueue from 'raw/abstract-data-types/queue/UnlimitedArrayQueue';
import LimitedArrayQueue from 'raw/abstract-data-types/queue/LimitedArrayQueue';
import DoublyLinkedListQueue from 'raw/abstract-data-types/queue/DoublyLinkedListQueue';

export default [
  {
    id: 'unlimited-array-queue',
    title: 'Unlimited array queue',
    type: SUITE_TYPES.codeListing,
    listing: UnlimitedArrayQueue.toString(),
  },
  {
    id: 'limited-array-queue',
    title: 'Limited array queue',
    type: SUITE_TYPES.codeListing,
    listing: LimitedArrayQueue.toString(),
  },
  {
    id: 'doubly-linked-list-queue',
    title: 'Doubly linked list queue',
    type: SUITE_TYPES.codeListing,
    listing: DoublyLinkedListQueue.toString(),
  },
];
