import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';
import { getListing } from 'src/helpers/strings';

export default [
  {
    id: 'iterable-singly-linked-list-1',
    title: 'Iterable singly linked list 1',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.javascript.iterators.IterableSinglyLinkedList1),
    ],
  },
  {
    id: 'iterable-singly-linked-list-2',
    title: 'Iterable singly linked list 2',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.javascript.iterators.IterableSinglyLinkedList2),
    ],
  },
  {
    id: 'iterable-binary-search-tree',
    title: 'Iterable binary search tree',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.javascript.iterators.IterableBinarySearchTree),
    ],
  },
];
