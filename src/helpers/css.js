export const getTransformTranslate = (x, y) => `translate(${x}px, ${y}px)`;
export const getRgbColor = (r, g, b, a) => (
  a !== undefined ? `rgba(${r},${g},${b},${a})` : `rgb(${r},${g},${b})`
);
