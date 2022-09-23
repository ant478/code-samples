import cx from 'classnames';
import React, { memo } from 'react';

const SimpleLoader = memo(({
  className,
}) => {
  const classes = cx('simple-loader', className);

  return (
    <div className={classes}>
      <span className="simple-loader_element" />
      <span className="simple-loader_element" />
      <span className="simple-loader_element" />
    </div>
  );
});

export default SimpleLoader;
