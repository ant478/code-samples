import React, { memo } from 'react';
import Highlight from 'src/components/Highlight';

const CodeListingSuite = memo(({
  id,
  title,
  listing,
}) => (
  <article className="code-listing-suite">
    <h3
      id={id}
      className="code-listing-suite_title"
    >
      {title}
    </h3>
    <Highlight>
      {listing}
    </Highlight>
  </article>
));

export default CodeListingSuite;
