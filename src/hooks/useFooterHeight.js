import useScrollTop from 'src/hooks/useScrollTop';
import useClientHeight from 'src/hooks/useClientHeight';
import { VIEW_ID as ELEMENT_ID } from 'src/components/App/components/AppScrollbar';

export const COLLAPSED_HEIGHT = 0;
export const EXPANDED_HEIGHT = 120;
export const EXPAND_DIFF = (EXPANDED_HEIGHT - COLLAPSED_HEIGHT);

export default function useFooterHeight() {
  const element = document.getElementById(ELEMENT_ID);
  const scrollTop = useScrollTop(element);
  const clientHeight = useClientHeight(element);
  const remainingScrollTop = (element.scrollHeight - clientHeight - scrollTop);

  if (remainingScrollTop >= EXPAND_DIFF) {
    return COLLAPSED_HEIGHT;
  }

  return (COLLAPSED_HEIGHT + EXPAND_DIFF - remainingScrollTop);
}
