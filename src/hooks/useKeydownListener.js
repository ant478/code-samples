import { useEffect, useCallback } from 'react';
import { ESC_KEY_CODE } from 'src/consts/key-codes';

export default function useKeydownListener(keyCode, callback) {
  const handleKeyDown = useCallback((event) => {
    if (event.keyCode === keyCode) {
      callback();
    }
  }, [callback, keyCode]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}

export const useEscKeydownListener = (callback) => useKeydownListener(ESC_KEY_CODE, callback);
