import { makeMarkdownLink } from 'src/helpers/strings';
import treeSortSuites from './suites/tree-sort';
import heapSortSuites from './suites/heap-sort';

export const EXAMPLE_IDS = {
  treeSort: 'tree-sort',
  heapSort: 'heap-sort',
};

export const EXAMPLES = [{
  id: EXAMPLE_IDS.treeSort,
  title: 'Tree sort',
  description: `
      Documentation:<br/>
      en - ${makeMarkdownLink('https://en.wikipedia.org/wiki/Tree_sort')}<br/>
      ru - ${makeMarkdownLink('https://ru.wikipedia.org/wiki/Сортировка_с_помощью_двоичного_дерева')}
    `,
  suites: treeSortSuites,
}, {
  id: EXAMPLE_IDS.heapSort,
  title: 'Heap sort',
  description: `
      Documentation:<br/>
      en - ${makeMarkdownLink('https://en.wikipedia.org/wiki/Heapsort')}<br/>
      ru - ${makeMarkdownLink('https://ru.wikipedia.org/wiki/Пирамидальная_сортировка')}
    `,
  suites: heapSortSuites,
}];
