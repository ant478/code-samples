import clamp from 'lodash/clamp';
import { VIEW_ID as APP_SCROLL_ELEMENT_ID } from 'src/components/App/components/AppScrollbar';
import {
  EXPAND_DIFF as HEADER_EXPAND_DIFF,
  COLLAPSED_HEIGHT as HEADER_COLLAPSED_HEIGHT,
} from 'src/hooks/useHeaderHeight';
import { EXPAND_DIFF as FOOTER_EXPAND_DIFF } from 'src/hooks/useFooterHeight';
import { getElementOffsetTop } from 'src/helpers/dom';

const OFFSET = 32; // 2em

let appScrollElement;
export function getAppScrollElement() {
  return appScrollElement || (appScrollElement = document.getElementById(APP_SCROLL_ELEMENT_ID));
}

export function updateAppScrollPositionAfterLocationChange() {
  const scrollElement = getAppScrollElement();

  if (!scrollElement) {
    return;
  }

  scrollElement.scrollTop = Math.min(scrollElement.scrollTop, HEADER_EXPAND_DIFF);
}

export function scrollAppToElement(element) {
  const scrollElement = getAppScrollElement();

  if (!scrollElement) {
    return;
  }

  const { scrollHeight, clientHeight } = scrollElement;

  scrollElement.scrollTop = clamp(
    (getElementOffsetTop(element, scrollElement) - HEADER_COLLAPSED_HEIGHT - OFFSET),
    HEADER_EXPAND_DIFF,
    scrollHeight - clientHeight - FOOTER_EXPAND_DIFF,
  );
}
