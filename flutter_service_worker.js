'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c5a01fe7de1ee2253af5df8e5274be72",
"assets/assets/anja.png": "d241e1f11b6379f0a7aaf092d3b08bf2",
"assets/assets/chris.png": "f870e14825e9a731ae9e5412fa4bec90",
"assets/assets/clubs_10.png": "af7a60ae3c4848b6f694879d65b52be1",
"assets/assets/clubs_6.png": "3284db54638c10a2659c51cdd1a9024a",
"assets/assets/clubs_7.png": "5ed6e0b910fba29406a09e99ba289be8",
"assets/assets/clubs_8.png": "181b0731bad9a9e31c2cf0ffc4bc1de1",
"assets/assets/clubs_9.png": "065e33702dc990926e2570d963af1d9b",
"assets/assets/clubs_A.png": "4f6b8c71167d9783fd2f81a960160807",
"assets/assets/clubs_J.png": "5dad1b9ab7e83095e4e3f2302aa5b731",
"assets/assets/clubs_K.png": "7c7e53beae0c5fe15654ed2b863235ec",
"assets/assets/clubs_Q.png": "68dce290304315036c458ed08ab97e36",
"assets/assets/david.png": "f9da71127ea2c90246e84487ba069f93",
"assets/assets/diamonds_10.png": "e0e72fc2c16a24579f63f5890d4d8f1a",
"assets/assets/diamonds_6.png": "23786c26e35363a7300f8b424d675922",
"assets/assets/diamonds_7.png": "49a81dd804b3a8c9bb2db7d5fe3407f1",
"assets/assets/diamonds_8.png": "9973b3035c58037f326f873feff1a352",
"assets/assets/diamonds_9.png": "b32408980d3b00b60f41966ff015d736",
"assets/assets/diamonds_A.png": "2926104eeb032515de06f66746b29560",
"assets/assets/diamonds_J.png": "f01503bb9392c243a270e2a7716635d1",
"assets/assets/diamonds_K.png": "a5b96049841e4c15e4a972519d787073",
"assets/assets/diamonds_Q.png": "8290b8cc27eb4954a9823a3e79d30c55",
"assets/assets/hearts_10.png": "b21be1b1c58666216c593bbf0c36ae42",
"assets/assets/hearts_6.png": "df8f9a791f321af29cdc2be239562d6f",
"assets/assets/hearts_7.png": "98de413cced5c43e971c61f99ae19bf5",
"assets/assets/hearts_8.png": "bc486cbdbf4ecaa48466039e709dcf3b",
"assets/assets/hearts_9.png": "c6ff3598edfd6cce3bbfee9c315fc7a6",
"assets/assets/hearts_A.png": "faa13b4cec94531c1decbfb2a4520c0e",
"assets/assets/hearts_J.png": "a5a7220e0a6d0395c2a0d2833a764005",
"assets/assets/hearts_K.png": "fe1eb674414aa22b5e41a6aff8a89216",
"assets/assets/hearts_Q.png": "8d82a431e212f0197836ea56bf52748c",
"assets/assets/nico.png": "da5235be0cadbccc3b8e0ccc50f3d116",
"assets/assets/R%25C3%25BCckseite.png": "6d2728f203b54173ba5f907bc59666a4",
"assets/assets/simon.png": "3b69cf91bb1e456894deb859a0eef326",
"assets/assets/spades_10.png": "b482a284b3801a6b1d0460d5bb274c62",
"assets/assets/spades_6.png": "3259bf5f6bd85ab12362b19b890533e5",
"assets/assets/spades_7.png": "a7e9ae69f850e19adf8c6714c42f7d96",
"assets/assets/spades_8.png": "37a1fcbbca683ec3f19bc889fbaf759e",
"assets/assets/spades_9.png": "874f3f0f8ee457726b45400c4f9af41e",
"assets/assets/spades_A.png": "623ce274b74fc3597d52ce2370a0536b",
"assets/assets/spades_J.png": "73b89e91be6e8d7d057608577ecb16ab",
"assets/assets/spades_K.png": "fce39469d109548fb966f446b96e6e86",
"assets/assets/spades_Q.png": "6fd11c745489d36161d3b757ed3ed572",
"assets/assets/StartseiteK%25C3%25B6nigCrop.png": "48e407ca1e11eba53e86740eb98905b2",
"assets/assets/stefan1.png": "8c4c78ef386d821c0f8b8586b726fdbd",
"assets/assets/stefan2.png": "be4d9e819cd6b09521d0461ba7b6defa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "ff55d7e27f2e718a5d23e1fe46e0d66b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "fe4d0293af4c2eb6c9a04e93b38023f3",
"icons/Icon-192.png": "faea86539b2f390776082c9a21ed4a6c",
"icons/Icon-512.png": "ae61703fa67eed47e394db86c23a2822",
"index.html": "2350306ec8a98f881c380b6dd62b851c",
"/": "2350306ec8a98f881c380b6dd62b851c",
"main.dart.js": "cdf5693d45f4b255a9b6a9ed5956f6a2",
"manifest.json": "ee8f3db324b82af314caf95489982b99",
"version.json": "71d5e99e2a798b8e3fabc70ac32586f8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
