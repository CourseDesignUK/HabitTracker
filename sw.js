const CACHE_NAME = 'habit-tracker-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  // Audio files
  './ambient.mp3',
  './birdsong.mp3',
  './forest.mp3',
  './storm.mp3',
  './waves.mp3',
  // Add any CSS or JS files here if they are separate
];

// Install Event - Caching Assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

// Fetch Event - Serve from Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
