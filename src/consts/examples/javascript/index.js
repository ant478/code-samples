import { makeMarkdownLink } from 'src/helpers/strings';
import iteratorsSuites from './suites/iterators';
import symbolsSuites from './suites/symbols';
import proxySuites from './suites/proxy';
import observersSuites from './suites/observers';

export const EXAMPLE_IDS = {
  iterators: 'iterators',
  symbols: 'symbols',
  proxy: 'proxy',
  observers: 'observers',
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
  {
    id: EXAMPLE_IDS.observers,
    title: 'Observers',
    description: `
        GitHub:<br/><br/>
        ${makeMarkdownLink('https://github.com/ant478/code-samples/blob/master/src/components/component-example-suites/IntersectionObserver/IntersectionObserver.jsx', 'IntersectionObserver')}<br/>
        ${makeMarkdownLink('https://github.com/ant478/code-samples/tree/master/src/components/component-example-suites/IntersectionObserver/examples/MeltingMetal', 'MeltingMetal')}
      `,
    suites: observersSuites,
  },
];
