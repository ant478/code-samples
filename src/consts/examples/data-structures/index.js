import { makeMarkdownLink } from 'src/helpers/strings';
import linkedListSuites from './suites/linked-list';
import treeSuites from './suites/tree';
import heapSuites from './suites/heap';
import hashTable from './suites/hashTable';

export const EXAMPLE_IDS = {
  linkedList: 'linked-list',
  tree: 'tree',
  heap: 'heap',
  hashTable: 'hash-table',
};

export const EXAMPLES = [
  {
    id: EXAMPLE_IDS.linkedList,
    title: 'Linked list',
    description: `
        Documentation:<br/><br/>
        en - ${makeMarkdownLink('https://en.wikipedia.org/wiki/Linked_list')}<br/>
        ru - ${makeMarkdownLink('https://ru.wikipedia.org/wiki/Связный_список')}
      `,
    suites: linkedListSuites,
  },
  {
    id: EXAMPLE_IDS.tree,
    title: 'Tree',
    description: `
        Documentation:<br/><br/>
        en - ${makeMarkdownLink('https://en.wikipedia.org/wiki/Tree_(data_structure)')}<br/>
        ru - ${makeMarkdownLink('https://ru.wikipedia.org/wiki/Дерево_(структура_данных)')}
      `,
    suites: treeSuites,
  },
  {
    id: EXAMPLE_IDS.heap,
    title: 'Heap',
    description: `
        Documentation:<br/><br/>
        en - ${makeMarkdownLink('https://en.wikipedia.org/wiki/Heap_(data_structure)')}<br/>
        ru - ${makeMarkdownLink('https://ru.wikipedia.org/wiki/Куча_(структура_данных)')}
      `,
    suites: heapSuites,
  },
  {
    id: EXAMPLE_IDS.hashTable,
    title: 'Hash table',
    description: `
        Documentation:<br/><br/>
        en - ${makeMarkdownLink('https://en.wikipedia.org/wiki/Hash_table')}<br/>
        ru - ${makeMarkdownLink('https://ru.wikipedia.org/wiki/Хеш-таблица')}
      `,
    suites: hashTable,
  },
];
