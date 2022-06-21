import {
  useRef,
  useEffect,
} from 'react';

const ONE_SECOND = 1000;
const EXPECTED_FRAME_RATE = 144;

export default function useFps(interval = ONE_SECOND) {
  const intervalRef = useRef(interval);
  intervalRef.current = interval;

  const timeMarkRef = useRef(performance.now());
  const newTactFpsRef = useRef(0);
  const resultRef = useRef({
    fps: EXPECTED_FRAME_RATE,
    fpsCoef: 1,
  });

  useEffect(() => {
    let isActive = true;

    function tick() {
      if (!isActive) {
        return;
      }

      newTactFpsRef.current++;
      const time = performance.now();

      if (time - timeMarkRef.current > intervalRef.current) {
        resultRef.current.fps = (newTactFpsRef.current / intervalRef.current * ONE_SECOND);
        resultRef.current.fpsCoef = (resultRef.current.fps / EXPECTED_FRAME_RATE);
        newTactFpsRef.current = 0;
        timeMarkRef.current = time;
      }

      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);

    return () => { isActive = false; };
  }, []);

  return resultRef.current;
}
