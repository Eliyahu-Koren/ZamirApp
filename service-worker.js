const CACHE_NAME = 'zamir-cache-v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/vite.svg',
  '/manifest.webmanifest',
  '/icon-192.png',
  '/icon-512.png'
];

// התקנה והוספת קבצים לקאש
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// הפעלה – ניקוי גרסאות קודמות
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

// תגובה לבקשות – קודם מהקאש, אחרת מהאינטרנט
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
