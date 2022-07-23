const LOCAL_STORAGE_KEY = 'hue-value';
const DEFAULT_HUE = 340;

function validateValue(value) {
  return (Number(value) || 0) % 360;
}

export function saveHueValueToLocalStorage(value) {
  localStorage.setItem(LOCAL_STORAGE_KEY, `${validateValue(value)}`);
}

export function getHueValueFromLocalStorage() {
  const value = localStorage.getItem(LOCAL_STORAGE_KEY) ?? DEFAULT_HUE;

  return validateValue(value);
}
