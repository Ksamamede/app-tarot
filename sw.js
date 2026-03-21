const CACHE_NAME = 'tarot-cache-v15';
const urlsToCache = [
  './',
  './index.html',
  './emocoes.html',
  './tiragem.html',
  './sobre.html',
  './style.css',
  './script.js',
  './manifest.json',
  './imagens/icone_app.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      self.clients.claim();
    })
  );
});

self.addEventListener('fetch', event => {
  // Ignora requisições de outras origens
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Estratégia "Network First" (Rede primeiro, depois Cache para uso offline)
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Se a rede funcionou, recebemos a versão mais nova e atualizamos o cache
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Se falhar (usuário sem internet), busca a cópia salva no cache
        return caches.match(event.request);
      })
  );
});
