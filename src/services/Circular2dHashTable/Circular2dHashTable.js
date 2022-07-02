import { toHash } from './helpers';

export default class Circular2dHashTable {
  table = [];
  colsCount = 0;
  rowsCount = 0;

  constructor({ table = [], colsCount = 0, rowsCount = 0 } = {}) {
    this.table = table;
    this.colsCount = colsCount;
    this.rowsCount = rowsCount;
  }

  get length() {
    return this.table.length;
  }

  set length(newLength) {
    this.table.length = newLength;
  }

  get(colIndex, rowIndex) {
    return this.table[toHash(colIndex, rowIndex)];
  }

  has(colIndex, rowIndex) {
    return (toHash(colIndex, rowIndex) in this.table);
  }

  set(colIndex, rowIndex, value) {
    this.table[toHash(colIndex, rowIndex)] = value;
  }

  delete(colIndex, rowIndex) {
    delete this.table[toHash(colIndex, rowIndex)];
  }

  [Symbol.iterator]() {
    return this.#makeIterator((index) => this.table[index]);
  }

  #makeIterator(getValue) {
    const length = this.table.length;

    return {
      index: 0,
      next() {
        let value;

        while (value === undefined && this.index < length) {
          value = getValue(this.index++);
        }

        return (value !== undefined ? { value } : { done: true });
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  }
}
