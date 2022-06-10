import { makeMarkdownLink } from 'src/helpers/strings';
import iteratorsSuites from './suites/iterators';
import symbolsSuites from './suites/symbols';
import proxySuites from './suites/proxy';

export const EXAMPLE_IDS = {
  iterators: 'iterators',
  symbols: 'symbols',
  proxy: 'proxy',
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
  {
    id: EXAMPLE_IDS.symbols,
    title: 'Symbols',
    description: `
        Documentation:<br/><br/>
        en - ${makeMarkdownLink('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol')}<br/>
        ru - ${makeMarkdownLink('https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol')}
      `,
    suites: symbolsSuites,
  },
  {
    id: EXAMPLE_IDS.proxy,
    title: 'Proxy',
    description: `
        Documentation:<br/><br/>
        en - ${makeMarkdownLink('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy')}<br/>
        ru - ${makeMarkdownLink('https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Proxy')}
      `,
    suites: proxySuites,
  },
];
