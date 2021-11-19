import { useEffect, useCallback, useState } from 'react';

export default function useClientHeight(element) {
  const [clientHeight, setClientHeight] = useState(element.clientHeight);
  const handler = useCallback(
    () => setClientHeight(element.clientHeight),
    [element],
  );

  useEffect(() => {
    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, [handler]);

  return clientHeight;
}
