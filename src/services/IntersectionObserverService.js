export default class IntersectionObserverService {
  #handlers = new WeakMap();
  #observer;

  constructor(options) {
    this.#observer = new IntersectionObserver(this.#handleIntersection, options);
  }

  disconnect() {
    this.#observer.disconnect();
  }

  observe(element, handler) {
    const handlersForElement = this.#handlers.get(element);

    if (handlersForElement) {
      handlersForElement.add(handler);
      return;
    }

    this.#observer.observe(element);
    this.#handlers.set(element, new Set([handler]));
  }

  unobserve(element, handler) {
    const handlersForElement = this.#handlers.get(element);

    if (!handlersForElement) {
      return;
    }

    if (handlersForElement.has(handler) && handlersForElement.size === 1) {
      this.#observer.unobserve(element);
      this.#handlers.delete(element);
    } else {
      handlersForElement.delete(handler);
    }
  }

  #handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const handlers = this.#handlers.get(entry.target);

      for (const handler of handlers) handler(entry);
    });
  }
}
