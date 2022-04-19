import useRerenderOnEvent from 'src/hooks/useRerenderOnEvent';
import { VIEW_ID as ELEMENT_ID } from 'src/components/App/components/AppScrollbar';

export const COLLAPSED_HEIGHT = 62;
export const EXPANDED_HEIGHT = 62;
export const EXPAND_DIFF = (EXPANDED_HEIGHT - COLLAPSED_HEIGHT);

export default function useHeaderHeight() {
  const element = document.getElementById(ELEMENT_ID);

  useRerenderOnEvent('scroll', element);

  const { scrollTop } = element;

  if (scrollTop >= EXPAND_DIFF) {
    return COLLAPSED_HEIGHT;
  }

  return (COLLAPSED_HEIGHT + EXPAND_DIFF - scrollTop);
}
