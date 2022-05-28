import _SinglyLinkedList from 'src/raw-code-samples/data-structures/linked-list/SinglyLinkedList';

const SinglyLinkedList = _SinglyLinkedList;

export default class SinglyLinkedListStack {
  #list = new SinglyLinkedList();

  push(data) {
    this.#list.insert(data);
  }

  pop() {
    if (this.#list.head === null) {
      throw new Error('SinglyLinkedListQueue: empty');
    }

    const data = this.#list.head.data;

    this.#list.delete(this.#list.head);

    return data;
  }
}

SinglyLinkedListStack.annotation =
`/**
 *  Time complexity:
 *    init - O(1)
 *    enqueue - O(1)
 *    dequeue - O(1)
 */
`;
