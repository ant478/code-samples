import {
  useEffect,
  useRef,
  useCallback,
} from 'react';

export default function useAnimationCycle(callback) {
  const isActive = useRef(false);
  const cycleRef = useRef(null);

  const runAnimationCycle = useCallback(() => {
    isActive.current = true;
    requestAnimationFrame(cycleRef.current);
  }, []);

  const stopAnimationCycle = useCallback(() => {
    isActive.current = false;
  }, []);

  useEffect(() => {
    let isCurrent = true;

    cycleRef.current = () => {
      if (isActive.current && isCurrent) {
        callback();
        requestAnimationFrame(cycleRef.current);
      }
    };

    return () => { isCurrent = false; };
  }, [callback]);

  return [runAnimationCycle, stopAnimationCycle];
}
