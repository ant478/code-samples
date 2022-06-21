import { SUITE_TYPES } from 'src/consts/suite-types';
import IntersectionObserver from 'src/components/component-example-suites/IntersectionObserver';

export default [
  {
    id: 'intersection-observer',
    title: 'Melting metal (IntersectionObserver, ResizeObserver)',
    type: SUITE_TYPES.component,
    component: IntersectionObserver,
    // TODO: add description
  },
];
