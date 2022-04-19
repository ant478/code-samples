import useRerenderOnEvent from 'src/hooks/useRerenderOnEvent';
import { VIEW_ID as ELEMENT_ID } from 'src/components/App/components/AppScrollbar';

export const COLLAPSED_HEIGHT = 0;
export const EXPANDED_HEIGHT = 120;
export const EXPAND_DIFF = (EXPANDED_HEIGHT - COLLAPSED_HEIGHT);

export default function useFooterHeight() {
  const element = document.getElementById(ELEMENT_ID);

  useRerenderOnEvent('scroll', element);
  useRerenderOnEvent('resize');
  useRerenderOnEvent('scroll-height-change-custom');

  const { scrollTop, clientHeight, scrollHeight } = element;

  const remainingScrollTop = (scrollHeight - clientHeight - scrollTop);

  if (remainingScrollTop >= EXPAND_DIFF) {
    return COLLAPSED_HEIGHT;
  }

  return (COLLAPSED_HEIGHT + EXPAND_DIFF - remainingScrollTop);
}
