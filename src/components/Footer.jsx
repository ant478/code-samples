import React, { memo } from 'react';
import { EXPANDED_HEIGHT } from 'src/hooks/useFooterHeight';
import loadable from '@loadable/component';

const Ant478Footer = loadable(() => import(/* webpackChunkName: "secondary-components" */'src/components/web-components/Ant478Footer'));

const styles = { height: `${EXPANDED_HEIGHT}px` };

const Footer = memo(() => (
  <footer
    className="footer"
    style={styles}
  >
    <Ant478Footer class="footer_footer" />
  </footer>
));

export default Footer;
