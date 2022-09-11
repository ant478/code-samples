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
      title: 'ant478 Code Samples',
      body: `See what\`s new at ${location.host}`,
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
    console.log('213esad sdg34tfd gw45ybg');
  })());
});
