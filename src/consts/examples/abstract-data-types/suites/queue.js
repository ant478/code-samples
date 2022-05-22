import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';

export default [
  {
    id: 'array-queue',
    title: 'Array queue',
    type: SUITE_TYPES.codeListing,
    listing: rawCodeSamples.abstractDataTypes.queue.ArrayQueue.toString(),
  },
  {
    id: 'limited-array-queue',
    title: 'Limited array queue',
    type: SUITE_TYPES.codeListing,
    listing: rawCodeSamples.abstractDataTypes.queue.ArrayQueue.toString(),
  },
  {
    id: 'doubly-linked-list-queue',
    title: 'Doubly linked list queue',
    type: SUITE_TYPES.codeListing,
    listing: rawCodeSamples.abstractDataTypes.queue.DoublyLinkedListQueue.toString(),
  },
];
