import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';
import { getListing } from 'src/helpers/strings';

export default [
  {
    id: 'hash-table-set',
    title: 'Hash table set',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(rawCodeSamples.abstractDataTypes.set.HashTableSet),
    ],
  },
];
