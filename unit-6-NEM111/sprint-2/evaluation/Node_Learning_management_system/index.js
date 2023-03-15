// create the express app and export it.

const express = require("express");

const { logger } = require("./middleware/logger.middleware");

const { instructorRouter } = require("./routes/instructor.route");

const { studentRouter } = require("./routes/student.route");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/students", studentRouter);

app.use("/instructors", instructorRouter);


module.exports=app;

// module.exports=app;