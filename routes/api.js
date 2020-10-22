const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

// Middleware for all api requests
router.use(function (req, res, next) {
  console.log("Request received");
  next(); 
});

// Test route
router.get("/", (req, res, next) => {
  res.json({ message: "Connection succesful" });
});

// On routes that end in /todos
router.route("/todos")

  // Create a todo
  .post(function (req, res) {
    let todo = new Todo({ task: req.body.task }); 

    // Save todo and check for errors
    todo.save(function (err) {
      if (err) res.send(err);
      res.json({ message: "Todo created!" });
    });
  })

  // Get all todos
  .get(function (req, res) {
    Todo.find(function (err, todos) {
      if (err) res.send(err);
      res.json(todos);
    });
  });

// On routes that end in /todos/:todo_id
router.route("/todos/:todo_id")

  // Get object with that id
  .get(function (req, res) {
    Todo.findById(req.params.todo_id, function (err, todo) {
      if (err) res.send(err);
      res.json(todo);
    });
  })

  // Update object with this id
  .put(function (req, res) {
    // Use model to find the object we want
    Todo.findById(req.params.todo_id, function (err, todo) {
      if (err) res.send(err);

      todo.task = req.body.task; // Update

      // Save todo
      todo.save(function (err) {
        if (err) res.send(err);
        res.json({ message: "Todo updated" });
      });
    });
  })

  // Delete the object with this id
  .delete(function (req, res) {
    Todo.remove(
      {
        _id: req.params.todo_id,
      },
      function (err, todo) {
        if (err) res.send(err);
        res.json({ message: "Successfully deleted" });
      }
    );
  });

module.exports = router;
