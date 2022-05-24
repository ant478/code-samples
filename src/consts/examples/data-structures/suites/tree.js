import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';
import { getListing } from 'src/helpers/strings';

export default [
  {
    id: 'binary-search-tree',
    title: 'Binary search tree',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.dataStructures.tree.BinarySearchTree),
    ],
  },
];
