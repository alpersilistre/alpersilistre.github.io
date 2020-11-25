self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('alperspwa').then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/index.html?homescreen=1',
        '/?homescreen=1',
        '/plugins/bootstrap/css/bootstrap.min.css',
        '/plugins/font-awesome/css/font-awesome.css',
        '/css/styles.css',
        '/images/profile-img.png',
        '/images/azure-developer.png',
        '/plugins/jquery-1.11.3.min.js',
        '/plugins/bootstrap/js/bootstrap.min.js',
        '/js/min/main-min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
