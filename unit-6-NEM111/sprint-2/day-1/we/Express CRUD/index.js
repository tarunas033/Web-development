const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const FILE_NAME = './todos.json';

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET all todos
app.get('/', (req, res) => {
  fs.readFile(FILE_NAME, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Error reading file');
    }
    const todos = JSON.parse(data);
    return res.json(todos);
  });
});

// POST a new todo
app.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).send('Title is required');
  }
  const newTodo = {
    id: uuidv4(),
    title,
    completed: false,
  };
  fs.readFile(FILE_NAME, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Error reading file');
    }
    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile(FILE_NAME, JSON.stringify(todos), (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Error writing file');
      }
      return res.json(newTodo);
    });
  });
});

// PUT update a todo
app.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  fs.readFile(FILE_NAME, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Error reading file');
    }
    const todos = JSON.parse(data);
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      return res.status(404).send('Todo not found');
    }
    const updatedTodo = {
      ...todos[todoIndex],
      title: title || todos[todoIndex].title,
      completed: completed !== undefined ? completed : todos[todoIndex].completed,
    };
    todos[todoIndex] = updatedTodo;
    fs.writeFile(FILE_NAME, JSON.stringify(todos), (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Error writing file');
      }
      return res.json(updatedTodo);
    });
  });
});
// DELETE a todo
app.delete('/:id', (req, res) => {
    const { id } = req.params;
    fs.readFile(FILE_NAME, (err, data) => {
    if (err) {
    console.log(err);
    return res.status(500).send('Error reading file');
    }
    const todos = JSON.parse(data);
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
    return res.status(404).send('Todo not found');
    }
    todos.splice(todoIndex, 1);
    fs.writeFile(FILE_NAME, JSON.stringify(todos), (err) => {
    if (err) {
    console.log(err);
    return res.status(500).send('Error writing file');
    }
    return res.json(todos);
    });
    });
    });
    
    // Start the server
    app.listen(PORT, () => {
    console.log();
    });
    
    // Handle errors
    app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
    });
    
    // Export the app for testing
    module.exports = app;