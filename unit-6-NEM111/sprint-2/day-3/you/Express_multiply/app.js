// your code goes here

const express = require('express');
const app = express();

app.get('/multiply', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || !req.query.a) {
    return res.status(400).json({ error: '"a" is not a valid number' });
  }

  if (isNaN(b) || !req.query.b) {
    return res.status(400).json({ error: '"b" is not a valid number' });
  }

  if (a === 0 && b === 0) {
    return res.json({ product: 0 });
  }

  return res.json({ product: a * b });
});

module.exports = app;
