import cx from 'classnames';
import React, {
  memo,
  useRef,
  useCallback,
  useState,
  useReducer,
} from 'react';
import { useWindowEventListener } from 'src/hooks/useEventListener';
import {
  getHueValueFromLocalStorage,
  saveHueValueToLocalStorage,
} from 'src/helpers/hue';
import HueControlSlider from 'src/components/HueControlSlider';

const isControlVisibleReducer = (isVisible, newValue) => (newValue ?? !isVisible);

const HueControl = memo(({
  className,
}) => {
  const baseRef = useRef(null);
  const [isControlVisible, toggleIsControlVisible] = useReducer(isControlVisibleReducer, false);
  const [hueValue, setHueValue] = useState(getHueValueFromLocalStorage());

  const handleControlChange = useCallback((newValue) => {
    setHueValue(newValue);
    document.documentElement.style.setProperty('--hue', newValue);
    saveHueValueToLocalStorage(newValue);
  }, []);

  const handleControlClick = useCallback(() => {
    toggleIsControlVisible();
  }, []);

  const handleWindowClick = useCallback(({ target }) => {
    if (!baseRef.current) return;

    const isInside = (target === baseRef.current || baseRef.current.contains(target));

    if (!isInside) toggleIsControlVisible(false);
  }, []);

  useWindowEventListener('click', handleWindowClick);

  return (
    <div
      ref={baseRef}
      className={cx('hue-control', className)}
    >
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        onClick={handleControlClick}
        type="button"
        className="hue-control_sample"
      />
      {isControlVisible && (
        <HueControlSlider
          className="hue-control_slider-mix"
          value={hueValue}
          onChange={handleControlChange}
        />
      )}
    </div>
  );
});

export default HueControl;
