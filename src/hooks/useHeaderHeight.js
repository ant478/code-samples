import { useEffect, useCallback, useState } from 'react';
import { appScrollbarService } from 'src/services/scroll';

export const COLLAPSED_HEIGHT = 62;
export const EXPANDED_HEIGHT = 62;
export const EXPAND_DIFF = (EXPANDED_HEIGHT - COLLAPSED_HEIGHT);

export default function useHeaderHeight() {
  const [headerHeight, setHeaderHeight] = useState(COLLAPSED_HEIGHT);
  const scrollElement = appScrollbarService.scrollElement;

  const updateHeight = useCallback(() => {
    const { scrollTop } = scrollElement;

    const height = scrollTop >= EXPAND_DIFF
      ? COLLAPSED_HEIGHT
      : COLLAPSED_HEIGHT + EXPAND_DIFF - scrollTop;

    setHeaderHeight(height);
  }, [scrollElement]);

  useEffect(() => { updateHeight(); }, [updateHeight]);

  useEffect(() => {
    scrollElement.addEventListener('scroll', updateHeight);
    return () => scrollElement.removeEventListener('scroll', updateHeight);
  }, [scrollElement, updateHeight]);

  return headerHeight;
}
