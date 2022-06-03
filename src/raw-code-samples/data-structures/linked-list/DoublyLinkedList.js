export default class DoublyLinkedList {
  #head = null;
  #tail = null;

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  /**
   * @param {number} key
   * @param {*} data
   */
  insertHead(key, data) {
    const item = { key, data, prev: null, next: null };

    if (this.#head === null) {
      this.#head = this.#tail = item;
      return;
    }

    item.next = this.#head;
    this.#head.prev = item;
    this.#head = item;
  }

  /**
   * @param {number} key
   * @param {*} data
   */
  insertTail(key, data) {
    const item = { key, data, prev: null, next: null };

    if (this.#tail === null) {
      this.#tail = this.#head = item;
      return;
    }

    item.prev = this.#tail;
    this.#tail.next = item;
    this.#tail = item;
  }

  /**
   * @param {{ key: number, data: * }} item
   */
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

  /**
   * @param {number} key
   * @returns {{ key: number, data: * }}
   */
  searchHead(key) {
    let item = this.#head;

    while (item !== null) {
      if (item.key === key) {
        return item;
      }

      item = item.next;
    }

    throw new Error('DoublyLinkedList: not found');
  }

  /**
   * @param {number} key
   * @returns {{ key: number, data: * }}
   */
  searchTail(key) {
    let item = this.#tail;

    while (item !== null) {
      if (item.key === key) {
        return item;
      }

      item = item.prev;
    }

    throw new Error('DoublyLinkedList: not found');
  }
}

DoublyLinkedList.annotation =
`/**
 * Time complexity:
 *   init - O(1)
 *   insert - O(1)
 *   search - O(n)
 *   delete - O(1)
 */
`;
