import { makeMarkdownLink } from 'src/helpers/strings';

export const EXAMPLES_IDS = {
  linkedList: 'linked-list',
  queue: 'queue',
  stack: 'stack',
};

export const EXAMPLES = [{
  id: EXAMPLES_IDS.linkedList,
  title: 'Linked list',
  description: `
      Documentation:<br/><br/>
      en - ${makeMarkdownLink('https://en.wikipedia.org/wiki/Linked_list')}<br/>
      ru - ${makeMarkdownLink('https://ru.wikipedia.org/wiki/Связный_список')}
    `,
}, {
  id: EXAMPLES_IDS.queue,
  title: 'Queue',
  description: `
      Documentation:<br/><br/>
      en - ${makeMarkdownLink('https://en.wikipedia.org/wiki/Queue_(abstract_data_type)')}<br/>
      ru - ${makeMarkdownLink('https://ru.wikipedia.org/wiki/Очередь_(программирование)')}
    `,
}, {
  id: EXAMPLES_IDS.stack,
  title: 'Stack',
  description: `
      Documentation:<br/><br/>
      en - ${makeMarkdownLink('https://en.wikipedia.org/wiki/Stack_(abstract_data_type)')}<br/>
      ru - ${makeMarkdownLink('https://ru.wikipedia.org/wiki/Стэк')}
    `,
}];
