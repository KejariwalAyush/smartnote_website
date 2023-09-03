'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9a64c38839269cb7e850a56e450bd3dc",
"index.html": "5f3d58a4116906bae0c1631c3e02c29d",
"/": "5f3d58a4116906bae0c1631c3e02c29d",
"main.dart.js": "0409d6255e63c432ae50ec2e0fd7b364",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "4cc2d018f3d8a6bb09debcb18c6e3ab3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "145056ba037e260e8f99f14eb4e2d018",
"assets/AssetManifest.json": "b0f9deb3946662929425f208b1860da5",
"assets/NOTICES": "0c515d0d2e3bc5a4395fa49285391053",
"assets/FontManifest.json": "d26fe437d4c6b4ef6a0da554d7769819",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "ea2d0a2d27ed8120287d05fa83ae058b",
"assets/fonts/MaterialIcons-Regular.otf": "b7215f2a38947dd8baedd9149a34fcbc",
"assets/assets/home/sustainiblity.jpeg": "2bd2308c74695f54065af2a641a85e0d",
"assets/assets/home/mail.png": "d240dc69f94cb6d2750be7e0255c249c",
"assets/assets/home/delivery.png": "69ae4d8bc9ca08c852a09ab00610b146",
"assets/assets/home/mobile_home.png": "402761230c59b83097862b08fba1e166",
"assets/assets/home/map.png": "ff05dc4dad240614d98afb8fe10733dc",
"assets/assets/home/rupee.png": "77a9d2e42ff7b5e4c39dd135ae72e85f",
"assets/assets/home/personalization.jpeg": "435da46785d5facf7c34c456a5ab66a4",
"assets/assets/home/customer-service.png": "7460972c7293167cfb4d746526d10d44",
"assets/assets/home/responsibility.png": "99ec822642dc140c91e118eadf3fa1a3",
"assets/assets/home/logo.png": "d6bce9d80542ba2ce849b378b00e3911",
"assets/assets/home/computer.png": "c786cc796dc971cd6d812761917ac1bc",
"assets/assets/home/perfection.jpeg": "7c7e395ffe83cc056345d39f5cd741fd",
"assets/assets/home/brand.png": "5985587a4ada3e6ae500670d06d508a5",
"assets/assets/home/perfect-skin.png": "c6266c1b0fef572220c4d4b121cf2f65",
"assets/assets/images/slide_1-layer_1.png": "9063147efb1e199ff5c150d2e6300aa7",
"assets/assets/images/slide_4-layer_1.png": "bdbc0295114fa2357fead99d40d1f3fe",
"assets/assets/images/slide_4-layer_2.png": "bc967acf07078968e2cb2c06cbd8d1a1",
"assets/assets/images/slide_1-bg.jpg": "38ee58bb3660209a4c4601140582f02f",
"assets/assets/images/slide_2-layer_1.png": "6bea2e4a2def098bfa23faa51f7f8e16",
"assets/assets/images/slide_2-layer_2.png": "9f38f12164b646341c610a77fd6c2e7a",
"assets/assets/images/slide_3-bg.jpg": "75f7fe6299b17279831bb2c94fe2e55e",
"assets/assets/images/slide_3-bg.png": "2b682e87ed1e7d2ef307f945fb660ee3",
"assets/assets/images/slide_4-bg.jpg": "1f03f152a7927c1de97ee3f5c9e9969f",
"assets/assets/images/slide_3-layer_2.png": "dcecc562f08c8e185fa50f23dec1c5e6",
"assets/assets/images/slide_2-bg.jpg": "f1e9b6c4a857de8bf21b9e729b6dda6f",
"assets/assets/fonts/product_sans_regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/fonts/product_sans_italic.ttf": "e88ec18827526928e71407a24937825a",
"assets/assets/fonts/roboto_bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/product_sans_bold.ttf": "dba0c688b8d5ee09a1e214aebd5d25e4",
"assets/assets/fonts/roboto_regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/fonts/roboto_italic.ttf": "a720f17aa773e493a7ebf8b08459e66c",
"assets/assets/notebooks/notebook5.png": "f57f3e4244e866a298d3d9b5296bcc70",
"assets/assets/notebooks/notebook4.png": "e7d2e594f6b86fabbb3c992f7f2976f6",
"assets/assets/notebooks/notebook6.png": "b1e81ad2df507edb8d9a0baff9c6208e",
"assets/assets/notebooks/notebook7.png": "fe7348f6e03b236bf964c88b99b0c5c4",
"assets/assets/notebooks/notebook3.png": "0c1b0031f7608cddb9c1550351a2444c",
"assets/assets/notebooks/notebook2.png": "afce9c6ae6509fce83a76d69aaacb4c2",
"assets/assets/notebooks/notebook1.png": "d8e5dfd0d9d24da681157748d4ed251c",
"assets/assets/notebooks/notebook9.png": "b1b1df1b0412c7f3f19e66024bffb5de",
"assets/assets/notebooks/notebook8.png": "c2761fc77f7727f11e9227cf8c154809",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
