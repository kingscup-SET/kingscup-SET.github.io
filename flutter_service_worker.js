'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0f85548637ccf9839788f5a30b2ab828",
"assets/assets/anja.png": "d241e1f11b6379f0a7aaf092d3b08bf2",
"assets/assets/chris.png": "f870e14825e9a731ae9e5412fa4bec90",
"assets/assets/david.png": "f9da71127ea2c90246e84487ba069f93",
"assets/assets/Eichel_10.png": "56f2554e465f4fb82b6c209b56bdc9d6",
"assets/assets/Eichel_6.png": "470327bb87e428c120cbdf3b2b43d668",
"assets/assets/Eichel_7.png": "8927377dae6515c21cba928267c62554",
"assets/assets/Eichel_8.png": "291b0d502754e5b45aecee7bac480774",
"assets/assets/Eichel_9.png": "1c4f40f28b95545c9e2f3e0f660e3c0a",
"assets/assets/Eichel_A.png": "9a745f39d07c357d4fb0165965b8169a",
"assets/assets/Eichel_K.png": "21ab77c3b3ceeeeaf7b330985a30490d",
"assets/assets/Eichel_O.png": "6fddd746e28341deee5702b333e1c75c",
"assets/assets/Eichel_U.png": "9556f87263a7daa5e649e2ff9a391dc0",
"assets/assets/Gras_10.png": "015f9151ca3e9df0021967b2344a698b",
"assets/assets/Gras_6.png": "998d35029d72a8592cad6b6ce1035afa",
"assets/assets/Gras_7.png": "0752771bccd87c77611fece6ae05cfdc",
"assets/assets/Gras_8.png": "be04a565babba0f2193005b174734dc1",
"assets/assets/Gras_9.png": "7aec6202cea1a59a8c2913e0f5a84541",
"assets/assets/Gras_A.png": "decc1c6be7dbc7ca3c0bf34071ca0cb1",
"assets/assets/Gras_K.png": "18e7d003299fe844ac7a6f552e4711a5",
"assets/assets/Gras_O.png": "2ae375d225ff6f0aac01bd024fdf3225",
"assets/assets/Gras_U.png": "779229ade2550efba954f9749fcebeb9",
"assets/assets/Herz_10.png": "6110ebfc9dbb7c9e26fa3eec2da0a806",
"assets/assets/Herz_6.png": "1b74a923624d43b4faa6004900fc7463",
"assets/assets/Herz_7.png": "2170df9844450f56298894c5e751db0f",
"assets/assets/Herz_8.png": "5175563a3215a9d04b8553ebf05fc190",
"assets/assets/Herz_9.png": "c368bccc93c9aad7a00e04ac70dc6b1a",
"assets/assets/Herz_A.png": "517177d7141aa584786d19c2d7c78535",
"assets/assets/Herz_K.png": "94d847438005f43840dc1e6c557b6425",
"assets/assets/Herz_O.png": "84a04afcbbf60bd2cda3c8ecf6be0abe",
"assets/assets/Herz_U.png": "401b3f1a93877edf63dfd3d03f2642f9",
"assets/assets/nico.png": "da5235be0cadbccc3b8e0ccc50f3d116",
"assets/assets/R%25C3%25BCckseite.png": "0630a5ea71098dd9ca8745451e019c46",
"assets/assets/Schellen_10.png": "8553b28e2c76859012b623cbe5218bb8",
"assets/assets/Schellen_6.png": "3af2930d94322ccbc9129e48a04ba9da",
"assets/assets/Schellen_7.png": "24e4987a26745d765446e63dcff6f27b",
"assets/assets/Schellen_8.png": "03e7ef90c2e0480ac12e84bb6f86d0b8",
"assets/assets/Schellen_9.png": "4a465a702f81f7b3ddbedfc43d877168",
"assets/assets/Schellen_A.png": "581c291e3f75ae82e0409c8770e00fda",
"assets/assets/Schellen_K.png": "bf02ebcf077fcf19b2ff8098665bf10c",
"assets/assets/Schellen_O.png": "3e32129d455f11b01257f90f06c31ee4",
"assets/assets/Schellen_U.png": "56672e7ea0f57787f7f89dfa193940b5",
"assets/assets/simon.png": "3b69cf91bb1e456894deb859a0eef326",
"assets/assets/StartseiteK%25C3%25B6nigCrop.png": "b840da6f613f1014386bc29c05230ae3",
"assets/assets/stefan1.png": "8c4c78ef386d821c0f8b8586b726fdbd",
"assets/assets/stefan2.png": "be4d9e819cd6b09521d0461ba7b6defa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "ff55d7e27f2e718a5d23e1fe46e0d66b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "12485d9fc16a04659e09231f50543bf7",
"/": "12485d9fc16a04659e09231f50543bf7",
"main.dart.js": "14947ad4ac9f76b90e742d94b0d35cf4",
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
