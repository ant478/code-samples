import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';
import { getListing } from 'src/helpers/strings';

export default [
  {
    id: 'array-stack',
    title: 'Array stack',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.abstractDataTypes.stack.ArrayStack),
    ],
  },
  {
    id: 'limited-array-stack',
    title: 'Limited array stack',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.abstractDataTypes.stack.LimitedArrayStack),
    ],
  },
  {
    id: 'singly-linked-list-stack',
    title: 'Singly linked list stack',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.abstractDataTypes.stack.SinglyLinkedListStack),
    ],
  },
];
