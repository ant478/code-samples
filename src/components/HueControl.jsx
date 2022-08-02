import cx from 'classnames';
import React, {
  memo,
  useRef,
  useCallback,
  useState,
  useReducer,
} from 'react';
import loadable from '@loadable/component';
import { useWindowEventListener } from 'src/hooks/useEventListener';
import {
  getHueValueFromLocalStorage,
  saveHueValueToLocalStorage,
  validateHueValue,
} from 'src/helpers/hue';
import HueControlSlider from 'src/components/HueControlSlider';
import {
  ARROW_DOWN_KEY_CODE,
  ARROW_UP_KEY_CODE,
  ESC_KEY_CODE,
} from 'src/consts/key-codes';
import { HUE_DELTA } from 'src/consts/hue';

const BrushIcon = loadable(() => import(/* webpackChunkName: "svgr-common" */'src/img/brush.svg?svgr'));

const isControlVisibleReducer = (isVisible, newValue) => (newValue ?? !isVisible);

const HueControl = memo(({
  className,
}) => {
  const baseRef = useRef(null);
  const [isControlVisible, toggleIsControlVisible] = useReducer(isControlVisibleReducer, false);
  const isControlVisibleRef = useRef(isControlVisible);
  const [value, setValue] = useState(getHueValueFromLocalStorage());
  const valueRef = useRef(value);

  valueRef.current = value;
  isControlVisibleRef.current = isControlVisible;

  const changeValue = useCallback((newValue) => {
    setValue(newValue);
    document.documentElement.style.setProperty('--hue', newValue);
    saveHueValueToLocalStorage(newValue);
  }, []);

  const handleControlChange = useCallback((newValue) => {
    changeValue(newValue);
  }, [changeValue]);

  const handleKeyDown = useCallback(({ keyCode, ctrlKey }) => {
    if (!isControlVisibleRef.current) return;

    if (keyCode === ESC_KEY_CODE) {
      toggleIsControlVisible(false);
      return;
    }

    if (![ARROW_UP_KEY_CODE, ARROW_DOWN_KEY_CODE].includes(keyCode)) return;

    let delta = (keyCode === ARROW_DOWN_KEY_CODE ? HUE_DELTA : -HUE_DELTA);

    if (ctrlKey) {
      delta *= 5;
    }

    const newValue = validateHueValue(valueRef.current + delta);

    changeValue(newValue);
  }, [changeValue]);

  const handleWheel = useCallback(({ deltaY }) => {
    if (!isControlVisibleRef.current) return;

    const delta = (deltaY > 0 ? HUE_DELTA : -HUE_DELTA);
    const newValue = validateHueValue(valueRef.current + delta);

    changeValue(newValue);
  }, [changeValue]);

  const handleControlClick = useCallback(() => {
    toggleIsControlVisible();
  }, []);

  const handleWindowClick = useCallback(({ target }) => {
    if (!baseRef.current) return;

    const isInside = (target === baseRef.current || baseRef.current.contains(target));

    if (!isInside) toggleIsControlVisible(false);
  }, []);

  useWindowEventListener('click', handleWindowClick);

  const classes = cx('hue-control', className, {
    'hue-control__control-visible': isControlVisible,
  });

  return (
    <div
      ref={baseRef}
      className={classes}
    >
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        title="Change style"
        onClick={handleControlClick}
        type="button"
        className="hue-control_sample"
        onKeyDown={handleKeyDown}
        onWheel={handleWheel}
      >
        <BrushIcon className="hue-control_sample-icon" />
      </button>
      {isControlVisible && (
        <HueControlSlider
          className="hue-control_slider-mix"
          value={value}
          onChange={handleControlChange}
          onKeyDown={handleKeyDown}
          onWheel={handleWheel}
        />
      )}
    </div>
  );
});

export default HueControl;
