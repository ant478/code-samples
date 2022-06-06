import _SinglyLinkedList from 'src/raw-code-samples/data-structures/linked-list/SinglyLinkedList';

const SinglyLinkedList = _SinglyLinkedList;

export default class IterableSinglyLinkedList extends SinglyLinkedList {
  [Symbol.iterator]() {
    return this.entries();
  }

  entries() {
    return this.#makeIterator(({ key, data }) => [key, data]);
  }

  keys() {
    return this.#makeIterator(({ key }) => key);
  }

  values() {
    return this.#makeIterator(({ data }) => data);
  }

  static entries(instance) {
    return [...instance.entries()];
  }

  static keys(instance) {
    return [...instance.keys()];
  }

  static values(instance) {
    return [...instance.values()];
  }

  #makeIterator(getValue) {
    return {
      _nextItem: this.head,
      next() {
        if (this._nextItem === null) {
          return { done: true };
        }

        const value = getValue(this._nextItem);
        this._nextItem = this._nextItem.next;

        return { value };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  }
}

IterableSinglyLinkedList.annotation = '';
