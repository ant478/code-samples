import useScrollTop from 'src/hooks/useScrollTop';

export const COLLAPSED_HEIGHT = 34;
export const EXPANDED_HEIGHT = 80;
export const EXPAND_DIFF = (EXPANDED_HEIGHT - COLLAPSED_HEIGHT);

export default function useHeaderHeight() {
  const scrollTop = useScrollTop(document.documentElement);

  if (scrollTop >= EXPAND_DIFF) {
    return COLLAPSED_HEIGHT;
  }

  return (COLLAPSED_HEIGHT + EXPAND_DIFF - scrollTop)
};
