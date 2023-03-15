const http = require("http");
const fs = require("fs");
const os = require("os");
const dns = require("node:dns");
const cowsay = require("cowsay");

let userCnt = 0;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>HOME PAGE</h1>");
  } else if (req.url === "/count") {
    fs.appendFile(
      "logs.txt",
      `The inital user count is ${users.length} at ${new Date().toString()}\n`,
      "utf-8",
      (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.end(err.message);
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end("The user count has been updated in the logs file");
        }
      }
    );
  }

 
  else if (req.url === "/update") {
    const newUser = {
      id: users.length + Math.floor(Math.random() * 100),
      first_name: os.userInfo().username,
      last_name: os.userInfo().username,
      email: "example@example.com",
      gender: Math.random() > 0.5 ? "Male" : "Female",
    };

    users.push(newUser);

    fs.writeFile(
      "data.json",
      JSON.stringify(users, null, 4),
      "utf-8",
      (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.end(err.message);
        } else {
          fs.appendFileSync(
            "logs.txt",
            `Updated user count after adding a new user is ${
              users.length
            } at ${new Date().toString()}\n`
          );
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end("The data has been updated, go and check the data file");
        }
      }
    );
  }else if (req.url === "/address") {
    dns.lookup("masaischool.com", (err, address, family) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end(err.message);
      } else {
        fs.appendFileSync(
          "logs.txt",
          `URL: masaischool.com IP Address: ${address} and Family is ${family}\n`
        );
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Logs File has been updated");
      }
    });
  } else if (req.url === "/say") {
    fs.readFile("logs.txt", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end(err.message);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(
          cowsay.say({
            text: data,
          })
        );
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Invalid Request");
  }
});

const users = require("./data.json");

module.exports = server;