import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';
import { getListing } from 'src/helpers/strings';

export default [
  {
    id: 'chained-hash-table',
    title: 'Chained hash table',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.dataStructures.hashTable.ChainedHashTable.ChainedHashTable),
      getListing(rawCodeSamples.dataStructures.hashTable.ChainedHashTable.HastTableArray),
    ],
  },
];
