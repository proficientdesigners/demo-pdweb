var CACHE_NAME = 'pd-cache-v1';
var urlsToCache = [
	'./?v3',
	'service-worker.js?v3',
	'manifest.json?v3',
	'offline.html'
];
console.log('loading sw');

self.addEventListener('install', function(event) {
	// Perform install steps
	console.log('installing sw');
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function(cache) {
				console.log('Opened cache');
				var x = cache.addAll(urlsToCache);
				console.log('cache added');
				return x;
			})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
			.then(function(response) {
					// Cache hit - return response
					if (response) {
						console.log(response);
						return response;
					}
					console.log(event);
					return fetch(event.request);
				}
			)
	);
});