import round from 'lodash/round';
import React, {
  memo,
  useState,
  useEffect,
} from 'react';
import useFps from 'src/hooks/useFps';

const interval = 500;

const FpsMeter = memo(({
  className,
}) => {
  const fpsData = useFps(interval);
  const [fps, setFps] = useState(fpsData.fps);
  const [fpsCoef, setFpsCoef] = useState(fpsData.fpsCoef);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFps(fpsData.fps);
      setFpsCoef(fpsData.fpsCoef);
    }, interval);

    return () => clearInterval(intervalId);
  }, [fpsData.fps, fpsData.fpsCoef]);

  const value = `${fps} fps (${round(fpsCoef, 2)})`;

  return (
    <div className={className}>{value}</div>
  );
});

export default FpsMeter;
