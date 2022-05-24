import { EXAMPLES as PERFORMANCE_EXAMPLES } from './examples/performance';
import { EXAMPLES as DATA_STRUCTURES_EXAMPLES } from './examples/data-structures';
import { EXAMPLES as ABSTRACT_DATA_TYPES_EXAMPLES } from './examples/abstract-data-types';
import { EXAMPLES as SORT_EXAMPLES } from './examples/sort';

export const CATEGORY_IDS = {
  performance: 'performance',
  dataStructures: 'data-structures',
  abstractDataTypes: 'abstract-data-types',
  sort: 'sort',
};

export const CATEGORIES = [
  {
    id: CATEGORY_IDS.performance,
    title: 'Performance',
    examples: PERFORMANCE_EXAMPLES,
  },
  {
    id: CATEGORY_IDS.dataStructures,
    title: 'Data structures',
    examples: DATA_STRUCTURES_EXAMPLES,
  },
  {
    id: CATEGORY_IDS.abstractDataTypes,
    title: 'Abstract data types',
    examples: ABSTRACT_DATA_TYPES_EXAMPLES,
  },
  {
    id: CATEGORY_IDS.sort,
    title: 'Sort',
    examples: SORT_EXAMPLES,
  },
];
