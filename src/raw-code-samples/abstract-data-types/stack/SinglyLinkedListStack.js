import _SinglyLinkedList from 'src/raw-code-samples/data-structures/linked-list/SinglyLinkedList';

const SinglyLinkedList = _SinglyLinkedList;

export default class SinglyLinkedListStack {
  #list = new SinglyLinkedList();

  /**
   * @param {number} key
   * @param {*} data
   */
  push(key, data) {
    this.#list.insert(key, data);
  }

  /**
   * @returns {[key: number, data: *]}
   */
  pop() {
    if (this.#list.head === null) {
      throw new Error('SinglyLinkedListQueue: empty');
    }

    const { key, data } = this.#list.head;

    this.#list.delete(this.#list.head);

    return [key, data];
  }
}

SinglyLinkedListStack.annotation =
`/**
 * Time complexity:
 *   init - O(1)
 *   push - O(1)
 *   pop - O(1)
 */
`;
