import { makeMarkdownLink } from 'src/helpers/strings';
import linkedListSuites from './suites/linked-list';
import treeSuites from './suites/tree';

export const EXAMPLE_IDS = {
  linkedList: 'linked-list',
  tree: 'tree',
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
];
