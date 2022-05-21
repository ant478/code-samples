import { SUITE_TYPES } from 'src/consts/suite-types';
import SinglyLinkedList from 'raw/data-structures/list/SinglyLinkedList';
import DoublyLinkedList from 'raw/data-structures/list/DoublyLinkedList';

export default [
  {
    id: 'singly-linked-list',
    title: 'Singly linked list',
    type: SUITE_TYPES.codeListing,
    listing: SinglyLinkedList.toString(),
  },
  {
    id: 'doubly-linked-list',
    title: 'Doubly linked list',
    type: SUITE_TYPES.codeListing,
    listing: DoublyLinkedList.toString(),
  },
];
