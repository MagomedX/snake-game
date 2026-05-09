self.addEventListener('install',e=>{

e.waitUntil(

caches.open('snake-cache').then(cache=>{

return cache.addAll([
'/',
'/index.html',
'/manifest.json',
'/theme.mp3'
]);

})

);

});

self.addEventListener('fetch',e=>{

e.respondWith(

caches.match(e.request).then(response=>{

return response || fetch(e.request);

})

);

});
