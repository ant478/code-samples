import { makeMarkdownLink } from 'src/helpers/strings';
import setSuites from './suites/set';
import mapSuites from './suites/map';

export const EXAMPLE_IDS = {
  set: 'set',
  map: 'map',
};

export const EXAMPLES = [{
  id: EXAMPLE_IDS.set,
  title: 'Set',
  description: `
      Documentation:<br/><br/>
      en - ${makeMarkdownLink('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set')}<br/>
      en - ${makeMarkdownLink('https://www.w3schools.com/js/js_object_sets.asp')}<br/>
      ru - ${makeMarkdownLink('https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set')}<br/>
      ru - ${makeMarkdownLink('https://learn.javascript.ru/map-set')}
    `,
  suites: setSuites,
}, {
  id: EXAMPLE_IDS.map,
  title: 'Map',
  description: `
      Documentation:<br/><br/>
      en - ${makeMarkdownLink('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map')}<br/>
      en - ${makeMarkdownLink('https://www.w3schools.com/js/js_object_maps.asp')}<br/>
      ru - ${makeMarkdownLink('https://learn.javascript.ru/map-set')}
    `,
  suites: mapSuites,
}];
