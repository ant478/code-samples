import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';

export default [
  {
    id: 'singly-linked-list',
    title: 'Singly linked list',
    type: SUITE_TYPES.codeListing,
    listing: rawCodeSamples.dataStructures.linkedList.SinglyLinkedList.toString(),
  },
  {
    id: 'doubly-linked-list',
    title: 'Doubly linked list',
    type: SUITE_TYPES.codeListing,
    listing: rawCodeSamples.dataStructures.linkedList.DoublyLinkedList.toString(),
  },
];
