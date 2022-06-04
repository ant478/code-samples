import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';
import { getListing } from 'src/helpers/strings';

export default [
  {
    id: 'iterable-singly-linked-list',
    title: 'Iterable singly linked list',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.javascript.iterators.IterableSinglyLinkedList),
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
