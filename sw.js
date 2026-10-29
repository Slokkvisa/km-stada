// Km staða – service worker: gerir forritið uppsetjanlegt og virkt án nets.
// Hækkaðu VERSION þegar index.html er breytt til að tæki sæki nýju útgáfuna.
const VERSION = "kmstada-v1";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png",
  "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => Promise.allSettled(SHELL.map(u => c.add(u)))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || !req.url.startsWith("http")) return;
  // Síðan sjálf: reyna netið fyrst (nýjasta útgáfa), annars úr skyndiminni
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(VERSION).then(x => x.put("./", c)); return r; })
      .catch(() => caches.match("./").then(r => r || caches.match("./index.html"))));
    return;
  }
  // Annað: skyndiminni fyrst
  e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => {
    if (res.ok || res.type === "opaque") { const c = res.clone(); caches.open(VERSION).then(x => x.put(req, c)); }
    return res;
  })));
});
