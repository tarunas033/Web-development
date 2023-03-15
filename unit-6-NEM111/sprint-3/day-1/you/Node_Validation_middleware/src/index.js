//  import required modules from nodejs and build the server
const express = require("express");

const validatorFunction = require("../src/middlewares/Validator");

const app = express();

const port = 3000;

app.use(express.json());

app.post("/", validatorFunction, (req, res) => {

  res.status(200).send("data received");
});

app.listen(port, () => {
    
  console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;
// export the server








//Write the code in the below files according to above test cases

//Validator.js
//const fs = require("fs");

// make the validator function and export it.


// module.exports = validatorfunction;



//index.js
//  import required modules from nodejs and build the server

// export the server