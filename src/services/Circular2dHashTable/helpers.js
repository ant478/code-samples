export function toHash(colIndex, rowIndex) {
  const closestBasePoint = ((Math.max(colIndex, rowIndex) + 1) ** 2);

  const number = colIndex > rowIndex
    ? closestBasePoint - (2 * colIndex - rowIndex)
    : closestBasePoint - colIndex;

  return (number - 1);
}

export function fromHash(hash) {
  const number = (hash + 1);
  const probableRowIndex = (Math.ceil(Math.sqrt(number)) - 1);
  const closestBasePoint = ((probableRowIndex + 1) ** 2);
  const distanceToBasePoint = (closestBasePoint - number);

  const colIndex = distanceToBasePoint > probableRowIndex
    ? probableRowIndex
    : distanceToBasePoint;

  const rowIndex = distanceToBasePoint > probableRowIndex
    ? (2 * probableRowIndex - distanceToBasePoint)
    : probableRowIndex;

  return [colIndex, rowIndex];
}
