export default class ScrollService {
  #handleContentResize = (event) => {
    for (const handler of this.#scrollHeightChangeHandlers) handler(event);
  };

  scrollElement;
  #contentResizeObserver = new ResizeObserver(this.#handleContentResize);
  #scrollHeightChangeHandlers = new Set();

  init(id) {
    this.scrollElement = document.getElementById(id);

    if (this.scrollElement.children.length !== 1) {
      throw new Error(`${this.constructor.name}: scroll element should have exactly one child`);
    }

    this.#contentResizeObserver.observe(this.scrollElement.children[0]);
  }

  addScrollHeightChangeListener(callback) {
    this.#scrollHeightChangeHandlers.add(callback);
  }

  removeScrollHeightChangeListener(callback) {
    this.#scrollHeightChangeHandlers.delete(callback);
  }

  flush() {
    this.#scrollHeightChangeHandlers.clear();
    this.#contentResizeObserver.unobserve(this.scrollElement.children[0]);

    delete this.scrollElement;
  }
}
