import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';
import { getListing } from 'src/helpers/strings';

export default [
  {
    id: 'singly-linked-list',
    title: 'Singly linked list',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.dataStructures.linkedList.SinglyLinkedList),
    ],
  },
  {
    id: 'doubly-linked-list',
    title: 'Doubly linked list',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.dataStructures.linkedList.DoublyLinkedList),
    ],
  },
];
