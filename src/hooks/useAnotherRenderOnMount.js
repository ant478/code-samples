import { useState, useEffect } from 'react';

export default function useAnotherRenderOnMount() {
  // eslint-disable-next-line no-unused-vars
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => setIsFirstRender(false), []);
}
