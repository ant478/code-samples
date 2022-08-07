import { getElementOffsets } from 'src/helpers/dom';
import ScrollService from 'src/services/scroll/ScrollService';

export default class HeaderScrollService extends ScrollService {
  scrollToElement(element) {
    const scrollLeft = getElementOffsets(element, this.scrollElement)[0];

    this.scrollToPosition(scrollLeft);
  }

  scrollToPosition(scrollLeft) {
    this.scrollElement.scrollLeft = scrollLeft;
  }
}
