const CACHE_NAME = 'faiz-it-cache-v1';
const ASSETS = [
  '/',
  '/manifest.json?v=2',
  '/icon-192.png',
  '/icon-512.png'
];

// Install Service Worker and cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Mandatory fetch handler for offline capability
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        // Fallback when network fails
        return caches.match('/');
      });
    })
  );
});
