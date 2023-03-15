// write the routes for /students end poient and add middlewares.

const express = require("express");

const fs = require("fs");

const { validator } = require("../middleware/validator.middleware");

const studentRouter = express.Router();

studentRouter.get("/", (req, res) => {

  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

  res.send(data.students);
});

studentRouter.post("/addstudent", (req, res) => {

  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

  data.students.push(req.body);

  fs.writeFileSync("./db.json", JSON.stringify(data));

  res.send("Student has been added");

});

studentRouter.get("/:studentCode", (req, res) => {

  const id = req.params.studentCode;

  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

  let resp;

  data.students.map((el) => {

    if (el.student_code == id) {

      resp = el;
    }
  });
  res.json(resp);
});

studentRouter.use(validator);

studentRouter.patch("/:student_code", (req, res) => {

  const studentCode = req.params.student_code;

  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

  data.students.map((el) => {

    if (el.student_code == studentCode) {

      el.name = req.body.name;

      el.location = req.body.location;

      el.batch = req.body.batch;

    }
  });

  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.send("Patched Student Details");
});

studentRouter.delete("/:student_code", (req, res) => {

  const studentCode = req.params.student_code;

  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

  data.students = data.students.filter((el) => {

    return el.student_code != studentCode;
    
  });

  fs.writeFileSync("./db.json", JSON.stringify(data));
  
  res.send("Deleted Student Details");
});

module.exports = { studentRouter};