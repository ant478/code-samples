export default class ScrollService {
  scrollElement = null;

  init(id) {
    this.scrollElement = document.getElementById(id);
  }

  flush() {
    delete this.scrollElement;
  }
}
