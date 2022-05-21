import { makeMarkdownLink } from 'src/helpers/strings';
import linkedListSuites from './suites/linked-list';

export const EXAMPLE_IDS = {
  linkedList: 'linked-list',
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
];
