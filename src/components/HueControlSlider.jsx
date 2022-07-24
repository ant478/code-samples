import React, {
  useRef,
  useCallback,
  useEffect, useLayoutEffect,
} from 'react';
import cx from 'classnames';
import noop from 'lodash/noop';
import clamp from 'lodash/clamp';
import { HUE_RANGE } from 'src/consts/hue';
import { useWindowEventListener } from 'src/hooks/useEventListener';
import useAnimationCycle from 'src/hooks/useAnimationCycle';
import { getTransformTranslate } from 'src/helpers/css';
import { validateHueValue } from 'src/helpers/hue';

const WHEEL_DELTA = 5;

const HueControlSlider = ({
  className,
  value = 0,
  onChange = noop,
}) => {
  const controlRef = useRef(null);
  const sliderRef = useRef(null);
  const valueRef = useRef(value);
  const mousePositionRef = useRef(0);
  const sliderPositionRef = useRef(0);
  const clickOffsetRef = useRef(0);
  const isMouseDownRef = useRef(false);

  valueRef.current = value;

  const updateSliderPosition = useCallback((y) => {
    if (y === sliderPositionRef.current) return;

    sliderPositionRef.current = clamp(y, 0, controlRef.current.offsetHeight);

    if (!isMouseDownRef.current) return;

    const newValue = validateHueValue(HUE_RANGE * sliderPositionRef.current / controlRef.current.offsetHeight);

    if (valueRef.current !== newValue) onChange(newValue);
  }, [onChange]);

  const animateSliderPosition = useCallback(() => {
    sliderRef.current.style.transform = getTransformTranslate(
      -(sliderRef.current.offsetWidth >> 1),
      sliderPositionRef.current,
    );
  }, []);

  const animateSliderDragging = useCallback(() => {
    updateSliderPosition(mousePositionRef.current - clickOffsetRef.current);
  }, [updateSliderPosition]);

  useLayoutEffect(() => {
    updateSliderPosition(~~(controlRef.current.offsetHeight * value / HUE_RANGE));
    animateSliderPosition();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isMouseDownRef.current) updateSliderPosition(~~(controlRef.current.offsetHeight * value / HUE_RANGE));
  }, [value, updateSliderPosition]);

  const [startDraggingAnimation, stopDraggingAnimation] = useAnimationCycle(animateSliderDragging);
  useAnimationCycle(animateSliderPosition, true);

  const handleControlMouseDown = useCallback((event) => {
    clickOffsetRef.current = event.target === sliderRef.current
      ? event.clientY - sliderPositionRef.current
      : controlRef.current.getBoundingClientRect().top;

    startDraggingAnimation();
    event.stopPropagation();
    isMouseDownRef.current = true;
  }, [startDraggingAnimation]);

  const handleWindowMouseMove = useCallback(({ clientY }) => {
    mousePositionRef.current = clientY;
  }, []);

  const handleWindowMouseUp = useCallback(() => {
    isMouseDownRef.current = false;
    stopDraggingAnimation();
  }, [stopDraggingAnimation]);

  const handleWheel = useCallback(({ deltaY }) => {
    if (isMouseDownRef.current) return;

    const delta = (deltaY > 0 ? WHEEL_DELTA : -WHEEL_DELTA);
    const newValue = validateHueValue(valueRef.current + delta);

    onChange(newValue);
  }, [onChange]);

  useWindowEventListener('mousemove', handleWindowMouseMove);
  useWindowEventListener('mouseup', handleWindowMouseUp);

  return (
    <div
      className={cx('hue-control-slider', className)}
      onWheel={handleWheel}
    >
      <div
        className="hue-control-slider_control"
        ref={controlRef}
        onMouseDown={handleControlMouseDown}
      >
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          type="button"
          className="hue-control-slider_slider"
          ref={sliderRef}
        />
      </div>
    </div>
  );
};

export default HueControlSlider;
