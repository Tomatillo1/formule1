self.addEventListener ("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./index.html", "./style.css", "./App.svelte", "./main.js", "./splash_screens/icon.png"]);
        })
    );
});

self.addEventListener ("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
