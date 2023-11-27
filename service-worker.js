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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "12b936c16f328f2d77688ab7c04a057d"
  },
  {
    "url": "assets/css/0.styles.d0da5d62.css",
    "revision": "803792ac0930eec209357bc10dd6a126"
  },
  {
    "url": "assets/img/delete_grant.4316e596.png",
    "revision": "4316e5968ba5b486df1d819f0a10f464"
  },
  {
    "url": "assets/img/delete_permission.f7c2ffec.png",
    "revision": "f7c2ffec4b653d88c6dc3238da6d68b4"
  },
  {
    "url": "assets/img/delete_role.0d0a3bda.png",
    "revision": "0d0a3bdaa5598d95c30ef790b13a3d80"
  },
  {
    "url": "assets/img/get(all)_grant_1.7a41fefb.png",
    "revision": "7a41fefbc30a6dd7bc936ab95c59b0e8"
  },
  {
    "url": "assets/img/get(all)_grant_2.c1277bf6.png",
    "revision": "c1277bf6f584a619df1534839ac0f25c"
  },
  {
    "url": "assets/img/get(all)_permission.f907e4d8.png",
    "revision": "f907e4d8bcdedb85d4bfb159689d1340"
  },
  {
    "url": "assets/img/get(all)_role.3f7ed56c.png",
    "revision": "3f7ed56cdac253bb0bf785fdf612c9aa"
  },
  {
    "url": "assets/img/get(by-permission_id)_grant.a73abe7a.png",
    "revision": "a73abe7ababbcdec95ef617a59086636"
  },
  {
    "url": "assets/img/get(by-role_id)_grant.fd4a2979.png",
    "revision": "fd4a2979c20106ebb39db7075f002d13"
  },
  {
    "url": "assets/img/get(id)_grant.96882f67.png",
    "revision": "96882f67eff2263a5542f9c65e0e32b9"
  },
  {
    "url": "assets/img/get(id)_permission.d6e4f5c8.png",
    "revision": "d6e4f5c811093fb73667bca7bb14fffd"
  },
  {
    "url": "assets/img/get(id)_role.0f3db962.png",
    "revision": "0f3db9624a57e7410db90dc50daf71ff"
  },
  {
    "url": "assets/img/packages.25c848d1.png",
    "revision": "25c848d18045753c03c79f3070a7ed05"
  },
  {
    "url": "assets/img/post_grant.4a9543fb.png",
    "revision": "4a9543fbad1f9a680691503808ad6fde"
  },
  {
    "url": "assets/img/post_permission.b51b7647.png",
    "revision": "b51b76475ad5021618b7926e040627e6"
  },
  {
    "url": "assets/img/post_role.d9eeb6ce.png",
    "revision": "d9eeb6ceb35e896b2af570528e7c8048"
  },
  {
    "url": "assets/img/put_grant.f472c5bd.png",
    "revision": "f472c5bd710f9edd41399d76a8bd84bb"
  },
  {
    "url": "assets/img/put_permission.1197ffbe.png",
    "revision": "1197ffbe57cfd09d9a221883fd839b87"
  },
  {
    "url": "assets/img/put_role.45baab59.png",
    "revision": "45baab59eae87e36326d427ccc4cf0da"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start_db.139659d2.png",
    "revision": "139659d2f04673c19175b3cc86b3c47f"
  },
  {
    "url": "assets/img/start_success.e44d3b22.png",
    "revision": "e44d3b227a512ac98e9dd135bb66f35e"
  },
  {
    "url": "assets/js/1.1af21573.js",
    "revision": "feddc84c92efc50499df83cd84041c19"
  },
  {
    "url": "assets/js/10.78ce6e8c.js",
    "revision": "90fe59fc3972e90a247d4d7ae729917b"
  },
  {
    "url": "assets/js/13.19d61e96.js",
    "revision": "f7010dfb5c1697fcb6164760f2d1a263"
  },
  {
    "url": "assets/js/14.709a0e4c.js",
    "revision": "94e40b56ae4223629d600cea76b5805f"
  },
  {
    "url": "assets/js/15.dc7330b2.js",
    "revision": "dbaf2fff94b424d1d7df69032ea9fc56"
  },
  {
    "url": "assets/js/16.f5957e90.js",
    "revision": "7bdc205b2b31240cec7970b515fdf10c"
  },
  {
    "url": "assets/js/17.1b4dd8c1.js",
    "revision": "8c1f7f5c69c55da9ef987cf4f01567aa"
  },
  {
    "url": "assets/js/18.aef473c8.js",
    "revision": "d12dba1a9a7706c8b37cca889e347d37"
  },
  {
    "url": "assets/js/19.f18a3f78.js",
    "revision": "4892856f92a3216b9bba4673ac4d367d"
  },
  {
    "url": "assets/js/2.de4ad731.js",
    "revision": "a47fc22f311ad4e2a45f2b4741fcbef9"
  },
  {
    "url": "assets/js/20.e2530165.js",
    "revision": "bc5504769d27d31458493d5a7d7cbf46"
  },
  {
    "url": "assets/js/21.c88a9ae9.js",
    "revision": "4a55c78f428654422992b19cbfcb6c9e"
  },
  {
    "url": "assets/js/22.ad07a126.js",
    "revision": "2d2aefcd7cb000ccfc7354d5c4d7992b"
  },
  {
    "url": "assets/js/23.7279c42d.js",
    "revision": "05c3867aa6d44f09d35b28d89ffa8c7b"
  },
  {
    "url": "assets/js/24.63718b30.js",
    "revision": "2969c476cd40a49a4ec574386c6bc247"
  },
  {
    "url": "assets/js/25.b48850fb.js",
    "revision": "b9f0f7fdbd160f6264d23c9893ce1523"
  },
  {
    "url": "assets/js/26.75d636b7.js",
    "revision": "25097d4b15d164877a074855c62d5254"
  },
  {
    "url": "assets/js/27.bc3e02fe.js",
    "revision": "c3745bba262d2739f956cc91905d15c8"
  },
  {
    "url": "assets/js/28.51293beb.js",
    "revision": "ef02c0fda4db4af41f62f7abe1417183"
  },
  {
    "url": "assets/js/29.333f03a6.js",
    "revision": "178976665ef9bfb9f143a398d231d8bc"
  },
  {
    "url": "assets/js/3.693a1b30.js",
    "revision": "ba785f5ef9f15b19603ffb18aee7c990"
  },
  {
    "url": "assets/js/30.644912fc.js",
    "revision": "f1d4f9abf8c96d994ee1f439c25d8c06"
  },
  {
    "url": "assets/js/31.ab6d20fc.js",
    "revision": "973593acdab70b6c7f1d6974eb25ee36"
  },
  {
    "url": "assets/js/32.88c0a680.js",
    "revision": "3ef655f925d6addbb203407923aece41"
  },
  {
    "url": "assets/js/33.050f5543.js",
    "revision": "6c0ccaa5de4d6634ae34a93fd4a78b47"
  },
  {
    "url": "assets/js/34.4b33e195.js",
    "revision": "428e3d2d242f166da62dbd268871763b"
  },
  {
    "url": "assets/js/35.e59a3b29.js",
    "revision": "2cbb1503fded615f70690394423c13c9"
  },
  {
    "url": "assets/js/36.88f05ae1.js",
    "revision": "39ea6b4557f91f37e2728710822724fc"
  },
  {
    "url": "assets/js/37.8e4f68f5.js",
    "revision": "bc5d2c15e10db472464d65345c05c97d"
  },
  {
    "url": "assets/js/38.ef585f6c.js",
    "revision": "473d8f1ebedf5b26a4e56975267dad01"
  },
  {
    "url": "assets/js/39.6e98de09.js",
    "revision": "6cc8761bc146fa92c2cfa630c006bd9f"
  },
  {
    "url": "assets/js/4.86d9978b.js",
    "revision": "613190b22baec05fd5bc773e58008a6b"
  },
  {
    "url": "assets/js/41.63992af2.js",
    "revision": "a412ec70e0be7985e3c5da6b9dae65ae"
  },
  {
    "url": "assets/js/5.ae5c1991.js",
    "revision": "8352a0ed3728b696c52c3d4b957d72c8"
  },
  {
    "url": "assets/js/6.3f0633ba.js",
    "revision": "a0ac30f0d921d0b1dd5ee18598de661d"
  },
  {
    "url": "assets/js/7.1979bb96.js",
    "revision": "09b3243832f4f0903bcbd07f8500634c"
  },
  {
    "url": "assets/js/8.16f0795d.js",
    "revision": "72d281dfc38884b43d47467e1d973a89"
  },
  {
    "url": "assets/js/9.271035cd.js",
    "revision": "26d631ed9185ff94682f1ece94571ad0"
  },
  {
    "url": "assets/js/app.128b7602.js",
    "revision": "3e76512b94c43e673b695471e4cfd9af"
  },
  {
    "url": "assets/js/vendors~docsearch.5be2fec7.js",
    "revision": "9e1a7d0470eb4fe8cff785290fea0323"
  },
  {
    "url": "conclusion/index.html",
    "revision": "f35276e5109d4bd5a587661f8bf74424"
  },
  {
    "url": "design/index.html",
    "revision": "e2cfe0d6f207830cc34babf1280547b2"
  },
  {
    "url": "index.html",
    "revision": "21cf393eccc15eaefb65e15e565c6a60"
  },
  {
    "url": "intro/index.html",
    "revision": "094b14aaa3273eeaa8e8ea22f9fc04a6"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "de2d07f20587d4917ecf0110b80340e6"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "fa596923dd25452dfd206d75c7e66bfb"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "14d5b7b75fefda5b4bbb765b79a0d248"
  },
  {
    "url": "software/index.html",
    "revision": "09b05d0fd5540a9ff9323bb086daeb88"
  },
  {
    "url": "test/index.html",
    "revision": "a48e49f358b8735035f4573650ffcb7b"
  },
  {
    "url": "use cases/index.html",
    "revision": "2abc5bf380db491267a8d49f7108f1ee"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
