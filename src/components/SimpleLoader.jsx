import React, { memo } from 'react';

const SimpleLoader = memo(() => (
  <div className="simple-loader">
    <span className="simple-loader_element" />
    <span className="simple-loader_element" />
    <span className="simple-loader_element" />
  </div>
));

export default SimpleLoader;
