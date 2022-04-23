import { getElementOffsetTop } from 'src/helpers/dom';
import ScrollService from 'src/services/scroll/ScrollService';

export default class SidebarScrollService extends ScrollService {
  scrollToElement(element) {
    this.scrollElement.scrollTop = getElementOffsetTop(element, this.scrollElement);
  }
}
