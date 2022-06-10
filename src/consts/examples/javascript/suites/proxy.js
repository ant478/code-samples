import { SUITE_TYPES } from 'src/consts/suite-types';
import rawCodeSamples from 'src/raw-code-samples';
import { getListing } from 'src/helpers/strings';

export default [
  {
    id: 'array-starting-from-one',
    title: 'Array starting from one',
    type: SUITE_TYPES.codeListing,
    listings: [
      getListing(...rawCodeSamples.javascript.proxy.ArrayStartingFromOne),
    ],
  },
];
