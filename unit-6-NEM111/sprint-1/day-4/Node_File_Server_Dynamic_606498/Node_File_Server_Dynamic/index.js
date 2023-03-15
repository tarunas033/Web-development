//  import required modules from nodejs 
const http = require("http");

const fs = require("fs");

const path = require("path");

// create the server 
  const server = http.createServer((req, res) => {

  const filePath = path.join(__dirname, req.url);

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
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write("<ul>");
        files.forEach((file) => {
          res.write(`<li><a href="${path.join(req.url, file)}">${file}</a></li>`);
        });
        res.write("</ul>");
        res.end();
      });
    } else {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end("Internal Server Error");
          return;
        }
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(data);
      });
    }
  });
});

module.exports = server;
// export the server 