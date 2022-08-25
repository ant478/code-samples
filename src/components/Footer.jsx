import React, { memo } from 'react';
import { EXPANDED_HEIGHT } from 'src/hooks/useFooterHeight';

const styles = { height: `${EXPANDED_HEIGHT}px` };

const Footer = memo(() => (
  <footer
    className="footer"
    style={styles}
  >
    <ant478-footer class="footer_footer" />
  </footer>
));

export default Footer;
