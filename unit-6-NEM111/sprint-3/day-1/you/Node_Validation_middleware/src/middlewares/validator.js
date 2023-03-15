// make the validator function and export it.
    const validatorFunction = (req, res, next) => {

    const { ID, Name, Rating, Description, Genre, Cast } = req.body;
  
    if (ID !== undefined && typeof ID !== "number") {

      return res.status(400).send("bad request.some data is incorrect.");
    }
  
    if (Name !== undefined) {

      if (typeof Name !== "string") {

        return res.status(400).send("bad request.some data is incorrect.");

      } else if (/\d/.test(Name)) {

        return res.status(400).send("bad request.some data is incorrect.");
      }
    }
  
    if (Description !== undefined && typeof Description !== "string") {

      return res.status(400).send("bad request.some data is incorrect.");

    }
  
    if (Rating !== undefined && typeof Rating !== "number") {
      return res.status(400).send("bad request.some data is incorrect.");
    }
  
    if (Genre !== undefined && typeof Genre !== "string") {
        
      return res.status(400).send("bad request.some data is incorrect.");
    }
  
    if (Cast !== undefined) {

      if (!Array.isArray(Cast)) {

        return res.status(400).send("bad request.some data is incorrect.");

      } else if (Cast.some((actor) => typeof actor !== "string")) {

        return res.status(400).send("bad request.some data is incorrect.");
      }
    }
  
    next();
  };
  
  module.exports = validatorFunction;
  
// module.exports = validatorfunction;