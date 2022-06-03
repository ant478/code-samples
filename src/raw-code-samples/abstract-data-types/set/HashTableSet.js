import { ChainedHashTable as _ChainedHashTable } from 'src/raw-code-samples/data-structures/hash-table/ChainedHashTable';

const ChainedHashTable = _ChainedHashTable;

export default class HashTableSet {
  #hash = new ChainedHashTable();

  /**
   * @param {string | number} key
   */
  add(key) {
    if (this.has(key)) {
      throw new Error('HashTableSet: already exists');
    }

    this.#hash.insert(key, true);
  }

  /**
   *
   * @param {string | number} key
   * @returns {boolean}
   */
  has(key) {
    try {
      this.#hash.search(key);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @param {string | number} key
   */
  delete(key) {
    try {
      this.#hash.delete(key);
    } catch {
      throw new Error('HashTableSet: not found');
    }
  }
}

HashTableSet.annotation =
`/**
 * Time complexity:
 *   init - O(1)
 *   add - O(1)
 *   has - O(1)
 *   delete - O(1)
 */
`;
