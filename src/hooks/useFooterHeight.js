import { useEffect, useCallback, useState } from 'react';
import { appScrollbarService } from 'src/services/scroll';
import useEventListener from 'src/hooks/useEventListener';

export const COLLAPSED_HEIGHT = 0;
export const EXPANDED_HEIGHT = 120;
export const EXPAND_DIFF = (EXPANDED_HEIGHT - COLLAPSED_HEIGHT);

export default function useFooterHeight() {
  const [footerHeight, setFooterHeight] = useState(COLLAPSED_HEIGHT);
  const scrollElement = appScrollbarService.scrollElement;

  const updateHeight = useCallback(() => {
    const { scrollHeight, clientHeight, scrollTop } = scrollElement;
    const remainingScrollTop = (scrollHeight - clientHeight - scrollTop);

    const height = remainingScrollTop >= EXPAND_DIFF
      ? COLLAPSED_HEIGHT
      : COLLAPSED_HEIGHT + EXPAND_DIFF - remainingScrollTop;

    setFooterHeight(height);
  }, [scrollElement]);

  useEffect(() => { updateHeight(); }, [updateHeight]);

  useEventListener(scrollElement, 'scroll', updateHeight);

  useEffect(() => {
    const observer = new ResizeObserver(updateHeight);
    observer.observe(scrollElement);

    return () => observer.disconnect();
  }, [scrollElement, updateHeight]);

  useEffect(() => {
    appScrollbarService.addScrollHeightChangeListener(updateHeight);
    return () => appScrollbarService.removeScrollHeightChangeListener(updateHeight);
  }, [updateHeight]);

  return footerHeight;
}
