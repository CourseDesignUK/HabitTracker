const CACHE_NAME = 'mind-garden-v1';
const ASSETS = [
  './',
  './index.html',
  './icon.png',
  './storm.mp3',
  './waves.mp3',
  './forest.mp3',
  './ambient.mp3',
  './birdsong.mp3'
];

// Install: Cache all UI and Audio files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Fetch: Serve from cache if offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
