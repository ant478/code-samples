const pushNotificationsServiceWorkerUrl = window.serviceWorkers['push-notifications-service-worker'];

export async function registerPushNotificationsServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  try {
    const registration = await navigator.serviceWorker.register(pushNotificationsServiceWorkerUrl);

    let subscription = await registration.pushManager.getSubscription();

    if (!subscription) {
      subscription = await registration.pushManager.subscribe({ userVisibleOnly: true });
    }

    const rawKey = subscription.getKey('p256dh');
    const rawAuthSecret = subscription.getKey('auth');
    const key = btoa(String.fromCharCode.apply(null, new Uint8Array(rawKey)));
    const authSecret = btoa(String.fromCharCode.apply(null, new Uint8Array(rawAuthSecret)));
    const endpoint = subscription.endpoint;

    // await fetch('./register', {
    //   method: 'post',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     endpoint,
    //     key,
    //     authSecret,
    //   }),
    // });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
