const pushNotificationsServiceWorkerUrl = window.serviceWorkers['push-notifications-service-worker'];

export async function registerPushNotificationsServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  try {
    await navigator.serviceWorker.register(pushNotificationsServiceWorkerUrl);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
