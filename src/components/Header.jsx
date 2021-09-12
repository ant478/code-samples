import React, { memo } from 'react';
import Navigation from 'src/components/Navigation';
import { EXPANDED_HEIGHT } from 'src/hooks/useHeaderHeight';

const styles = { height: `${EXPANDED_HEIGHT}px` };

const Header = memo(() => (
  <header
    className="header"
    style={styles}
  >
    <Navigation />
  </header>
));

export default Header;
