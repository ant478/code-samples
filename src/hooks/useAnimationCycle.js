import {
  useEffect,
  useRef,
  useCallback,
} from 'react';

export default function useAnimationCycle(callback, isInitiallyActive = false) {
  const isActive = useRef(false);
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  const cycle = useCallback(() => {
    if (!isActive.current) return;

    callbackRef.current();
    requestAnimationFrame(cycle);
  }, []);

  const runAnimationCycle = useCallback(() => {
    if (isActive.current) {
      return;
    }

    isActive.current = true;
    requestAnimationFrame(cycle);
  }, [cycle]);

  const stopAnimationCycle = useCallback(() => {
    isActive.current = false;
  }, []);

  useEffect(() => {
    if (isInitiallyActive) runAnimationCycle();
  }, [runAnimationCycle, isInitiallyActive]);

  return [runAnimationCycle, stopAnimationCycle];
}
