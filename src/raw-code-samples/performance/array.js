export function createArrayWith100ItemsWithConstructor() {
  const result = new Array(100);

  for (let i = 0; i <= 99; i++) {
    result[i] = (100 - i);
  }

  return result;
}

export function createArrayWith100ItemsWithPush() {
  const result = [];

  for (let i = 0; i <= 99; i++) {
    result.push(100 - i);
  }

  return result;
}
