import React, { memo } from 'react';
import { Footer } from '@ant478/web-components';

if (!customElements.get('ant478-footer')) {
  customElements.define('ant478-footer', Footer);
}

const Ant478Footer = memo(({
  className,
  ...attributes
}) => (
  /* eslint-disable-next-line react/self-closing-comp */
  <ant478-footer class={className} {...attributes}></ant478-footer>
));

export default Ant478Footer;
