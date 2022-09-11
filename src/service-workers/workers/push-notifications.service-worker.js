/* eslint-disable no-restricted-globals */
import logo from 'src/img/logo/real-160.png';

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', (event) => {
  event.waitUntil((async () => {
    const notificationData = {
      title: 'Updates at Code Samples',
      body: 'Hey, I got some new stuff posted. Lets go check this out!',
      icon: logo,
    };

    try {
      Object.assign(notificationData, event.data.json());
    } catch {}

    const { title, ...options } = notificationData;

    await self.registration.showNotification(title, options);
  })());
});

self.addEventListener('notificationclick', (event) => {
  event.waitUntil((async () => {
    const notification = event.notification;
    notification.close();

    if (notification.data && notification.data.clickPath) {
      const url = new URL(notification.data.clickPath, location.origin).href;
      return self.clients.openWindow(url);
    }

    const windowClients = await self.clients.matchAll({ type: 'window' });

    if (windowClients.length > 0) {
      return windowClients[0].focus();
    }

    return self.clients.openWindow(location.origin);
  })());
});
