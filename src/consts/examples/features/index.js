import { makeMarkdownLink } from 'src/helpers/strings';
import webComponentsLibSuites from './suites/web-components-lib';

export const EXAMPLE_IDS = {
  webComponentsLib: 'web-components-lib',
};

export const EXAMPLES = [
  {
    id: EXAMPLE_IDS.webComponentsLib,
    title: '@ant478/web-components',
    description: `
        Documentation:<br/>
        en - ${makeMarkdownLink('https://developer.mozilla.org/en-US/docs/Web/Web_Components')}<br/>
        ru - ${makeMarkdownLink('https://developer.mozilla.org/ru/docs/Web/Web_Components')}<br/><br/>

        npm:<br/>
        ${makeMarkdownLink('https://www.npmjs.com/package/@ant478/web-components')}<br/><br/>

        GitHub:<br/>
        Repository - ${makeMarkdownLink('https://github.com/ant478/web-components')}<br/>
        Components - ${makeMarkdownLink('https://github.com/ant478/web-components/tree/main/lib/src/components')}<br/><br/>

        StoryBook:<br/>
        ${makeMarkdownLink('https://ant478-web-components.herokuapp.com/')}
      `,
    suites: webComponentsLibSuites,
  },
];
