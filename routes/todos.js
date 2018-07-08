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
})


module.exports = router