// write the routes for /instructors end poient and add middlewares.

const express = require("express");

const fs = require("fs");

const instructorRouter = express.Router();

instructorRouter.get("/", (req, res) => {

  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

  res.send(data.instructors);
  
});

instructorRouter.post("/addinstructor", (req, res) => {

  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

  data.instructors.push(req.body);

  fs.writeFileSync("./db.json", JSON.stringify(data));

  res.send("Instructor has been added");

});

instructorRouter.get("/:empID", (req, res) => {

  const id = req.params.empID;

  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

  let resp;

  data.instructors.map((el) => {

    if (el.emp_id == id) {

      resp = el;
    }

  });
  
  res.json(resp);

});

module.exports = { instructorRouter};