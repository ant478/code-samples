import React, { memo } from 'react';
import Highlight from 'src/components/Highlight';

const CodeListingSuite = memo(({
  id,
  title,
  listings,
}) => (
  <article className="code-listing-suite">
    <h3
      id={id}
      className="code-listing-suite_title"
    >
      {title}
    </h3>
    <ul className="code-listing-suite_list">
      {listings.map((listing, index) => (
        <li
          key={index}
          className="code-listing-suite_item"
        >
          <Highlight>
            {listing}
          </Highlight>
        </li>
      ))}
    </ul>
  </article>
));

export default CodeListingSuite;
