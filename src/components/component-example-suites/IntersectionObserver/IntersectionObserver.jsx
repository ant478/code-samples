import React, {
  memo,
  useCallback,
  useRef,
} from 'react';
import invoke from 'lodash/invoke';
import ControlButton from 'src/components/ControlButton';
import FullscreenOverlay from 'src/components/FullscreenOverlay';
import IntersectionCanvas from 'src/components/IntersectionCanvas';
import FpsMeter from 'src/components/FpsMeter';
import * as examples from './examples';

const defaultObserverOptions = {};

const IntersectionObserver = memo(() => {
  const overlayControlsRef = useRef({});
  const handleRunClick = useCallback(() => invoke(overlayControlsRef.current, 'show'), []);

  const { Canvas, Brush, observerOptions = defaultObserverOptions } = Object.values(examples)[0];

  return (
    <div>
      <ControlButton
        onClick={handleRunClick}
        icon="▶"
      >
        Run
      </ControlButton>
      <FullscreenOverlay controls={overlayControlsRef.current}>
        <div className="intersection-observer-example">
          <FpsMeter className="intersection-observer-example_fps-meter-mix" />
          <IntersectionCanvas
            observerOptions={observerOptions}
            canvas={(options) => (<Canvas {...options} />)}
            brush={(options) => (<Brush {...options} />)}
          />
        </div>
      </FullscreenOverlay>
    </div>
  );
});

export default IntersectionObserver;
