// מטמון לעבודה בלי רשת. מעלים את המספר בכל שינוי בקבצים.
const CACHE = "kedem-v1";
const STORIES = ["david-goliath"];
const FILES = [
  "./", "index.html", "css/app.css", "js/app.js", "js/i18n.js", "content/index.js", "scenes/kit.js", "scenes/scene.css", "manifest.webmanifest", "icon.svg",
  "fonts/heebo-hebrew-wght-normal.woff2", "fonts/heebo-latin-wght-normal.woff2", "fonts/frank-ruhl-libre-hebrew-wght-normal.woff2", "fonts/frank-ruhl-libre-latin-wght-normal.woff2",
  ...STORIES.flatMap((id) => [`content/${id}.js`, `scenes/${id}.js`]),
];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: "reload" })))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// קודם מהמטמון, ובמקביל מרעננים מהרשת לפעם הבאה.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async (c) => {
    const hit = await c.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then((r) => { if (r.ok) c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
