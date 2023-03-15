//  import required modules from nodejs and build the server
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

const dbPath = './db.json';


app.use(express.json());

// GET 
app.get('/', (req, res) => {
  const db = JSON.parse(fs.readFileSync(dbPath));
  res.status(200).json(db.todos);
});

// POST 
app.post('/', (req, res) => {
  const db = JSON.parse(fs.readFileSync(dbPath));
  const { id, task, status } = req.body;
  if (isNaN(id)) {
    return res.status(400).send('Invalid argument');
  }
  const todo = { id: Number(id), task, status };
  db.todos.push(todo);
  fs.writeFileSync(dbPath, JSON.stringify(db));
  res.status(200).json(db.todos);
});

// PUT 
app.put('/:id', (req, res) => {
  const db = JSON.parse(fs.readFileSync(dbPath));
  const id = Number(req.params.id);
  const { task, status } = req.body;
  const index = db.todos.findIndex(todo => todo.id === id);
  if (index === -1) {
    return res.status(400).send('Invalid argument');
  }
  db.todos[index].task = task || db.todos[index].task;
  db.todos[index].status = status ?? db.todos[index].status;
  fs.writeFileSync(dbPath, JSON.stringify(db));
  res.status(200).json(db.todos);
});

// DELETE 
app.delete('/:id', (req, res) => {
  const db = JSON.parse(fs.readFileSync(dbPath));
  const id = Number(req.params.id);
  const index = db.todos.findIndex(todo => todo.id === id);
  if (index === -1) {
    return res.status(400).send('Invalid argument');
  }
  db.todos.splice(index, 1);
  fs.writeFileSync(dbPath, JSON.stringify(db));
  res.status(200).json(db.todos);
});

// export the server
module.exports = app;

// start the server
if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}
