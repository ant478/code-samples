import React, { memo } from 'react';
import loadable from '@loadable/component';
import Navigation from 'src/components/Navigation';
import HueControl from 'src/components/HueControl';
import { EXPANDED_HEIGHT } from 'src/hooks/useHeaderHeight';
import { CATEGORIES } from 'src/consts/categories';

const Logo = loadable(() => import(/* webpackChunkName: "svgr-common" */'src/img/logo/mask.svg?svgr'));

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
    <div className="header_logo-wrapper">
      <a
        className="header_logo-link"
        href="/"
        title="ant478 Code Samples"
      >
        <Logo className="header_logo" />
      </a>
    </div>
    <h1 className="header_title">Code Samples</h1>
    <Navigation
      className="header_navigation-mix"
      links={NAVIGATION_LINKS}
    />
    <HueControl className="header_hue-control-mix" />
  </header>
));

export default Header;
