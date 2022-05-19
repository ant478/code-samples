import React, { memo } from 'react';
import Navigation from 'src/components/Navigation';
import { EXPANDED_HEIGHT } from 'src/hooks/useHeaderHeight';
import { CATEGORY_IDS } from 'src/consts/categories';

const styles = { height: `${EXPANDED_HEIGHT}px` };

const NAVIGATION_LINKS = [
  {
    to: `/${CATEGORY_IDS.performance}`,
    title: 'Performance',
  },
  {
    to: `/${CATEGORY_IDS.dataStructures}`,
    title: 'Data structures',
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
