const express = require('express');
const router = express.Router();
let db = require('../models');

router.get('/', (req,res) => {
  db.Todo.find().then((todos) => {
    res.status(201).json(todos);
  } ).catch((err) => {
    res.send(err);
  });
});

router.post('/', (req,res) => {
  db.Todo.create(req.body)
  .then((newtodo) => {
    res.json(newtodo);
  }).catch((err) => {
    res.send(err);
  });
});

router.get('/:todoId', (req,res) => {
  db.Todo.findById(req.params.todoId)
  .then((todo) => {
    res.json(todo);
  }).catch((err) => {
    res.send(err);
  })
});

router.put('/:todoId', (req,res) => {
  db.Todo.findByIdAndUpdate({_id: req.params.todoId}, req.body, {new:true})
  .then((todo) => {
    res.json(todo);
  }).catch((err) => {
    res.send(err)
  })
});

router.delete('/:todoId', (req,res) => {
  db.Todo.remove({_id: req.params.todoId})
  .then((todo) => {
    res.json({message: 'We deleted it!'})
  }).catch((err) => {
    res.send(err)
  })
})

module.exports = router

