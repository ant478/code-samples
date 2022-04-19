import { useState, useEffect } from 'react';

export default function useAnotherRenderOnMount() {
  const [, setIsFirstRender] = useState(true);

  useEffect(() => setIsFirstRender(false), []);
}
