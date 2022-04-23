import { getElementOffsetTop } from 'src/helpers/dom';
import ScrollService from 'src/services/scroll/ScrollService';

export default class SidebarScrollService extends ScrollService {
  scrollToElement(element) {
    const scrollTop = getElementOffsetTop(element, this.scrollElement);

    this.scrollToPosition(scrollTop);
  }

  scrollToPosition(scrollTop) {
    this.scrollElement.scrollTop = scrollTop;
  }
}
