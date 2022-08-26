import React, { memo } from 'react';
import { Logo } from '@ant478/web-components';

if (!customElements.get('ant478-logo')) {
  customElements.define('ant478-logo', Logo);
}

const Ant478Logo = memo(({
  className,
  ...attributes
}) => (
  /* eslint-disable-next-line react/self-closing-comp */
  <ant478-logo class={className} {...attributes}></ant478-logo>
));

export default Ant478Logo;
