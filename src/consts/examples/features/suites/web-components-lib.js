import { SUITE_TYPES } from 'src/consts/suite-types';
import Logo from 'src/components/component-example-suites/WebComponentsLib/components/Logo';
import Footer from 'src/components/component-example-suites/WebComponentsLib/components/Footer';

export default [
  {
    id: 'logo',
    title: 'Logo',
    type: SUITE_TYPES.component,
    component: Logo,
  },
  {
    id: 'footer',
    title: 'Footer',
    type: SUITE_TYPES.component,
    component: Footer,
  },
];
