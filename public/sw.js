const CACHE_NAME = 'bobdo-v2';
const urlsToCache = [
  '/',
  '/about',
  '/emergency',
  '/find-donor',
  '/become-donor',
  '/become-volunteer',
  '/donation',
  '/community',
  '/hospitals',
  '/training',
  '/certificate',
  '/notices',
  '/contact',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Noto+Sans+Bengali:wght@300;400;500;600;700&display=swap',
  'https://i.postimg.cc/FH2r1Q8D/bobdo-removebg-preview.png',
  'https://i.postimg.cc/0jjP5DDJ/HSC-20250819-012635-0000.png',
  'https://i.postimg.cc/vTKM4Tt2/1000000237-removebg-preview.png'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        
        return fetch(event.request).then((response) => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(() => {
          // If both cache and network fail, serve index.html for navigation requests (SPA routing)
          if (event.request.destination === 'document') {
            return caches.match('/index.html').then(response => response || caches.match('/'));
          }
        });
      }
    )
  );
});

// Activate event
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