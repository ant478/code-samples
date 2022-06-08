export default class ArrayStack {
  #stack = [];

  /**
   * @param {*} data
   */
  push(data) {
    this.#stack.push(data);
  }

  /**
   * @returns {*}
   */
  pop() {
    if (this.#stack.length === 0) {
      throw new Error('ArrayStack: empty');
    }

    return this.#stack.pop();
  }
}

ArrayStack.annotation =
`/**
 * Time complexity:
 *   init - O(1)
 *   push - O(1)
 *   pop - O(1)
 */
`;
