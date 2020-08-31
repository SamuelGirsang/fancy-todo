'use strict'

const { Todo } = require('../models')

class TodoController{
// Static method for create new "todo"
  static createTodo(req, res) {
    let todo = {
      title : req.body.title,
      description : req.body.description,
      status : req.body.status,
      due_date : req.body.due_date
    }
    Todo.create(todo)
      .then(todo => {
        return res.status(201).json(todo)
      })
      .catch(err => {
        return res.status(500).json({message : err.message})
      })
  }
// Static method for read all "todos" from database
  static getTodos(req, res) {
    Todo.findAll()
      .then(todos => {
        return res.status(200).json(todos)
      })
      .catch(err => {
        return res.status(500).json({message : err.message})
      })
  }
// Static method for read "todo" by requested id
  static getOne(req, res) {
    Todo.findOne({
      where : {
        id : +req.params.id
      }
    })
      .then(todo => {
        return res.status(200).json(todo)
      })
      .catch(err => {
        return res.status(500).json({message : err.message})
      })
  }
// Static method for update existing "todo" by requested id
  static editTodo(req, res) {
    let todo = {
      title : req.body.title,
      description : req.body.description,
      status : req.body.status,
      due_date : req.body.due_date
    }
      Todo.update(todo, {
        where : { id : +req.params.id },
      })
        .then(todo => {
          return res.status(200).json(todo)
        })
        .catch(err => {
          return res.status(500).json({message : err.message})
        })
  } 
// Static method for delete existing "todo" by requested id
  static removeTodo(req, res) {
    Todo.destroy({
      where : { id : +req.params.id }
    })
      .then(todo => {
        return res.status(200).json(todo)
      })
      .catch(err => {
        return res.status(500).json({message : err.message})
      })
  }
}


module.exports = TodoController