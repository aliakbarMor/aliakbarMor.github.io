'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "898823dd3077ab42025bde4960d57f25",
"assets/assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/Yekan.ttf": "52ce4de2efeeb8b18dcbd379711224f3",
"assets/assets/images/background.jpg": "d6cfdee2201a188161da83fda086ebd1",
"assets/assets/images/background2.jpg": "38bf89a7d8c0692b5f7ee2ffc0a1eaea",
"assets/assets/images/center_scrollbar.png": "e123166339679552533c29985120462b",
"assets/assets/images/ic_email.svg": "d1e2105e550f8d1052a6b3f2860944a0",
"assets/assets/images/ic_github.svg": "dedb506b24f273df25c742c6ef1654da",
"assets/assets/images/ic_linkedin.svg": "4ceedca018edc6a9d0c54ee20a58617a",
"assets/assets/images/ic_location.svg": "667661a6364413b07d7ac9f3e8f5f462",
"assets/assets/images/ic_phone.svg": "8442f4b2753d10e5b0744393ac6999cf",
"assets/assets/images/ic_telegram.svg": "de0e4ea92445525f2dfbe651e5113eb0",
"assets/assets/images/img_hupad.jpg": "8cc89fa39642a757861a0673c226325a",
"assets/assets/images/img_hupad1.jpg": "6043732587346747d986d6d62c0e3f50",
"assets/assets/images/img_hupad10.jpg": "fd058fec631f64e811a58c70f7bb6681",
"assets/assets/images/img_hupad11.jpg": "fdfa6a5be633a1d50e15f566b6407113",
"assets/assets/images/img_hupad12.jpg": "0daf38ef49d3fa2b6cf0a56cbfaa1bf8",
"assets/assets/images/img_hupad13.jpg": "16af1bdc3de8ad9abdfbee7fcf989bac",
"assets/assets/images/img_hupad14.jpg": "c3fa70b2a4c244569c3fe0018d33972c",
"assets/assets/images/img_hupad15.jpg": "534b4433fb1b5417f809ff89a754070a",
"assets/assets/images/img_hupad16.jpg": "c793b4f80f73f2649a8b4e3e2667d964",
"assets/assets/images/img_hupad17.jpg": "423fcc60321017b7326ddc2a0764c530",
"assets/assets/images/img_hupad2.jpg": "25768b8b959d7afa5f29e584f83c8022",
"assets/assets/images/img_hupad3.jpg": "15f7906deb4882f89b209d063647d472",
"assets/assets/images/img_hupad4.jpg": "901d69a09842014e89f4048d250bedf2",
"assets/assets/images/img_hupad5.jpg": "ea521a4f80f633a53a29922bfc6a90fc",
"assets/assets/images/img_hupad6.jpg": "4def7cfb6ff1a49fcbdd3c11a020a174",
"assets/assets/images/img_hupad7.jpg": "d6ab808761333cbc4fb437c0ba598c60",
"assets/assets/images/img_hupad8.jpg": "fc2bab31c66101d47f3dfcaa855a5c48",
"assets/assets/images/img_hupad9.jpg": "12fba16fc472a4f1eaa8359835638eb8",
"assets/assets/images/img_my_music.jpg": "bb6b2b955f3aa3a35d6f372be52a43bd",
"assets/assets/images/img_my_music1.jpg": "b567c671ecc498586c71b1635e819a58",
"assets/assets/images/img_my_music2.jpg": "da240416e519061f22d73aabfb501551",
"assets/assets/images/img_my_music3.jpg": "9d7a459c8ce0c089ae0fd4984e30e64c",
"assets/assets/images/img_my_music4.jpg": "698a748bcf6e33d0696159d87be2f46d",
"assets/assets/images/img_my_music5.jpg": "9ebaa1313f027b515e808f299d571a97",
"assets/assets/images/img_my_music6.jpg": "7faf93bff1f895a3b60d83ff8972b9e1",
"assets/assets/images/img_my_music7.jpg": "8da4de757a2382fecd6c8a6943a22d7f",
"assets/assets/images/img_my_music8.jpg": "5f4c39f1c8779267f56616429c522993",
"assets/assets/images/img_my_shop.jpg": "34d7c7b5a07f65e84029dff0974941dd",
"assets/assets/images/img_my_shop1.jpg": "3659a28d842291316d416ea0d9562c77",
"assets/assets/images/img_my_shop10.jpg": "0af389537a29ce5f8694e981afa3536d",
"assets/assets/images/img_my_shop11.jpg": "d091d72b23b07a60fd80a99b985eee96",
"assets/assets/images/img_my_shop12.jpg": "fe307583d6b642dfa4e8ca5541b0afb3",
"assets/assets/images/img_my_shop13.jpg": "8a99a222d7ab79a9f7d4aae6e27aa3c3",
"assets/assets/images/img_my_shop14.jpg": "6f333ee5212c4cce163201ddc6f42b67",
"assets/assets/images/img_my_shop15.jpg": "1742466a9e57f62fe1fdb668a01fc543",
"assets/assets/images/img_my_shop2.jpg": "e8d19413c3e03d0d4bc2c8f99af703d1",
"assets/assets/images/img_my_shop3.jpg": "49b8cfa03b834212975366d9d43efd96",
"assets/assets/images/img_my_shop4.jpg": "dc3145d9f8847eff25767aa28f033e8b",
"assets/assets/images/img_my_shop5.jpg": "e60f29332bca0a9837baa48973970b57",
"assets/assets/images/img_my_shop6.jpg": "61250b0d6ba264c03ba6fcf75c495544",
"assets/assets/images/img_my_shop7.jpg": "a623c69521c91d29f3e534081d6256dd",
"assets/assets/images/img_my_shop8.jpg": "4aba8bd51d45101d50fda113db8bad3c",
"assets/assets/images/img_my_shop9.jpg": "d323546af6eb581556abadf9e65e0186",
"assets/assets/images/img_usage_report1.jpg": "dff310995a0b25aab842a252de41d747",
"assets/assets/images/img_usage_report2.jpg": "a600540ca1664d1581923d1cd59f74c8",
"assets/assets/images/img_usage_report3.jpg": "b0f7b469419d0d6ad4961559c75394fb",
"assets/assets/images/img_usage_report4.jpg": "aee2803b614e26241ffe8a6a8309137b",
"assets/assets/images/img_usage_tracker.jpg": "c0070db9250e0f2d2fb7d3b587c84f37",
"assets/assets/images/my_img.jpg": "4731c2dedc6e71de5488ff397af446ff",
"assets/assets/images/plus_pattern.png": "42e78353888fd4fd7a298bef057ab44f",
"assets/FontManifest.json": "006acf5d9bc7ff071076a6d2598eada5",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5f8b29379f0382a79a41b04aec629c98",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "391d0713a993ebe18882c188769ddd4b",
"/": "391d0713a993ebe18882c188769ddd4b",
"main.dart.js": "477c6e66037ec4bc4b69859c39f546df",
"manifest.json": "33915bd01b6fbc2ad11a77923e641282",
"version.json": "5eba2b3f48e84c0565b6c84a1e17c11c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
