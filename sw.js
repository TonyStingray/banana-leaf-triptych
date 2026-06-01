"use strict";

var CACHE_NAME = "banana-leaf-triptych-v1.1.0";
var ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/css/style.css"
];

// Install: pre-cache core assets
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate: remove old caches
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) { return key !== CACHE_NAME; })
          .map(function (key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

// Fetch: cache-first, then network (with background cache update)
self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      if (cachedResponse) {
        // Serve from cache, update in background
        fetch(event.request).then(function (networkResponse) {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(function (cache) {
              cache.put(event.request, networkResponse.clone());
            });
          }
        }).catch(function () {});
        return cachedResponse;
      }

      // Not cached — fetch and cache
      return fetch(event.request).then(function (networkResponse) {
        if (networkResponse && networkResponse.status === 200) {
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, networkResponse.clone());
          });
        }
        return networkResponse;
      });
    })
  );
});
