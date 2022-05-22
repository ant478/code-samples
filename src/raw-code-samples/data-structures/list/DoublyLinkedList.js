export default class DoublyLinkedList {
  #head = null;
  #tail = null;

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  insertHead(data) {
    const item = { data, prev: null, next: null };

    if (this.#head === null) {
      this.#head = this.#tail = item;
      return;
    }

    item.next = this.#head;
    this.#head.prev = item;
    this.#head = item;
  }

  insertTail(data) {
    const item = { data, prev: null, next: null };

    if (this.#tail === null) {
      this.#tail = this.#head = item;
      return;
    }

    item.prev = this.#tail;
    this.#tail.next = item;
    this.#tail = item;
  }

  delete(item) {
    if (this.#head === null) {
      return;
    }

    if (item === this.#head) {
      this.#head = item.next;
    }

    if (item === this.#tail) {
      this.#tail = item.prev;
    }

    if (item.next) {
      item.next.prev = item.prev;
    }

    if (item.prev) {
      item.prev.next = item.next;
    }
  }

  searchHead(data) {
    let item = this.#head;

    while (item !== null) {
      if (item.data === data) {
        return item;
      }

      item = item.next;
    }

    throw new Error('DoublyLinkedList: not found');
  }

  searchTail(data) {
    let item = this.#tail;

    while (item !== null) {
      if (item.data === data) {
        return item;
      }

      item = item.prev;
    }

    throw new Error('DoublyLinkedList: not found');
  }
}

DoublyLinkedList.annotation =
`/**
 *  Time complexity:
 *    init - O(1)
 *    head - O(1)
 *    tail - O(1)
 *    insertHead / insertTail - O(1)
 *    searchHead / searchTail - O(n)
 *    delete O(1)
 */
`;
