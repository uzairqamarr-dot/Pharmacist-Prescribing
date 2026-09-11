/* Prescribing Study Hub — service worker, now serving from the site root.
   Cache keyed on VERSION. New versions install alongside the old cache and
   wait; the app shows an "Update ready" button and only activates when the
   user taps it (never auto-reloads mid-question).

   GitHub Pages serves everything with Cache-Control: max-age=600 and that is
   not configurable, so both the install-time fetch and the background
   revalidation on every hit use cache:"no-store" to bypass it — otherwise a
   push can take ten minutes to be noticed even on a good connection.

   study.html and sem.html are precached too even though this app doesn't
   link to them: they're still reachable by direct URL (the old app and the
   semester dashboard), and this worker controls the whole origin now, so
   they need to work offline the same as everything else. */
"use strict";
var VERSION = "v2026.09.12l";
var CACHE = "phar-hub-" + VERSION;
var ASSETS = [
  "./",
  "index.html",
  "study.html",
  "sem.html",
  "prescribing-data.js",
  "prescribing-data-ext.js",
  "manifest.webmanifest"
];

self.addEventListener("install", function(ev){
  ev.waitUntil(
    caches.open(CACHE).then(function(c){
      /* Individually, so one missing file cannot fail the whole install. */
      return Promise.all(ASSETS.map(function(url){
        return c.add(new Request(url, {cache: "no-store"}))["catch"](function(){});
      }));
    })
  );
  /* deliberately NOT skipWaiting — the app decides when to update */
});

self.addEventListener("activate", function(ev){
  ev.waitUntil(
    caches.keys().then(function(keys){
      /* Broad "phar-" match on purpose: this worker now also cleans up the
         old shell's "phar-vXXX" cache left behind from before hub/ was
         promoted to the root, not just older "phar-hub-vXXX" ones. */
      return Promise.all(keys.map(function(k){
        if (k.indexOf("phar-") === 0 && k !== CACHE) return caches.delete(k);
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("message", function(ev){
  if (ev.data === "skip") self.skipWaiting();
});

self.addEventListener("fetch", function(ev){
  var req = ev.request;
  if (req.method !== "GET") return;

  var url;
  try { url = new URL(req.url); } catch(err){ return; }
  if (url.origin !== self.location.origin) return;

  ev.respondWith(
    caches.match(req, {ignoreSearch: true}).then(function(hit){
      /* Refresh the cache in the background regardless, so the next launch
         is current. Failure here is normal and expected when offline. */
      var net = fetch(new Request(req.url, {cache: "no-store"})).then(function(res){
        if (res && res.ok){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copy); });
        }
        return res;
      })["catch"](function(){ return null; });

      if (hit) return hit;

      return net.then(function(res){
        if (res) return res;
        /* Offline and uncached: a navigation still gets something rather
           than a bare failure. */
        if (req.mode === "navigate") return caches.match("index.html");
        return new Response("", {status: 504, statusText: "Offline"});
      });
    })
  );
});
