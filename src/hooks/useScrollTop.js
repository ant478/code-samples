import { useEffect, useCallback, useState } from 'react';

export default function useScrollTop(element) {
  const [scrollTop, setScrollTop] = useState(element.scrollTop);
  const handler = useCallback(
    () => setScrollTop(element.scrollTop),
    [element],
  );

  useEffect(() => {
    element.addEventListener('scroll', handler);

    return () => {
      element.removeEventListener('scroll', handler);
    };
  }, [element, handler]);

  return scrollTop;
}
