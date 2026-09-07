#!/usr/bin/env node
/* Prescribing Study Hub — dependency-free static file server.
   Usage: node server.js [--port 7100] [--host 127.0.0.1]
          node server.js --port=7100 --host=0.0.0.0          */
"use strict";
var http = require("http");
var fs = require("fs");
var path = require("path");

var port = 7100, host = "127.0.0.1";
var args = process.argv.slice(2);
for (var i = 0; i < args.length; i++){
  var a = args[i];
  if (a === "--port" && args[i + 1]){ port = parseInt(args[++i], 10) || port; }
  else if (a.indexOf("--port=") === 0){ port = parseInt(a.slice(7), 10) || port; }
  else if (a === "--host" && args[i + 1]){ host = args[++i]; }
  else if (a.indexOf("--host=") === 0){ host = a.slice(7); }
}

var MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".txt": "text/plain; charset=utf-8"
};

var root = __dirname;

var server = http.createServer(function(req, res){
  var urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
  if (urlPath === "/") urlPath = "/index.html";
  var file = path.normalize(path.join(root, urlPath));
  if (file.indexOf(root) !== 0){           /* path traversal guard */
    res.writeHead(403, {"Content-Type": "text/plain"});
    res.end("Forbidden");
    return;
  }
  fs.readFile(file, function(err, data){
    if (err){
      res.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
      res.end("Not found: " + urlPath);
      return;
    }
    var ext = path.extname(file).toLowerCase();
    res.writeHead(200, {
      "Content-Type": MIME[ext] || "application/octet-stream",
      "Cache-Control": "no-cache"
    });
    res.end(data);
  });
});

server.listen(port, host, function(){
  console.log("Prescribing Study Hub — http://" + host + ":" + port + "/");
});
