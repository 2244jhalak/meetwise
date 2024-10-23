self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker activated');
});

self.addEventListener('fetch', event => {
  if (!navigator.onLine) {
    self.registration.showNotification('Offline Notification', {
      body: 'You are currently offline. Please check your internet connection.',
      icon: '/icon.png',
      vibrate: [200, 100, 200],
      tag: 'offline-notification',
    });
  }
});

