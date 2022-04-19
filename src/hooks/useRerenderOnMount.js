import { useState, useEffect } from 'react';

export default function useRerenderOnMount() {
  const [, setIsFirstRender] = useState(true);

  useEffect(() => setIsFirstRender(false), []);
}
