
self.addEventListener('install', e => {
e.waitUntil(
caches.open('hopeflow-v2').then(cache => {
return cache.addAll([
'./',
'./index.html',
'./manifest.json',
'./icon.png'
]);
})
);
});
