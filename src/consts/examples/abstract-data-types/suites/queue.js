import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';

export default [
  {
    id: 'unlimited-array-queue',
    title: 'Unlimited array queue',
    type: SUITE_TYPES.codeListing,
    listing: rawCodeSamples.abstractDataTypes.queue.UnlimitedArrayQueue.toString(),
  },
  {
    id: 'limited-array-queue',
    title: 'Limited array queue',
    type: SUITE_TYPES.codeListing,
    listing: rawCodeSamples.abstractDataTypes.queue.LimitedArrayQueue.toString(),
  },
  {
    id: 'doubly-linked-list-queue',
    title: 'Doubly linked list queue',
    type: SUITE_TYPES.codeListing,
    listing: rawCodeSamples.abstractDataTypes.queue.DoublyLinkedListQueue.toString(),
  },
];
