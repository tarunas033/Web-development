// your code goes here

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/sum', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  if (isNaN(a) && isNaN(b)) {
    res.status(400).json({ error: 'Both \"a\" and \"b\" must be numbers' });
  } else if (isNaN(a)) {
    res.status(400).json({ error: '"a" is not a valid number' });
  } else if (isNaN(b)) {
    res.status(400).json({ error: '"b" is not a valid number' });
  } else {
    const sum = a + b;

    if (sum < 0) {
      res.json({ sum: 0 });
    } else {
      res.json({ sum });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// donot chnage the below code
module.exports = app;
