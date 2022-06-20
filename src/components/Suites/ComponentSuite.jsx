import React, { memo } from 'react';

const ComponentSuite = memo(({
  id,
  title,
  component: Component,
}) => (
  <article className="component-suite">
    <h3
      id={id}
      className="component-suite_title"
    >
      {title}
    </h3>
    <Component />
  </article>
));

export default ComponentSuite;
