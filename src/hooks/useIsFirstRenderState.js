import { useState, useEffect } from 'react';

export default function useIsFirstRenderState() {
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => setIsFirstRender(false), []);

  return isFirstRender;
}
