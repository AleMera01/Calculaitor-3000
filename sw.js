const CACHE_NAME = "calculaitor-3000-v2";


/* =========================
   INSTALACIÓN
   ========================= */

self.addEventListener("install", event => {

    self.skipWaiting();

});


/* =========================
   ACTIVACIÓN
   ========================= */

self.addEventListener("activate", event => {

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

            return self.clients.claim();

        })

    );

});


/* =========================
   PETICIONES
   ========================= */

self.addEventListener("fetch", event => {

    if (event.request.method !== "GET") {

        return;

    }


    event.respondWith(

        caches.match(event.request)

            .then(cachedResponse => {

                if (cachedResponse) {

                    return cachedResponse;

                }


                return fetch(event.request)

                    .then(networkResponse => {

                        if (
                            !networkResponse ||
                            networkResponse.status !== 200 ||
                            networkResponse.type === "opaque"
                        ) {

                            return networkResponse;

                        }


                        const responseToCache =
                            networkResponse.clone();


                        caches.open(CACHE_NAME)

                            .then(cache => {

                                cache.put(
                                    event.request,
                                    responseToCache
                                );

                            });


                        return networkResponse;

                    })

                    .catch(() => {

                        return caches.match(
                            "./index.html"
                        );

                    });

            })

    );

});