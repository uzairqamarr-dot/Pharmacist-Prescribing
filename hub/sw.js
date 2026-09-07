/* Prescribing Study Hub — service worker
   Cache keyed on VERSION. New versions install alongside the old cache and
   wait; the app shows an "Update ready" button and only activates when the
   user taps it (never auto-reloads mid-question). */
"use strict";
var VERSION = "v2026.09.07d";
var CACHE = "phar-hub-" + VERSION;
var ASSETS = [
  "./",
  "index.html",
  "prescribing-data.js",
  "prescribing-data-ext.js",
  "manifest.webmanifest"
];

self.addEventListener("install", function(ev){
  ev.waitUntil(
    caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); })
  );
  /* deliberately NOT skipWaiting — the app decides when to update */
});

self.addEventListener("activate", function(ev){
  ev.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){
        if (k.indexOf("phar-hub-") === 0 && k !== CACHE) return caches.delete(k);
      }));
    })
  );
});

self.addEventListener("message", function(ev){
  if (ev.data === "skip") self.skipWaiting();
});

self.addEventListener("fetch", function(ev){
  if (ev.request.method !== "GET") return;
  ev.respondWith(
    caches.match(ev.request, {ignoreSearch: true}).then(function(hit){
      if (hit) return hit;
      return fetch(ev.request).then(function(res){
        if (res && res.ok && ev.request.url.indexOf(self.location.origin) === 0){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(ev.request, copy); });
        }
        return res;
      }).catch(function(){
        if (ev.request.mode === "navigate") return caches.match("index.html");
      });
    })
  );
});
