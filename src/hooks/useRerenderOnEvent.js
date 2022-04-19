import { useEffect, useReducer } from 'react';

const reducer = (n) => n + 1;

export default function useRerenderOnEvent(event, target = window) {
  const [, trigger] = useReducer(reducer, 0);

  useEffect(() => {
    target.addEventListener(event, trigger);

    return () => {
      target.removeEventListener(event, trigger);
    };
  }, [target, event]);
}
