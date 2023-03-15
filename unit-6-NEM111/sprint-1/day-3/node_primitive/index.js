const fs = require("fs");
const path = require("path");

function isNumber(num) {
  if (typeof num === "number" && !isNaN(num)) {
    fs.appendFileSync("test.txt", "it is a Number.\n");
  } else {
    fs.appendFileSync("test.txt", "it is Not a Number.\n");
  }
}

function isStr(string) {
  if (typeof str === "string") {
    fs.appendFileSync("test.txt", "it is a String.\n");
  } else {
    fs.appendFileSync("test.txt", "it is Not a String.\n");
  }
}

function isArray(arr) {
  if (Array.isArray(arr)) {
    fs.appendFileSync("test.txt", "it is a Array.\n");
  } else {
    fs.appendFileSync("test.txt", "it is Not a Array.\n");
  }
}

function isObj(obj) {
  if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
    fs.appendFileSync("test.txt", "this is a object.\n");
  } else {
    fs.appendFileSync("test.txt", "this is not a object.\n");
  }
}

function cls(filename) {
  if (fs.existsSync(filename)) {
    fs.unlinkSync(filename);
  }
}

module.exports = { isNumber, isStr, isArray, isObj, cls };
