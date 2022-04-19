import React, { memo } from 'react';
import cx from 'classnames';

const ControlButton = memo(({
  icon,
  className,
  children,
  onClick,
}) => {
  const classes = cx(className, 'control-button', {
    'control-button__has-icon': !!icon,
  });

  return (
    <button
      className={classes}
      type="button"
      onClick={onClick}
    >
      {children}
      {icon && <div className="control-button_icon">{icon}</div> }
    </button>
  );
});

export default ControlButton;
