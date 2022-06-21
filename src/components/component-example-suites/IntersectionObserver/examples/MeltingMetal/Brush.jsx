import clamp from 'lodash/clamp';
import React, {
  memo,
  useRef,
  useCallback,
  useLayoutEffect,
} from 'react';

const MIN_SIZE = 80;
const DEFAULT_SIZE = 200;
const MAX_SIZE = 800;
const SIZE_DELTA = 10;

const Brush = memo(() => {
  const elementRef = useRef(null);

  const handleWheel = useCallback(({ deltaY }) => {
    const newSize = elementRef.current.size + (deltaY < 0 ? SIZE_DELTA : -SIZE_DELTA);

    elementRef.current.size = clamp(newSize, MIN_SIZE, MAX_SIZE);
    elementRef.current.style.width = elementRef.current.style.height = `${elementRef.current.size}px`;
  }, []);

  useLayoutEffect(() => {
    elementRef.current.size = DEFAULT_SIZE;
    elementRef.current.style.width = elementRef.current.style.height = `${elementRef.current.size}px`;
  }, []);

  return (
    <div
      onWheel={handleWheel}
      ref={elementRef}
      className="intersection-observer-example melting-metal-brush"
    />
  );
});

export default Brush;
