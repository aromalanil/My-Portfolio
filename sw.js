if (!self.define) { const e = async e => { if ("require" !== e && (e += ".js"), !a[e] && (await new Promise(async s => { if ("document" in self) { const a = document.createElement("script"); a.src = e, document.head.appendChild(a), a.onload = s } else importScripts(e), s() }), !a[e])) throw new Error(`Module ${e} didn’t register its module`); return a[e] }, s = async (s, a) => { const i = await Promise.all(s.map(e)); a(1 === i.length ? i[0] : i) }; s.toUrl = e => `./${e}`; const a = { require: Promise.resolve(s) }; self.define = (s, i, c) => { a[s] || (a[s] = new Promise(async a => { let r = {}; const o = { uri: location.origin + s.slice(1) }, d = await Promise.all(i.map(s => "exports" === s ? r : "module" === s ? o : e(s))), f = c(...d); r.default || (r.default = f), a(r) })) } } define("./sw.js", ["./workbox-73939081"], (function (e) { "use strict"; self.addEventListener("message", e => { e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting() }), e.precacheAndRoute([{ url: "404.html", revision: "b3185b78920c40da9e8c8afd645008fd" }, { url: "art/home.jpg", revision: "f9e563c4885bab713d98fa3100e7d08c" }, { url: "assets/css/hamburger.css", revision: "c9d242b3fe597219eadb4051b653ea8f" }, { url: "assets/css/preloader.css", revision: "f44b3ade5ea0f82b3457eb4f0bb7295a" }, { url: "assets/css/style.css", revision: "4a34091b9a022938c61f8765492b7994" }, { url: "assets/images/alien.svg", revision: "a41e137c667e428bcecb6813eb622d1e" }, { url: "assets/images/aromal-anil.jpg", revision: "12c8e3ae0998f814c7658bbf6553a0e5" }, { url: "assets/images/hero.svg", revision: "0afc10fb03f1143c3dd13b6d15525ae8" }, { url: "assets/images/message-send.svg", revision: "ffa638065daec44e0f9592b9a9b0478a" }, { url: "assets/images/projects/all_in_one.png", revision: "df0b3afe8b9196c9cc88c8a737d80fc5" }, { url: "assets/images/projects/apple-card.png", revision: "b771c7fbc71b266fc6ab4baa026d7398" }, { url: "assets/images/projects/js-documentation.png", revision: "d1be98ee470441e0cf2181c0434a82c9" }, { url: "assets/images/projects/lumidex.jpg", revision: "cad5dace0547d61f3a74e6748955700f" }, { url: "assets/images/projects/srms.jpg", revision: "2fc4b19acd032a637d12abda78499684" }, { url: "assets/images/projects/tic_tac_toe.jpg", revision: "50e8f43dfbb6b02fb03ac444b9aefcff" }, { url: "assets/js/script.js", revision: "4ddb4148f837d47cc73a9c090d238546" }, { url: "assets/libraries/baffle.js", revision: "b457c48255675f26d002a2c155d73c08" }, { url: "assets/resources/resume.pdf", revision: "c63a118c2cbae3378dc8c9c8293ef061" }, { url: "favicon/android-chrome-192x192.png", revision: "ed812d9a661d167aace10065a84c91d0" }, { url: "favicon/android-chrome-512x512.png", revision: "e69038895e7ccb7b6569fafbdf6a9cbe" }, { url: "favicon/apple-touch-icon.png", revision: "21f7b12cc3d90f9071dc77a5c5fb7101" }, { url: "favicon/favicon-16x16.png", revision: "e6a2b61f7346d2d517b0d21c1a78e59d" }, { url: "favicon/favicon-32x32.png", revision: "e7d53d8bbcadadb921434f78f3e94793" }, { url: "favicon/favicon.ico", revision: "369419147cf7d6dadaeedb9c4db6fd62" }, { url: "index.html", revision: "fb1437002e43c1249fb1af8f4dcbd5ed" }, { url: "message_send.html", revision: "679aab7d125bf20175836f6f511dc37c" }, { url: "netlify.toml", revision: "469a53765d6886523e715c3a0f192d1d" }, { url: "site.webmanifest", revision: "6f70980b730160476886580bb06acf9d" }], {}) }));
