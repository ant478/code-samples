import { HUE_RANGE, DEFAULT_HUE } from 'src/consts/hue';

const LOCAL_STORAGE_KEY = 'hue-value';

export function validateHueValue(value) {
  return ~~((HUE_RANGE + (Number(value) || 0)) % HUE_RANGE);
}

export function saveHueValueToLocalStorage(value) {
  localStorage.setItem(LOCAL_STORAGE_KEY, `${validateHueValue(value)}`);
}

export function getHueValueFromLocalStorage() {
  const value = (localStorage.getItem(LOCAL_STORAGE_KEY) ?? DEFAULT_HUE);

  return validateHueValue(value);
}
