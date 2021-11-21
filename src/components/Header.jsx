import React, { memo } from 'react';
import Navigation from 'src/components/Navigation';
import { EXPANDED_HEIGHT } from 'src/hooks/useHeaderHeight';
import { CATEGORY_IDS } from 'src/consts/categories';

const styles = { height: `${EXPANDED_HEIGHT}px` };

const NAVIGATION_LINKS = [
  {
    to: '/',
    title: 'Home',
    exact: true,
  },
  {
    to: `/${CATEGORY_IDS.examples}`,
    title: 'Examples',
  },
  {
    to: `/${CATEGORY_IDS.links}`,
    title: 'Links',
  },
  {
    to: `/${CATEGORY_IDS.projects}`,
    title: 'Projects',
  },
];

const Header = memo(() => (
  <header
    className="header"
    style={styles}
  >
    <Navigation
      links={NAVIGATION_LINKS}
    />
  </header>
));

export default Header;
