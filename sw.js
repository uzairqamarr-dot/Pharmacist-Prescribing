/* Offline support for the prescribing app.
 *
 * Bump VERSION on every content change. The version string is also shown
 * top-right in the shell, so the phone can be checked against the build that
 * was pushed. A new VERSION means a new cache, and the old one is deleted on
 * activate.
 *
 * GitHub Pages serves everything with Cache-Control: max-age=600 and that is
 * not configurable, so revalidation below deliberately bypasses the HTTP cache
 * with cache:"no-store". Without that, a push can take ten minutes to be
 * noticed even on a good connection.
 */
var VERSION = "v2026.08.25d";
var CACHE = "phar-" + VERSION;

/* Relative so this keeps working if the repo or Pages path is ever renamed. */
var ASSETS = ["./", "index.html", "study.html", "sem.html", "manifest.webmanifest"];

self.addEventListener("install", function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      /* Individually, so one missing file cannot fail the whole install. */
      return Promise.all(ASSETS.map(function(url){
        return c.add(new Request(url, {cache: "no-store"}))["catch"](function(){});
      }));
    })
  );
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){
        if(k !== CACHE && k.indexOf("phar-") === 0) return caches["delete"](k);
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

/* The shell posts this when the user taps the update button. */
self.addEventListener("message", function(e){
  if(e.data === "skip-waiting") self.skipWaiting();
});

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET") return;

  var url;
  try { url = new URL(req.url); } catch(err){ return; }
  if(url.origin !== self.location.origin) return;
  if(url.pathname.indexOf(new URL("./", self.location.href).pathname) !== 0) return;

  e.respondWith(
    caches.match(req, {ignoreSearch: true}).then(function(hit){
      /* Refresh the cache in the background regardless, so the next launch is
         current. Failure here is normal and expected when offline. */
      var net = fetch(new Request(req.url, {cache: "no-store"})).then(function(res){
        if(res && res.ok){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copy); });
        }
        return res;
      })["catch"](function(){ return null; });

      if(hit) return hit;

      return net.then(function(res){
        if(res) return res;
        /* Offline and uncached: a navigation still gets the shell. */
        if(req.mode === "navigate") return caches.match("index.html");
        return new Response("", {status: 504, statusText: "Offline"});
      });
    })
  );
});
