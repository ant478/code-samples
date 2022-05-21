import { makeMarkdownLink } from 'src/helpers/strings';
import queueSuites from './suites/queue';

export const EXAMPLE_IDS = {
  queue: 'queue',
  stack: 'stack',
};

export const EXAMPLES = [
  {
    id: EXAMPLE_IDS.queue,
    title: 'Queue',
    description: `
        Documentation:<br/><br/>
        en - ${makeMarkdownLink('https://en.wikipedia.org/wiki/Queue_(abstract_data_type)')}<br/>
        ru - ${makeMarkdownLink('https://ru.wikipedia.org/wiki/Очередь_(программирование)')}
      `,
    suites: queueSuites,
  },
  {
    id: EXAMPLE_IDS.stack,
    title: 'Stack',
    description: `
        Documentation:<br/><br/>
        en - ${makeMarkdownLink('https://en.wikipedia.org/wiki/Stack_(abstract_data_type)')}<br/>
        ru - ${makeMarkdownLink('https://ru.wikipedia.org/wiki/Стэк')}
      `,
    suites: [],
  },
];
