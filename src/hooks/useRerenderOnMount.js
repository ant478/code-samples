import { useState, useLayoutEffect } from 'react';

export default function useRerenderOnMount() {
  const [, setIsFirstRender] = useState(true);

  useLayoutEffect(() => setIsFirstRender(false), []);
}
