import { useEffect, useCallback, useState } from 'react';

export default function useScrollTop(element) {
  const [scrollTop, setScrollTop] = useState(element.scrollTop);
  const handler = useCallback(
    () => setScrollTop(element.scrollTop),
    [element],
  );

  useEffect(() => {
    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, [handler]);

  return scrollTop;
}
