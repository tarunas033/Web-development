//  import required modules from nodejs 
const http = require('http');
const fs = require('fs');
const path = require('path');


const rootDir = process.cwd();


function generateHtml(name, isDir) {
  const icon = isDir ? '&#128193;' : '&#128441;';
  const url = path.join('/', name);
  return `<li><a href="${url}">${icon} ${name}</a></li>`;
}


function generateDirListing(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let html = '';
  files.forEach((file) => {
    const isDir = file.isDirectory();
    html += generateHtml(file.name, isDir);
  });
  return html;
}

// create the server 
  const server = http.createServer((req, res) => {
  const reqUrl = req.url.split('?')[0];
  const filePath = path.join(rootDir, reqUrl);
    fs.access(filePath, (err) => {
    if (err) {
     
      res.statusCode = 404;
      res.end('404 Not Found');
    } else {
      
      fs.stat(filePath, (err, stats) => {
        if (err) {
          res.statusCode = 500;
          res.end('Internal Server Error');
        } else if (stats.isDirectory()) {
          
          const html = generateDirListing(filePath);
          res.setHeader('Content-Type', 'text/html');
          res.end(`<ul>${html}</ul>`);
        } else {
          
          const fileStream = fs.createReadStream(filePath);
          res.setHeader('Content-Type', 'text/plain');
          fileStream.pipe(res);
        }
      });
    }
  });
});

// export the server 
module.exports = server;
