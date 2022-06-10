export function isArrayIndex(value) {
  if (typeof value === 'symbol') {
    return false;
  }

  const number = Number(value);
  return (value.length > 0 && !isNaN(number) && isFinite(number) && number >= 0);
}

export class ArrayStartingFromOne extends Array {
  #proxy;

  constructor(...args) {
    super(...args);

    this.#proxy = new Proxy(this, {
      get(target, prop, receiver) {
        if (isArrayIndex(prop)) {
          return Reflect.get(target, prop - 1, receiver);
        }

        const value = Reflect.get(...arguments);

        return (typeof value === 'function' ? value.bind(target) : value);
      },

      set(target, prop, value, receiver) {
        return isArrayIndex(prop)
          ? Reflect.set(target, prop - 1, value, receiver)
          : Reflect.set(...arguments);
      },

      deleteProperty(target, prop) {
        return isArrayIndex(prop)
          ? Reflect.deleteProperty(target, prop - 1)
          : Reflect.deleteProperty(...arguments);
      },

      has(target, prop) {
        return isArrayIndex(prop)
          ? Reflect.has(target, prop - 1)
          : Reflect.has(...arguments);
      },

      ownKeys(target) {
        return [...target.keys(), 'length'].map(String);
      },

      getOwnPropertyDescriptor(target, prop) {
        return isArrayIndex(prop)
          ? Reflect.getOwnPropertyDescriptor(target, prop - 1)
          : Reflect.getOwnPropertyDescriptor(...arguments);
      },
    });

    return this.#proxy;
  }

  indexOf(searchElement, fromIndex) {
    const index = super.indexOf(
      searchElement,
      fromIndex !== undefined ? fromIndex - 1 : undefined
    );

    return (index !== -1 ? index + 1 : index);
  }

  lastIndexOf(searchElement, fromIndex) {
    const index = super.lastIndexOf(
      searchElement,
      fromIndex !== undefined ? fromIndex - 1 : undefined,
    );

    return (index !== -1 ? index + 1 : index);
  }

  findIndex(callback, context) {
    const index = super.findIndex(
      (element, index) => callback(element, index + 1, this.#proxy),
      context,
    );

    return (index !== -1 ? index + 1 : index);
  }

  reduce(callback, initialValue) {
    return super.reduce(
      (acc, element, index) => callback(acc, element, index + 1, this.#proxy),
      initialValue,
    );
  }

  reduceRight(callback, initialValue) {
    return super.reduceRight(
      (acc, element, index) => callback(acc, element, index + 1, this.#proxy),
      initialValue,
    );
  }

  forEach(callback, context) {
    return super.forEach(
      (element, index) => callback(element, index + 1, this.#proxy),
      context,
    );
  }

  filter(callback, context) {
    return super.filter(
      (element, index) => callback(element, index + 1, this.#proxy),
      context,
    );
  }

  every(callback, context) {
    return super.every(
      (element, index) => callback(element, index + 1, this.#proxy),
      context,
    );
  }

  some(callback, context) {
    return super.some(
      (element, index) => callback(element, index + 1, this.#proxy),
      context,
    );
  }

  map(callback, context) {
    return super.map(
      (element, index) => callback(element, index + 1, this.#proxy),
      context,
    );
  }

  flatMap(callback, context) {
    return super.flatMap(
      (element, index) => callback(element, index + 1, this.#proxy),
      context,
    );
  }

  find(callback, context) {
    return super.find(
      (element, index) => callback(element, index + 1, this.#proxy),
      context,
    );
  }

  sort(...args) {
    super.sort(...args);
    return this.#proxy;
  }

  reverse() {
    super.reverse();
    return this.#proxy;
  }

  fill(value, start, end) {
    super.fill(
      value,
      start !== undefined ? start - 1 : undefined,
      end !== undefined ? end - 1 : undefined,
    );

    return this.#proxy;
  }

  includes(searchElement, fromIndex) {
    return super.includes(
      searchElement,
      fromIndex !== undefined ? fromIndex - 1 : undefined,
    );
  }

  slice(start, end) {
    return super.slice(
      start !== undefined ? start - 1 : undefined,
      end !== undefined ? end - 1 : undefined,
    );
  }

  splice(start, ...args) {
    return super.splice(
      start !== undefined ? start - 1 : undefined,
      ...args,
    );
  }

  copyWithin(target, start, end) {
    return super.copyWithin(
      target - 1,
      start !== undefined ? start - 1 : undefined,
      end !== undefined ? end - 1 : undefined,
    );
  }

  concat(...values) {
    return super.concat(...values.map((value) =>
        value instanceof ArrayStartingFromOne
          ? Array.from(value)
          : value,
      )
    );
  }

  #makeIterator(getValue) {
    const length = this.length;

    return {
      index: 1,
      next() {
        if (this.index > length) {
          return { done: true };
        }

        const value = getValue(this.index);
        this.index += 1;

        return { value };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  }

  [Symbol.iterator]() {
    return this.values();
  }

  entries() {
    return this.#makeIterator((index) => ([index, this.#proxy[index]]));
  }

  keys() {
    return this.#makeIterator((index) => index);
  }

  values() {
    return this.#makeIterator((index) => this.#proxy[index]);
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
}

ArrayStartingFromOne.annotation =
`/**
 * const array = new ArrayStartingFromOne();
 *
 * array.push(1,2,3);
 * array[0]; // undefined
 * array[1]; // 1
 * array[2]; // 2
 * array[3]; // 3
 *
 * for (const item of a) {
 *   console.log(item);  // 1,2,3
 * }
 */
`;
