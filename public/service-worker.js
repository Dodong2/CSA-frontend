// Define cache names for different types of assets
const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html', // Add other HTML files as needed
  '/app.tsx',     // Add your main JS bundle
  '/App.css', // Add your main CSS file
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/masked-icon.svg',
  // Add other assets you want to cache
];

// Install event listener: cache all necessary assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache)
          .catch((error) => {
            console.error('Failed to cache', error);
          });
      })
  );
});


// Activate event listener: clean up old caches if necessary
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event listener: serve assets from cache if available, otherwise fetch from network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then((fetchResponse) => {
            if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
              return fetchResponse;
            }
            const responseToCache = fetchResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return fetchResponse;
          })
          .catch((error) => {
            console.error('Fetch failed:', error);
            throw error;
          });
      })
  );
});