import React, {
  memo,
  useRef,
  useState,
  useMemo,
  useLayoutEffect,
  useCallback,
  useEffect,
} from 'react';
import debounce from 'lodash/debounce';
import { useWindowEventListener } from 'src/hooks/useEventListener';
import useAnimationCycle from 'src/hooks/useAnimationCycle';
import { getTransformTranslate } from 'src/helpers/css';
import IntersectionObserverService from 'src/services/IntersectionObserverService';
import { getElementOffsets } from 'src/helpers/dom';

const defaultObserverOptions = {};

const IntersectionCanvas = memo(({
  brush,
  canvas,
  observerOptions = defaultObserverOptions,
}) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [viewSize, setViewSize] = useState(null);
  const [observerService, setObserverService] = useState(null);

  const viewRef = useRef(null);
  const viewOffsetRef = useRef(null);
  const brushDriverRef = useRef(null);
  const frameRef = useRef(null);
  const dataRef = useRef({
    brushPosition: { x: 0, y: 0 },
    mousePosition: { x: 0, y: 0 },
    clickOffset: { x: 0, y: 0 },
  });

  const animateBrush = useCallback(() => {
    const { mousePosition, brushPosition, clickOffset } = dataRef.current;

    const x = (mousePosition.x - clickOffset.x);
    const y = (mousePosition.y - clickOffset.y);

    brushDriverRef.current.style.transform = getTransformTranslate(x, y);
    frameRef.current.style.transform = getTransformTranslate(-x, -y);
    brushPosition.x = x;
    brushPosition.y = y;
  }, []);

  const [runBrushAnimation, stopBrushAnimation] = useAnimationCycle(animateBrush);

  const handleMouseDown = useCallback((event) => {
    const { brushPosition, clickOffset } = dataRef.current;

    if (event.currentTarget === brushDriverRef.current) {
      clickOffset.x = (event.clientX - brushPosition.x);
      clickOffset.y = (event.clientY - brushPosition.y);
    } else {
      clickOffset.x = (Math.floor(brushDriverRef.current.offsetWidth / 2) + viewOffsetRef.current.x);
      clickOffset.y = (Math.floor(brushDriverRef.current.offsetHeight / 2) + viewOffsetRef.current.y);
    }

    runBrushAnimation();
    event.stopPropagation();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsMouseDown(true));
    });
  }, [runBrushAnimation]);

  const handleMouseUp = useCallback(() => {
    stopBrushAnimation();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsMouseDown(false));
    });
  }, [stopBrushAnimation]);

  const handleMouseMove = useCallback(({ clientX: x, clientY: y }) => {
    dataRef.current.mousePosition.x = x;
    dataRef.current.mousePosition.y = y;
  }, []);

  const updateDimensions = useCallback(() => {
    if (!viewRef.current) {
      return;
    }

    const { offsetWidth: width, offsetHeight: height } = viewRef.current;
    const [x, y] = getElementOffsets(viewRef.current, document.documentElement);

    setViewSize({ width, height });
    viewOffsetRef.current = { x, y };
  }, []);

  const handleResize = useCallback(debounce(updateDimensions, 300), [updateDimensions]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(viewRef.current);

    return () => resizeObserver.disconnect();
  }, [handleResize]);

  useWindowEventListener('mouseup', handleMouseUp);
  useWindowEventListener('mousemove', handleMouseMove);

  useLayoutEffect(() => { updateDimensions(); }, [updateDimensions]);

  useLayoutEffect(() => {
    const service = new IntersectionObserverService({ root: brushDriverRef.current, ...observerOptions });
    setObserverService(service);

    return () => service.disconnect();
  }, [observerOptions]);

  const observe = useCallback((...args) => observerService.observe(...args), [observerService]);
  const unobserve = useCallback((...args) => observerService.unobserve(...args), [observerService]);

  const renderOptions = useMemo(() => ({
    isMouseDown,
    viewSize,
    brushDriverElement: brushDriverRef.current,
    brushPosition: dataRef.current.brushPosition,
    observe,
    unobserve,
  }), [observe, unobserve, viewSize, isMouseDown]);

  return (
    <div
      ref={viewRef}
      className="intersection-canvas"
      onMouseDown={handleMouseDown}
    >
      <div
        ref={brushDriverRef}
        className="intersection-canvas_brush-driver"
        onMouseDown={handleMouseDown}
      >
        {viewSize && (
          <>
            <div
              style={{
                width: viewSize.width,
                height: viewSize.height,
              }}
              className="intersection-canvas_frame"
              ref={frameRef}
            >
              {canvas(renderOptions)}
            </div>
            {brush(renderOptions)}
          </>
        )}
      </div>
    </div>
  );
});

export default IntersectionCanvas;
