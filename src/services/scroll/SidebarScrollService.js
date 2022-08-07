import { getElementOffsets } from 'src/helpers/dom';
import ScrollService from 'src/services/scroll/ScrollService';

const OFFSET = 10; // 0.625em

export default class SidebarScrollService extends ScrollService {
  scrollToElement(element) {
    const scrollTop = getElementOffsets(element, this.scrollElement)[1];

    this.scrollToPosition(scrollTop);
  }

  scrollToPosition(scrollTop) {
    this.scrollElement.scrollTop = (scrollTop - OFFSET);
  }
}
