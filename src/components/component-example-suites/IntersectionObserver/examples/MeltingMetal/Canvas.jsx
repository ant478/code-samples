import clamp from 'lodash/clamp';
import React, {
  memo,
  useRef,
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback,
} from 'react';
import useFps from 'src/hooks/useFps';
import useAnimationCycle from 'src/hooks/useAnimationCycle';
import { getTransformTranslate } from 'src/helpers/css';
import {
  MIN_GLOWING_TEMPERATURE,
  MIN_LIQUID_TEMPERATURE,
  GLOWING_RANGE,
  MIN_TEMPERATURE,
  MAX_TEMPERATURE,
  ELEMENT_TYPES_COUNT,
} from './constants';
import {
  getMetalColor,
  getDistance,
} from './helpers';

const APPROXIMATE_PIECES_COUNT = 5000;

function handleIntersection({ target, isIntersecting }) {
  target.isIntersecting = isIntersecting;
}

const Canvas = memo(({
  isMouseDown,
  viewSize,
  brushPosition,
  brushDriverElement,
  observe,
  unobserve,
}) => {
  const fpsData = useFps(100);
  const isMouseDownRef = useRef(isMouseDown);
  const viewSizeRef = useRef(viewSize);
  const brushPositionRef = useRef(brushPosition);
  const brushDriverElementRef = useRef(brushDriverElement);
  const piecesSetRef = useRef(new Set());
  const prevPiecesSetRef = useRef(new Set());
  const elementRef = useRef(null);
  const fpsDataRef = useRef(fpsData);

  isMouseDownRef.current = isMouseDown;
  viewSizeRef.current = viewSize;
  brushPositionRef.current = brushPosition;
  brushDriverElementRef.current = brushDriverElement;
  fpsDataRef.current = fpsData;

  const animatePieces = useCallback(() => {
    for (const element of piecesSetRef.current) {
      if (element.isLiquid) continue;
      if (element.temperature === 0 && (!element.isIntersecting || !isMouseDownRef.current)) continue;

      const brushSize = (brushDriverElementRef.current.offsetWidth >> 1);
      const distance = getDistance(
        (element.offsetLeft + (element.offsetWidth >> 1)),
        (element.offsetTop + (element.offsetHeight >> 1)),
        (brushPositionRef.current.x + brushSize),
        (brushPositionRef.current.y + brushSize),
      );
      element.heatRate = 3 * Math.max(0, (1.1 - distance / brushSize));

      if (element.heatRate === 0 || !isMouseDownRef.current) {
        if (element.temperature === 0) {
          continue;
        }

        if (element.temperature <= MIN_GLOWING_TEMPERATURE) {
          const decrease = 0.2;
          const delta = (-decrease / fpsDataRef.current.fpsCoef);
          element.temperature = Math.max(MIN_TEMPERATURE, (element.temperature + delta));
          continue;
        }

        const glowingCoef = ((element.temperature - MIN_GLOWING_TEMPERATURE) / GLOWING_RANGE);
        const decrease = (0.2 + glowingCoef);
        const delta = (-decrease / fpsDataRef.current.fpsCoef);

        element.temperature = Math.max(MIN_TEMPERATURE, (element.temperature + delta));

        const metalColor = getMetalColor(element.temperature, element.type);
        element.style.backgroundColor = metalColor;

        if (element.temperature > MIN_GLOWING_TEMPERATURE) {
          element.style.boxShadow = `0 0 ${~~(glowingCoef * 10)}px ${metalColor}`;
          element.style.zIndex = 1;
        } else {
          element.style.boxShadow = 'none';
          element.style.zIndex = 0;
        }

        continue;
      }

      const glowingCoef = element.temperature > MIN_GLOWING_TEMPERATURE
        ? ((element.temperature - MIN_GLOWING_TEMPERATURE) / GLOWING_RANGE)
        : 0;
      const increase = (isMouseDownRef.current ? (3 + 15 * (1 - glowingCoef)) * element.heatRate : 0);
      const decrease = (0.2 + glowingCoef);
      const delta = ((increase - decrease) / fpsDataRef.current.fpsCoef);

      element.temperature = clamp(element.temperature + delta, MIN_TEMPERATURE, MAX_TEMPERATURE);
      const metalColor = getMetalColor(element.temperature, element.type);

      element.style.backgroundColor = metalColor;

      if (element.temperature > MIN_GLOWING_TEMPERATURE) {
        element.style.boxShadow = `0 0 ${~~(glowingCoef * 10)}px ${metalColor}`;
        element.style.zIndex = 1;
      }

      if (element.temperature >= MIN_LIQUID_TEMPERATURE) {
        element.isLiquid = true;
        element.style.transform = getTransformTranslate(~~(viewSizeRef.current.width / 20), viewSizeRef.current.height);
        element.style.zIndex = 2;
        element.disapearTimeout = setTimeout(() => element.style.display = 'none', 1000);
      }
    }
  }, []);

  useAnimationCycle(animatePieces, true);

  const processNewElement = useCallback((element, index) => {
    element.type = (index % ELEMENT_TYPES_COUNT);
    element.isLiquid = false;
    element.temperature = 0;
    element.heatRate = 0;
    element.style.backgroundColor = getMetalColor(element.temperature, element.type);
    element.disapearTimeout = null;

    observe(element, handleIntersection);
  }, [observe]);

  const processStaleElement = useCallback((element, index) => {
    element.type = (index % ELEMENT_TYPES_COUNT);
  }, []);

  const processOldElement = useCallback((element) => {
    clearTimeout(element.disapearTimeout);

    unobserve(element, handleIntersection);
  }, [unobserve]);

  const cols = useMemo(() => {
    const { width, height } = viewSize;

    const approximateElementWidth = Math.sqrt((width * height) / APPROXIMATE_PIECES_COUNT);

    const colsCount = Math.floor(width / approximateElementWidth);
    const rowsCount = (Math.floor(height / approximateElementWidth) - Math.floor(height / approximateElementWidth) % ELEMENT_TYPES_COUNT + 1);
    const colWidth = (width / colsCount);
    const rowHeight = (height / rowsCount);

    const cells = new Array(colsCount);
    let offsetX = 0;
    let roundedOffsetX = 0;

    for (let colIndex = 0; colIndex <= colsCount - 1; colIndex++) {
      let offsetY = 0;
      let roundedOffsetY = 0;
      cells[colIndex] = new Array(rowsCount);

      for (let rowIndex = 0; rowIndex <= rowsCount - 1; rowIndex++) {
        cells[colIndex][rowIndex] = {
          width: (Math.round(offsetX + colWidth) - roundedOffsetX),
          height: (Math.round(offsetY + rowHeight) - roundedOffsetY),
          left: roundedOffsetX,
          top: roundedOffsetY,
        };

        offsetY += rowHeight;
        roundedOffsetY = Math.round(offsetY);
      }

      offsetX += colWidth;
      roundedOffsetX = Math.round(offsetX);
    }

    return cells;
  }, [viewSize]);

  useLayoutEffect(() => {
    const piecesSet = new Set();
    piecesSetRef.current = piecesSet;

    for (const element of elementRef.current.children) piecesSet.add(element);

    return () => {
      prevPiecesSetRef.current = piecesSet;
    };
  }, [cols]);

  useLayoutEffect(() => {
    let index = 0;

    for (const element of piecesSetRef.current) {
      if (!prevPiecesSetRef.current.has(element)) processNewElement(element, index++);
      else processStaleElement(element, index++);
    }

    for (const element of prevPiecesSetRef.current) {
      if (!piecesSetRef.current.has(element)) processOldElement(element);
    }
  }, [processNewElement, processStaleElement, processOldElement, cols]);

  useEffect(
    () => () => { for (const element of piecesSetRef.current) processOldElement(element); },
    [processOldElement],
  );

  return (
    <div
      ref={elementRef}
      className="intersection-observer-example melting-metal-canvas"
    >
      {cols.map((rows, colIndex) => rows.map((style, rowIndex) => (
        <div
          key={`${colIndex}_${rowIndex}`}
          className="melting-metal-canvas_piece"
          style={style}
        />
      )))}
    </div>
  );
});

export default Canvas;
