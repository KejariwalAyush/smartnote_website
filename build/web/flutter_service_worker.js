'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9a64c38839269cb7e850a56e450bd3dc",
"index.html": "ad9a49f89141286770ee312189df52fe",
"/": "ad9a49f89141286770ee312189df52fe",
"main.dart.js": "b10eb1c2631c530692ba610778d2dff1",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "4cc2d018f3d8a6bb09debcb18c6e3ab3",
"icons/Icon-192.png": "afc76e18d86e74d15d6f38c6d91deb1f",
"icons/Icon-512.png": "afc76e18d86e74d15d6f38c6d91deb1f",
"manifest.json": "633274fa16ab8721587aae12bcaf4c2d",
"assets/AssetManifest.json": "d215dbd661463a6bd23a581fe42e9892",
"assets/NOTICES": "4423016ded27edafe021e5b97b70a579",
"assets/FontManifest.json": "da05aa8b5c041499ebcadcfe15f3c0b9",
"assets/AssetManifest.bin.json": "6368a4499cdfa89d2600804aed5a0fcb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "02186dbeea059e7f47e8103e5df71427",
"assets/fonts/MaterialIcons-Regular.otf": "e40d6c0ed5635a5d8b46978930165006",
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
"assets/assets/images/slide_1-layer_1.png": "1feb0e8c32d9a417c76ebc22cdf6b385",
"assets/assets/images/slide_4-layer_1.png": "bdbc0295114fa2357fead99d40d1f3fe",
"assets/assets/images/slide_4-layer_2.png": "5e215ef0a08aa69affb418d35390765d",
"assets/assets/images/slide_1-bg.jpg": "ddfbebeb5aceb84154243f05a7f427ce",
"assets/assets/images/slide_2-layer_1.png": "d99ae6021cde90f520334fd39b182a2a",
"assets/assets/images/slide_2-layer_2.png": "9f38f12164b646341c610a77fd6c2e7a",
"assets/assets/images/slide_3-bg.jpg": "75f7fe6299b17279831bb2c94fe2e55e",
"assets/assets/images/slide_3-bg.png": "2b682e87ed1e7d2ef307f945fb660ee3",
"assets/assets/images/slide_4-bg.jpg": "1f03f152a7927c1de97ee3f5c9e9969f",
"assets/assets/images/slide_3-layer_2.png": "b9df3786ba5c0789f6a360e2d2a73dbc",
"assets/assets/images/slide_2-bg.jpg": "f1e9b6c4a857de8bf21b9e729b6dda6f",
"assets/assets/fonts/product_sans_regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/fonts/product_sans_italic.ttf": "e88ec18827526928e71407a24937825a",
"assets/assets/fonts/roboto_bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/product_sans_bold.ttf": "dba0c688b8d5ee09a1e214aebd5d25e4",
"assets/assets/fonts/Comfortaa-Medium.ttf": "1a7bfac2b8d70a2726a281786c3894cd",
"assets/assets/fonts/Comfortaa-Regular.ttf": "53f695dbfc6f703f86ed88bddde527b6",
"assets/assets/fonts/roboto_regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/fonts/roboto_italic.ttf": "a720f17aa773e493a7ebf8b08459e66c",
"assets/assets/fonts/Comfortaa-Bold.ttf": "281df342e6f73c20ebc6526f130e00b3",
"assets/assets/notebooks/notebook5.png": "f57f3e4244e866a298d3d9b5296bcc70",
"assets/assets/notebooks/notebook4.png": "e7d2e594f6b86fabbb3c992f7f2976f6",
"assets/assets/notebooks/notebook6.png": "b1e81ad2df507edb8d9a0baff9c6208e",
"assets/assets/notebooks/notebook7.png": "fe7348f6e03b236bf964c88b99b0c5c4",
"assets/assets/notebooks/notebook3.png": "0c1b0031f7608cddb9c1550351a2444c",
"assets/assets/notebooks/notebook2.png": "afce9c6ae6509fce83a76d69aaacb4c2",
"assets/assets/notebooks/notebook1.png": "d8e5dfd0d9d24da681157748d4ed251c",
"assets/assets/notebooks/notebook9.png": "b1b1df1b0412c7f3f19e66024bffb5de",
"assets/assets/notebooks/notebook8.png": "c2761fc77f7727f11e9227cf8c154809",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
