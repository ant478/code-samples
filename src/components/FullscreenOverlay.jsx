import cx from 'classnames';
import React, {
  memo,
  useState,
  useCallback,
  useLayoutEffect,
} from 'react';
import { createPortal } from 'react-dom';
import { useEscKeydownListener } from 'src/hooks/useKeydownListener';
import ControlButton from 'src/components/ControlButton';

const FullscreenOverlay = memo(({
  className,
  controls,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const hide = useCallback(() => setIsVisible(false), []);

  useLayoutEffect(() => {
    if (controls) {
      controls.show = () => setIsVisible(true);
      controls.hide = hide;
    }
  }, [hide, controls]);

  useEscKeydownListener(hide);

  if (!isVisible) {
    return null;
  }

  return createPortal(
    (
      <div className={cx(className, 'fullscreen-overlay')}>
        {children}
        <ControlButton
          className="fullscreen-overlay_close-mix"
          onClick={hide}
        >
          🗙
        </ControlButton>
      </div>
    ),
    document.getElementById('app'),
  );
});

export default FullscreenOverlay;
