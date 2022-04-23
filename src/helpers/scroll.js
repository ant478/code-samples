export function saveScrollPositionDataToSessionStorage(key, scrollTop) {
  const { location: { pathname } } = window;

  sessionStorage.setItem(key, JSON.stringify({ pathname, scrollTop }));
}

export function getScrollPositionDataFromSessionStorage(key) {
  const data = sessionStorage.getItem(key);

  if (!data) {
    const { location: { pathname } } = window;

    return { pathname, scrollTop: 0 };
  }

  return JSON.parse(data);
}
