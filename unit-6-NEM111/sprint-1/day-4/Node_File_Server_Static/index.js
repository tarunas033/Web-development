const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 7700;

const server = http.createServer((req, res) => {
  const url = req.url === "/" ? "/index.html" : req.url;
  const filePath = path.join(__dirname, url);
  
  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.statusCode = 404;
      res.end("404 Not Found");
      return;
    }

    if (stats.isDirectory()) {
      fs.readdir(filePath, (err, files) => {
        if (err) {
          res.statusCode = 500;
          res.end("Internal Server Error");
          return;
        }

        const html = files.map(file => {
          const link = path.join(url, file);
          return `<li><a href="${link}">${file}</a></li>`;
        }).join("");

        res.setHeader("Content-Type", "text/html");
        res.end(`<html><body><ul>${html}</ul></body></html>`);
      });
    } else {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end("Internal Server Error");
          return;
        }

        const extname = path.extname(filePath);
        const contentType = {
          ".html": "text/html",
          ".js": "text/javascript",
          ".css": "text/css",
          ".json": "application/json",
          ".png": "image/png",
          ".jpg": "image/jpg",
          ".gif": "image/gif",
        }[extname] || "application/octet-stream";

        res.setHeader("Content-Type", contentType);
        res.end(data);
      });
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server;
 // export your server