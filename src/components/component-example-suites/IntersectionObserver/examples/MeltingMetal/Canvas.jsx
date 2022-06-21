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

function animate() {
  if (!this.isAnimating) {
    return;
  }

  const brushSize = (this.brushDriverElement.offsetWidth >> 1);
  const distance = getDistance(
    (this.offsetLeft + (this.offsetWidth >> 1)),
    (this.offsetTop + (this.offsetHeight >> 1)),
    (this.brushPosition.x + brushSize),
    (this.brushPosition.y + brushSize),
  );
  this.heatRate = 3 * Math.max(0, (1.1 - distance / brushSize));

  if (this.heatRate === 0 || !this.isMouseDownRef.current) {
    if (this.temperature === 0 && !this.isIntersecting) {
      this.isAnimating = false;
      return;
    }

    if (this.temperature === 0) {
      requestAnimationFrame(this.animate);
      return;
    }

    if (this.temperature <= MIN_GLOWING_TEMPERATURE) {
      const decrease = 0.2;
      const delta = (-decrease / this.fpsData.fpsCoef);
      this.temperature = Math.max(MIN_TEMPERATURE, (this.temperature + delta));

      requestAnimationFrame(this.animate);
      return;
    }

    const glowingCoef = ((this.temperature - MIN_GLOWING_TEMPERATURE) / GLOWING_RANGE);
    const decrease = (0.2 + glowingCoef);
    const delta = (-decrease / this.fpsData.fpsCoef);

    this.temperature = Math.max(MIN_TEMPERATURE, (this.temperature + delta));

    const metalColor = getMetalColor(this.temperature, this.type);
    this.style.backgroundColor = metalColor;

    if (this.temperature > MIN_GLOWING_TEMPERATURE) {
      this.style.boxShadow = `0 0 ${~~(glowingCoef * 10)}px ${metalColor}`;
      this.style.zIndex = 1;
    } else {
      this.style.removeProperty('box-shadow');
      this.style.removeProperty('z-index');
    }

    requestAnimationFrame(this.animate);
    return;
  }

  const glowingCoef = this.temperature > MIN_GLOWING_TEMPERATURE
    ? ((this.temperature - MIN_GLOWING_TEMPERATURE) / GLOWING_RANGE)
    : 0;
  const increase = (this.isMouseDownRef.current ? (3 + 15 * (1 - glowingCoef)) * this.heatRate : 0);
  const decrease = (0.2 + glowingCoef);
  const delta = ((increase - decrease) / this.fpsData.fpsCoef);

  this.temperature = clamp(this.temperature + delta, MIN_TEMPERATURE, MAX_TEMPERATURE);
  const metalColor = getMetalColor(this.temperature, this.type);

  this.style.backgroundColor = metalColor;

  if (this.temperature > MIN_GLOWING_TEMPERATURE) {
    this.style.boxShadow = `0 0 ${~~(glowingCoef * 10)}px ${metalColor}`;
    this.style.zIndex = 1;
  }

  if (this.temperature >= MIN_LIQUID_TEMPERATURE) {
    this.isLiquid = true;
    this.isAnimating = false;
    this.style.transform = getTransformTranslate(~~(this.viewSizeRef.current.width / 20), this.viewSizeRef.current.height);
    this.style.zIndex = 2;
    this.disapearTimeout = setTimeout(() => this.style.display = 'none', 1000);
    return;
  }

  requestAnimationFrame(this.animate);
}

function handleIntersection({ target, isIntersecting }) {
  target.isIntersecting = isIntersecting;

  if (!target.isIntersecting || target.isLiquid) {
    return;
  }

  if (!target.isAnimating) {
    target.isAnimating = true;
    requestAnimationFrame(target.animate);
  }
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
  const piecesSetRef = useRef(new Set());
  const prevPiecesSetRef = useRef(new Set());
  const elementRef = useRef(null);
  const viewSizeRef = useRef(null);

  isMouseDownRef.current = isMouseDown;
  viewSizeRef.current = viewSize;

  const processNewElement = useCallback((element, index) => {
    element.type = (index % ELEMENT_TYPES_COUNT);
    element.isAnimating = false;
    element.isLiquid = false;
    element.animate = animate.bind(element);
    element.temperature = 0;
    element.heatRate = 0;
    element.style.backgroundColor = getMetalColor(element.temperature, element.type);
    element.isMouseDownRef = isMouseDownRef;
    element.fpsData = fpsData;
    element.viewSizeRef = viewSizeRef;
    element.brushDriverElement = brushDriverElement;
    element.brushPosition = brushPosition;
    element.disapearTimeout = null;

    observe(element, handleIntersection);
  }, [brushDriverElement, brushPosition, fpsData, observe]);

  const processStaleElement = useCallback((element, index) => {
    element.type = (index % ELEMENT_TYPES_COUNT);
  }, []);

  const processOldElement = useCallback((element) => {
    element.isAnimating = false;
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
