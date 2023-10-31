// service-worker.js
// This could be an array or a string of your previous cache names to be cleaned up
const oldCacheNames = ['PWA-v0', 'PWA-v0.5'];
const CACHE_NAME = 'PWA-v1';
const urlsToCache = [
  './',
  './index.html',
  './index.js',
  './style.css',
  './application.js',
  './index.js',
  './assets',
  './cocos-js',
  './src',
  './manifest.json',
  './serviceWorker.js'
  // add all other urls (files) you want to cache
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(["/"]);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return the response from the cached version
        if (response) {
          return response;
        }
        // Not in cache - return the result from the live server
        // and cache the result for future access
        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
      })
  );
});

self.addEventListener('activate', function(e) {
  console.log('activate');
  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== cacheName && oldCacheNames.includes(cacheName)) {
            console.log('Deleting out of date cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
