'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a5089aaa745d2e42a5c03da35b0daba0",
"assets/assets/images/4blok1.jpeg": "828c55a24ca8513005d56c4a8eea05f8",
"assets/assets/images/4blok2.jpeg": "ec3bc6b4ca93cbafa2b3b9f43b109678",
"assets/assets/images/4blok3.jpeg": "b46baa2e54528cdb94699408fe348ac7",
"assets/assets/images/4blok4.jpeg": "79e210d7d70250563e2906b190037ee4",
"assets/assets/images/4blok5.jpeg": "cf8726611b641550af9b21826547a036",
"assets/assets/images/4blok6.jpeg": "73edaeef62021fa0564047975c355f85",
"assets/assets/images/facebook.png": "8b9c428d8aa83dac96750101d9fd513a",
"assets/assets/images/foto3.jpeg": "2526d9feadcffa54e55200798733f477",
"assets/assets/images/instagram.png": "4a8c23476a7c20c5bee2a752a6f96e9e",
"assets/assets/images/kerimdemir.jpeg": "dfc3456301c320f70997e7ce6db2d880",
"assets/assets/images/seyfullah_yildiz.jpeg": "6402d7b6c1f8a93428e68b43a53ef828",
"assets/assets/images/seyfullah_yildiz.jpg": "f37918479b453c1d98c4bedd39387709",
"assets/assets/images/sursuru1.jpg": "6314dca3614534a03aef34e8162d1295",
"assets/assets/images/sursuru2.jpeg": "bd6c237e7913d9823e37c65c8ff2d8af",
"assets/assets/images/sursuru3.jpeg": "d206066ac5708208c5c00a681409aa9c",
"assets/assets/images/sursuru4.jpeg": "d206066ac5708208c5c00a681409aa9c",
"assets/assets/images/sursuru5.jpeg": "f4a5f357e0a3f15d80c350d58a6873e3",
"assets/assets/images/sursuru6.jpeg": "cdec60fc6c234db56bc0b631ee3207d7",
"assets/assets/images/sursuru7.jpeg": "40b4ea63df719d4a23aeae787d7d3158",
"assets/assets/images/sursuru8.jpeg": "9bd63d57312621ceda594c9627a88bcb",
"assets/assets/images/sursuru9.jpeg": "2322412c415974a8a31af2c01b380b16",
"assets/assets/images/tekblok1.jpeg": "0fd504ac2935de71c9099071275171c3",
"assets/assets/images/tekblok2.jpeg": "beb260c5a28d91c41eb5498c51f1d8f1",
"assets/assets/images/tekblok3.jpeg": "0d27046b497be0b388caa45de1697bc2",
"assets/assets/images/tekblok4.jpeg": "163e32e1b59806178e38b8c06f3a7caa",
"assets/assets/images/YILDIZLAR.png": "6e0c80f2149630e3086a2e2dde2c3e32",
"assets/assets/images/yildizlar_elektrik1.jpeg": "202c447efb205ca637205b9a201e71e8",
"assets/assets/images/yildizlar_elektrik2.jpeg": "455d49c7c8ceb7b8e93098006f4fb5ec",
"assets/assets/images/yildizlar_elektrik3.jpeg": "eebb56ee632c134b10670b2b733ace34",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/4blok1.jpeg": "828c55a24ca8513005d56c4a8eea05f8",
"assets/images/4blok2.jpeg": "ec3bc6b4ca93cbafa2b3b9f43b109678",
"assets/images/4blok3.jpeg": "b46baa2e54528cdb94699408fe348ac7",
"assets/images/4blok4.jpeg": "79e210d7d70250563e2906b190037ee4",
"assets/images/4blok5.jpeg": "cf8726611b641550af9b21826547a036",
"assets/images/4blok6.jpeg": "73edaeef62021fa0564047975c355f85",
"assets/images/facebook.png": "8b9c428d8aa83dac96750101d9fd513a",
"assets/images/foto1.jpeg": "50bbc9525ae4bb7da5592a27bd14e338",
"assets/images/foto2.jpeg": "e37a40110b9bcc5fded2ef918048c039",
"assets/images/foto3.jpeg": "2526d9feadcffa54e55200798733f477",
"assets/images/foto4.jpg": "b624a38c353bdb6428a361ba46b964ae",
"assets/images/ic-mimarlik-nedir.jpg": "a2d61ab2deaec636134b9530ba27083c",
"assets/images/instagram.png": "4a8c23476a7c20c5bee2a752a6f96e9e",
"assets/images/kerim_demir.jpg": "fb03c2171e0a2d5b3edc72eaa5f73fae",
"assets/images/maket1_1.jpg": "92331750675086783fb960e90a548884",
"assets/images/maket1_2.jpg": "5c210300eb5ec254cacc16f9651583e6",
"assets/images/maket2_1.jpg": "b6360d1192bd1e47dc240ad09b4c5971",
"assets/images/maket2_2.jpg": "27bdf0e96aa54935f3c4d5611d2b16b3",
"assets/images/maket3_!.jpg": "bd127d60e2a4c5c6d351930fba9b4a6a",
"assets/images/maket3_2.jpg": "26a2ffc4378af7e8532ab81a54bf5c8f",
"assets/images/park1.jpg": "6ca03735914c3bcda5150c6320e146d3",
"assets/images/pp.jpg": "fb03c2171e0a2d5b3edc72eaa5f73fae",
"assets/images/seyfullah_yildiz.jpeg": "6402d7b6c1f8a93428e68b43a53ef828",
"assets/images/seyfullah_yildiz.jpg": "f37918479b453c1d98c4bedd39387709",
"assets/images/sursuru1.jpg": "6314dca3614534a03aef34e8162d1295",
"assets/images/sursuru2.jpeg": "bd6c237e7913d9823e37c65c8ff2d8af",
"assets/images/sursuru3.jpeg": "d206066ac5708208c5c00a681409aa9c",
"assets/images/sursuru4.jpeg": "d206066ac5708208c5c00a681409aa9c",
"assets/images/sursuru5.jpeg": "f4a5f357e0a3f15d80c350d58a6873e3",
"assets/images/sursuru6.jpeg": "cdec60fc6c234db56bc0b631ee3207d7",
"assets/images/sursuru7.jpeg": "40b4ea63df719d4a23aeae787d7d3158",
"assets/images/sursuru8.jpeg": "9bd63d57312621ceda594c9627a88bcb",
"assets/images/sursuru9.jpeg": "2322412c415974a8a31af2c01b380b16",
"assets/images/tekblok1.jpeg": "0fd504ac2935de71c9099071275171c3",
"assets/images/tekblok2.jpeg": "beb260c5a28d91c41eb5498c51f1d8f1",
"assets/images/tekblok3.jpeg": "0d27046b497be0b388caa45de1697bc2",
"assets/images/tekblok4.jpeg": "163e32e1b59806178e38b8c06f3a7caa",
"assets/images/vdt1.jpg": "3e60a2c16cbdfb29b21e86997b2379bb",
"assets/images/YILDIZLAR.png": "6e0c80f2149630e3086a2e2dde2c3e32",
"assets/images/yildizlar_elektrik1.jpeg": "202c447efb205ca637205b9a201e71e8",
"assets/images/yildizlar_elektrik2.jpeg": "455d49c7c8ceb7b8e93098006f4fb5ec",
"assets/images/yildizlar_elektrik3.jpeg": "eebb56ee632c134b10670b2b733ace34",
"assets/NOTICES": "dbf197aa6b7b33edcd9f6d99a5c8ecbb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6efd098125960f101a0335d69f38ec02",
"/": "6efd098125960f101a0335d69f38ec02",
"main.dart.js": "eb42104be32e53e37c305517a29f91d7",
"manifest.json": "61f46d16b0c979ebc19a92bbce6a9b1a",
"version.json": "4a1660d729f7c27a21a0de4012f45b0b"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
