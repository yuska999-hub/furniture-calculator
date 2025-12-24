// Простейший Service Worker для оффлайн-работы
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('furniture-calc-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});