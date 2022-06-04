import { makeMarkdownLink } from 'src/helpers/strings';
import iteratorsSuites from './suites/iterators';

export const EXAMPLE_IDS = {
  iterators: 'iterators',
};

export const EXAMPLES = [
  {
    id: EXAMPLE_IDS.iterators,
    title: 'Iterators',
    description: `
        Documentation:<br/><br/>
        en - ${makeMarkdownLink('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols')}<br/>
        ru - ${makeMarkdownLink('https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Iteration_protocols')}
      `,
    suites: iteratorsSuites,
  },
];
