import { useEffect, useCallback, useState } from 'react';
import { getAppScrollElement } from 'src/helpers/scroll';

export const COLLAPSED_HEIGHT = 0;
export const EXPANDED_HEIGHT = 120;
export const EXPAND_DIFF = (EXPANDED_HEIGHT - COLLAPSED_HEIGHT);

export default function useFooterHeight() {
  const [footerHeight, setFooterHeight] = useState(COLLAPSED_HEIGHT);
  const scrollElement = getAppScrollElement();

  const updateHeight = useCallback(() => {
    const { scrollHeight, clientHeight, scrollTop } = scrollElement;
    const remainingScrollTop = (scrollHeight - clientHeight - scrollTop);

    const height = remainingScrollTop >= EXPAND_DIFF
      ? COLLAPSED_HEIGHT
      : COLLAPSED_HEIGHT + EXPAND_DIFF - remainingScrollTop;

    setFooterHeight(height);
  }, [scrollElement]);

  useEffect(() => { updateHeight(); }, [updateHeight]);

  useEffect(() => {
    scrollElement.addEventListener('scroll', updateHeight);
    return () => scrollElement.removeEventListener('scroll', updateHeight);
  }, [scrollElement, updateHeight]);

  useEffect(() => {
    window.addEventListener('resize', updateHeight);
    window.addEventListener('scroll-height-change-custom', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('scroll-height-change-custom', updateHeight);
    };
  }, [updateHeight]);

  return footerHeight;
}
