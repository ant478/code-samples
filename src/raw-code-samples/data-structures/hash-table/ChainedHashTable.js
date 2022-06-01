import _DoublyLinkedList from 'src/raw-code-samples/data-structures/linked-list/DoublyLinkedList';

const DoublyLinkedList = _DoublyLinkedList;

export class HastTableArray {
  array;
  itemsCount = 0;

  constructor(size) {
    this.array = new Array(size);
  }

  get length() {
    return this.array.length;
  }

  getIndexForKey(key) {
    const str = (typeof key !== 'string' ? key.toString() : key);

    return Math.abs(this.#getStringHash(str + 'salt') % this.length);
  }

  #getStringHash(str) {
    let hash = 0, i, chr;

    if (str.length === 0) return hash;

    for (i = 0; i < str.length; i++) {
      chr = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0;
    }

    return hash;
  }
}

export class ChainedHashTable {
  #table;

  get loadFactor() {
    return (this.itemsCount / this.size);
  }

  get size() {
    return this.#table.length;
  }

  get itemsCount() {
    return this.#table.itemsCount;
  }

  constructor() {
    this.#table = new HastTableArray(16);
  }

  insert(key, data) {
    this.#insert(key, data);
    this.#resizeIfRequired();
  }

  #insert(key, data, table = this.#table) {
    const index = table.getIndexForKey(key);
    let cell = table.array[index];

    if (!cell) {
      cell = new DoublyLinkedList();
      table.array[index] = cell;
    }

    cell.insertHead(key, data);
    table.itemsCount += 1;
  }

  search(key) {
    const index = this.#table.getIndexForKey(key);
    const cell = this.#table.array[index];

    if (!cell) {
      throw new Error('ChainedHashTable: not found');
    }

    let item;

    try {
      item = cell.searchHead(key);
    } catch {
      throw new Error('ChainedHashTable: not found');
    }

    return [item.key, item.data];
  }

  delete(key) {
    const index = this.#table.getIndexForKey(key);
    const cell = this.#table.array[index];

    if (!cell) {
      throw new Error('ChainedHashTable: not found');
    }

    let item;

    try {
      item = cell.searchHead(key);
    } catch {
      throw new Error('ChainedHashTable: not found');
    }

    if (cell.head === item && item.next === null) {
      delete this.#table.array[index];
    } else {
      cell.delete(item);
    }

    this.#table.itemsCount -= 1;
    this.#resizeIfRequired();
  }

  #resizeIfRequired() {
    const isBellowLimit = (this.loadFactor < 0.4 && this.size > 16);
    const isAboveLimit = (this.loadFactor > 0.8);

    if (isBellowLimit || isAboveLimit) {
      const newSize = Math.round(this.size * this.loadFactor / 0.6);
      this.#resize(Math.max(16, newSize));
    }
  }

  #resize(newSize) {
    const newTable = new HastTableArray(newSize);

    for (let i = 0; i <= this.#table.length - 1; i++) {
      if (!this.#table.array[i]) continue;

      let item = this.#table.array[i].head;

      while (item !== null) {
        this.#insert(item.key, item.data, newTable);
        item = item.next;
      }
    }

    this.#table = newTable;
  }
}

ChainedHashTable.annotation =
`/**
 *  Time complexity:
 *    init - O(1)
 *    insert - O(1)
 *    search - O(1)
 *    delete - O(1)
 *    resize - O(n)
 */
`;
