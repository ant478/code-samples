import { makeMarkdownLink } from 'src/helpers/strings';
import queueSuites from './suites/queue';
import priorityQueueSuites from './suites/priority-queue';
import stackSuites from './suites/stack';
import setSuites from './suites/set';

export const EXAMPLE_IDS = {
  queue: 'queue',
  priorityQueue: 'priority-queue',
  stack: 'stack',
  set: 'set',
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
    id: EXAMPLE_IDS.priorityQueue,
    title: 'Priority queue',
    description: `
        Documentation:<br/><br/>
        en - ${makeMarkdownLink('https://en.wikipedia.org/wiki/Priority_queue')}<br/>
        ru - ${makeMarkdownLink('https://ru.wikipedia.org/wiki/Очередь_с_приоритетом_(программирование)')}
      `,
    suites: priorityQueueSuites,
  },
  {
    id: EXAMPLE_IDS.stack,
    title: 'Stack',
    description: `
        Documentation:<br/><br/>
        en - ${makeMarkdownLink('https://en.wikipedia.org/wiki/Stack_(abstract_data_type)')}<br/>
        ru - ${makeMarkdownLink('https://ru.wikipedia.org/wiki/Стэк')}
      `,
    suites: stackSuites,
  },
  {
    id: EXAMPLE_IDS.set,
    title: 'Set',
    description: `
        Documentation:<br/><br/>
        en - ${makeMarkdownLink('https://en.wikipedia.org/wiki/Set_(abstract_data_type)')}<br/>
        ru - ${makeMarkdownLink('https://ru.wikipedia.org/wiki/Множество_(тип_данных)')}
      `,
    suites: setSuites,
  },
];
