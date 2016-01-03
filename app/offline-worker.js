'use strict'

importScripts('cache-polyfill.js');

var worker = this;

worker.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('chalk').then(function(cache) {
			cache.addAll([
				'/',
				'/dashboard',
				'/index.html',
				'/styles/style.css',
				'/styles/react-datepicker.min.css',
				'/components/app.js',
				'/scripts/jquery-custom.js',
				'/images/logo-hackeryou.svg',
				'styles/fonts/chalk.eot',
				'styles/fonts/chalk.svg',
				'styles/fonts/chalk.ttf',
				'styles/fonts/chalk.woff'
			]);
		})
	);
});

worker.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.match(e.request).then(function(res) {
			return res || fetch(e.request);
		})
	);
});

worker.addEventListener('activate', function(e) {
	console.log('activated');
});