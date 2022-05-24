import { makeMarkdownLink } from 'src/helpers/strings';
import treeSortSuites from './suites/tree-sort';

export const EXAMPLE_IDS = {
  treeSort: 'tree-sort',
};

export const EXAMPLES = [{
  id: EXAMPLE_IDS.treeSort,
  title: 'Tree sort',
  description: `
      Documentation:<br/><br/>
      en - ${makeMarkdownLink('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set')}<br/>
      ru - ${makeMarkdownLink('https://learn.javascript.ru/map-set')}
    `,
  suites: treeSortSuites,
}];
