import React, { memo } from 'react';
import Navigation from 'src/components/Navigation';
import { EXPANDED_HEIGHT } from 'src/hooks/useHeaderHeight';
import { CATEGORIES } from 'src/consts/categories';

const styles = { height: `${EXPANDED_HEIGHT}px` };

const NAVIGATION_LINKS = CATEGORIES.map(({ id, title }) => ({
  to: `/${id}`,
  title,
}));

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
