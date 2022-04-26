import React, { memo } from 'react';
import { EXPANDED_HEIGHT } from 'src/hooks/useFooterHeight';

const styles = { height: `${EXPANDED_HEIGHT}px` };

const Footer = memo(() => (
  <footer
    className="footer"
    style={styles}
  />
));

export default Footer;
