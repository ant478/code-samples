import React, { memo } from 'react';
import cx from 'classnames';

const ControlButton = memo(({
  icon,
  isDisabled,
  className,
  children,
  onClick,
}) => {
  const classes = cx(
    className,
    'control-button',
    isDisabled && 'control-button__disabled',
    icon && 'control-button__has-icon',
  );

  return (
    <button
      disabled={isDisabled}
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
