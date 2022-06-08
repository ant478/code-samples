import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';
import { getListing } from 'src/helpers/strings';

export default [
  {
    id: 'iterable-binary-search-tree',
    title: 'Iterable binary search tree (Symbol.iterator)',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.javascript.symbols.IterableBinarySearchTree),
    ],
  },
  {
    id: 'stackable-vector',
    title: 'Stackable vector (Symbol.toPrimitive)',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.javascript.symbols.StackableVector),
    ],
  },
];
