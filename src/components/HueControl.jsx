import cx from 'classnames';
import React, {
  memo,
  useRef,
  useCallback,
} from 'react';
import { useWindowEventListener } from 'src/hooks/useEventListener';
import {
  getHueValueFromLocalStorage,
  saveHueValueToLocalStorage,
} from 'src/helpers/hue';

const HUE_DELTA = 3;

const HueControl = memo(({
  className,
}) => {
  const isMouseDownRef = useRef(false);

  const handleMouseDown = useCallback(() => {
    isMouseDownRef.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    isMouseDownRef.current = false;
  }, []);

  const handleWheel = useCallback((event) => {
    if (!isMouseDownRef.current) return;

    const delta = (event.deltaY > 0 ? HUE_DELTA : -HUE_DELTA);
    const newValue = (getHueValueFromLocalStorage() + delta);

    document.documentElement.style.setProperty('--hue', newValue);
    saveHueValueToLocalStorage(newValue);
  }, []);

  useWindowEventListener('mouseup', handleMouseUp);
  useWindowEventListener('wheel', handleWheel);

  return (
    <div
      onMouseDown={handleMouseDown}
      className={cx('theme-control', className)}
    >
      <div className="theme-control_sample" />
    </div>
  );
});

export default HueControl;
