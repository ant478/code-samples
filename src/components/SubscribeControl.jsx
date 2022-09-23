import cx from 'classnames';
import React, {
  memo,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import loadable from '@loadable/component';
import ControlButton from 'src/components/ControlButton';
import SimpleLoader from 'src/components/SimpleLoader';
import VAPID from 'src/keys/VAPID';
import { saveSubscription } from 'src/api/subscription';
import noop from 'lodash/noop';

const BellIcon = loadable(() => import(/* webpackChunkName: "secondary-components" */'src/img/bell.svg?svgr'));

const pushNotificationsServiceWorkerUrl = window.serviceWorkers['push-notifications-service-worker'];
const Notification = (window.Notification || window.mozNotification || window.webkitNotification);

const LOCAL_STORAGE_KEY = 'subscription-id';
const STATE = {
  INITIAL: 'initial',
  UNSUBSCRIBED: 'unsubscribed',
  SUBSCRIBED: 'subscribed',
  DISABLED: 'disabled',
};

const SubscribeControl = memo(({
  className,
}) => {
  const [state, setState] = useState(STATE.INITIAL);
  const stateRef = useRef(state);
  const registrationRef = useRef(null);
  const subscriptionRef = useRef(null);
  const isLockedRef = useRef(true);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  const clearSubscription = useCallback(async () => {
    if (!subscriptionRef.current) return;

    await subscriptionRef.current.unsubscribe().catch(noop);
    subscriptionRef.current = null;
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }, []);

  const init = useCallback(async () => {
    if (Notification.permission === 'denied') {
      setState(STATE.DISABLED);
      return;
    }

    try {
      registrationRef.current = await navigator.serviceWorker.getRegistration(pushNotificationsServiceWorkerUrl);
      subscriptionRef.current = await registrationRef.current.pushManager.getSubscription();

      if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
        await clearSubscription();
      }

      setState(subscriptionRef.current ? STATE.SUBSCRIBED : STATE.UNSUBSCRIBED);
      isLockedRef.current = false;
    } catch {
      setState(STATE.DISABLED);
    }
  }, [clearSubscription]);

  const toggleSubscription = useCallback(async () => {
    if (stateRef.current === STATE.UNSUBSCRIBED) {
      setState(STATE.SUBSCRIBED);

      try {
        subscriptionRef.current = await registrationRef.current.pushManager.subscribe({
          applicationServerKey: VAPID,
          userVisibleOnly: true,
        });
        const subscriptionJson = subscriptionRef.current.toJSON();

        const { data: { id } } = await saveSubscription({
          receiver: 'code-samples',
          endpoint: subscriptionJson.endpoint,
          p256dh: subscriptionJson.keys.p256dh,
          auth: subscriptionJson.keys.auth,
        });

        localStorage.setItem(LOCAL_STORAGE_KEY, id);
      } catch {
        setState(STATE.DISABLED);
        await clearSubscription();
      }

      return;
    }

    if (stateRef.current === STATE.SUBSCRIBED) {
      setState(STATE.UNSUBSCRIBED);
      await clearSubscription();
    }
  }, [clearSubscription]);

  const handleClick = useCallback(async () => {
    if (isLockedRef.current) return;

    try {
      isLockedRef.current = true;

      await toggleSubscription();
    } catch (error) {
      setState(STATE.DISABLED);
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      isLockedRef.current = false;
    }
  }, [toggleSubscription]);

  useEffect(() => { init(); }, [init]);

  const classes = cx('subscribe-control', className, `subscribe-control__state-${state}`);
  const title = (state === STATE.UNSUBSCRIBED ? 'Subscribe for updates' : 'Unsubscribe');

  return (
    <div
      title={state === STATE.DISABLED ? 'Subscription is not available' : ''}
      className={classes}
    >
      <ControlButton
        isDisabled={state === STATE.DISABLED}
        title={title}
        className="subscribe-control_sample"
        onClick={handleClick}
      >
        {
          state === STATE.INITIAL
            ? <SimpleLoader className="subscribe-control_icon subscribe-control_icon__loader" />
            : <BellIcon className="subscribe-control_icon subscribe-control_icon__bell" />
        }
      </ControlButton>
    </div>
  );
});

export default SubscribeControl;
