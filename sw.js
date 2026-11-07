/* Offline cache. Bump VERSION on every deploy so installed devices pick up new cases. */
importScripts("js/version.js");
const VERSION = "qcf-" + self.QCF_VERSION;
const CORE = [
  "./", "index.html", "style.css", "manifest.webmanifest",
  "js/version.js", "js/glossary.js", "js/engine.js",
  "cases/c01.js", "cases/c02.js", "cases/c03.js", "cases/c04.js", "cases/c05.js",
  "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png",
  "img/bg_office.webp", "img/bg_court.webp", "img/bg_gate.webp", "img/bg_home.webp",
  "img/bg_magistrates.webp", "img/bg_qcat.webp", "img/bg_realestate.webp",
  "img/c_eric.webp", "img/c_lou.webp", "img/c_judge.webp", "img/c_mentor.webp", "img/c_mother.webp",
  "img/n_widow.webp", "img/n_brother.webp", "img/dv_her.webp", "img/dv_him.webp", "img/dv_mag.webp",
  "img/l_father.webp", "img/l_son.webp", "img/l_member.webp", "img/b_buyer.webp"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => Promise.all(CORE.map(u => c.add(new Request(u, {cache: "reload"})).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone();
      if (res.ok || res.type === "opaque") caches.open(VERSION).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => hit))
  );
});
