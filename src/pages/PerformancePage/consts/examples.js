import setPerformanceTestBenchmarkSuites from '../benchmark-suites/set-performance-test';
import mapPerformanceTestBenchmarkSuites from '../benchmark-suites/map-performance-test';

export const EXAMPLES_IDS = {
  setPerformanceTest: 'set-performance-test',
  mapPerformanceTest: 'map-performance-test',
};

const getLink = (link, title = link) => `[${title}](${link})`;

export const EXAMPLES = [{
  id: EXAMPLES_IDS.setPerformanceTest,
  title: 'Set performance test',
  description: `
      Documentation:<br/><br/>
      en - ${getLink('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set')}<br/>
      en - ${getLink('https://www.w3schools.com/js/js_object_sets.asp')}<br/>
      ru - ${getLink('https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set')}<br/>
      ru - ${getLink('https://learn.javascript.ru/map-set')}
    `,
  benchmarkSuites: setPerformanceTestBenchmarkSuites,
}, {
  id: EXAMPLES_IDS.mapPerformanceTest,
  title: 'Map performance test',
  description: `
      Documentation:<br/><br/>
      en - ${getLink('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map')}<br/>
      en - ${getLink('https://www.w3schools.com/js/js_object_maps.asp')}<br/>
      ru - ${getLink('https://learn.javascript.ru/map-set')}
    `,
  benchmarkSuites: mapPerformanceTestBenchmarkSuites,
}];
