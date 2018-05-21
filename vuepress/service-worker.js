/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "720d629ac8ad858a2cc1866bf1ce415e"
  },
  {
    "url": "assets/css/11.styles.7763c5f8.css",
    "revision": "f6a8a025fbad004e2eae71de71a745da"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.a7d6d36a.js",
    "revision": "5038817f889a91da6ffdc3b23646dc40"
  },
  {
    "url": "assets/js/1.55cca9c6.js",
    "revision": "4228d7129de0db0810761c5a75d7ff5f"
  },
  {
    "url": "assets/js/10.24e1a254.js",
    "revision": "928cd1074e9cb21614205b4392b88bf1"
  },
  {
    "url": "assets/js/2.f5c0ee57.js",
    "revision": "19e0cac894aeab0bed0e396d8fec9c50"
  },
  {
    "url": "assets/js/3.b910bb0a.js",
    "revision": "189d64bcc685bd5012cc580bfbd4c5f7"
  },
  {
    "url": "assets/js/4.fa682d93.js",
    "revision": "6a7dc3ed73d54e767c751e9bbc4c8740"
  },
  {
    "url": "assets/js/5.81d5b6a3.js",
    "revision": "357d7914b84f6de6fd6ea4731bfd1d49"
  },
  {
    "url": "assets/js/6.ec0fd122.js",
    "revision": "7f184fd120e219615ce0597f35608457"
  },
  {
    "url": "assets/js/7.d6d9eadb.js",
    "revision": "fd1949965f6a45e69472752c1533bf25"
  },
  {
    "url": "assets/js/8.303a8bd1.js",
    "revision": "4e9775c4a4c4a68171b3f4cee74487ec"
  },
  {
    "url": "assets/js/9.1ceb76dc.js",
    "revision": "a021699eb7a2fa941cd1ef2138862546"
  },
  {
    "url": "assets/js/app.46ccf345.js",
    "revision": "7d69c17e890f7ce97ea825fc45a5d044"
  },
  {
    "url": "css/index.html",
    "revision": "6738c23a21b18f40511ad18eefd3be3f"
  },
  {
    "url": "css/伪类实现三角形.html",
    "revision": "cd055e355559e71c938e1688290639eb"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "4a585625494f3642a007fa555a9eb434"
  },
  {
    "url": "git/index.html",
    "revision": "d0dfbbd19ef46668846c3ccf4660a5f2"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "ffec8468a8928753575e174eac25f766"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "vue/index.html",
    "revision": "3551543f9ef8fdc742f3209b39e7835a"
  },
  {
    "url": "vue/vue-white.html",
    "revision": "a19d500acc24e0c29acf8b0137e4f6f6"
  },
  {
    "url": "vue/vue2-preview.html",
    "revision": "65e04278f50f52605b64c884ae3de7bd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
