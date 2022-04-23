import lodashClamp from 'lodash/clamp';
import {
  COLLAPSED_HEIGHT as HEADER_COLLAPSED_HEIGHT,
  EXPAND_DIFF as HEADER_EXPAND_DIFF,
} from 'src/hooks/useHeaderHeight';
import { EXPAND_DIFF as FOOTER_EXPAND_DIFF } from 'src/hooks/useFooterHeight';
import { getElementOffsetTop } from 'src/helpers/dom';
import ScrollService from 'src/services/scroll/ScrollService';

const OFFSET = 32; // 2em

export default class AppScrollService extends ScrollService {
  updateScrollPositionAfterLocationChange() {
    this.scrollElement.scrollTop = Math.min(this.scrollElement.scrollTop, HEADER_EXPAND_DIFF);
  }

  clampScrollPosition(scrollTop) {
    const { scrollHeight, clientHeight } = this.scrollElement;
    const min = HEADER_EXPAND_DIFF;
    const max = (scrollHeight - clientHeight - FOOTER_EXPAND_DIFF);

    return lodashClamp(scrollTop, min, max);
  }

  scrollToElement(element, options) {
    const scrollTop = (getElementOffsetTop(element, this.scrollElement) - HEADER_COLLAPSED_HEIGHT - OFFSET);

    this.scrollToPosition(scrollTop, options);
  }

  scrollToPosition(scrollTop, { clamp = true } = {}) {
    this.scrollElement.scrollTop = clamp
      ? this.clampScrollPosition(scrollTop)
      : scrollTop;
  }
}
