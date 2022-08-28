import React, { memo } from 'react';
import { Footer } from '@ant478/web-components';
import Highlight from 'src/components/Highlight';
import { getUniqId } from 'src/helpers/dom';

if (!customElements.get('ant478-footer')) {
  customElements.define('ant478-footer', Footer);
}

const id1 = getUniqId('footer', 4);
const html = `
<div>
  <style>
    #${id1}::part(root) {
      --wc-background-color: var(--highlighted-block-background-color);
      --wc-text-color: var(--primary-text-color);
      --wc-nickname-text-color: var(--article-title-color);
      --wc-selection-background-color: var(--selection-background-color );
      --wc-selection-text-color: var(--selection-text-color);
    }
    #${id1}::part(footer_signature) {
      min-width: 200px;
    }
    #${id1}::part(column__left) {
      max-width: 150px;
    }
    #${id1}::part(column__right) {
      max-width: 250px;
    }
    #${id1}::part(link),
    #${id1}::part(link_icon) {
      transition-duration: 0.15s;
      transition-timing-function: ease-out;
    }
    #${id1}::part(link):hover,
    #${id1}::part(link_icon):hover {
      transition-duration: 0s;
    }
  </style>

  <ant478-footer id="${id1}"></ant478-footer>
</div>
`.slice(1);

const FooterComponent = memo(() => (
  <div className="web-components-lib-example footer">
    <div
      className="web-components-lib-example_demo"
      /* eslint-disable-next-line react/no-danger */
      dangerouslySetInnerHTML={{ __html: html }}
    />
    <Highlight>
      {html}
    </Highlight>
  </div>
));

export default FooterComponent;
