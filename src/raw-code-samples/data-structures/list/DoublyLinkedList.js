export default class DoublyLinkedList {
  #head = null;
  #tail = null;

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  insertHead(dataItem) {
    const item = { dataItem, prev: null, next: null };

    if (this.#head === null) {
      this.#head = this.#tail = item;
      return;
    }

    item.next = this.#head;
    this.#head.prev = item;
    this.#head = item;
  }

  insertTail(dataItem) {
    const item = { dataItem, prev: null, next: null };

    if (this.#tail === null) {
      this.#tail = this.#head = item;
      return;
    }

    item.prev = this.#tail;
    this.#tail.next = item;
    this.#tail = item;
  }

  delete(listItem) {
    if (this.#head === null) {
      return;
    }

    if (listItem === this.#head) {
      this.#head = listItem.next;
    }

    if (listItem === this.#tail) {
      this.#tail = listItem.prev;
    }

    if (listItem.next) {
      listItem.next.prev = listItem.prev;
    }

    if (listItem.prev) {
      listItem.prev.next = listItem.next;
    }
  }

  searchHead(dataItem) {
    let listItem = this.#head;

    while (listItem !== null) {
      if (listItem.dataItem === dataItem) {
        return listItem;
      }

      listItem = listItem.next;
    }

    throw new Error('SinglyLinkedListItem: not found');
  }

  searchTail(dataItem) {
    let listItem = this.#tail;

    while (listItem !== null) {
      if (listItem.dataItem === dataItem) {
        return listItem;
      }

      listItem = listItem.prev;
    }

    throw new Error('SinglyLinkedListItem: not found');
  }
}
