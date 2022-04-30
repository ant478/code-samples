import setPerformanceTestBenchmarkSuites from '../benchmark-suites/set-performance-test';
import mapPerformanceTestBenchmarkSuites from '../benchmark-suites/map-performance-test';

export const EXAMPLES_IDS = {
  set: 'set',
  map: 'map',
};

const getLink = (link, title = link) => `[${title}](${link})`;

export const EXAMPLES = [{
  id: EXAMPLES_IDS.set,
  title: 'Set',
  description: `
      Documentation:<br/><br/>
      en - ${getLink('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set')}<br/>
      en - ${getLink('https://www.w3schools.com/js/js_object_sets.asp')}<br/>
      ru - ${getLink('https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set')}<br/>
      ru - ${getLink('https://learn.javascript.ru/map-set')}
    `,
  benchmarkSuites: setPerformanceTestBenchmarkSuites,
}, {
  id: EXAMPLES_IDS.map,
  title: 'Map',
  description: `
      Documentation:<br/><br/>
      en - ${getLink('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map')}<br/>
      en - ${getLink('https://www.w3schools.com/js/js_object_maps.asp')}<br/>
      ru - ${getLink('https://learn.javascript.ru/map-set')}
    `,
  benchmarkSuites: mapPerformanceTestBenchmarkSuites,
}];
