import React, {
  memo,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
} from 'react';
import Circular2dHashTable, {
  toHash,
} from 'src/services/Circular2dHashTable';
import useAnimationCycle from 'src/hooks/useAnimationCycle';
import { getTransformTranslate } from 'src/helpers/css';
import {
  MIN_GLOWING_TEMPERATURE,
  MIN_LIQUID_TEMPERATURE,
  ELEMENT_TYPES_COUNT,
} from './constants';
import {
  getMetalColor,
  calculatePiecesData,
  getSharableTypedArray,
} from './helpers';

const Canvas = memo(({
  isMouseDown,
  viewWidth,
  viewHeight,
  brushPosition,
  brushDriverElement,
  observe,
  unobserve,
}) => {
  const viewWidthRef = useRef(viewWidth);
  const viewHeightRef = useRef(viewHeight);
  const brushPositionRef = useRef(brushPosition);
  const brushDriverElementRef = useRef(brushDriverElement);

  viewWidthRef.current = viewWidth;
  viewHeightRef.current = viewHeight;
  brushPositionRef.current = brushPosition;
  brushDriverElementRef.current = brushDriverElement;

  const piecesHashTableRef = useRef(new Circular2dHashTable());
  const isPiecePresentArrayRef = useRef(getSharableTypedArray(Uint8Array, 0));
  const isIntersectingArrayRef = useRef(getSharableTypedArray(Uint8Array, 0));
  const isLiquidArrayRef = useRef(getSharableTypedArray(Uint8Array, 0));
  const offsetTopArrayRef = useRef(getSharableTypedArray(Uint16Array, 0));
  const offsetLeftArrayRef = useRef(getSharableTypedArray(Uint16Array, 0));
  const offsetWidthArrayRef = useRef(getSharableTypedArray(Uint16Array, 0));
  const offsetHeightArrayRef = useRef(getSharableTypedArray(Uint16Array, 0));
  const temperatureArrayRef = useRef(getSharableTypedArray(Float32Array, 0));
  const glowingRangeArrayRef = useRef(getSharableTypedArray(Uint8Array, 0));
  const heatRateArrayRef = useRef(getSharableTypedArray(Float32Array, 0));
  const brushDataRef = useRef(getSharableTypedArray(Int16Array, 3));
  const elementRef = useRef(null);
  const temperatureWorkersRef = useRef([]);
  const heatRateWorkersRef = useRef([]);

  const animateBrushData = useCallback(() => {
    brushDataRef.current[0] = brushPositionRef.current.x;
    brushDataRef.current[1] = brushPositionRef.current.y;
    brushDataRef.current[2] = (brushDriverElementRef.current.offsetWidth >> 1);
  }, []);

  const animatePieces = useCallback(() => {
    for (const element of piecesHashTableRef.current) {
      const index = element.index;

      if (isLiquidArrayRef.current[index]) continue;
      if (temperatureArrayRef.current[index] === 0 && heatRateArrayRef.current[index] === 0) continue;

      const metalColor = getMetalColor(temperatureArrayRef.current[index], element.type);

      element.style.backgroundColor = metalColor;

      if (temperatureArrayRef.current[index] > MIN_GLOWING_TEMPERATURE) {
        element.style.boxShadow = `0 0 ${glowingRangeArrayRef.current[index]}px ${metalColor}`;
        element.style.zIndex = 2;
      } else {
        element.style.boxShadow = 'none';
        element.style.zIndex = 1;
      }

      if (temperatureArrayRef.current[index] >= MIN_LIQUID_TEMPERATURE) {
        isLiquidArrayRef.current[index] = 1;
        element.style.transform = getTransformTranslate(viewWidthRef.current >> 5, viewHeightRef.current);
        element.style.zIndex = 3;
        element.disapearTimeout = setTimeout(() => element.style.display = 'none', 1000);
      }
    }
  }, []);

  const [runPiecesAnimationCycle] = useAnimationCycle(animatePieces);
  const [runBrushDataAnimation] = useAnimationCycle(animateBrushData);

  const handleIntersection = useCallback(({ target, isIntersecting }) => {
    isIntersectingArrayRef.current[target.index] = Boolean(isIntersecting);
  }, []);

  const processNewElement = useCallback((element, index) => {
    element.className = 'melting-metal-canvas_piece';
    element.index = index;
    element.type = (index % ELEMENT_TYPES_COUNT);
    isLiquidArrayRef.current[index] = 0;
    isIntersectingArrayRef.current[index] = 0;
    temperatureArrayRef.current[index] = 0;
    glowingRangeArrayRef.current[index] = 0;
    heatRateArrayRef.current[index] = 0;
    isPiecePresentArrayRef.current[index] = 1;
    element.style.backgroundColor = getMetalColor(temperatureArrayRef.current[index], element.type);
    element.disapearTimeout = null;

    observe(element, handleIntersection);
  }, [observe, handleIntersection]);

  const processStaleElement = useCallback((element, index) => {
    isPiecePresentArrayRef.current[index] = 1;
  }, []);

  const processOldElement = useCallback((element, index) => {
    isPiecePresentArrayRef.current[index] = 0;
    clearTimeout(element.disapearTimeout);

    unobserve(element, handleIntersection);
  }, [unobserve, handleIntersection]);

  const appendPiecesToElement = useCallback(() => {
    const fragment = document.createDocumentFragment();

    for (const element of piecesHashTableRef.current) {
      fragment.appendChild(element);
    }

    elementRef.current.innerHTML = '';
    elementRef.current.appendChild(fragment);
  }, []);

  const updateElementSizeAndPosition = useCallback((element, index, width, height, left, top) => {
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    element.style.left = `${left}px`;
    element.style.top = `${top}px`;

    offsetWidthArrayRef.current[index] = width;
    offsetHeightArrayRef.current[index] = height;
    offsetLeftArrayRef.current[index] = left;
    offsetTopArrayRef.current[index] = top;
  }, []);

  const updateSharedArrays = useCallback(() => {
    const length = piecesHashTableRef.current.length;

    isPiecePresentArrayRef.current = getSharableTypedArray(Uint8Array, length);
    offsetTopArrayRef.current = getSharableTypedArray(Uint16Array, length);
    offsetLeftArrayRef.current = getSharableTypedArray(Uint16Array, length);
    offsetWidthArrayRef.current = getSharableTypedArray(Uint16Array, length);
    offsetHeightArrayRef.current = getSharableTypedArray(Uint16Array, length);
    isLiquidArrayRef.current = getSharableTypedArray(Uint8Array, length, isLiquidArrayRef.current);
    isIntersectingArrayRef.current = getSharableTypedArray(Uint8Array, length, isIntersectingArrayRef.current);
    temperatureArrayRef.current = getSharableTypedArray(Float32Array, length, temperatureArrayRef.current);
    glowingRangeArrayRef.current = getSharableTypedArray(Uint8Array, length, glowingRangeArrayRef.current);
    heatRateArrayRef.current = getSharableTypedArray(Float32Array, length, heatRateArrayRef.current);
  }, []);

  const updateWorkersData = useCallback(() => {
    const workersCount = navigator.hardwareConcurrency
      ? ~~((navigator.hardwareConcurrency - 1) / 2)
      : 1;
    const piecesCountPerWorker = (piecesHashTableRef.current.length / workersCount);

    let offset = 0;

    for (const [index, worker] of temperatureWorkersRef.current.entries()) {
      worker.postMessage({ name: 'setRangeStart', data: Math.round(offset) });
      worker.postMessage({ name: 'setRangeEnd', data: Math.round(offset + piecesCountPerWorker) });
      worker.postMessage({ name: 'setIsPiecePresentArray', data: isPiecePresentArrayRef.current });
      worker.postMessage({ name: 'setTemperatureArray', data: temperatureArrayRef.current });
      worker.postMessage({ name: 'setGlowingRangeArray', data: glowingRangeArrayRef.current });
      worker.postMessage({ name: 'setHeatRateArray', data: heatRateArrayRef.current });
      worker.postMessage({ name: 'setIsLiquidArray', data: isLiquidArrayRef.current });

      offset += index !== temperatureWorkersRef.current.length - 1
        ? piecesCountPerWorker + 1
        : piecesCountPerWorker;
    }

    offset = 0;

    for (const [index, worker] of heatRateWorkersRef.current.entries()) {
      worker.postMessage({ name: 'setBrushData', data: brushDataRef.current });
      worker.postMessage({ name: 'setRangeStart', data: Math.round(offset) });
      worker.postMessage({ name: 'setRangeEnd', data: Math.round(offset + piecesCountPerWorker) });
      worker.postMessage({ name: 'setHeatRateArray', data: heatRateArrayRef.current });
      worker.postMessage({ name: 'setIsPiecePresentArray', data: isPiecePresentArrayRef.current });
      worker.postMessage({ name: 'setIsLiquidArray', data: isLiquidArrayRef.current });
      worker.postMessage({ name: 'setIsIntersectingArray', data: isIntersectingArrayRef.current });
      worker.postMessage({ name: 'setOffsetTopArray', data: offsetTopArrayRef.current });
      worker.postMessage({ name: 'setOffsetLeftArray', data: offsetLeftArrayRef.current });
      worker.postMessage({ name: 'setOffsetWidthArray', data: offsetWidthArrayRef.current });
      worker.postMessage({ name: 'setOffsetHeightArray', data: offsetHeightArrayRef.current });

      offset += index !== temperatureWorkersRef.current.length - 1
        ? piecesCountPerWorker + 1
        : piecesCountPerWorker;
    }
  }, []);

  useLayoutEffect(() => {
    const {
      colsCount,
      rowsCount,
      colWidth,
      rowHeight,
    } = calculatePiecesData(viewWidth, viewHeight);

    const oldColsCount = piecesHashTableRef.current.colsCount;
    const oldRowsCount = piecesHashTableRef.current.rowsCount;
    const unitedRangeColsCount = Math.max(colsCount, oldColsCount);
    const unitedRangeRowsCount = Math.max(rowsCount, oldRowsCount);

    piecesHashTableRef.current.length = (Math.max(colsCount, rowsCount) ** 2);
    piecesHashTableRef.current.colsCount = colsCount;
    piecesHashTableRef.current.rowsCount = rowsCount;

    updateSharedArrays();
    updateWorkersData();

    let offsetX = 0;

    for (let colIndex = 0; colIndex <= unitedRangeColsCount - 1; colIndex++) {
      let offsetY = 0;

      for (let rowIndex = 0; rowIndex <= unitedRangeRowsCount - 1; rowIndex++) {
        const index = toHash(colIndex, rowIndex);

        if (rowIndex >= rowsCount || colIndex >= colsCount) {
          const element = piecesHashTableRef.current.get(colIndex, rowIndex);

          if (element) {
            processOldElement(element, index);
            piecesHashTableRef.current.delete(colIndex, rowIndex);
          }
        } else if (rowIndex < oldRowsCount && colIndex < oldColsCount) {
          const element = piecesHashTableRef.current.get(colIndex, rowIndex);

          if (element) {
            const width = (Math.round(offsetX + colWidth) - Math.round(offsetX));
            const height = (Math.round(offsetY + rowHeight) - Math.round(offsetY));

            processStaleElement(element, index);
            updateElementSizeAndPosition(element, index, width, height, Math.round(offsetX), Math.round(offsetY));
          }
        } else {
          const element = document.createElement('div');

          const width = (Math.round(offsetX + colWidth) - Math.round(offsetX));
          const height = (Math.round(offsetY + rowHeight) - Math.round(offsetY));

          processNewElement(element, index);
          updateElementSizeAndPosition(element, index, width, height, Math.round(offsetX), Math.round(offsetY));
          piecesHashTableRef.current.set(colIndex, rowIndex, element);
        }

        offsetY += rowHeight;
      }

      offsetX += colWidth;
    }

    appendPiecesToElement();
  }, [
    viewWidth,
    viewHeight,
    processNewElement,
    processOldElement,
    processStaleElement,
    appendPiecesToElement,
    updateSharedArrays,
    updateWorkersData,
    updateElementSizeAndPosition,
  ]);

  useEffect(() => {
    const workersCount = navigator.hardwareConcurrency
      ? ~~((navigator.hardwareConcurrency - 1) / 2)
      : 1;

    for (let i = 0; i <= workersCount - 1; i++) {
      temperatureWorkersRef.current.push(
        new Worker(new URL('./temperature.worker.js', import.meta.url)),
      );
      heatRateWorkersRef.current.push(
        new Worker(new URL('./heat-rate.worker.js', import.meta.url)),
      );
    }

    updateWorkersData();

    const temperatureWorkers = temperatureWorkersRef.current;
    const heatRateWorkers = heatRateWorkersRef.current;

    return () => {
      for (const worker of temperatureWorkers) worker.terminate();
      for (const worker of heatRateWorkers) worker.terminate();
    };
  }, [updateWorkersData]);

  useEffect(() => {
    for (const worker of heatRateWorkersRef.current) {
      worker.postMessage({ name: 'setIsMouseDown', data: isMouseDown });
    }
  }, [isMouseDown]);

  useEffect(() => {
    runPiecesAnimationCycle();
    runBrushDataAnimation();
    for (const worker of temperatureWorkersRef.current) worker.postMessage({ name: 'run' });
    for (const worker of heatRateWorkersRef.current) worker.postMessage({ name: 'run' });
  }, [runPiecesAnimationCycle, runBrushDataAnimation]);

  useEffect(() => () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    for (const element of piecesHashTableRef.current) {
      processOldElement(element, element.index);
    }
  }, [processOldElement]);

  return (
    <div
      ref={elementRef}
      className="intersection-observer-example melting-metal-canvas"
    />
  );
});

export default Canvas;
