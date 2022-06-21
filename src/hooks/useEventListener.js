import { useEffect } from 'react';

export default function useEventListener(target, event, callback) {
  useEffect(() => {
    target.addEventListener(event, callback);
    return () => target.removeEventListener(event, callback);
  }, [target, event, callback]);
}

export const useWindowEventListener = (event, callback) => useEventListener(window, event, callback);
