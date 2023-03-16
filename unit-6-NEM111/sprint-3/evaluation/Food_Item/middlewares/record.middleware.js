const fs = require("fs");

const record = (req, res, next) => {
  if (req.method == "PATCH") {
    next();
    const id = req.params.id;
    fs.appendFileSync(
      "./record.txt",
      `the document with id: ${id} has been updated | ${Date()}\n`
    );
  } else if (req.method == "DELETE") {
    next();
    const id = req.params.id;
    fs.appendFileSync(
      "./record.txt",
      `the document with id: ${id} has been deleted | ${Date()}\n`
    );
  }
};
         
module.exports = {
  record,
};